from flask import Flask, jsonify

app = Flask(__name__)

# Sample GIS data (replace with actual data)
gis_data = {
    "gis_data": [
        {"name": "Location 1", "latitude": 51.505, "longitude": -0.09},
        {"name": "Location 2", "latitude": 51.51, "longitude": -0.1},
        {"name": "Location 3", "latitude": 51.515, "longitude": -0.095},
    ]
}

# Sample Blockchain data (replace with actual data)
blockchain_data = {
    "blockchain_data": [
        {"transaction_id": "12345", "amount": 100},
        {"transaction_id": "67890", "amount": 200},
    ]
}

@app.route('/api/gis', methods=['GET'])
def get_gis_data():
    return jsonify(gis_data)

@app.route('/api/blockchain', methods=['GET'])
def get_blockchain_data():
    return jsonify(blockchain_data)

if __name__ == '__main__':
    app.run(debug=True)
