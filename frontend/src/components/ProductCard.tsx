"use client";

import { useState } from "react";
import { Product } from "@/types";
import { useCartStore } from "@/lib/store";
import toast from "react-hot-toast";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast.success(`${product.name} ajouté au panier`);
    setQuantity(1);
  };

  return (
    <div className="card overflow-hidden">
      {/* Image placeholder */}
      <div className="h-48 bg-linear-to-br from-primary to-primary-dark flex items-center justify-center">
        <span className="text-6xl">🐟</span>
      </div>

      {/* Contenu */}
      <div className="p-6">
        {/* Badge catégorie */}
        <div className="mb-2">
          <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Nom */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>

        {/* Description */}
        {product.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Prix */}
        <div className="mb-4">
          <span className="text-2xl font-bold text-primary">
            {Number(product.price).toFixed(2)} €
          </span>
          <span className="text-sm text-gray-500 ml-1">/ unité</span>
        </div>

        {/* Disponibilité */}
        <div className="mb-4">
          {product.inStock ? (
            <span className="text-green-600 text-sm font-medium flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              En stock
            </span>
          ) : (
            <span className="text-red-600 text-sm font-medium">
              Rupture de stock
            </span>
          )}
        </div>

        {/* Quantité et Ajout panier */}
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-2 hover:bg-gray-100 transition"
            >
              -
            </button>
            <span className="px-4 py-2 font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-2 hover:bg-gray-100 transition"
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="flex-1 bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}
