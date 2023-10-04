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


unit_model = api.model("Unit", {
    "id" : fields.Integer,
    "unit_code" : fields.String,
    "name" : fields.String,
    "students" : fields.List(fields.Nested(student_model)),
    # "instructors" : "",
    })

instructor_model = api.model("Instructor", {
    "id" : fields.Integer,
    "name" : fields.String,
    "staff_number" : fields.String,
    "email_address" : fields.String,
    "students" : fields.List(fields.Nested(student_model)),
    })

@ns.route("/students")
class Students(Resource):

    @ns.marshal_list_with(student_model)
    def get(self):
        return Student.query.all()


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