// pages/index.tsx
import ProductCard from './card/ProductCard';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard
          imageSrc="/path/to/image1.jpg"
          title="Petit format"
          price="69,99€"
          size="20 × 30cm"
          finishes={6}
        />
        <ProductCard
          imageSrc="/path/to/image2.jpg"
          title="Moyen format"
          price="109,99€"
          size="30 × 45cm"
          finishes={6}
        />
        <ProductCard
          imageSrc="/path/to/image3.jpg"
          title="Grand format"
          price="159,99€"
          size="40 × 60cm"
          finishes={6}
        />
        {/* Add more ProductCard components as needed */}
      </div>

      {/* New Section for the Overlay Effect */}
      <div className="mt-12 p-8 bg-gray-300 rounded-lg flex flex-col lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="flex-1 mb-6 lg:mb-0">
          <h2 className="text-2xl font-bold">100% Personnalisé</h2>
          <p className="text-xl mt-2 font-semibold text-gray-700">239,99€</p>
          <div className="mt-4 grid grid-cols-2 gap-4 text-gray-600">
            <div>
              <p className="font-bold">Taille</p>
              <p>40 × 60cm</p>
            </div>
            <div>
              <p className="font-bold">Finitions</p>
              <p>6</p>
            </div>
            <div>
              <p className="font-bold">Design</p>
              <p>Sur mesure</p>
            </div>
            <div>
              <p className="font-bold">Livraison</p>
              <p>14-21 jours</p>
            </div>
          </div>
          <button className="mt-6 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition">
            S'inscrire sur la liste d'attente →
          </button>
        </div>

        {/* Image Overlay Section */}
        <div className="relative w-60 h-80">
          <img
            src="/path/to/image4.jpg"
            alt="Main product image"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <img
            src="/path/to/image4.jpg"
            alt="Overlayed product image"
            className="absolute top-4 left-4 w-full h-full object-cover rounded-lg shadow-md opacity-80 transform rotate-3 scale-95"
          />
        </div>
      </div>

 {/* New Section for Order Process */}
 <div className="mt-12 p-8 bg-gray-100 rounded-lg flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          
          {/* Step 1: Choose Size */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold mb-4">1. Choisissez la taille de votre tableau</h3>
            <div className="flex justify-center space-x-6">
              <div className="w-20 h-20 border rounded-lg flex items-center justify-center text-gray-700">
                <p>30cm x 45cm</p>
              </div>
              <div className="w-24 h-24 border rounded-lg flex items-center justify-center text-gray-700">
                <p>45cm x 60cm</p>
              </div>
            </div>
          </div>

          {/* Step 2: Customize with Information */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold mb-4">2. Personnalisez avec vos informations</h3>
            <div className="grid grid-cols-2 gap-2">
              <button className="p-2 border rounded">Nom à afficher</button>
              <button className="p-2 border rounded">Code promo et Sponsor</button>
              <button className="p-2 border rounded">Image de moto</button>
              <button className="p-2 border rounded">Cylindre</button>
              <button className="p-2 border rounded">Carburateur</button>
              <button className="p-2 border rounded">Échappement</button>
              <button className="p-2 border rounded">Allumage</button>
            </div>
          </div>

          {/* Step 3: Validate and Order */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold mb-4">3. Validez et commandez votre tableau</h3>
            <p className="text-sm text-gray-700 mb-4">✓ Livraison estimée entre 14 et 21 jours</p>
            <div className="text-sm text-gray-600">
              <p>Recapitulatif de votre commande :</p>
              <p>Cylindre : XXX</p>
              <p>Carburateur : XXX</p>
              <p>Échappement : XXX</p>
              <p>Allumage : XXX</p>
            </div>
          </div>


          </div>
          </div>
    </div>
  );
}
