from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from base import BaseModel
import os

engine = create_engine(os.getenv('DB_URL'))
session = sessionmaker()
session.configure(bind=engine)
BaseModel.metadata.create_all(engine)
