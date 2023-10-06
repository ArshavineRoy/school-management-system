# School Management System
A modern and user-centric School Management System React-Flask fullstack dashboard.

![Alt text](Bamac.png)

## Features

- User Registration and Authentication
- Role-Specific Dashboards
- Comprehensive Course Administration
- Attendance Monitoring
- Academic Gradebook
- User Entity Management
- JWT Token-Based Authentication
- Full CRUD Functionality
- Enhanced User Security
- Seamless SQLite Database Integration

## Technologies Used
### Front-end 
- React.js
- React Router
- Tailwind

### Backend

- Flask
- SQLAlchemy
- Flask-Migrate
- JWT (JSON Web Tokens)
- Faker
- Flask-RESTx

## Setup
### 1. Clone the repository

```txt
git clone https://github.com/ArshavineRoy/school-management-system
```

### 2. Navigate to the project's directory

```txt
cd schoolimanagement-system
```

### 3. Install required dependencies

```python
pipenv install

npm install --prefix client
```

### 4. Activate the virtual environment for the Flask app

```python
pipenv shell
```
### 5. Run the Flask server

You can run the Flask API on [`localhost:5555`](http://localhost:5555) by running:

```sh
python server/app.py
```

### 6. In another terminal, run the React client from the root

You can run your React app on [`localhost:3000`](http://localhost:3000) by running:

```sh
npm start --prefix client
```

## API Endpoints

The application provides several API endpoints for managing students, instructors, and units. Below are the main endpoints:

/students: CRUD operations for students.
/instructors: CRUD operations for instructors.
/units: CRUD operations for units.
/login: User authentication and token generation.
For detailed information on the available API  visit: http://127.0.0.1:5555

## Authentication
User authentication is implemented using JWT (JSON Web Tokens). When a user logs in successfully, a JWT token is generated, which 

## Contributing
Contributions to the Bot Battlr project are welcome! If you find any bugs or want to suggest new features, please create an issue or submit a pull request.

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute the code for personal and commercial purposes.