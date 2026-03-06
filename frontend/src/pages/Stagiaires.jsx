// src/pages/Stagiaires.jsx
import { UserCheck, Calendar, MapPin, Mail, Phone, Award, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import HeaderEntreprise from '../components/HeaderEntreprise';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function Stagiaires() {
  const [stagiaires, setStagiaires] = useState([
    {
      id: 1,
      nom: 'Marie Dupont',
      poste: 'Développeur Frontend React',
      email: 'marie.dupont@email.com',
      telephone: '06 12 34 56 78',
      dateDebut: '2024-04-01',
      dateFin: '2024-06-30',
      statut: 'En cours',
      tuteur: 'Jean Martin',
      evaluation: 4.5,
    },
    {
      id: 2,
      nom: 'Pierre Martin',
      poste: 'Community Manager',
      email: 'pierre.martin@email.com',
      telephone: '06 98 76 54 32',
      dateDebut: '2024-03-15',
      dateFin: '2024-05-15',
      statut: 'Terminé',
      tuteur: 'Sophie Bernard',
      evaluation: 4.8,
    },
    {
      id: 3,
      nom: 'Lucas Petit',
      poste: 'Data Analyst',
      email: 'lucas.petit@email.com',
      telephone: '06 77 88 99 00',
      dateDebut: '2024-05-01',
      dateFin: '2024-07-31',
      statut: 'À venir',
      tuteur: 'Marc Dubois',
      evaluation: null,
    },
  ]);

  const getStatusColor = (statut) => {
    switch (statut) {
      case 'En cours':
        return 'bg-blue-100 text-blue-800';
      case 'Terminé':
        return 'bg-green-100 text-green-800';
      case 'À venir':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (statut) => {
    switch (statut) {
      case 'En cours':
        return <Clock className="w-4 h-4" />;
      case 'Terminé':
        return <CheckCircle className="w-4 h-4" />;
      case 'À venir':
        return <Calendar className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const stats = {
    total: stagiaires.length,
    enCours: stagiaires.filter(s => s.statut === 'En cours').length,
    termines: stagiaires.filter(s => s.statut === 'Terminé').length,
    aVenir: stagiaires.filter(s => s.statut === 'À venir').length,
  };

  const renderStars = (rating) => {
    if (!rating) return null;
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>);
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<span key={i} className="text-gray-300">☆</span>);
    }
    return stars;
  };

  return (
    <>
      <HeaderEntreprise />
      <Sidebar />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-24 md:ml-64">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">
              Stagiaires
            </h1>
            <p className="text-gray-600">Suivez vos stagiaires et leurs progrès</p>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Total</p>
                  <h3 className="text-3xl font-bold text-gray-800">{stats.total}</h3>
                </div>
                <UserCheck className="w-10 h-10 text-blue-600 opacity-20" />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">En cours</p>
                  <h3 className="text-3xl font-bold text-blue-600">{stats.enCours}</h3>
                </div>
                <Clock className="w-10 h-10 text-blue-600 opacity-20" />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Terminés</p>
                  <h3 className="text-3xl font-bold text-green-600">{stats.termines}</h3>
                </div>
                <CheckCircle className="w-10 h-10 text-green-600 opacity-20" />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">À venir</p>
                  <h3 className="text-3xl font-bold text-gray-600">{stats.aVenir}</h3>
                </div>
                <Calendar className="w-10 h-10 text-gray-600 opacity-20" />
              </div>
            </div>
          </div>

          {/* Liste des stagiaires */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {stagiaires.map((stagiaire) => (
              <div key={stagiaire.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{stagiaire.nom}</h3>
                    <p className="text-indigo-600 font-medium">{stagiaire.poste}</p>
                  </div>
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(stagiaire.statut)}`}>
                    {getStatusIcon(stagiaire.statut)}
                    {stagiaire.statut}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    {stagiaire.email}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    {stagiaire.telephone}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    Du {stagiaire.dateDebut} au {stagiaire.dateFin}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <UserCheck className="w-4 h-4" />
                    Tuteur: {stagiaire.tuteur}
                  </div>
                </div>

                {stagiaire.evaluation && (
                  <div className="flex items-center gap-2 pt-3 border-t border-gray-200">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">Évaluation:</span>
                    <div className="flex items-center gap-1">
                      {renderStars(stagiaire.evaluation)}
                      <span className="text-sm text-gray-600 ml-1">({stagiaire.evaluation}/5)</span>
                    </div>
                  </div>
                )}

                <div className="flex gap-2 mt-4">
                  <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                    Voir profil
                  </button>
                  <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    Évaluer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
