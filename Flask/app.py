from flask import Flask, render_template, request
import requests

app = Flask(__name__)

class CurrencyConverter:
    BASE_URL = "https://api.frankfurter.app/latest"

    def convert(self, amount, from_currency, to_currency):
        if from_currency == to_currency:
            return amount

        try:
            response = requests.get(self.BASE_URL, params={
                "amount": amount,
                "from": from_currency,
                "to": to_currency
            })
            data = response.json()
            return data["rates"][to_currency]
        except Exception as e:
            print(f"Error: {e}")
            return None

@app.route("/", methods=["GET", "POST"])
def index():
    result = None
    if request.method == "POST":
        amount = float(request.form["amount"])
        from_currency = request.form["from_currency"]
        to_currency = request.form["to_currency"]

        converter = CurrencyConverter()
        result = converter.convert(amount, from_currency, to_currency)

    return render_template("index.html", result=result)

if __name__ == "__main__":
    app.run(debug=True)
