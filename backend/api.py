from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

#key, weight
def fetch_data():
    #raw_json = return from rag
    raw_json = {
    "suggested_place": [
        {
            "name": "The Coffee Academics",
            "isPartners": True,
            "rating": 5,
            "themes": ["leisure", "food"],
            "desc":  "The Coffee Academϊcs 在香港有多家分店，灣仔分店提供精心挑選的咖啡豆和專業的咖啡沖泡技術。作為國泰航空的合作夥伴，國泰會員在這裡消費可以賺取Asia Miles。遊客可以在這裡品嚐一杯香醇的咖啡，享受片刻的寧靜。",
            "related": ["link1", "link2"]
        }, 
        {
          "name": "Hmm",
          "isPartners": False,
          "rating": 3,
          "themes": ["Other"],
          "desc":  "actual dec",
          "related": ["link1", "link2"]
      },
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
    app.run(host="0.0.0.0")