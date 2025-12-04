import useFormSubmit from "../Hook/useForm";

export default function Login() {
  // On récupère le hook pour gérer le submit
  const { handleSubmit } = useFormSubmit(
    "http://localhost:5000/login_form", // URL du backend
    "/recap"                            // route de succès
  );

  return (
    <main className="w-full h-screen flex items-center justify-center white">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center">
          <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Formulaire de Contact</h3>
        </div>
        <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg text-left">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input name="name" type="text" required placeholder="Nom/Prenom" className="w-full px-3 py-2 border rounded-lg" />
            <input name="email" type="email" required placeholder="Email" className="w-full px-3 py-2 border rounded-lg" />
            <input name="Telephone" type="tel" required placeholder="Téléphone" className="w-full px-3 py-2 border rounded-lg" inputMode="numeric" onInput={e => e.target.value = e.target.value.replace(/\D/g,"")} />
            <input name="Message" type="Message" required placeholder="Message" className="w-full px-3 py-2 border rounded-lg" />
            <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg">Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
}