import React from 'react';

const Check = () => {
  return (
    <div className="my-8 mx-auto max-w-4xl">
      <div className="relative w-full h-64 rounded-lg overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('/path-to-your-image.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Prêt à commander un poster unique pour ta moto ?
          </h2>
          <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition">
            Commander mon poster →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Check;
