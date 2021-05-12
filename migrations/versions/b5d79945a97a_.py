"""empty message

Revision ID: b5d79945a97a
Revises: 96936baa5bb3
Create Date: 2021-05-12 02:38:00.919344

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b5d79945a97a'
down_revision = '96936baa5bb3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('pyme', 'id_user',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('pyme', 'id_user',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###
