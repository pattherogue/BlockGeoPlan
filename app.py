from flask import Flask, jsonify, send_from_directory

app = Flask(__name__, static_folder='static')

# Serve your index page
@app.route('/')
def index():
    return send_from_directory('static', 'index.html')

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
    # Specify port 5000 for local and let Heroku set it when deployed
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
