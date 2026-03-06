// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // À remplacer par ton appel API / authentification réelle
    console.log('Tentative de connexion →', { email, password });
    // Redirection vers dashboard après connexion
    navigate('/dashboard');
  };

  return (
    <>
      <Header />

      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          {/* En-tête */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              StageTrack
            </h1>
            <p className="mt-3 text-gray-600 text-lg">
              Connectez-vous à votre espace
            </p>
          </div>

          {/* Carte du formulaire */}
          <div className="bg-white/85 backdrop-blur-xl shadow-xl rounded-2xl border border-gray-200/60 p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Champ identifiant */}
              <div>
                <label htmlFor="identifier" className="block text-sm font-medium text-gray-700">
                  Email ou numéro de téléphone
                </label>
                <input
                  id="identifier"
                  name="identifier"
                  type="text"
                  autoComplete="email tel"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg
                    focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                    transition duration-200 placeholder-gray-400 text-gray-900
                  "
                  placeholder="exemple@domaine.com ou +224 6XX XXX XXX"
                />
              </div>

              {/* Champ mot de passe */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Mot de passe
                </label>
                <div className="relative mt-1">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="
                      block w-full px-4 py-3 border border-gray-300 rounded-lg
                      focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                      transition duration-200 text-gray-900
                    "
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-sm text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? 'Cacher' : 'Voir'}
                  </button>
                </div>
              </div>

              {/* Options supplémentaires */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-gray-600">Rester connecté</span>
                </label>

                <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium hover:underline">
                  Mot de passe oublié ?
                </a>
              </div>

              {/* Bouton de connexion */}
              <button
                type="submit"
                className="
                  w-full py-3 px-4 rounded-lg font-semibold text-white shadow-md
                  bg-gradient-to-r from-indigo-600 to-purple-600
                  hover:from-indigo-700 hover:to-purple-700
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                  transition-all duration-200 active:scale-[0.98]
                "
              >
                Se connecter
              </button>
            </form>

            {/* Lien vers inscription */}
            <p className="mt-8 text-center text-sm text-gray-600">
              Vous n'avez pas encore de compte ?{' '}
              <a
                href="/register"
                className="font-medium text-indigo-600 hover:text-indigo-700 hover:underline"
              >
                Créer un compte
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}