from flask import Flask, request
from flask_migrate import Migrate
from models.dbconfig import db
from models.unit import Unit
from models.role import Role
from models.admin import Admin
from models.instructor import Instructor
from models.student import Student
from flask_marshmallow import Marshmallow
from flask_restx import Api, Resource, Namespace, fields
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime

from faker import Faker

fake = Faker()

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///school.db'
app.config['SECRET_KEY'] = 'dc5e38b62c7f0e63e0c8718e'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config["JSON_SORT_KEYS"] = False
app.json.compact = False

migrate = Migrate(app, db)
db.init_app(app)

api = Api()
api.init_app(app)

ns = Namespace("/")
api.add_namespace(ns)


student_model = api.model("Student", {
    "id" : fields.Integer,
    "name" : fields.String,
    "student_number" : fields.String,
    "email_address" : fields.String,
    "grade" : fields.String,
    "attendance" : fields.String,
    })

student_only_model = api.model("Student Input", {
    "name" : fields.String,
    "email_address" : fields.String,
    "password" : fields.String,
    })


unit_only_model = api.model("Unit Input", {
    "name" : fields.String,
    })

unit_model = api.model("Unit", {
    "id" : fields.Integer,
    "unit_code" : fields.String,
    "name" : fields.String,
    "students" : fields.List(fields.Nested(student_model)),
    })

unit_only_model = api.model("Unit", {
    "id" : fields.Integer,
    "unit_code" : fields.String,
    "name" : fields.String,
    })

instructor_only_model = api.model("Instructor Input", {
    "name" : fields.String,
    "email_address" : fields.String,
    "password" : fields.String,
    })

instructor_model = api.model("Instructor", {
    "id" : fields.Integer,
    "name" : fields.String,
    "staff_number" : fields.String,
    "email_address" : fields.String,
    "students" : fields.List(fields.Nested(student_model)),
    })


login_model = api.model("Login", {
    "email": fields.String(required=True),
    "password": fields.String(required=True),
    "role": fields.String(required=True),
})


login_model = api.model("Login", {
    "email": fields.String(required=True),
    "password": fields.String(required=True),
    "role": fields.String(required=True),
})

@ns.route("/students")
class Students(Resource):

    @ns.marshal_list_with(student_model)
    def get(self):
        return Student.query.all()
    

    @ns.marshal_with(student_model)
    @ns.expect(student_only_model)
    def post(self):

        data = request.get_json()

        new_student = Student(
            student_number=f'ECE211-{fake.unique.random_int(min=3000, max=6000)}/2023',
            name=data['name'],
            email_address=data['email_address'],
            password_hash=generate_password_hash(data['password']),
            grade=0,
            attendance=0,
            role_id=3,
        )

        db.session.add(new_student)
        db.session.commit()

        return new_student


@ns.route("/students/<int:id>")
class StudentByID(Resource):

    @ns.marshal_with(student_model)
    def get(self, id):
        return Student.query.get(id)
    

    @ns.marshal_with(student_model)
    def patch(self, id):
        student = Student.query.get(id)

        for attr in request.get_json():
            setattr(student, attr, request.get_json()[attr])

        db.session.add(student)
        db.session.commit()

        return student

    def delete(self, id):
        student = Student.query.get(id)

        db.session.delete(student)
        db.session.commit()

        return {}


@ns.route("/instructors")
class Instructors(Resource):

    @ns.marshal_list_with(instructor_model)
    def get(self):
        return Instructor.query.all()
    
    @ns.marshal_with(instructor_model)
    @ns.expect(instructor_only_model)
    def post(self):

        data = request.get_json()

        new_instructor = Instructor(
            staff_number=f'SN-{fake.unique.random_int(min=1000, max=1500)}',
            name=data['name'],
            email_address=data['email_address'],
            password_hash=generate_password_hash(data['password']),
            role_id=2,
        )

        db.session.add(new_instructor)
        db.session.commit()

        return new_instructor


@ns.route("/instructors/<int:id>")
class InstructorByID(Resource):

    @ns.marshal_with(instructor_model)
    def get(self, id):
        return Instructor.query.get(id)
    

    @ns.marshal_with(instructor_model)
    def patch(self, id):
        instructor = Instructor.query.get(id)

        for attr in request.get_json():
            setattr(instructor, attr, request.get_json()[attr])

        db.session.add(instructor)
        db.session.commit()

        return instructor

    def delete(self, id):
        instructor = Instructor.query.get(id)

        db.session.delete(instructor)
        db.session.commit()

        return {}


@ns.route("/units")
class Units(Resource):

    @ns.marshal_list_with(unit_model)
    def get(self):
        return Unit.query.all()

    @ns.marshal_with(unit_model)
    @ns.expect(unit_only_model)
    def post(self):

        data = request.get_json()

        new_unit = Unit(
            unit_code=f'CS-{fake.unique.random_int(min=1000, max=1500)}',
            name=data['name'],
        )

        db.session.add(new_unit)
        db.session.commit()

        return new_unit


@ns.route("/units/<int:id>")
class UnitByID(Resource):

    @ns.marshal_with(unit_model)
    def get(self, id):
        return Unit.query.get(id)
    
    @ns.marshal_with(unit_model)
    def patch(self, id):
        unit = Unit.query.get(id)

        for attr in request.get_json():
            setattr(unit, attr, request.get_json()[attr])

        db.session.add(unit)
        db.session.commit()

        return unit

    
    def delete(self, id):
        unit = Unit.query.get(id)

        db.session.delete(unit)
        db.session.commit()

        return {}


if __name__ == '__main__':
    app.run(port=5555, debug=True)