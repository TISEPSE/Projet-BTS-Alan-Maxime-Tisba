import { useLocation, Link } from "react-router-dom";

export default function Recap() {
  // 1. useLocation() récupère l'objet "location" qui contient :
  //    - pathname : l'URL actuelle  (/recap)
  //    - state    : les données passées lors de la navigation
  const { state } = useLocation();

  // 2. on lit la propriété "data" envoyée via navigate("/recap", { state: { data: ... } })
  //    Si jamais aucune donnée n'a été fournie, on affiche un message par défaut
  const data = state?.data || "Aucune donnée reçue";

  // 3. Affichage simple
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Récapitulatif</h2>

        {/* 4. on affiche la réponse provenant de Flask */}
        <p>{data}</p>
        <h1>{data.email}</h1>

        {/* 5. Lien interne vers la page d'accueil sans rechargement */}
        <Link to="/" className="text-indigo-600 underline block mt-4">
          Retour
        </Link>
      </div>
    </div>
  );
}