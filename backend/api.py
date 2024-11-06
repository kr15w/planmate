from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

#key, weight
def fetch_data():
    #raw_json = return from rag
    raw_json ={
        "suggested_place":[ {"place1":  [
                                            ("theme1","generated_description1"),
                                            ("theme2","generated_description2")
                                        ]},
                            {"place2":  [
                                            ("theme1","generated_description1"),
                                            ("theme2","generated_description2"),
                                            ("theme3","generated_description3")
                                        ]}
        ]
    } 


    raw_json = jsonify(raw_json)
    return raw_json

@app.route('/skibidi', methods=['GET'])
def get_persona():
    result = fetch_data()
    #result.headers.add('Access-Control-Allow-Origin', '*')
    print(f"Requesting {result}")
    
    return result


if __name__ == '__main__':
    app.run()