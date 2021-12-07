import pandas as pd
import json

with open('spoonacular.json') as f:
    data = json.load(f)

    for item in data.get('menuItems', None):
        print(f'{item.get("title", None)}')
