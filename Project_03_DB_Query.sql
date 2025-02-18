CREATE DATABASE gamage_recruiters_DB;
USE gamage_recruiters_DB;

CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    isAdmin BOOLEAN DEFAULT FALSE
);

CREATE TABLE postedjobs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(255) NOT NULL,
    state VARCHAR(100) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'LKR',
    location VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE applyjob (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    mobile_number VARCHAR(15) NOT NULL,
    experience_years INT DEFAULT 0,
    cv_resume VARCHAR(255) NOT NULL,
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    job_id INT NOT NULL,
    FOREIGN KEY (job_id) REFERENCES postedjobs(id) ON DELETE CASCADE
);
