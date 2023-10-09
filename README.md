# School Management System

A simple, modern, and user-centric React-Flask fullstack School Management System dashboard.

![Admin Dashboard](./client/public/assets/admin.png)

![Update Student](./client/public/assets/update-student.png)

## Features

- User Registration and Authentication
- Role-Specific Dashboards
- Attendance Monitoring
- Academic Gradebook
- User Entity Management
- JWT Token-Based Authentication
- Full CRUD Functionality
- Enhanced User Security
- Seamless SQLite Database Integration

> ----------------
> **NB: Use the following accounts to test the application:**
>
> - Admin - admin@test.com
> - Instructor - instructor@test.com
> - Student - student@test.com
>
> **Password for these test accounts: 123456**


## Setup

### 1. Clone the repository

```txt
git clone https://github.com/ArshavineRoy/school-management-system
```

### 2. Navigate to the project's directory

```txt
cd school-management-system
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

## Acknowledgements

We would like to express our gratitude to the open-source community and all the developers whose libraries and tools have made this project possible.

Thank you for using this school management system! We hope it helps you on your management journey. 🚀

## Authors & License

Authored by:

[Arshavine Waema](https://github.com/ArshavineRoy)

[Mercy Chepchirchir](https://github.com/Mercy-chepchirchir)

[Ann Mwanzia](https://github.com/Itsannm)

[Mukoya Darius](https://github.com/mukoyadariu)

[Brian Baraza](https://github.com/BrianBaraza23)

[Collins Kipkorir](https://github.com/kipkorir73)

Licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.
