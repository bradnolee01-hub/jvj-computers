'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Users, Target, Heart, Shield, Zap } from 'lucide-react';

export default function About() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="gradient-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              ABOUT JVJ COMPUTERS
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your trusted partner for quality computers, laptops, and professional repair services in Uganda.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6 text-center">
                OUR STORY
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Welcome to JVJ Computers, where technology meets trust. Founded with a passion for 
                  providing quality computer solutions, we have grown to become one of Uganda's most 
                  reliable sources for laptops, desktop computers, accessories, and professional repair services.
                </p>
                <p>
                  Our journey began with a simple mission: to make quality technology accessible to 
                  everyone. We understand that in today's digital age, having the right computer equipment 
                  is essential for work, education, and entertainment. That's why we carefully curate our 
                  product selection to ensure you get the best value for your investment.
                </p>
                <p>
                  What sets us apart is our commitment to customer satisfaction. We don't just sell 
                  products; we build relationships. Our team of experienced technicians and sales 
                  professionals is always ready to guide you through your purchase decision and provide 
                  ongoing support long after your purchase.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-12 text-center">
              OUR VALUES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h3>
                <p className="text-gray-600">
                  We only stock genuine products from trusted brands, ensuring you get authentic quality every time.
                </p>
              </div>

              <div className="card p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Customer First</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We go above and beyond to ensure you have an excellent experience.
                </p>
              </div>

              <div className="card p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expertise</h3>
                <p className="text-gray-600">
                  Our team of certified technicians brings years of experience to every service and consultation.
                </p>
              </div>

              <div className="card p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency</h3>
                <p className="text-gray-600">
                  No hidden fees, no surprises. We believe in honest pricing and clear communication.
                </p>
              </div>

              <div className="card p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Service</h3>
                <p className="text-gray-600">
                  Quick turnaround times on repairs and efficient delivery of products to keep you productive.
                </p>
              </div>

              <div className="card p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
                <p className="text-gray-600">
                  We're proud to serve the Ugandan tech community and contribute to digital accessibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-12 text-center">
              WHAT WE OFFER
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Computer Sales</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Brand new and refurbished laptops</li>
                  <li>• Desktop computers for home and office</li>
                  <li>• Gaming PCs and workstations</li>
                  <li>• Accessories and peripherals</li>
                  <li>• Competitive pricing with warranties</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Repair Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Screen replacement and repairs</li>
                  <li>• Hardware upgrades (RAM, SSD, etc.)</li>
                  <li>• Virus and malware removal</li>
                  <li>• Data recovery services</li>
                  <li>• General maintenance and cleaning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 gradient-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              READY TO GET STARTED?
            </h2>
            <p className="text-xl mb-8">
              Experience the JVJ Computers difference today. Contact us for personalized recommendations and expert advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/256701188229"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-all duration-300 hover:shadow-2xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </a>
              <a
                href="/shop"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl"
              >
                Browse Products
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
