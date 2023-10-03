from .dbconfig import db
from werkzeug.security import generate_password_hash, check_password_hash


class Student(db.Model):

    __tablename__ = "students"

    id = db.Column(db.Integer(), primary_key=True)
    student_number = db.Column(db.Integer(), nullable=False, unique=True)
    name = db.Column(db.String, nullable=False)
    email_address = db.Column(db.String(length=50), nullable=False, unique=True)
    password_hash = db.Column(db.String(length=60), nullable=False)
    grade = db.Column(db.Integer())
    attendance = db.Column(db.Integer())

    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    units = db.relationship('Unit', backref='student', lazy=True)
    instructors = db.relationship('Instructor', secondary='units', backref='students')



    def __repr__(self):
        return f'Student(id={self.id}, name={self.name}, email_address={self.email_address})'
    