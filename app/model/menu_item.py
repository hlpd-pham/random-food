from sqlalchemy import Column, String, Integer

from app.model.base import BaseModel


class MenuItem(BaseModel):
    __tablename__ = 'menu-item'

    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    image_link = Column(String)

    def __init__(self) -> None:
        print('hello menu item')


new_item = MenuItem()
