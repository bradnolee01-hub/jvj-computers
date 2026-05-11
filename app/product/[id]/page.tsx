'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products, formatPrice, generateWhatsAppLink, Product } from '@/data/products';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Check, ShoppingCart, MessageCircle, Package, Shield, Clock, ArrowLeft } from 'lucide-react';

export default function ProductDetail() {
  const params = useParams();
  const productId = params.id as string;
  const product = products.find(p => p.id === productId);
  
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <>
        <Header />
        <main className="min-h-screen py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">Sorry, the product you're looking for doesn't exist.</p>
            <Link href="/shop" className="btn-primary">
              Back to Shop
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Related products (same category)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  return (
    <>
      <Header />
      
      <main className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/shop"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Shop
            </Link>
          </div>

          {/* Product Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div className="relative h-96 lg:h-auto bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {product.featured && (
                <div className="absolute top-6 left-6 bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  FEATURED
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              <div className="text-sm text-primary-600 font-semibold uppercase tracking-wide mb-2">
                {product.category}
              </div>
              
              <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl font-bold text-gradient">
                  {formatPrice(product.price)}
                </div>
                {product.inStock ? (
                  <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                    <Check className="w-4 h-4" />
                    In Stock
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold">
                    Out of Stock
                  </span>
                )}
              </div>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Specifications */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Specifications</h3>
                <ul className="space-y-3">
                  {product.specifications.map((spec, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity Selector */}
              {product.inStock && (
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => handleQuantityChange(quantity - 1)}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                        className="w-16 text-center border-x border-gray-300 py-2 focus:outline-none"
                        min="1"
                      />
                      <button
                        onClick={() => handleQuantityChange(quantity + 1)}
                        className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-gray-600">
                      Total: <span className="font-bold text-gray-900">{formatPrice(product.price * quantity)}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              {product.inStock && (
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href={generateWhatsAppLink(product.name, quantity, product.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-all duration-300 hover:shadow-lg"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Order on WhatsApp
                  </a>
                </div>
              )}

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                  <p className="text-xs text-gray-600 font-semibold">Quality Guaranteed</p>
                </div>
                <div className="text-center">
                  <Package className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                  <p className="text-xs text-gray-600 font-semibold">Fast Delivery</p>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                  <p className="text-xs text-gray-600 font-semibold">24/7 Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-20">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
                RELATED PRODUCTS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map(relatedProduct => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
