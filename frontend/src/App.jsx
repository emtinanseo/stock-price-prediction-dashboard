import DisplayData from "./components/DisplayData";
import StockPrediction from "./components/StockPrediction";
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="component-box">
        <DisplayData />
      </div>
      <div className="component-box">
        <StockPrediction />
      </div>
    </div>
  )
}

export default App;
