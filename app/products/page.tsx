"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProductShow: React.FC = () => {
  const [formData, setFormData] = useState({
    surname: '',
    cylinder: '',
    carburetor: '',
    exhaust: '',
    ignition: '',
    crankshaft: '',
    cycle: '',
    sponsor: '',
    promoCode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Position states for 3D effect
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });
  const [lastRotation, setLastRotation] = useState({ rotateX: 0, rotateY: 0 });

// Function to handle mouse movement over the image
const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const { offsetWidth: width, offsetHeight: height } = e.currentTarget;
  const { offsetX: x, offsetY: y } = e.nativeEvent;
  const rotateX = ((y / height) - 0.5) * 30; // Augmente l'intensité
  const rotateY = ((x / width) - 0.5) * -30; // Augmente l'intensité
  setRotation({ rotateX, rotateY });
};


  // Function to handle mouse leaving the image area
  const handleMouseLeave = () => {
    setLastRotation(rotation); // Memorize the last position
  };

  return (
    <div className="w-full min-h-screen mx-auto p-8 bg-white rounded-lg shadow-md grid grid-cols-3 gap-8">
      {/* Left Column - Product Information */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">Moyen Format</h1>
        <p className="text-gray-500 text-lg">30 × 45 cm</p>
        <p className="text-2xl font-semibold mt-4">109,99 €</p>
        <p className="text-md text-gray-500 mt-2">
          Notre poster de taille moyenne trouve l’équilibre parfait entre présence et discrétion...
        </p>
      </div>

      {/* Middle Column - Image with 3D Hover Effect */}
      <motion.div 
        className="flex flex-col items-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: "1000px" }}
        animate={{
          rotateX: rotation.rotateX || lastRotation.rotateX,
          rotateY: rotation.rotateY || lastRotation.rotateY,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        <Image
          src="/rose.jpg" // Update with actual image path
          alt="Poster Example"
          width={400} // Replace with actual width
          height={600} // Replace with actual height
          className="w-full h-auto rounded shadow-md"
        />
      </motion.div>

      {/* Right Column - Finish Selection and Form */}
      <div>
        {/* Finish selection */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Choisissez votre finition *</label>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((finish, index) => (
              <Image
                key={index}
                src={`/path-to-finish-image-${finish}.jpg`} // Replace with actual finish images
                alt={`Finish ${finish}`}
                width={100} // Replace with actual width
                height={100} // Replace with actual height
                className="w-full h-24 object-cover rounded cursor-pointer border border-gray-300 hover:border-black"
              />
            ))}
          </div>
        </div>

        {/* Form fields in three columns */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Surnom', name: 'surname', required: true },
            { label: 'Cylindre', name: 'cylinder', required: true },
            { label: 'Carburateur', name: 'carburetor', required: true },
            { label: 'Échappement', name: 'exhaust', required: true },
            { label: 'Allumage', name: 'ignition', required: true },
            { label: 'Vilebrequin', name: 'crankshaft', required: true },
            { label: 'Cycle', name: 'cycle', required: true },
            { label: 'Sponsor (optionnel)', name: 'sponsor', required: false },
            { label: 'Code Promo (optionnel)', name: 'promoCode', required: false },
          ].map(({ label, name, required }) => (
            <div key={name} className="col-span-1">
              <label className="block text-gray-700 font-semibold" htmlFor={name}>
                {label} {required && '*'}
              </label>
              <input
                type="text"
                id={name}
                name={name}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder={`Enter ${label.toLowerCase()}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShow;
