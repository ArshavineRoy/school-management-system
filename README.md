# School Management System

## Problem Statement

In today's rapidly evolving educational landscape, the need for an efficient, comprehensive, and technologically advanced School Management System has become paramount. Educational institutions, from schools to higher education, face a myriad of challenges in managing administrative tasks, fostering communication, and ensuring the highest quality of education. The existing manual and fragmented processes are no longer sufficient to address these challenges.

The goal of this project is to develop a modern and user-centric School Management System that caters to the needs of administrators, teachers, students, and parents.

## Solution

Design and develop a comprehensive School Management System that addresses the aforementioned challenges. This will be a centralized platform that streamlines administrative processes, enhances communication and collaboration, supports effective academic planning, ensures data security and accessibility. Additionally, it will provide users with a user-friendly and mobile-responsive interface, making it accessible and efficient for all stakeholders. The system will be scalable and customized to meet the unique needs of educational institutions of various sizes and levels.

## MVP (Minimum Viable Product)

- Landing page
- Login Page
- Student registration form
- Course page
  - Course registration form
  - Course listings
- Teachers page
  - List of courses they teach
- Registration page
  - Register students
  - Remove students
  - Update student info

## Technologies Used

### Frontend

- React.js
- React Router

### Backend

- Flask
- SQLAlchemy
- Flask-Migrate
- JWT (JSON Web Tokens)

---

## SDFT-05 PHASE 4 PROJECT REQUIREMENTS

Welcome to project week. It is time to put together a project that accumulates all your skills from the beginning of the course to this point. This week, you will be required to work in teams and develop full-stack web applications.

## Project Overview

This document provides a detailed description of what the project is expected to adhere to.

### Minimum Viable Product

#### Single Page Client Application

- Your client application should be built using the React library.
- You should have at least 8 routes within your application.
- You should have at least 5 of your app routes protected. (Protected routes are ones that require some form of authentication needed before accessing them)
- You should allow the user to reset their password if they have forgotten it.

#### Backend REST API

- You should have at least 8 endpoints. (At least 2 for each of the following methods: POST, GET, PUT, DELETE)
- At least 5 of your endpoints should require the user to be logged in in order to access them.
- You should have at least 4 database models, each model should have at least 4 columns excluding the unique identifier.
- Within your database schema, have at least two (2); one-to-many relationship(s)
- Within your database schema, have at least one(1); many-to-many relationship(s)

### Technical Requirements

- Every single repository should have a detailed README file explaining how to set up the codebase upon cloning/forking.
- Use JWT for authentication.
- You should have regular git commits, and the messages should be clear and concise.
- Your application must be deployed and accessible through a remote URL. (You can choose whichever deployment platform you wish)
- Your project should be structured in an organized manner.
- Your web application should have proper styling. Ensure it looks professional and clean.
- Your app must be a REACT frontend that accesses data from your FLASK API. All client and API interactions should be handled asynchronously and use JSON as the communication format.
- Your entire app must run on a single page. There should be NO redirects. In other words, your project will contain a single HTML file.
- Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.
- Your repository should include a license. [Adding a license to a repository - GitHub Docs](https://docs.github.com/en/enterprise/2.22/admin/enterprise-management/managing-site-policy-for-your-github-enterprise-server-instance/adding-a-license-to-a-repository)
- Your project MVP MUST be completed within the stipulated timeline.
- Since this is a group project, you are expected to contribute to a single repository. You can use this page to learn more about this: [Git Remote | Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials/syncing)
