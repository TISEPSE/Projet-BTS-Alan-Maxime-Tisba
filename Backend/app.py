from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# récupérer les informations du formulaire quand il POST sur l'endpoint /register_form
@app.route("/register_form", methods=["POST"])
def register_form():
    email = request.form.get("email")
    password = request.form.get("password")
    nom = request.form.get("nom")
    print(f"La page de Register à récupérer => Nom: {nom} Email: {email}, Password: {password}", flush=True)
    return "OK"

@app.route("/login_form", methods=["POST"])
def login_Form():
    email = request.form.get("email")
    password = request.form.get("password")
    print(f"La page de Login à récupérer => Email: {email}, Password: {password}", flush=True)
    return "{Résulat: " + email + ", password: " + password + "}"

if __name__ == "__main__":
    app.run(port=5000)
