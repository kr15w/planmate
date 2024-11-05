from flask import jsonify

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


    #decode json as dictionary

    return raw_json