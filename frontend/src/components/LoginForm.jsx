import { useState } from 'react';

function LoginForm({ onBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tentative de connexion :', { email, password });
    // → Ajoute ici ton appel API / auth logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/* Carte principale */}
        <div className="bg-white shadow-xl rounded-2xl px-10 py-12 ring-1 ring-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Connexion
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Entrez vos identifiants pour accéder à votre espace
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Champ Email */}
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Adresse email
              </label>
            </div>

            {/* Champ Mot de passe */}
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Mot de passe
              </label>
            </div>

            {/* Bouton principal */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
            >
              Se connecter
            </button>

            {/* Lien retour – centré */}
            {onBack && (
              <div className="text-center mt-4">
                <button
                  type="button"
                  onClick={onBack}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  ← Choisir un autre rôle
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Petit texte légal / aide (optionnel mais pro) */}
        <p className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} VotrePlateforme – Tous droits réservés
        </p>
      </div>
    </div>
  );
}

export default LoginForm;