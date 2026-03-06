// src/components/Header.jsx
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Fonctionnalités', href: '#Fonctionnalités' },
  { label: 'Acteurs', href: '#Acteurs' },
  { label: 'Processus', href: '#Processus' },
  { label: 'Contacts', href: '#Contacts' },
  { label: 'Partenaires', href: '#Partenaires' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  // États du formulaire partenaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    domain: '',
    description: '',
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    // Ici tu pourras plus tard envoyer les données (fetch / axios vers ton API)
    console.log('Demande partenaire envoyée :', formData);

    // Option : message de succès + reset + fermeture
    alert('Votre demande a été envoyée ! Nous vous contacterons bientôt.');
    setFormData({ name: '', email: '', domain: '', description: '' });
    setPartnerModalOpen(false);
  };

  return (
    <>
      <header
        className={`
          fixed inset-x-0 top-0 z-50 transition-all duration-300
          ${isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-200/70'
            : 'bg-white/80 backdrop-blur-md border-b border-transparent'}
        `}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo */}
            <a
              href="/"
              className="
                text-2xl sm:text-3xl font-extrabold tracking-tight
                bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600
                bg-clip-text text-transparent hover:opacity-90 transition-opacity
              "
            >
              StageTrack
            </a>

            {/* Navigation desktop */}
            <nav className="hidden lg:flex lg:gap-x-10 xl:gap-x-12 items-center">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="
                    relative text-gray-700 font-medium transition-colors
                    hover:text-indigo-700 after:absolute after:-bottom-1 after:left-0
                    after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all
                    hover:after:w-full
                  "
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Actions + burger */}
            <div className="flex items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={() => setPartnerModalOpen(true)}
                className="
                  hidden md:inline-flex items-center px-5 py-2.5 text-sm font-semibold
                  rounded-full bg-purple-600 text-white shadow-sm
                  hover:bg-purple-700 focus-visible:outline focus-visible:outline-2
                  focus-visible:outline-offset-2 focus-visible:outline-purple-600
                  transition-all active:scale-95
                "
              >
                Devenir Partenaire
              </button>

              <a
                href="/login"
                className="
                  inline-flex items-center px-5 py-2.5 text-sm font-semibold
                  rounded-full bg-indigo-600 text-white shadow-sm
                  hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2
                  focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                  transition-all active:scale-95
                "
              >
                Se connecter
              </a>

              <button
                type="button"
                className="lg:hidden -mr-2.5 p-2.5 text-gray-700 hover:text-indigo-600 transition"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-400 ease-in-out
            ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="bg-white/95 backdrop-blur-lg border-b border-gray-200 px-5 py-6 space-y-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-base font-medium text-gray-800 hover:text-indigo-700 py-2 transition"
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            ))}

            <div className="pt-5 flex flex-col gap-4">
              <button
                onClick={() => {
                  setPartnerModalOpen(true);
                  closeMobileMenu();
                }}
                className="
                  flex justify-center py-3 px-6 rounded-full font-semibold
                  bg-purple-600 text-white hover:bg-purple-700 transition-colors
                  active:scale-95
                "
              >
                Devenir Partenaire
              </button>

              <a
                href="/login"
                className="
                  flex justify-center py-3 px-6 rounded-full font-semibold
                  border-2 border-indigo-600 text-indigo-700 hover:bg-indigo-50
                  transition-colors active:scale-95
                "
              >
                Se connecter
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* MODAL DEVENIR PARTENAIRE */}
      {partnerModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setPartnerModalOpen(false)} // clic extérieur → fermer
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()} // empêche la fermeture quand on clique dans le modal
          >
            {/* En-tête */}
            <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">Devenir Partenaire</h3>
              <button
                onClick={() => setPartnerModalOpen(false)}
                className="text-gray-500 hover:text-gray-800 transition"
                aria-label="Fermer"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Corps - Formulaire */}
            <form onSubmit={handlePartnerSubmit} className="p-6 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email professionnel
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
                  placeholder="contact@monentreprise.com"
                />
              </div>

              <div>
                <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-1">
                  Domaine d'activité
                </label>
                <input
                  id="domain"
                  name="domain"
                  type="text"
                  required
                  value={formData.domain}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
                  placeholder="Ex: Formation, Recrutement, Technologie, Agroalimentaire..."
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description de l'entreprise
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  required
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition resize-none"
                  placeholder="Présentez brièvement votre entreprise, vos activités, et ce que vous attendez d'un partenariat avec StageTrack..."
                />
              </div>

              {/* Boutons */}
              <div className="flex gap-4 pt-3">
                <button
                  type="button"
                  onClick={() => setPartnerModalOpen(false)}
                  className="flex-1 py-3 px-6 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 px-6 rounded-lg font-medium bg-purple-600 text-white hover:bg-purple-700 transition shadow-sm"
                >
                  Envoyer la demande
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}