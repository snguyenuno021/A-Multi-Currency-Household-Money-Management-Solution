from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # CORS is used for communication with React

# database.db is mainly a placeholder name, it can be updated to whatever is required
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"  # using SQLite here, but could easily use
# PostgreSQL, etc. if necessary
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)  # initializing the database for API communication

class User(db.Model):
    # database schema
    user_id = db.Column(db.Integer, primary_key = True)
    user_first_name = db.Column(db.String(80), nullable = False)
    user_last_name = db.Column(db.String(80), nullable = False)

# creating tables to be ready for receiving requests
with app.app_context():
    db.create_all()

# method that populates the database with user info (first name, last name)
app.route("/add_user", methods = ["POST"])
def add_user():
    # user data fields are placeholder as well, they can be updated/modified as needed4
    user_data = request.json
    user_first_name = user_data.get("first_name")
    user_last_name = user_data.get("last_name")
    # denies data addition if the fields are not present
    if not user_first_name or user_last_name:
        return jsonify({"error" : "Missing required fields"}), 400

    # successfully adds data entries to the database if provided data is valid
    new_user = User(user_first_name = user_first_name, user_last_name = user_last_name)
    db.session.add(new_user)
    db.session.commit()

    # returns message that data addition is successful
    return jsonify({"message" : "User successfully added"}), 201

@app.route("/users", methods = ["GET"])
def get_users():
    users = User.query.all()
    # returns a list of all data received from the user/database
    return jsonify([{"user_id" : user.user_id, "user_first_name" : user.user_first_name,
                     "user_last_name" : user.user_last_name, } for user in users])

if __name__ == "__main__":
    app.run()
