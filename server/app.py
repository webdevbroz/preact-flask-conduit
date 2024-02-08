from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/items', methods=['GET'])
def get_items():
  items = [{"id": 1, "name": "item1"}, {"id": 2, "name": "item2"}] #Dummy data
  return jsonify(items)

if __name__ == '__main__':
    app.run(debug=True)
