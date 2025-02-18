const db = require("../utils/db");

// Controller to get all job postings, ensuring only one instance per job_title and state is returned
const getAllJobs = (req, res) => {
    const query = 
        `SELECT pj.*, 
               (SELECT COUNT(*) 
                FROM postedjobs p 
                WHERE p.job_title = pj.job_title AND p.state = pj.state) AS applications_count
        FROM postedjobs pj 
        WHERE pj.id = (SELECT MIN(id) 
                       FROM postedjobs 
                       WHERE job_title = pj.job_title AND state = pj.state)
        ORDER BY pj.posted_at DESC`;
    
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Database error", details: err });
        }
        res.json(results);
    });
};

// Controller to post a new job
const postJob = (req, res) => {
    const { job_title, state, salary, currency, location, description } = req.body;
    
    if (!job_title || !state || !salary || !currency || !location || !description) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const query = "INSERT INTO postedjobs (job_title, state, salary, currency, location, description, posted_at) VALUES (?, ?, ?, ?, ?, ?, NOW())";
    
    db.query(query, [job_title, state, salary, currency, location, description], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Database error", details: err });
        }
        res.status(201).json({ message: "Job posted successfully", jobId: result.insertId });
    });
};

// Controller to delete a job posting
const deleteJob = (req, res) => {
    const { id } = req.params;
    
    // First, check if the job exists in the database
    const checkQuery = "SELECT * FROM postedjobs WHERE id = ?";
    db.query(checkQuery, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Database error", details: err });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: "Job post not found" });
        }

        // If the job exists, proceed to delete
        const query = "DELETE FROM postedjobs WHERE id = ?";
        db.query(query, [id], (err, result) => {
            if (err) {
                return res.status(500).json({ error: "Database error", details: err });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: "Job post not found" });
            }
            res.json({ message: "Job post deleted successfully" });
        });
    });
};

// Get all posted jobs
const getPostedJobs = (req, res) => {
    const sql = "SELECT * FROM postedjobs ORDER BY id DESC";
    db.query(sql, (err, results) => {
        if (err) {
            console.error("Error fetching posted jobs:", err);
            return res.status(500).json({ message: "Database error" });
        }
        res.status(200).json(results);
    });
};

// Get total applications count
const getApplicationsCount = (req, res) => {
    const sql = "SELECT COUNT(*) AS total FROM applyjob";
    db.query(sql, (err, results) => {
        if (err) {
            console.error("Error fetching application count:", err);
            return res.status(500).json({ message: "Database error" });
        }
        res.status(200).json(results[0]);
    });
};

// Get applications for a specific job (FIXED)
const getApplicationsByJobId = (req, res) => {
    const { jobId } = req.params;

    if (!jobId) {
        return res.status(400).json({ message: "Job ID is required" });
    }

    const query = `
        SELECT a.id, a.name, a.email, a.mobile_number, a.experience_years, a.cv_resume, 
               p.job_title
        FROM applyjob a
        JOIN postedjobs p ON a.job_id = p.id
        WHERE a.job_id = ?`;

    db.query(query, [jobId], (err, results) => {
        if (err) {
            console.error("Error fetching applications:", err);
            return res.status(500).json({ message: "Database query error", details: err });
        }
        res.status(200).json(results);
    });
};

// Export all functions
module.exports = { 
    getAllJobs, 
    postJob, 
    deleteJob, 
    getPostedJobs, 
    getApplicationsCount, 
    getApplicationsByJobId 
};
