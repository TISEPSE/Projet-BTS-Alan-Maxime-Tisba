import {useNavigate} from "react-router-dom"

export default function Login() {
  // 1. on récupère la fonction "navigate" pour pouvoir rediriger plus tard
  const navigate = useNavigate()

  // 2. fonction appelée quand le formulaire est soumis
  const handleSubmit = async e => {
    e.preventDefault() // ← empêche le rechargement de page classique
    const form = e.target // ← le <form> DOM réel
    const formData = new FormData(form) // ← extrait auto tous les champs (name="email", name="password", ...)

    // 3. on envoie les données à Flask en POST (sans quitter la page)
    const res = await fetch("http://localhost:5000/login_form", {
      method: "POST",
      body: formData, // Flask récupère avec request.form.get("email") ...
    })

    const data = await res.json() // ← on parse le JSON
    navigate("/recap", {state: {data}})

    // 4. on attend la réponse de Flask (texte brut ici)
    const text = await res.text()
    console.log("Réponse du serveur :", text)

    // 5. on redirige vers la page "/recap" EN MEMOIRE tout en embarquant la réponse
    navigate("/recap", {state: {data: text}})
    // → la page ne recharge pas ; React-Router affiche simplement <Recap />
    // → la réponse est accessible dans Recap via : const {state} = useLocation();
  }

  // 6. Affichage du formulaire classique (Tailwind ici)
  return (
    <main className="w-full h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center">
          <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
            Se connecter
          </h3>
        </div>

        <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg text-left">
          {/* on branche handleSubmit sur l'événement "submit" du formulaire */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Les attributs "name" sont OBLIGATOIRES pour que FormData les récupère */}
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-lg"
            />
            <input
              name="password"
              type="password"
              required
              placeholder="Mot de passe"
              className="w-full px-3 py-2 border rounded-lg"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
