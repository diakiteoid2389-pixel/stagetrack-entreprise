function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          StageTrack
        </h1>

        <nav className="hidden md:flex space-x-8">
          <a href="#Fonctionnalités" className="text-gray-700 hover:text-indigo-600 transition">Fonctionnalités</a>
          <a href="#Acteurs" className="text-gray-700 hover:text-indigo-600 transition">Acteurs</a>
          <a href="#Processus" className="text-gray-700 hover:text-indigo-600 transition">Processus</a>
          <a href="#Contacts" className="text-gray-700 hover:text-indigo-600 transition">Contacts</a>
        </nav>

        <button
          onClick={() => window.location.href = '/LoginForm'}
          className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition font-medium"
        >
          Se connecter
        </button>
      </div>
    </header>
  );
}

export default Header;