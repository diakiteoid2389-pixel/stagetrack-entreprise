import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

function Login() {
  const [role, setRole] = useState(null);

  return (
    <>
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Connexion à StageTrack
          </h2>

          {!role ? (
            <div className="grid grid-cols-1 gap-4">
              <button
                onClick={() => setRole('etudiant')}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition"
              >
              Étudiant
              </button>
              <button
                onClick={() => setRole('universite')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
              >
              Université
              </button>
              <button
                onClick={() => setRole('entreprise')}
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg transition"
              >
              Entreprise
              </button>
            </div>
          ) : (
            <LoginForm role={role} onBack={() => setRole(null)} />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Login;
