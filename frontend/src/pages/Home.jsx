import Header from '../components/Header';
import Footer from '../components/Footer';

// Tu peux remplacer ces URLs par des images que tu uploades dans /src/assets/
// ou utiliser des liens Unsplash/Pexels temporaires
const heroBg = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80'; // étudiants en groupe
const featureImg1 = 'https://images.unsplash.com/photo-1522202176988-66273c2b033f?auto=format&fit=crop&q=80'; // collaboration

function Home() {
  return (
    <>
      <Header />

      {/* Hero Section – pleine largeur, gradient overlay */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-indigo-900/60 to-purple-900/50"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Trouve ton stage idéal <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              dès aujourd'hui
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto">
            StageTrack connecte étudiants talentueux, universités engagées et entreprises innovantes pour des expériences professionnelles qui comptent.
          </p>

          {/* Bouton principal – style conservé mais sans action de navigation */}
          <button
            type="button"
            className={`
              group relative inline-flex items-center justify-center 
              px-10 py-5 text-lg font-bold tracking-wide 
              bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 
              text-white rounded-full shadow-2xl shadow-indigo-500/30 
              transition-all duration-300 ease-out
              hover:scale-105 hover:shadow-indigo-600/50 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700
              focus:outline-none focus:ring-4 focus:ring-indigo-400/50
              overflow-hidden cursor-default
            `}
          >
            <span className="relative z-10">Découvrir la plateforme</span>
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 blur-xl group-hover:opacity-40 transition-opacity duration-500"></span>
          </button>

          <p className="mt-8 text-sm md:text-base text-gray-300">
            Déjà + de 1 500 stages publiés • Rejoint par 12 universités guinéennes
          </p>
        </div>
      </section>

      {/* Section "Pour qui ?" – 3 cartes */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            StageTrack, pour tous les acteurs de la formation
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Carte Étudiant */}
            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="h-2 bg-gradient-to-r from-green-400 to-emerald-500"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Étudiants</h3>
                <p className="text-gray-600 mb-6">
                  Découvre des opportunités de stage sur mesure, postule en 2 clics et suis ton avancement en temps réel.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ Alertes personnalisées</li>
                  <li>✓ CV intégré</li>
                  <li>✓ Suivi des candidatures</li>
                </ul>
              </div>
            </div>

            {/* Carte Université */}
            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Universités</h3>
                <p className="text-gray-600 mb-6">
                  Centralise les stages de tes étudiants, suis les conventions et renforce tes partenariats entreprises.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ Tableau de bord institutionnel</li>
                  <li>✓ Statistiques & rapports</li>
                  <li>✓ Validation automatique</li>
                </ul>
              </div>
            </div>

            {/* Carte Entreprise */}
            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-600"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Entreprises</h3>
                <p className="text-gray-600 mb-6">
                  Publie tes offres facilement, reçois des profils qualifiés et gère tout le processus de recrutement de stagiaires.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li>✓ Publication illimitée</li>
                  <li>✓ Matching intelligent</li>
                  <li>✓ Entretiens en ligne</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section confiance / stats */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
            Pourquoi choisir StageTrack ?
          </h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div>
              <div className="text-5xl font-extrabold text-indigo-600 mb-4">+1 500</div>
              <p className="text-gray-700">Offres de stage actives</p>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-indigo-600 mb-4">85 %</div>
              <p className="text-gray-700">Taux de satisfaction</p>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-indigo-600 mb-4">12</div>
              <p className="text-gray-700">Universités partenaires</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dernier CTA – avant le footer */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à lancer ta carrière ou à trouver les meilleurs talents ?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Rejoins la plateforme qui facilite les stages en Guinée et au-delà.
          </p>

          <button
            type="button"
            className="inline-flex items-center px-12 py-6 text-xl font-bold bg-white text-indigo-700 rounded-full shadow-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 cursor-default"
          >
            En savoir plus →
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;