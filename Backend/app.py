from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route("/login", methods=["POST"])
def login_Form():
    
    email = request.form.get("name")
    password = request.form.get("password")

    print(f"Email: {email}, Password: {password}")
