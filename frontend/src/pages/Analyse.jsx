// src/pages/Analyse.jsx
import { BarChart3, TrendingUp, Users, Clock } from 'lucide-react';
import HeaderEntreprise from '../components/HeaderEntreprise';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function Analyse() {
  const stats = [
    { label: 'Total candidatures', value: 42, icon: Users, color: 'from-blue-600 to-blue-400' },
    { label: 'Candidats sélectionnés', value: 8, icon: TrendingUp, color: 'from-green-600 to-green-400' },
    { label: 'En cours de traitement', value: 15, icon: Clock, color: 'from-yellow-600 to-yellow-400' },
    { label: 'Stages complétés', value: 12, icon: BarChart3, color: 'from-purple-600 to-purple-400' },
  ];

  return (
    <>
      <HeaderEntreprise />
      <Sidebar />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-24 md:ml-64">
        <div className="container mx-auto px-6 max-w-7xl">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">
              Analyse
            </h1>
            <p className="text-gray-600 mb-10">Consultez les statistiques et analyses de vos campagnes de recrutement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className={`bg-gradient-to-br ${stat.color} rounded-2xl shadow-lg p-8 text-white`}>
                  <Icon className="w-8 h-8 mb-4 opacity-80" />
                  <h3 className="text-sm font-medium opacity-90 mb-2">{stat.label}</h3>
                  <p className="text-4xl font-bold">{stat.value}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Graphiques détaillés</h2>
            <div className="h-96 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-500">Les graphiques détaillés seront disponibles bientôt</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
