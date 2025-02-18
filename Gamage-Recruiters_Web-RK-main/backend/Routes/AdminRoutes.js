const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/AdminControllers");

// Route to get all posted jobs
router.get("/jobs", AdminController.getAllJobs);

// Route to post a new job
router.post("/jobs", AdminController.postJob);

// Route to delete a job post
router.delete("/jobs/:id", AdminController.deleteJob);

// Additional admin routes
router.get("/postedjobs", AdminController.getPostedJobs);
router.get("/applications/count", AdminController.getApplicationsCount);
router.get("/applications/:jobId", AdminController.getApplicationsByJobId);
router.delete("/postedjobs/:jobId", AdminController.deleteJob);

module.exports = router;
