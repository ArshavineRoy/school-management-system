from .dbconfig import db


class Unit(db.Model):
    __tablename__ = 'units'

    id = db.Column(db.Integer, primary_key=True)
    unit_code = db.Column(db.String(10), unique=True)
    name = db.Column(db.String(100))
    
    student_id = db.Column(db.Integer, db.ForeignKey('students.id'))
    instructor_id = db.Column(db.Integer, db.ForeignKey('instructors.id'))

    instructor = db.relationship('Instructor', back_populates='students')
    student = db.relationship('Student', back_populates='instructors')


    def __repr__(self):
        return f'Unit(id={self.id}, unit_code={self.unit_code}, name={self.name})'

