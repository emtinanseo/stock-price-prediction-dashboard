import { useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const stockOptions = ["AAPL", "MSFT", "AMZN", "NVDA", "GOOGL", "META", "GOOG", "TSLA"];

const StockPrediction = () => {
  const [symbol, setSymbol] = useState("AAPL");
  const [startDate, setStartDate] = useState("2024-01-01");
  const [endDate, setEndDate] = useState("2024-12-31");
  const [modelType, setModelType] = useState("Regression");
  const [duration, setDuration] = useState(30);
  const [predictions, setPredictions] = useState([]);

  const fetchPredictions = async () => {
    try {
      const response = await axios.post("http://localhost:5050/predict", {
        symbol,
        start: startDate,
        end: endDate,
        type: modelType,
        duration: parseInt(duration, 10),
      });
      setPredictions(response.data.predictions);
    } catch (error) {
      console.error("Error fetching predictions:", error);
    }
  };

  const chartData = {
    labels: predictions.map((_, index) => `Day ${index + 1}`),
    datasets: [
      {
        label: "Stock Price Prediction",
        data: predictions,
        borderColor: "#007bff",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <>
      <h1>Stock Price Prediction</h1>
      <select value={symbol} onChange={(e) => setSymbol(e.target.value)}>
        {stockOptions.map((stock) => (
          <option key={stock} value={stock}>{stock}</option>
        ))}
      </select>
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <select value={modelType} onChange={(e) => setModelType(e.target.value)}>
        <option value="Regression">Regression</option>
        <option value="ARIMA">ARIMA</option>
      </select>
      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        min="1"
      />
      <button onClick={fetchPredictions}>Get Prediction</button>
      {predictions.length > 0 && <Line data={chartData} />}
    </>
  );
};

export default StockPrediction;
