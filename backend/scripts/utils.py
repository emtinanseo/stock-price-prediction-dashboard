import yfinance as yf

def fetch_data(symbol, starting, ending):
    data = yf.download(symbol, starting, ending)
    data["Date"] = data.index
    data = data.droplevel("Ticker", axis=1)

    return data