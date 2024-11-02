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

  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { offsetWidth: width, offsetHeight: height } = e.currentTarget;
    const { offsetX: x, offsetY: y } = e.nativeEvent;
    const rotateX = ((y / height) - 0.5) * 30;
    const rotateY = ((x / width) - 0.5) * -30;
    setRotation({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setLastRotation(rotation);
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
          src="/rose.jpg"
          alt="Poster Example"
          width={400}
          height={600}
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
                src={`/path-to-finish-image-${finish}.jpg`}
                alt={`Finish ${finish}`}
                width={100}
                height={100}
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

        {/* Button to open similar images modal */}
        <button
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setIsModalOpen(true)}
        >
          Images similaires
        </button>
      </div>

   {/* Modal */}
   {isModalOpen && (
        <motion.div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-3/4 bg-white shadow-lg z-50 p-4 rounded-lg"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: "0%" }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          <div className="relative w-full h-full overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              &#10005;
            </button>
            <h2 className="text-2xl font-semibold mb-4">Images similaires</h2>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((image, index) => (
                <Image
                  key={index}
                  src={`/path-to-similar-image-${image}.jpg`} // Update with actual similar images
                  alt={`Similar Image ${image}`}
                  width={200}
                  height={150}
                  className="w-full h-auto object-cover rounded shadow"
                />
              ))}
            </div>
            {/* Pas intéressé button */}
            <button
              className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              onClick={() => setIsModalOpen(false)}
            >
              Pas intéressé
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProductShow;
