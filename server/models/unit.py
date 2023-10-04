from .dbconfig import db


class Unit(db.Model):
    __tablename__ = 'units'

    id = db.Column(db.Integer, primary_key=True)
    unit_code = db.Column(db.String(10), unique=True)
    name = db.Column(db.String(100))
    
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    # student_id = db.Column(db.Integer, db.ForeignKey('students.id'))
    # instructor_id = db.Column(db.Integer, db.ForeignKey('instructors.id'))

    students = db.relationship('Student', backref='unit')


    def __repr__(self):
        return f'Unit(id={self.id}, unit_code={self.unit_code}, name={self.name})'

