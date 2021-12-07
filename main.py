import typer

app = typer.Typer()

@app.command()
def say_hello():
    print('hello')

@app.command()
def say_bye():
    print('bye')

if __name__ == '__main__':
    app()