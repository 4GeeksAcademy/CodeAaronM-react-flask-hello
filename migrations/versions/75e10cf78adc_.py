"""empty message

Revision ID: 75e10cf78adc
Revises: 
Create Date: 2024-08-30 20:08:05.739301

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '75e10cf78adc'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('especialidad',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('especialidad', sa.String(length=60), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre_usuario', sa.String(length=50), nullable=False),
    sa.Column('apellido', sa.String(length=50), nullable=False),
    sa.Column('descripcion', sa.Text(), nullable=True),
    sa.Column('fecha_de_nacimiento', sa.Date(), nullable=True),
    sa.Column('codigo_de_area', sa.String(length=10), nullable=True),
    sa.Column('telefono', sa.String(length=20), nullable=True),
    sa.Column('correo', sa.String(length=40), nullable=False),
    sa.Column('clave', sa.String(length=80), nullable=True),
    sa.Column('is_psicologo', sa.Boolean(), nullable=False),
    sa.Column('foto', sa.String(length=255), nullable=True),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('correo_verificado', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('correo'),
    sa.UniqueConstraint('telefono')
    )
    op.create_table('clave_reset_token',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('token', sa.String(length=256), nullable=False),
    sa.Column('expiration', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('token')
    )
    op.create_table('comentarios',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_usuario', sa.Integer(), nullable=False),
    sa.Column('id_profesional', sa.Integer(), nullable=False),
    sa.Column('comentario', sa.Text(), nullable=False),
    sa.Column('puntaje', sa.Integer(), nullable=False),
    sa.Column('fecha_de_publicacion', sa.DateTime(), nullable=False),
    sa.ForeignKeyConstraint(['id_profesional'], ['user.id'], ),
    sa.ForeignKeyConstraint(['id_usuario'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('prof_especialidad',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('especialidad_id', sa.Integer(), nullable=False),
    sa.Column('id_profesional', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['especialidad_id'], ['especialidad.id'], ),
    sa.ForeignKeyConstraint(['id_profesional'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('prof_especialidad')
    op.drop_table('comentarios')
    op.drop_table('clave_reset_token')
    op.drop_table('user')
    op.drop_table('especialidad')
    # ### end Alembic commands ###