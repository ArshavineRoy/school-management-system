"""create tables roles, admin, instructor, students, units

Revision ID: d6540f55f67a
Revises: 
Create Date: 2023-10-03 20:41:22.145483

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd6540f55f67a'
down_revision = None
branch_labels = None
depends_on = None



def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('roles',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('name', sa.VARCHAR(length=50), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('students',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('student_number', sa.INTEGER(), nullable=False),
    sa.Column('name', sa.VARCHAR(), nullable=False),
    sa.Column('email_address', sa.VARCHAR(length=50), nullable=False),
    sa.Column('password_hash', sa.VARCHAR(length=60), nullable=False),
    sa.Column('grade', sa.INTEGER(), nullable=True),
    sa.Column('attendance', sa.INTEGER(), nullable=True),
    sa.Column('created_at', sa.DATETIME(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('updated_at', sa.DATETIME(), nullable=True),
    sa.Column('role_id', sa.INTEGER(), nullable=True),
    sa.ForeignKeyConstraint(['role_id'], ['roles.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email_address'),
    sa.UniqueConstraint('student_number')
    )
    op.create_table('admins',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('name', sa.VARCHAR(), nullable=False),
    sa.Column('email_address', sa.VARCHAR(length=50), nullable=False),
    sa.Column('password_hash', sa.VARCHAR(length=60), nullable=False),
    sa.Column('created_at', sa.DATETIME(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('updated_at', sa.DATETIME(), nullable=True),
    sa.Column('role_id', sa.INTEGER(), nullable=True),
    sa.ForeignKeyConstraint(['role_id'], ['roles.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email_address')
    )
    op.create_table('instructors',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('staff_number', sa.INTEGER(), nullable=False),
    sa.Column('name', sa.VARCHAR(), nullable=False),
    sa.Column('email_address', sa.VARCHAR(length=50), nullable=False),
    sa.Column('password_hash', sa.VARCHAR(length=60), nullable=False),
    sa.Column('created_at', sa.DATETIME(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('updated_at', sa.DATETIME(), nullable=True),
    sa.Column('role_id', sa.INTEGER(), nullable=True),
    sa.ForeignKeyConstraint(['role_id'], ['roles.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email_address'),
    sa.UniqueConstraint('staff_number')
    )
    op.create_table('units',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('unit_code', sa.INTEGER(), nullable=False),
    sa.Column('name', sa.VARCHAR(), nullable=False),
    sa.Column('created_at', sa.DATETIME(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('updated_at', sa.DATETIME(), nullable=True),
    sa.Column('student_id', sa.INTEGER(), nullable=True),
    sa.Column('instructor_id', sa.INTEGER(), nullable=True),
    sa.ForeignKeyConstraint(['instructor_id'], ['instructors.id'], ),
    sa.ForeignKeyConstraint(['student_id'], ['students.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('unit_code')
    )
    # ### end Alembic commands ###

def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('units')
    op.drop_table('instructors')
    op.drop_table('admins')
    op.drop_table('students')
    op.drop_table('roles')
    # ### end Alembic commands ###
