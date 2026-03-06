// src/pages/Profil.jsx
import { Mail, Phone, MapPin, Edit2, Save, X } from 'lucide-react';
import { useState } from 'react';
import HeaderEntreprise from '../components/HeaderEntreprise';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function Profil() {
  const [isEditing, setIsEditing] = useState(false);
  const [profil, setProfil] = useState({
    nomEntreprise: 'Tech Solutions SARL',
    secteur: 'Informatique et Services',
    email: 'contact@techsolutions.com',
    telephone: '+33 1 23 45 67 89',
    adresse: '123 Rue de l\'Innovation, 75000 Paris',
    description: 'Entreprise spécialisée dans le développement logiciel et les solutions web innovantes.',
    website: 'www.techsolutions.com',
    employes: 45,
  });

  const [editData, setEditData] = useState(profil);

  const handleSaveChanges = () => {
    setProfil(editData);
    setIsEditing(false);
  };

  return (
    <>
      <HeaderEntreprise />
      <Sidebar />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-24 md:ml-64">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">
              Profil Entreprise
            </h1>
            <p className="text-gray-600">Gérez les informations de votre entreprise</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold">{profil.nomEntreprise}</h2>
                  <p className="text-indigo-100 mt-2">{profil.secteur}</p>
                </div>
                <button
                  onClick={() => {
                    if (isEditing) {
                      setEditData(profil);
                      setIsEditing(false);
                    } else {
                      setIsEditing(true);
                    }
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                >
                  {isEditing ? <X className="w-4 h-4" /> : <Edit2 className="w-4 h-4" />}
                  {isEditing ? 'Annuler' : 'Modifier'}
                </button>
              </div>
            </div>

            <div className="p-8">
              {!isEditing ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-medium text-gray-800">{profil.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-600">Téléphone</p>
                        <p className="font-medium text-gray-800">{profil.telephone}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">Adresse</p>
                      <p className="font-medium text-gray-800">{profil.adresse}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">Description</p>
                    <p className="text-gray-800">{profil.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600">Site Web</p>
                      <p className="font-medium text-indigo-600">{profil.website}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Nombre d'employés</p>
                      <p className="font-medium text-gray-800">{profil.employes}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom de l'entreprise</label>
                    <input
                      type="text"
                      value={editData.nomEntreprise}
                      onChange={(e) => setEditData({...editData, nomEntreprise: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={editData.email}
                      onChange={(e) => setEditData({...editData, email: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                    <input
                      type="tel"
                      value={editData.telephone}
                      onChange={(e) => setEditData({...editData, telephone: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      value={editData.description}
                      onChange={(e) => setEditData({...editData, description: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      rows="4"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={handleSaveChanges}
                      className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition"
                    >
                      <Save className="w-4 h-4" />
                      Enregistrer
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
