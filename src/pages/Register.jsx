export default function Register() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-gray-50 py-8">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md mx-4">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          <div className="mt-5 space-y-3">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Créer un compte
            </h3>
            <p className="text-gray-500 max-w-sm mx-auto">
              Rejoignez Book By Click et simplifiez la gestion de vos réservations dès aujourd'hui.
            </p>
          </div>
        </div>

        <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg text-left">
          <form 
            onSubmit={e => e.preventDefault()} 
            className="space-y-5" 
            action="http://localhost:5000/register_form" 
            method="POST"
          >
            {/* Nom complet */}
            <div className="flex flex-col items-start">
              <label className="font-medium block text-left mb-2">
                Nom complet <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Votre nom complet"
                required
                className="w-full px-3 py-3 text-gray-500 bg-transparent outline-none border border-gray-300 focus:border-indigo-600 shadow-sm rounded-lg transition duration-200"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col items-start">
              <label className="font-medium block text-left mb-2">
                Adresse email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="votre@email.com"
                required
                className="w-full px-3 py-3 text-gray-500 bg-transparent outline-none border border-gray-300 focus:border-indigo-600 shadow-sm rounded-lg transition duration-200"
              />
            </div>

            {/* Mot de passe */}
            <div className="flex flex-col items-start">
              <label className="font-medium block text-left mb-2">
                Mot de passe <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                required
                className="w-full px-3 py-3 text-gray-500 bg-transparent outline-none border border-gray-300 focus:border-indigo-600 shadow-sm rounded-lg transition duration-200"
              />
              <p className="text-xs text-gray-500 mt-2">
                Le mot de passe doit contenir au moins 8 caractères
              </p>
            </div>

            {/* Confirmation mot de passe */}
            <div className="flex flex-col items-start">
              <label className="font-medium block text-left mb-2">
                Confirmer le mot de passe <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="confirm_password"
                placeholder="••••••••"
                required
                className="w-full px-3 py-3 text-gray-500 bg-transparent outline-none border border-gray-300 focus:border-indigo-600 shadow-sm rounded-lg transition duration-200"
              />
            </div>

            {/* Checkbox conditions */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-gray-600">
                  J'accepte les{" "}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium">
                    conditions d'utilisation
                  </a>{" "}
                  et la{" "}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium">
                    politique de confidentialité
                  </a>
                </label>
              </div>
            </div>

            {/* Bouton d'inscription */}
            <button 
              className="w-full px-4 py-3 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg duration-150 transition-all shadow-lg hover:shadow-none"
              type="submit"
            >
              Créer mon compte
            </button>
          </form>

          {/* Séparateur */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Ou continuer avec</span>
              </div>
            </div>
          </div>

          {/* Bouton Google */}
          <div className="mt-4">
            <button className="w-full flex items-center justify-center gap-x-3 py-3.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100 transition-all">
              <svg
                className="w-5 h-5"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_17_40)">
                  <path
                    d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                    fill="#34A853"
                  />
                  <path
                    d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_40">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              S'inscrire avec Google
            </button>
          </div>

          {/* Section liens supplémentaires */}
          <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
            <div className="text-center">
              <p className="text-gray-600">
                Déjà un compte ?{" "}
                <a 
                  href="login_form" 
                  className="text-indigo-600 hover:text-indigo-500 font-medium inline-flex items-center gap-1"
                >
                  Se connecter
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}