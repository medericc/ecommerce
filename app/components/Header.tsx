const Header = () => {
    return (
      <header className="flex justify-between items-center p-4 shadow-md bg-white">
        {/* Logo */}
        <div className="font-bold text-xl">ESSENTIALS FIFTY</div>
        
        {/* Navigation */}
        <nav className="flex space-x-6">
          <a href="#" className="text-gray-800 hover:text-black">Accueil</a>
          <a href="#" className="text-gray-800 hover:text-black">Semi - Perso</a>
          <a href="#" className="text-gray-800 hover:text-black">Sur Mesure</a>
          <a href="#" className="text-gray-800 hover:text-black">À propos</a>
        </nav>
  
        {/* Bouton Mon Compte */}
        <button className="bg-black text-white px-4 py-2 rounded">Mon compte</button>
      </header>
    );
  };
  
  export default Header;
  