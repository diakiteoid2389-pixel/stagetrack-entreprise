// src/pages/Notifications.jsx
import { Bell, CheckCircle, X, Clock, User, FileText } from 'lucide-react';
import { useState } from 'react';
import HeaderEntreprise from '../components/HeaderEntreprise';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'candidature',
      title: 'Nouvelle candidature reçue',
      message: 'Marie Dupont a postulé pour le poste de Développeur Frontend React',
      date: '2024-03-15 10:30',
      read: false,
      icon: User,
    },
    {
      id: 2,
      type: 'system',
      title: 'Stage expiré',
      message: 'Le stage "Community Manager" a expiré hier',
      date: '2024-03-14 16:45',
      read: false,
      icon: Clock,
    },
    {
      id: 3,
      type: 'publication',
      title: 'Publication approuvée',
      message: 'Votre offre "Data Analyst" a été publiée avec succès',
      date: '2024-03-13 09:15',
      read: true,
      icon: FileText,
    },
    {
      id: 4,
      type: 'candidature',
      title: 'Candidature mise à jour',
      message: 'Pierre Martin a mis à jour son CV pour le poste de Community Manager',
      date: '2024-03-12 14:20',
      read: true,
      icon: User,
    },
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'candidature':
        return 'bg-blue-100 text-blue-800';
      case 'system':
        return 'bg-yellow-100 text-yellow-800';
      case 'publication':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <>
      <HeaderEntreprise />
      <Sidebar />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-24 md:ml-64">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">
                  Notifications
                </h1>
                <p className="text-gray-600">
                  {unreadCount > 0
                    ? `Vous avez ${unreadCount} notification${unreadCount > 1 ? 's' : ''} non lue${unreadCount > 1 ? 's' : ''}`
                    : 'Toutes vos notifications ont été lues'
                  }
                </p>
              </div>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  <CheckCircle className="w-5 h-5" />
                  Tout marquer comme lu
                </button>
              )}
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Total</p>
                  <h3 className="text-3xl font-bold text-gray-800">{notifications.length}</h3>
                </div>
                <Bell className="w-10 h-10 text-blue-600 opacity-20" />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Non lues</p>
                  <h3 className="text-3xl font-bold text-red-600">{unreadCount}</h3>
                </div>
                <Bell className="w-10 h-10 text-red-600 opacity-20" />
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Aujourd'hui</p>
                  <h3 className="text-3xl font-bold text-green-600">
                    {notifications.filter(n => n.date.startsWith('2024-03-15')).length}
                  </h3>
                </div>
                <CheckCircle className="w-10 h-10 text-green-600 opacity-20" />
              </div>
            </div>
          </div>

          {/* Liste des notifications */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Bell className="w-6 h-6 text-indigo-600" />
                Toutes les notifications
              </h3>
            </div>

            <div className="divide-y divide-gray-200">
              {notifications.length > 0 ? (
                notifications.map((notification) => {
                  const Icon = notification.icon;
                  return (
                    <div
                      key={notification.id}
                      className={`p-6 hover:bg-gray-50 transition-colors ${
                        !notification.read ? 'bg-blue-50/50 border-l-4 border-blue-500' : ''
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-full ${getTypeColor(notification.type)}`}>
                          <Icon className="w-5 h-5" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h4 className={`text-lg font-semibold ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                                {notification.title}
                              </h4>
                              <p className={`mt-1 ${!notification.read ? 'text-gray-700' : 'text-gray-600'}`}>
                                {notification.message}
                              </p>
                              <p className="text-sm text-gray-500 mt-2">{notification.date}</p>
                            </div>

                            <div className="flex items-center gap-2">
                              {!notification.read && (
                                <button
                                  onClick={() => markAsRead(notification.id)}
                                  className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                                  title="Marquer comme lu"
                                >
                                  <CheckCircle className="w-4 h-4" />
                                </button>
                              )}
                              <button
                                onClick={() => deleteNotification(notification.id)}
                                className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                                title="Supprimer"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="p-12 text-center">
                  <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Aucune notification pour le moment</p>
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
