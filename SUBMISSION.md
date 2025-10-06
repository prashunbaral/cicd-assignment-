# DevOps CI/CD Assignment Submission

**Student Name:** Prashun Baral  
**GitHub Username:** prashunbaral  
**Repository:** https://github.com/prashunbaral/cicd-assignment-  
**Submission Date:** October 6, 2025

---

## 📋 Table of Contents

- [Assignment 1: The Build Verifier](#assignment-1-the-build-verifier-)
- [Assignment 2: The Debugging Detective](#assignment-2-the-debugging-detective-)
- [Repository Structure](#repository-structure)
- [How to Run This Project](#how-to-run-this-project)
- [Key Learnings](#key-learnings)

---

## Assignment 1: The Build Verifier

### Overview

Successfully created a CI/CD pipeline that automatically builds and tests a Node.js application, then builds a Docker image only if tests pass.

### Deliverables

#### 1. Dockerfile

**Location:** [Dockerfile](https://github.com/prashunbaral/cicd-assignment-/blob/main/Dockerfile)

**Description:**

- Uses `node:18-alpine` as base image for minimal footprint
- Implements multi-stage setup with proper working directory
- Installs dependencies and copies application code
- Exposes port 3000 for the web application

#### 2. GitHub Actions Workflow

**Location:** [.github/workflows/build.yml](https://github.com/prashunbaral/cicd-assignment-/blob/main/.github/workflows/build.yml)

**Description:**

- Triggers automatically on every push to `main` branch
- Contains two sequential jobs with dependency management
- `test-job`: Runs application tests to ensure code quality
- `build-job`: Builds Docker image only if tests pass (uses `needs: test-job`)

#### 3. Successful Workflow Run

**Link to Actions:** [Successful Build & Test Pipeline](https://github.com/prashunbaral/cicd-assignment-/actions/runs/18277785257)

**Note:** Click the link above and look for workflow runs with green checkmarks . The most recent successful run shows both jobs completing successfully.

### What I Built

**Application Stack:**

- **Language:** Node.js (JavaScript)
- **Framework:** Express.js
- **Container:** Docker with Alpine Linux base
- **CI/CD:** GitHub Actions

**Key Features:**

- Automated testing on every code change
- Docker image building with validation
- Job dependency management using `needs:` keyword
- Fast feedback loop for developers

**Pipeline Flow:**

```
Push to GitHub → Trigger Workflow → Run Tests → Tests Pass?
    ↓ YES                                      ↓ NO
Build Docker Image                        Pipeline Fails
    ↓
SUCCESS
```

---

## Assignment 2: The Debugging Detective

### Overview

Conducted a controlled "break and fix" exercise to understand CI/CD debugging, error analysis, and problem resolution.

### Deliverables

#### 1. Analysis Document

**Location:** [DEBUGGING.md](https://github.com/prashunbaral/cicd-assignment-/blob/main/DEBUGGING.md)

**Contents:**

- **Part A:** Detailed explanation of how the working pipeline operates
- **Part B:** Complete break-and-fix challenge documentation including:
  - Screenshot of the Docker build error
  - Detailed error analysis and root cause identification
  - Step-by-step fix implementation
  - Key takeaways and lessons learned

#### 2. Failed Workflow Run

**Link:** [Failed Build - Non-existent Docker Tag](https://github.com/prashunbaral/cicd-assignment-/actions/runs/18280164396)

**What Happened:**

- Intentionally changed Dockerfile to use `FROM node:18-this-is-a-fake-tag`
- Pipeline correctly failed at the build-job stage
- Error: `docker.io/library/node:18-this-is-a-fake-tag: not found`
- Demonstrated that the pipeline catches configuration errors

**Note:** Look for the workflow run with commit message "Break: Use non-existent Docker image tag" - it will show a red X (❌)

#### 3. Fixed Workflow Run

**Link:** [Successful Build - Fixed Docker Tag](https://github.com/prashunbaral/cicd-assignment-/actions/runs/18281886362)

**What Happened:**

- Corrected Dockerfile to use `FROM node:18-alpine`
- Pipeline executed successfully
- Both test-job and build-job completed with green checkmarks
- Docker image built without errors

**Note:** Look for the workflow run with commit message "Fix: Restore valid Docker base image" - it will show a green checkmark

### What I Learned

**Technical Skills:**

- How to read and interpret Docker error messages
- Understanding of Docker Hub registry and image tags
- Systematic debugging methodology for CI/CD pipelines
- The importance of testing locally before pushing

**DevOps Concepts:**

- Why the `needs:` keyword is crucial for job dependencies
- How CI/CD pipelines provide fast feedback
- The value of automated error detection
- Professional documentation practices

**Problem-Solving Process:**

1. Observe the failure
2. Read error logs carefully
3. Identify root cause
4. Research valid solutions
5. Implement and verify fix
6. Document for future reference

---

## Repository Structure

```
cicd-assignment/
│
├── .github/
│   └── workflows/
│       └── build.yml          # GitHub Actions CI/CD pipeline
│
├── app.js                     # Express.js web application
├── test.js                    # Application test suite
├── package.json               # Node.js dependencies and scripts
├── Dockerfile                 # Docker container configuration
│
├── DEBUGGING.md               # Assignment 2 documentation
├── SUBMISSION.md              # This file - assignment submission
├── error-screenshot.png       # Screenshot of Docker build error
│
└── README.md                  # Project overview (optional)
```

---

## How to Run This Project

### Prerequisites

- Node.js 18 or higher
- Docker installed
- Git installed

### Local Development

#### 1. Clone the Repository

```bash
git clone https://github.com/prashunbaral/cicd-assignment.git
cd cicd-assignment
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Run the Application

```bash
npm start
```

Visit: http://localhost:3000

#### 4. Run Tests

```bash
npm test
```

### Docker Deployment

#### 1. Build Docker Image

```bash
docker build -t cicd-assignment:latest .
```

#### 2. Run Container

```bash
docker run -p 3000:3000 cicd-assignment:latest
```

#### 3. Access Application

Visit: http://localhost:3000

### CI/CD Pipeline

The pipeline runs automatically on every push to the `main` branch. To trigger it:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

Then check the Actions tab on GitHub to see the workflow run.

---

## Assignment Completion Checklist

### Assignment 1: The Build Verifier

- [x] Created a simple Node.js application
- [x] Written a valid Dockerfile
- [x] Created `.github/workflows/build.yml`
- [x] Implemented `test-job` that runs tests
- [x] Implemented `build-job` with `needs: test-job` dependency
- [x] Verified successful workflow execution
- [x] All jobs show green checkmarks in Actions tab

### Assignment 2: The Debugging Detective

- [x] Documented how the working pipeline operates (Part A)
- [x] Intentionally broke the Dockerfile
- [x] Captured error screenshot
- [x] Analyzed error message and identified root cause
- [x] Fixed the Dockerfile
- [x] Documented the entire process in DEBUGGING.md
- [x] Included links to failed and successful workflow runs
- [x] Completed Part B of the assignment

### General Requirements

- [x] Repository is public on GitHub
- [x] All files are properly committed
- [x] Created SUBMISSION.md with all deliverable links
- [x] Code follows best practices
- [x] Documentation is clear and comprehensive

---

## Key Learnings

### 1. Continuous Integration (CI)

- **What I Learned:** CI automatically tests every code change to catch bugs early
- **Why It Matters:** Prevents broken code from reaching production
- **Implementation:** Used GitHub Actions with automated test execution

### 2. Docker Containerization

- **What I Learned:** Docker packages applications with their dependencies for consistent deployment
- **Why It Matters:** Eliminates "works on my machine" problems
- **Implementation:** Created Dockerfile with Node.js Alpine base image

### 3. Job Dependencies in Workflows

- **What I Learned:** The `needs:` keyword creates sequential job execution
- **Why It Matters:** Prevents wasting resources building images from broken code
- **Implementation:** build-job only runs if test-job succeeds

### 4. Error Analysis and Debugging

- **What I Learned:** Systematic approach to reading logs and identifying root causes
- **Why It Matters:** 50% of DevOps work involves debugging failed pipelines
- **Implementation:** Documented complete debugging process in DEBUGGING.md

### 5. Version Control Best Practices

- **What I Learned:** Git allows safe experimentation with easy rollback
- **Why It Matters:** Enables confident development without fear of breaking things
- **Implementation:** Used meaningful commit messages and proper Git workflow

---

## Important Links Summary

| Resource                      | Link                                                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **GitHub Repository**         | https://github.com/prashunbaral/cicd-assignment-                                                             |
| **Dockerfile**                | [View File](https://github.com/prashunbaral/cicd-assignment-/blob/main/Dockerfile)                           |
| **Workflow File**             | [View File](https://github.com/prashunbaral/cicd-assignment-/blob/main/.github/workflows/build.yml)          |
| **DEBUGGING.md**              | [View File](https://github.com/prashunbaral/cicd-assignment-/blob/main/DEBUGGING.md)                         |
| **GitHub Actions**            | [View All Runs](https://github.com/prashunbaral/cicd-assignment-/actions)                                    |
| **Latest Successful Run**     | [View](https://github.com/prashunbaral/cicd-assignment-/actions/runs/18281886362) - Look for green checkmark |
| **Failed Run (Assignment 2)** | [View](https://github.com/prashunbaral/cicd-assignment-/actions/runs/18280164396) - Look for red X           |

---

## Reflections

### Challenges Faced

1. **Understanding Docker Base Images:** Initially confused about which tags to use, resolved by reading Docker Hub documentation
2. **Git Configuration:** Had to correct local Git user settings to match GitHub account
3. **Workflow Syntax:** Learned proper YAML indentation and GitHub Actions syntax through trial and error

### What Went Well

1. **Pipeline Design:** Successfully implemented two-stage workflow with proper dependencies
2. **Documentation:** Created comprehensive debugging documentation
3. **Problem Solving:** Systematically identified and fixed Docker build errors

### Future Improvements

1. Add more comprehensive test coverage
2. Implement code linting in the pipeline
3. Add security scanning for Docker images
4. Explore multi-stage Docker builds for smaller images
5. Consider implementing Assignment 3 (The Release Architect) for additional learning

---

## Notes for Reviewer

- All required files are present and properly formatted
- Both compulsory assignments are complete
- Repository is public and accessible
- Workflow has been tested multiple times and works reliably
- Documentation includes screenshots and detailed explanations
- Code follows best practices and industry standards

**Time Investment:**

- Assignment 1: ~2 hours
- Assignment 2: ~1.5 hours
- Documentation: ~1 hour
- Total: ~4.5 hours

**Most Valuable Learning:**
Understanding how the `needs:` keyword creates job dependencies was the biggest "aha" moment. It perfectly demonstrates how CI/CD pipelines protect code quality by creating gates that must be passed before proceeding.

---

## Acknowledgments

- **Workshop by:** Priyanka Tuladhar, Software Engineer, DevOps
- **Platform:** GitHub Actions, Docker, Node.js
- **Learning Resources:** GitHub Actions documentation, Docker Hub, DevOps best practices

---

**Submission Status:** COMPLETE  
**Date Submitted:** October 6, 2025  
**Submitted By:** Prashun Baral (prashunbaral)

---
