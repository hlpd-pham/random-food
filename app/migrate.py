from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os

load_dotenv()

engine = create_engine(os.getenv('DB_URL'))
session = sessionmaker()
session.configure(bind=engine)
