"use client"
// components/PosterSection.tsx
import Image from 'next/image';
import { useEffect, useState } from 'react';
import trackmoto from './images/rose.jpg'; // Remplacez par le chemin de votre image
import betawr from './images/stella.jpg'; // Remplacez par le chemin de votre image
import loubike from './images/bleu.jpg'; // Remplacez par le chemin de votre image

export default function PosterSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-black text-white py-16 px-8">
      <div
        className={`text-center transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <h2 className="text-4xl font-bold mb-8">Une moto, un poster, une décoration unique !</h2>
      </div>

      <div
        className={`flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {/* Qualité d'impression */}
        <div className="bg-gray-800 p-6 rounded-lg text-center w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-2">Qualité d'impression</h3>
          <p className="text-gray-400">
            Nos posters métalliques offrent une qualité d'impression exceptionnelle avec des couleurs
            vives et des détails précis. Grâce à une technologie de pointe, chaque pièce est durable
            et résistante, garantissant une œuvre d'art qui dure dans le temps.
          </p>
        </div>

        {/* Personnalisation */}
        <div className="bg-gray-800 p-6 rounded-lg text-center w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-2">Personnalisation</h3>
          <p className="text-gray-400">
            Exprimez votre passion à travers un poster qui vous ressemble. La personnalisation n’a
            jamais été aussi simple et satisfaisante, rendant chaque poster unique pour chaque moto.
          </p>
        </div>

        {/* Livraison */}
        <div className="bg-gray-800 p-6 rounded-lg text-center w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-2">Livraison entre 14 et 21 jours</h3>
          <p className="text-gray-400">
            Une qualité d'impression exceptionnelle et une personnalisation simple se combinent pour
            rendre votre poster unique et incroyable. Ce processus minutieux, nécessitant entre 14 et
            21 jours, garantit un résultat à la hauteur de vos attentes.
          </p>
        </div>
      </div>

      <div
        className={`mt-12 flex justify-center space-x-6 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="relative w-60 h-80">
          <Image src={trackmoto} alt="TrackMoto" className="rounded-lg shadow-lg" />
        </div>
        <div className="relative w-60 h-80">
          <Image src={betawr} alt="Beta WR" className="rounded-lg shadow-lg" />
        </div>
        <div className="relative w-60 h-80">
          <Image src={loubike} alt="LouBike" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}
