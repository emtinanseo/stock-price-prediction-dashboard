import { useState} from "react";
import axios from "axios";

const stockOptions = ["AAPL", "MSFT", "AMZN", "NVDA", "GOOGL", "META", "GOOG", "TSLA"]

function DisplayData() {
  const [symbol, setSymbol] = useState("AAPL");
  const [startDate, setStartDate] = useState("2025-02-01");
  const [endDate, setEndDate] = useState("2025-02-10");
  const [data, setData] = useState([]);

  const fetchHistoricalData = async () => {
    const response = await axios.get(`http://localhost:5050/data?symbol=${symbol}&starting=${startDate}&ending=${endDate}`);
    setData(response.data);
  };

  return (
    <div>
      <h1>Display Stock Prices</h1>
      <select value={symbol} onChange={(e) => setSymbol(e.target.value)}>
        {stockOptions.map((stock) => (
          <option key={stock} value={stock}>{stock}</option>
        ))}
      </select>
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <button onClick={fetchHistoricalData}>Fetch Data</button>

      <h2>{symbol}'s stock prices </h2>
      <div style={{ maxHeight: "200px", overflowY: "auto" }}>
        <table border="1">
          <thead>
            <tr>
              <th>Date</th>
              <th>Open</th>
              <th>High</th>
              <th>Low</th>
              <th>Close</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 5).map((d, index) => (
              <tr key={index}>
                <td>{new Date(d.Date).toLocaleDateString()}</td>
                <td>{d.Open.toFixed(2)}</td>
                <td>{d.High.toFixed(2)}</td>
                <td>{d.Low.toFixed(2)}</td>
                <td>{d.Close.toFixed(2)}</td>
                <td>{d.Volume.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default DisplayData;
