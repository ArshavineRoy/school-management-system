from .dbconfig import db

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

    units = db.relationship('Unit', backref='student')

    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'))
    role = db.relationship('Role', backref='students')

    def __repr__(self):
        return f'Student(id={self.id}, name={self.name}, email_address={self.email_address})'
    