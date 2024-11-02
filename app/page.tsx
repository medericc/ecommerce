import Check from './components/check';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import PosterSection from './components/PosterSection';
import Product from './components/Product';


export default function Home() {
  return (
    <div>
     
      <HeroSection />
      <Product />
      <PosterSection />
      <Check />
      <Footer />
      {/* Autres sections ou composants spécifiques à la page d'accueil */}
    </div>
  );
}
