'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product, formatPrice, generateWhatsAppLink } from '@/data/products';
import { ShoppingCart, MessageCircle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card group">
      {/* Image */}
      <Link href={`/product/${product.id}`}>
        <div className="relative h-64 bg-gray-100 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {product.featured && (
            <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              FEATURED
            </div>
          )}
          {!product.inStock && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              OUT OF STOCK
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <div className="text-xs text-primary-600 font-semibold uppercase tracking-wide mb-2">
          {product.category}
        </div>
        
        <Link href={`/product/${product.id}`}>
          <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-primary-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-gradient">
            {formatPrice(product.price)}
          </div>
          {product.inStock ? (
            <span className="text-green-600 text-sm font-semibold">In Stock</span>
          ) : (
            <span className="text-red-600 text-sm font-semibold">Out of Stock</span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link
            href={`/product/${product.id}`}
            className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:bg-primary-700 transition-all duration-300 hover:shadow-lg"
          >
            View Details
          </Link>
          
          {product.inStock && (
            <a
              href={generateWhatsAppLink(product.name, 1, product.price)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-all duration-300 hover:shadow-lg flex items-center justify-center"
              title="Order on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
