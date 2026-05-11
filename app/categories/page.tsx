'use client';

import Link from 'next/link';
import { categories, products } from '@/data/products';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Laptop, Monitor, HardDrive, Wrench } from 'lucide-react';

export default function Categories() {
  const categoryIcons = {
    Laptop,
    Monitor,
    HardDrive,
    Wrench
  };

  const getProductCount = (categoryId: string) => {
    return products.filter(p => p.category === categoryId).length;
  };

  return (
    <>
      <Header />
      
      <main className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-display font-bold text-gray-900 mb-4">
              PRODUCT CATEGORIES
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our organized collection of computers, accessories, and services. Find exactly what you need quickly and easily.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => {
              const IconComponent = categoryIcons[category.icon as keyof typeof categoryIcons];
              const productCount = getProductCount(category.id);
              
              return (
                <Link
                  key={category.id}
                  href={`/shop?category=${category.id}`}
                  className="card group p-8 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="w-20 h-20 flex-shrink-0 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-primary-600">
                          {productCount} Products Available
                        </span>
                        <span className="text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                          Browse →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              CAN'T FIND WHAT YOU'RE LOOKING FOR?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team is here to help you find the perfect product. Contact us on WhatsApp for personalized recommendations and instant support.
            </p>
            <a
              href="https://wa.me/256701188229?text=Hello%20JVJ%20Computers!%20I%20need%20help%20finding%20a%20product."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-all duration-300 hover:shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
