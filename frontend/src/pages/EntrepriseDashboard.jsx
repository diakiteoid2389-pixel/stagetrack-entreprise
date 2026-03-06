import { useState } from 'react';
import { Plus, Users, Briefcase, Clock, CheckCircle, AlertCircle, Edit2, Trash2, Eye } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function EntrepriseDashboard() {
  const [stages, setStages] = useState([
    {
      id: 1,
      titre: 'Développeur Frontend React',
      duree: '3 mois',
      dateDebut: '2024-03-15',
      domaine: 'Informatique',
      candidats: 12,
      status: 'Actif',
    },
    {
      id: 2,
      titre: 'Community Manager',
      duree: '2 mois',
      dateDebut: '2024-04-01',
      domaine: 'Marketing',
      candidats: 8,
      status: 'En attente',
    },
    {
      id: 3,
      titre: 'Data Analyst',
      duree: '4 mois',
      dateDebut: '2024-05-10',
      domaine: 'Analyse',
      candidats: 5,
      status: 'Actif',
    },
  ]);

  const [showModalAjout, setShowModalAjout] = useState(false);
  const [newStage, setNewStage] = useState({
    titre: '',
    duree: '',
    dateDebut: '',
    domaine: '',
  });

  const totalStages = stages.length;
  const stagesActifs = stages.filter(s => s.status === 'Actif').length;
  const totalCandidats = stages.reduce((acc, s) => acc + s.candidats, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStage(prev => ({ ...prev, [name]: value }));
  };

  const handleAjouterStage = (e) => {
    e.preventDefault();
    if (newStage.titre && newStage.duree && newStage.dateDebut && newStage.domaine) {
      const stage = {
        id: stages.length + 1,
        ...newStage,
        candidats: 0,
        status: 'En attente',
      };
      setStages([...stages, stage]);
      setNewStage({ titre: '', duree: '', dateDebut: '', domaine: '' });
      setShowModalAjout(false);
      alert('Stage ajouté avec succès !');
    }
  };

  const handleSupprimerStage = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce stage ?')) {
      setStages(stages.filter(s => s.id !== id));
    }
  };

  const getStatusColor = (status) => {
    return status === 'Actif' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
  };

  const getStatusIcon = (status) => {
    return status === 'Actif' ? <CheckCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />;
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-24">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* En-tête avec titre et bouton d'ajout */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">
                Tableau de bord Entreprise
              </h1>
              <p className="text-gray-600">Gérez vos offres de stage et suivez les candidatures</p>
            </div>
            <button
              onClick={() => setShowModalAjout(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Plus className="w-5 h-5" />
              Ajouter un stage
            </button>
          </div>

          {/* Cartes de statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Carte stages totaux */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-indigo-600">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Stages publiés</p>
                  <h2 className="text-4xl font-bold text-gray-800 mt-2">{totalStages}</h2>
                </div>
                <Briefcase className="w-12 h-12 text-indigo-600 opacity-20" />
              </div>
            </div>

            {/* Carte stages actifs */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-600">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Stages actifs</p>
                  <h2 className="text-4xl font-bold text-gray-800 mt-2">{stagesActifs}</h2>
                </div>
                <CheckCircle className="w-12 h-12 text-green-600 opacity-20" />
              </div>
            </div>

            {/* Carte candidatures */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-purple-600">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Candidatures reçues</p>
                  <h2 className="text-4xl font-bold text-gray-800 mt-2">{totalCandidats}</h2>
                </div>
                <Users className="w-12 h-12 text-purple-600 opacity-20" />
              </div>
            </div>
          </div>

          {/* Liste des stages */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-indigo-600" />
                Mes offres de stage
              </h3>
            </div>

            {stages.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Titre</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Domaine</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Durée</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date de début</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Candidats</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Statut</th>
                      <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stages.map((stage, idx) => (
                      <tr key={stage.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{stage.titre}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{stage.domaine}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{stage.duree}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{stage.dateDebut}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                            <Users className="w-3 h-3" />
                            {stage.candidats}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(stage.status)}`}>
                            {getStatusIcon(stage.status)}
                            {stage.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-center">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              title="Voir les candidatures"
                              className="p-2 hover:bg-blue-100 text-blue-600 rounded-lg transition"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              title="Modifier"
                              className="p-2 hover:bg-yellow-100 text-yellow-600 rounded-lg transition"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleSupprimerStage(stage.id)}
                              title="Supprimer"
                              className="p-2 hover:bg-red-100 text-red-600 rounded-lg transition"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-12 text-center">
                <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Aucun stage publié. Commencez par en ajouter un !</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Modal d'ajout de stage */}
      {showModalAjout && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 pt-24 px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-screen overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold">Ajouter un stage</h2>
              <button
                onClick={() => setShowModalAjout(false)}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAjouterStage} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Titre du stage</label>
                <input
                  type="text"
                  name="titre"
                  value={newStage.titre}
                  onChange={handleInputChange}
                  placeholder="ex: Développeur Python"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Domaine</label>
                <select
                  name="domaine"
                  value={newStage.domaine}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                >
                  <option value="">Sélectionner un domaine</option>
                  <option value="Informatique">Informatique</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Analyse">Analyse</option>
                  <option value="Ressources Humaines">Ressources Humaines</option>
                  <option value="Finance">Finance</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Durée</label>
                <input
                  type="text"
                  name="duree"
                  value={newStage.duree}
                  onChange={handleInputChange}
                  placeholder="ex: 3 mois"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date de début</label>
                <input
                  type="date"
                  name="dateDebut"
                  value={newStage.dateDebut}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModalAjout(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
