from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime, timedelta
from scripts.prediction_tools import regression_predict, arima_predict
from scripts.utils import fetch_data
import yfinance as yf
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({"message": "hello world!"})

@app.route('/data', methods=['GET'])
def data(symbol="AAPL",starting=None,ending=None): 
    if ending is None:
        ending = datetime.now().strftime("%Y-%m-%d")

    # Calculate the starting date as 30 days before today
    if starting is None:
        starting_date = datetime.now() - timedelta(days=30)
        starting = starting_date.strftime("%Y-%m-%d")

    data = fetch_data(symbol, starting, ending)

    return data.to_json(orient="records")


@app.route("/predict", methods=["POST"])
def model(): 
    form = request.get_json()   # Access JSON data sent in the request body
    symbol = form['symbol']
    starting = form['start']
    ending = form['end']
    type = form['type']
    duration = form['duration']

    data = fetch_data(symbol, starting, ending)

    if (type == "Regression"):
        predictions = regression_predict(data, duration)
    elif (type == "ARIMA"):
        predictions = arima_predict(data, duration)

    return jsonify({"predictions": predictions})

@app.route("/metrics", methods=["GET"])
def metrics():
    # Placeholder metrics - Replace with real evaluation metrics
    return jsonify({"MAE": 2.5, "RMSE": 3.1, "R2": 0.85})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5050)
