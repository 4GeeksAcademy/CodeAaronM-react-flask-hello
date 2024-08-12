"""empty message

Revision ID: 9278cf43e570
Revises: 39236fb2758a
Create Date: 2024-08-12 18:44:33.429613

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9278cf43e570'
down_revision = '39236fb2758a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('ratings', schema=None) as batch_op:
        batch_op.add_column(sa.Column('id', sa.Integer(), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('ratings', schema=None) as batch_op:
        batch_op.drop_column('id')

    # ### end Alembic commands ###
