from models.unit import Unit
from models.role import Role
from models.admin import Admin
from models.instructor import Instructor
from models.student import Student
from werkzeug.security import generate_password_hash
from app import app
from models.dbconfig import db


from faker import Faker
import random

fake = Faker()

cs_units = [
    "Introduction to Computer Science",
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
    "Web Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Graphics",
    "Cybersecurity",
    "Distributed Systems",
    "Software Testing",
    "Mobile App Development",
    "Big Data Analytics",
    "Ethical Hacking",
    "Cloud Computing",
    "Computer Architecture",
    "Computer Ethics and Social Issues",
]


if __name__ == "__main__":
    with app.app_context():

        Role.query.delete()
        Admin.query.delete()
        Instructor.query.delete()
        Student.query.delete()
        Unit.query.delete()

        # db.create_all()

        print("🦸‍♀️ Seeding roles...")

        admin_role = Role(name='Admin')
        db.session.add(admin_role)

        instructor_role = Role(name='Instructor')
        db.session.add(instructor_role)

        student_role = Role(name='Student')
        db.session.add(student_role)

        db.session.commit()

        print("🦸‍♀️ Seeding admin...")

        admin = Admin(
            name="admin",
            email_address="admin@test.com",
            password_hash= generate_password_hash("admin", method='scrypt'),
            role_id=1,
        )

        db.session.add(admin)

        print("🦸‍♀️ Seeding instructors...")

        instructors =[]
        for i in range(12):
            instructor=Instructor(
                staff_number=fake.numerify(text=f'SN-####'),
                name=fake.name(),
                email_address=fake.ascii_free_email(),
                password_hash= generate_password_hash(fake.password(length=12), method='scrypt'),
                role_id=2,
            )

            instructors.append(instructor)

        db.session.add_all(instructors)

        print("🦸‍♀️ Seeding students...")

        students =[]
        for i in range(60):
            new_student=Student(
                student_number=f'ECE211-{fake.unique.random_int(min=3000, max=6000)}/2023',
                name=fake.name(),
                email_address=fake.ascii_free_email(),
                password_hash= generate_password_hash(fake.password(length=12), method='scrypt'),
                grade=random.randint(10, 100),
                attendance=random.randint(0, 100),
                role_id=3,
            )

            students.append(new_student)

        db.session.add_all(students)

        db.session.commit()

        print("🦸‍♀️ Seeding units...")

        units =[]
        for cs_unit in cs_units:
            unit=Unit(
                unit_code=f'CS {fake.unique.random_int(min=1000, max=1500)}',
                name=cs_unit,
                student_id = random.choice(students).id,
                instructor_id = random.choice(instructors).id,
            )

            units.append(unit)

        db.session.add_all(units)
        db.session.commit()

        print("Db seeded successfully.")
