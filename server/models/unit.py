from .dbconfig import db


class Unit(db.Model):

    __tablename__ = "units"

    id = db.Column(db.Integer(), primary_key=True)
    unit_code = db.Column(db.Integer(), nullable=False)
    name = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    student_id = db.Column(db.Integer, db.ForeignKey('students.id'))
    instructor_id = db.Column(db.Integer, db.ForeignKey('instructors.id'))

    student = db.relationship('Student', backref='units')
    instructor = db.relationship('Instructor', backref='units')


    def __repr__(self):
        return f'Unit(id={self.id}, unit_code={self.unit_code}, name={self.name})'
