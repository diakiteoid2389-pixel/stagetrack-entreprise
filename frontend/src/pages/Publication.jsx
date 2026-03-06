// src/pages/Publication.jsx
import { Plus, FileText, Calendar, Eye, Edit2, Trash2 } from 'lucide-react';
import { useState } from 'react';
import HeaderEntreprise from '../components/HeaderEntreprise';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function Publication() {
  const [publications, setPublications] = useState([
    {
      id: 1,
      titre: 'Nouvelle offre: Développeur React Senior',
      date: '2024-03-10',
      statut: 'Publiée',
      vues: 145,
    },
    {
      id: 2,
      titre: 'Stage: Community Manager 2024',
      date: '2024-03-05',
      statut: 'Brouillon',
      vues: 0,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    titre: '',
    description: '',
    duree: '',
    dateDebut: '',
    dateFin: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.titre && formData.description && formData.duree && formData.dateDebut && formData.dateFin) {
      const newPublication = {
        id: publications.length + 1,
        titre: formData.titre,
        date: new Date().toISOString().split('T')[0],
        statut: 'Brouillon',
        vues: 0,
      };
      setPublications([...publications, newPublication]);
      setFormData({
        titre: '',
        description: '',
        duree: '',
        dateDebut: '',
        dateFin: '',
      });
      setShowModal(false);
      alert('Publication créée avec succès !');
    }
  };

  const handleCancel = () => {
    setFormData({
      titre: '',
      description: '',
      duree: '',
      dateDebut: '',
      dateFin: '',
    });
    setShowModal(false);
  };

  return (
    <>
      <HeaderEntreprise />
      <Sidebar />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-24 md:ml-64">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">
                Publications
              </h1>
              <p className="text-gray-600">Gérez vos publications d'offres de stage</p>
            </div>
            <button 
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Plus className="w-5 h-5" />
              Publier Stage
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {publications.map((pub) => (
              <div key={pub.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{pub.titre}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {pub.date}
                      </span>
                      <span className={`px-3 py-1 rounded-full font-medium ${pub.statut === 'Publiée' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {pub.statut}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {pub.vues} vues
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-blue-100 text-blue-600 rounded-lg transition">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-red-100 text-red-600 rounded-lg transition">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* Modal de publication */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 pt-24 px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold">Publier un stage</h2>
              <button
                onClick={handleCancel}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Titre du stage</label>
                <input
                  type="text"
                  name="titre"
                  value={formData.titre}
                  onChange={handleInputChange}
                  placeholder="ex: Développeur Frontend React"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Décrivez le stage, les missions, les compétences requises..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  rows="4"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Durée</label>
                <input
                  type="text"
                  name="duree"
                  value={formData.duree}
                  onChange={handleInputChange}
                  placeholder="ex: 3 mois, 6 mois"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date de début</label>
                  <input
                    type="date"
                    name="dateDebut"
                    value={formData.dateDebut}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date de fin</label>
                  <input
                    type="date"
                    name="dateFin"
                    value={formData.dateFin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-6">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition"
                >
                  Valider
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
