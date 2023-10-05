from .dbconfig import db


class Instructor(db.Model):

    __tablename__ = "instructors"

    id = db.Column(db.Integer(), primary_key=True)
    staff_number = db.Column(db.Integer(), nullable=False, unique=True)
    name = db.Column(db.String, nullable=False)
    email_address = db.Column(db.String(length=50), nullable=False, unique=True)
    password_hash = db.Column(db.String(length=60), nullable=False)
    
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    students = db.relationship('Student', backref='instructor')

    
    role = db.relationship('Role', backref='instructors')
    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'))

    def __repr__(self):
        return f'Instructor(id={self.id}, name={self.name}, email_address={self.email_address})'
