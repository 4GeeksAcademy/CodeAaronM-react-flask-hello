"""empty message

Revision ID: 31c2d5d90fdc
Revises: e630d62cacdd
Create Date: 2024-08-12 09:38:34.611747

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '31c2d5d90fdc'
down_revision = 'e630d62cacdd'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('venue', schema=None) as batch_op:
        batch_op.add_column(sa.Column('classification', sa.String(length=250), nullable=True))
        batch_op.drop_column('clasification')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('venue', schema=None) as batch_op:
        batch_op.add_column(sa.Column('clasification', sa.VARCHAR(length=250), autoincrement=False, nullable=True))
        batch_op.drop_column('classification')

    # ### end Alembic commands ###