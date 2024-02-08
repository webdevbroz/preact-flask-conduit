from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/items', methods=['GET'])
def get_items():
  items = [{"id": 1, "name": "item1"}, {"id": 2, "name": "item2"}] #Dummy data
  return jsonify(items)

if __name__ == '__main__':
    app.run(debug=True)
