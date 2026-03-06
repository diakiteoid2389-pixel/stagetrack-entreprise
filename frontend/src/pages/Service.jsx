// src/pages/Service.jsx
import { Wrench, Settings, AlertCircle } from 'lucide-react';
import HeaderEntreprise from '../components/HeaderEntreprise';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function Service() {
  const services = [
    {
      title: 'Support Technique',
      description: 'Accédez à notre équipe de support pour tous vos problèmes techniques',
      icon: Wrench,
      link: 'mailto:support@stagetrack.com',
    },
    {
      title: 'Paramètres API',
      description: 'Intégrez StageTrack avec vos outils via notre API',
      icon: Settings,
      link: '#',
    },
    {
      title: 'Signaler un Problème',
      description: 'Nous vous aiderons à résoudre les problèmes rencontrés',
      icon: AlertCircle,
      link: '#',
    },
  ];

  return (
    <>
      <HeaderEntreprise />
      <Sidebar />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-24 md:ml-64">
        <div className="container mx-auto px-6 max-w-7xl">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">
              Services
            </h1>
            <p className="text-gray-600 mb-10">Accédez à tous nos services d'assistance et d'intégration</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <a
                  key={idx}
                  href={service.link}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer group"
                >
                  <Icon className="w-12 h-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </a>
              );
            })}
          </div>

          <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Aide et Documentation</h2>
            <div className="prose prose-sm prose-indigo max-w-none">
              <h3>Frequently Asked Questions (FAQ)</h3>
              <ul>
                <li>Comment créer une nouvelle offre de stage ?</li>
                <li>Comment gérer les candidatures reçues ?</li>
                <li>Comment accéder à l'API de StageTrack ?</li>
                <li>Quelles sont les conditions d'utilisation ?</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
