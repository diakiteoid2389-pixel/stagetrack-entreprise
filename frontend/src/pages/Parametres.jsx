// src/pages/Parametres.jsx
import { Settings, Save, Bell, Shield, User, Mail, Lock, Globe } from 'lucide-react';
import { useState } from 'react';
import HeaderEntreprise from '../components/HeaderEntreprise';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function Parametres() {
  const [settings, setSettings] = useState({
    // Notifications
    emailNotifications: true,
    pushNotifications: false,
    candidatureNotifications: true,
    systemNotifications: true,

    // Sécurité
    twoFactorAuth: false,
    sessionTimeout: '30',

    // Profil
    language: 'fr',
    timezone: 'Europe/Paris',
    dateFormat: 'DD/MM/YYYY',

    // Confidentialité
    profileVisibility: 'private',
    dataSharing: false,
  });

  const [activeTab, setActiveTab] = useState('notifications');

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    console.log('Paramètres sauvegardés:', settings);
    alert('Paramètres sauvegardés avec succès !');
  };

  const tabs = [
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Sécurité', icon: Shield },
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'privacy', label: 'Confidentialité', icon: Lock },
  ];

  return (
    <>
      <HeaderEntreprise />
      <Sidebar />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-24 md:ml-64">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">
              Paramètres
            </h1>
            <p className="text-gray-600">Gérez vos préférences et paramètres du compte</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="flex">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Notifications */}
              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Préférences de notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-800">Notifications par email</h4>
                          <p className="text-sm text-gray-600">Recevoir les notifications importantes par email</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.emailNotifications}
                            onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-800">Notifications push</h4>
                          <p className="text-sm text-gray-600">Recevoir les notifications en temps réel</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.pushNotifications}
                            onChange={(e) => handleSettingChange('pushNotifications', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-800">Nouvelles candidatures</h4>
                          <p className="text-sm text-gray-600">Être notifié des nouvelles candidatures</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.candidatureNotifications}
                            onChange={(e) => handleSettingChange('candidatureNotifications', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-800">Notifications système</h4>
                          <p className="text-sm text-gray-600">Mises à jour et maintenance du système</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.systemNotifications}
                            onChange={(e) => handleSettingChange('systemNotifications', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Sécurité */}
              {activeTab === 'security' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Paramètres de sécurité</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-800">Authentification à deux facteurs</h4>
                          <p className="text-sm text-gray-600">Ajouter une couche de sécurité supplémentaire</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.twoFactorAuth}
                            onChange={(e) => handleSettingChange('twoFactorAuth', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                        </label>
                      </div>

                      <div className="p-4 border border-gray-200 rounded-lg">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Timeout de session (minutes)
                        </label>
                        <select
                          value={settings.sessionTimeout}
                          onChange={(e) => handleSettingChange('sessionTimeout', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        >
                          <option value="15">15 minutes</option>
                          <option value="30">30 minutes</option>
                          <option value="60">1 heure</option>
                          <option value="240">4 heures</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Profil */}
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Paramètres de profil</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Langue</label>
                        <select
                          value={settings.language}
                          onChange={(e) => handleSettingChange('language', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        >
                          <option value="fr">Français</option>
                          <option value="en">English</option>
                          <option value="es">Español</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Fuseau horaire</label>
                        <select
                          value={settings.timezone}
                          onChange={(e) => handleSettingChange('timezone', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        >
                          <option value="Europe/Paris">Europe/Paris (UTC+1)</option>
                          <option value="Europe/London">Europe/London (UTC+0)</option>
                          <option value="America/New_York">America/New_York (UTC-5)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Format de date</label>
                        <select
                          value={settings.dateFormat}
                          onChange={(e) => handleSettingChange('dateFormat', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        >
                          <option value="DD/MM/YYYY">JJ/MM/AAAA</option>
                          <option value="MM/DD/YYYY">MM/JJ/AAAA</option>
                          <option value="YYYY-MM-DD">AAAA-MM-JJ</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Confidentialité */}
              {activeTab === 'privacy' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Paramètres de confidentialité</h3>
                    <div className="space-y-4">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Visibilité du profil
                        </label>
                        <select
                          value={settings.profileVisibility}
                          onChange={(e) => handleSettingChange('profileVisibility', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        >
                          <option value="public">Public</option>
                          <option value="private">Privé</option>
                          <option value="entreprises">Entreprises uniquement</option>
                        </select>
                      </div>

                      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-800">Partage de données</h4>
                          <p className="text-sm text-gray-600">Autoriser l'utilisation de vos données pour améliorer le service</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={settings.dataSharing}
                            onChange={(e) => handleSettingChange('dataSharing', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bouton sauvegarder */}
              <div className="flex justify-end pt-6 border-t border-gray-200">
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  <Save className="w-5 h-5" />
                  Sauvegarder les modifications
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
