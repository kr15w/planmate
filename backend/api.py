from flask import Flask
from persona_fetch import fetch_data

app = Flask(__name__)

@app.route('/persona', methods=['GET'])
def get_persona():
    result = fetch_data()
    return result

# @app.route('/interest_update', methods=['POST'])
# def interest_update():
    # upload to rag database


if __name__ == '__main__':
    app.run()