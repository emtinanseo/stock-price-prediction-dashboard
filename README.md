# Stock Price Prediction App

This is a stock price prediction web application that allows users to fetch historical stock data and generate predictions using one of two models. The app consists of a Flask backend and a React frontend.

## Tech Stack
- **Backend:** Flask (Python), Pandas, NumPy
- **Frontend:** React (Vite), Axios, Recharts
- **Styling:** CSS

## Features
- Fetch stock price data from Yahoo Finance.
- Choose a stock symbol, date range, and prediction model.
- Generate predictions using Regression or ARIMA models.
- Display results in a table and visualize predictions using a line chart.

## Installation
### Prerequisites
Make sure you have the following installed:
- Python (>=3.8)
- Node.js (>=16)
- npm or yarn

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/stock-prediction-app.git
   cd stock-prediction-app/backend
   ```
2. Create a virtual environment and activate it:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use: venv\Scripts\activate
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Run the Flask server:
   ```sh
   python server.py
   ```
   The backend should now be running at `http://localhost:5050`.

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Start the React development server:
   ```sh
   npm run dev  # or yarn dev
   ```
   The frontend should now be accessible at `http://localhost:5173`.

## Usage
- Select a stock symbol from the dropdown menu.
- Choose a start and end date to fetch historical data.
- View the data in a table.
- Use the prediction section to select a model type and duration.
- Click submit to generate predictions and visualize them on a chart.

## Folder Structure
```
stock-prediction-app/
│── backend/
│   ├── server.py
│   ├── requirements.txt
│   ├── scripts/
│   └── ...
│
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── App.css
│   │   └── ...
│   ├── public/
│   ├── index.html
│   ├── package.json
│   └── ...
│
└── README.md
```

## Contributing
Feel free to fork the repository and submit pull requests. Ensure all contributions follow best coding practices and are well-documented.

## License
This project is licensed under the MIT License.

## Note
This tutorial is part of 10 Academy KAIM3 training week 10. See https://10academy.org/ for more details.
