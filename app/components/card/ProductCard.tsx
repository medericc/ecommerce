// components/ProductCard.tsx
import React from 'react';

type ProductCardProps = {
  imageSrc: string;
  title: string;
  price: string;
  size: string;
  finishes: number;
};

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, title, price, size, finishes }) => {
  return (
    <div className="relative group max-w-xs mx-auto bg-white rounded-lg overflow-hidden shadow-md">
      {/* Hover image that takes full space */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110 group-hover:absolute group-hover:inset-0"
        />
      </div>

      {/* Text content */}
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-500">{size}</p>
        <p className="mt-1 text-lg font-semibold">{price}</p>
        <p className="text-gray-400">Finitions: {finishes}</p>
      </div>
    </div>
  );
};

export default ProductCard;
