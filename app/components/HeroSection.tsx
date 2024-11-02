const HeroSection = () => {
    return (
      <section className="relative h-[400px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
        {/* Overlay avec dégradé */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
  
        {/* Contenu Texte et Bouton */}
        <div className="relative text-center text-white p-8">
          <h1 className="text-3xl md:text-5xl font-bold">Poster métallique personnalisable de ton 50CC</h1>
          <button className="mt-4 bg-white text-black px-6 py-2 rounded">Voir nos tableaux</button>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  