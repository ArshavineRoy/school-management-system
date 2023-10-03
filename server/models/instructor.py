from .dbconfig import db


class Instructor(db.Model):

    __tablename__ = "instructors"

    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String, nullable=False)
    email_address = db.Column(db.String(length=50), nullable=False, unique=True)
    password_hash = db.Column(db.String(length=60), nullable=False)
    
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    units = db.relationship('Unit', backref='instructor', lazy=True)
    students = db.relationship('Student', secondary='units', backref='instructors')


    def __repr__(self):
        return f'Instructor(id={self.id}, name={self.name}, email_address={self.email_address})'

    
    