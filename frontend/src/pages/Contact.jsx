// src/pages/Contact.jsx
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import HeaderEntreprise from '../components/HeaderEntreprise';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message envoyé:', formData);
    alert('Votre message a été envoyé. Nous vous répondrons bientôt !');
    setFormData({ nom: '', email: '', sujet: '', message: '' });
  };

  return (
    <>
      <HeaderEntreprise />
      <Sidebar />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-24 md:ml-64">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">
              Nous Contacter
            </h1>
            <p className="text-gray-600">Une question ? Nous sommes là pour vous aider</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informations de contact */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Informations</h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <a href="mailto:contact@stagetrack.com" className="text-indigo-600 hover:text-indigo-700">
                        contact@stagetrack.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Téléphone</p>
                      <a href="tel:+33123456789" className="text-indigo-600 hover:text-indigo-700">
                        +33 1 23 45 67 89
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Adresse</p>
                      <p className="text-gray-600">123 Rue de l'Innovation<br />75000 Paris, France</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Formulaire de Contact</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      placeholder="Votre nom complet"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre.email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                    <input
                      type="text"
                      name="sujet"
                      value={formData.sujet}
                      onChange={handleChange}
                      placeholder="ex: Demande d'assistance"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre demande en détail..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      rows="6"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Send className="w-5 h-5" />
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
