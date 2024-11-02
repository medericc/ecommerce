"use client";
import React, { useState } from 'react';

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

      {/* Middle Column - Image */}
      <div className="flex flex-col items-center">
        <img
          src="/path-to-your-image.jpg" // Replace with actual image source
          alt="Poster Example"
          className="w-full h-auto rounded shadow-md"
        />
      </div>

      {/* Right Column - Finish Selection and Form */}
      <div>
        {/* Finish selection */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Choisissez votre finition *</label>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((finish, index) => (
              <img
                key={index}
                src={`/path-to-finish-image-${finish}.jpg`} // Replace with actual finish images
                alt={`Finish ${finish}`}
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
