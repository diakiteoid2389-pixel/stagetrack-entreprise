// src/pages/Candidatures.jsx
import { Users, Eye, CheckCircle, XCircle, Clock, Mail, Phone, Download } from 'lucide-react';
import { useState } from 'react';
import HeaderEntreprise from '../components/HeaderEntreprise';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function Candidatures() {
  const [candidatures, setCandidatures] = useState([
    {
      id: 1,
      nom: 'Marie Dupont',
      poste: 'Développeur Frontend React',
      email: 'marie.dupont@email.com',
      telephone: '06 12 34 56 78',
      dateCandidature: '2024-03-10',
      statut: 'En attente',
      cv: 'cv_marie_dupont.pdf',
    },
    {
      id: 2,
      nom: 'Pierre Martin',
      poste: 'Community Manager',
      email: 'pierre.martin@email.com',
      telephone: '06 98 76 54 32',
      dateCandidature: '2024-03-08',
      statut: 'Accepté',
      cv: 'cv_pierre_martin.pdf',
    },
    {
      id: 3,
      nom: 'Sophie Bernard',
      poste: 'Data Analyst',
      email: 'sophie.bernard@email.com',
      telephone: '06 55 44 33 22',
      dateCandidature: '2024-03-05',
      statut: 'Refusé',
      cv: 'cv_sophie_bernard.pdf',
    },
    {
      id: 4,
      nom: 'Lucas Petit',
      poste: 'Développeur Frontend React',
      email: 'lucas.petit@email.com',
      telephone: '06 77 88 99 00',
      dateCandidature: '2024-03-12',
      statut: 'En attente',
      cv: 'cv_lucas_petit.pdf',
    },
  ]);

  const getStatusColor = (statut) => {
    switch (statut) {
      case 'Accepté':
        return 'bg-green-100 text-green-800';
      case 'Refusé':
        return 'bg-red-100 text-red-800';
      case 'En attente':
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getStatusIcon = (statut) => {
    switch (statut) {
      case 'Accepté':
        return <CheckCircle className="w-4 h-4" />;
      case 'Refusé':
        return <XCircle className="w-4 h-4" />;
      case 'En attente':
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const handleStatutChange = (id, nouveauStatut) => {
    setCandidatures(candidatures.map(cand =>
      cand.id === id ? { ...cand, statut: nouveauStatut } : cand
    ));
  };

  const stats = {
    total: candidatures.length,
    enAttente: candidatures.filter(c => c.statut === 'En attente').length,
    acceptes: candidatures.filter(c => c.statut === 'Accepté').length,
    refuses: candidatures.filter(c => c.statut === 'Refusé').length,
  };

  return (
    <>
      <HeaderEntreprise />
      <Sidebar />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-24 md:ml-64">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">
              Candidatures
            </h1>
            <p className="text-gray-600">Gérez les candidatures reçues pour vos offres de stage</p>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Total</p>
                  <h3 className="text-3xl font-bold text-gray-800">{stats.total}</h3>
                </div>
                <Users className="w-10 h-10 text-blue-600 opacity-20" />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">En attente</p>
                  <h3 className="text-3xl font-bold text-yellow-600">{stats.enAttente}</h3>
                </div>
                <Clock className="w-10 h-10 text-yellow-600 opacity-20" />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Acceptés</p>
                  <h3 className="text-3xl font-bold text-green-600">{stats.acceptes}</h3>
                </div>
                <CheckCircle className="w-10 h-10 text-green-600 opacity-20" />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Refusés</p>
                  <h3 className="text-3xl font-bold text-red-600">{stats.refuses}</h3>
                </div>
                <XCircle className="w-10 h-10 text-red-600 opacity-20" />
              </div>
            </div>
          </div>

          {/* Liste des candidatures */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Users className="w-6 h-6 text-indigo-600" />
                Toutes les candidatures
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Candidat</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Poste</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Contact</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Statut</th>
                    <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {candidatures.map((candidature, idx) => (
                    <tr key={candidature.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{candidature.nom}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{candidature.poste}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-1">
                            <Mail className="w-3 h-3" />
                            {candidature.email}
                          </div>
                          <div className="flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            {candidature.telephone}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{candidature.dateCandidature}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(candidature.statut)}`}>
                          {getStatusIcon(candidature.statut)}
                          {candidature.statut}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            title="Voir le CV"
                            className="p-2 hover:bg-blue-100 text-blue-600 rounded-lg transition"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                          <button
                            title="Voir détails"
                            className="p-2 hover:bg-gray-100 text-gray-600 rounded-lg transition"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          {candidature.statut === 'En attente' && (
                            <>
                              <button
                                onClick={() => handleStatutChange(candidature.id, 'Accepté')}
                                title="Accepter"
                                className="p-2 hover:bg-green-100 text-green-600 rounded-lg transition"
                              >
                                <CheckCircle className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleStatutChange(candidature.id, 'Refusé')}
                                title="Refuser"
                                className="p-2 hover:bg-red-100 text-red-600 rounded-lg transition"
                              >
                                <XCircle className="w-4 h-4" />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
