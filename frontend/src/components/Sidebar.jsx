// src/components/Sidebar.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Home, FileText, BarChart3, User, Wrench, Mail, Bell, Settings, LogOut, Users, UserCheck } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Accueil', icon: Home, href: '/dashboard' },
    { label: 'Publication', icon: FileText, href: '/dashboard/publication' },
    { label: 'Candidatures', icon: Users, href: '/dashboard/candidatures' },
    { label: 'Stagiaires', icon: UserCheck, href: '/dashboard/stagiaires' },
    { label: 'Analyse', icon: BarChart3, href: '/dashboard/analyse' },
    { label: 'Notifications', icon: Bell, href: '/dashboard/notifications', hasNotification: true },
    { label: 'Paramètres', icon: Settings, href: '/dashboard/parametres' },
    { label: 'Profil', icon: User, href: '/dashboard/profil' },
    { label: 'Service', icon: Wrench, href: '/dashboard/service' },
    { label: 'Contact', icon: Mail, href: '/dashboard/contact' },
  ];

  const handleLogout = () => {
    // Ici vous pouvez ajouter la logique de déconnexion (clear localStorage, etc.)
    // Pour l'instant, on redirige simplement vers la page de connexion
    navigate('/login');
  };

  return (
    <>
      {/* Sidebar Desktop */}
      <aside className="hidden md:fixed md:left-0 md:top-20 md:w-64 md:h-[calc(100vh-80px)] md:bg-gradient-to-b md:from-gray-900 md:to-gray-800 md:flex md:flex-col md:shadow-xl md:z-40">
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <ul className="space-y-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-200 hover:bg-indigo-600 hover:text-white transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{item.label}</span>
                    {item.hasNotification && (
                      <span className="ml-auto w-2 h-2 bg-red-500 rounded-full"></span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout button - seul à la fin */}
        <div className="px-4 py-3 border-t border-gray-700">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Sidebar Mobile - Burger Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-50 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Sidebar Panel */}
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setIsOpen(false)}>
            <div
              className="fixed left-0 top-0 w-64 h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex-1 px-4 py-6 overflow-y-auto">
                <ul className="space-y-1.5">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-200 hover:bg-indigo-600 hover:text-white transition-all duration-300 group"
                        >
                          <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                          <span className="font-medium">{item.label}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Logout button - seul à la fin */}
              <div className="px-4 py-3 border-t border-gray-700">
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Déconnexion
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}