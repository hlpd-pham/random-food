import json

with open('assets/spoonacular.json') as f:
    data = json.load(f)

    for item in data.get('menuItems', None):
        print(item)
        print('-----------------')
        # print(f'{item.get("title", None)}')
