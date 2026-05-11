export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  specifications: string[];
  inStock: boolean;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: 'laptops',
    name: 'Laptops',
    description: 'High-performance laptops for work and gaming',
    icon: 'Laptop'
  },
  {
    id: 'desktops',
    name: 'Desktop Computers',
    description: 'Powerful desktop systems for every need',
    icon: 'Monitor'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Essential computer accessories and peripherals',
    icon: 'HardDrive'
  },
  {
    id: 'repairs',
    name: 'Repairs & Services',
    description: 'Professional repair and maintenance services',
    icon: 'Wrench'
  }
];

export const products: Product[] = [
  // Laptops
  {
    id: 'laptop-001',
    name: 'Dell Latitude 5420',
    category: 'laptops',
    price: 550000,
    image: '/images/laptops/dell-latitude-5420.jpg',
    description: 'Professional business laptop with powerful performance and long battery life.',
    specifications: [
      'Intel Core i5 11th Gen',
      '16GB RAM',
      '512GB SSD',
      '14" FHD Display',
      'Windows 11 Pro'
    ],
    inStock: true,
    featured: true
  },
  {
    id: 'laptop-004',
    name: 'ASUS VivoBook 15',
    category: 'laptops',
    price: 1800000,
    image: '/images/laptops/asus-vivobook-15.jpg',
    description: 'Affordable laptop perfect for students and everyday use.',
    specifications: [
      'Intel Core i5 10th Gen',
      '8GB RAM',
      '256GB SSD',
      '15.6" FHD Display',
      'Windows 11 Home'
    ],
    inStock: true
  },

  {
    id: 'laptop-003',
    name: 'Lenovo ThinkPad X1 Carbon',
    category: 'laptops',
    price: 900000,
    image: '/images/laptops/lenovo-thinkpad-x1.jpg',
    description: 'Ultra-lightweight laptop for professionals on the go.',
    specifications: [
      'Intel Core i7 11th Gen',
      '16GB RAM',
      '1TB SSD',
      '14" FHD Display',
      'Windows 11 Pro'
    ],
    inStock: true,
    featured: true
  },

  {
    id: 'laptop-006',
    name: 'Acer Aspire 5',
    category: 'laptops',
    price: 1600000,
    image: '/images/laptops/acer-aspire-5.jpg',
    description: 'Budget-friendly laptop with solid performance.',
    specifications: [
      'Intel Core i3 11th Gen',
      '8GB RAM',
      '256GB SSD',
      '15.6" FHD Display',
      'Windows 11 Home'
    ],
    inStock: true
  },

  

  // Desktops
  {
    id: 'desktop-001',
    name: 'Dell OptiPlex 7090',
    category: 'desktops',
    price: 1000000,
    image: '/images/desktops/dell-optiplex-7090.jpg',
    description: 'Reliable business desktop with powerful performance.',
    specifications: [
      'Intel Core i7 11th Gen',
      '16GB RAM',
      '512GB SSD',
      'Integrated Graphics',
      'Windows 11 Pro'
    ],
    inStock: true
  },

  // Accessories
  

  // Repairs & Services
  
];

export const contactInfo = {
  phone: '+256701188229',
  email: 'namusokejane063@gmail.com',
  whatsappNumber: '256701188229',
  address: 'Kampala, Uganda',
  businessHours: 'Mon - Sat: 9:00 AM - 6:00 PM',
  social: {
    facebook: 'https://facebook.com/jvjcomputers',
    instagram: 'https://instagram.com/jvjcomputers',
    twitter: 'https://twitter.com/jvjcomputers'
  }
};

// Helper function to format price
export const formatPrice = (price: number): string => {
  return `UGX ${price.toLocaleString()}`;
};

// Helper function to generate WhatsApp link
export const generateWhatsAppLink = (productName: string, quantity: number, price: number): string => {
  const message = `Hello JVJ Computers! I want to order:\n\nProduct: ${productName}\nQuantity: ${quantity}\nPrice: ${formatPrice(price * quantity)}\n\nPlease confirm availability.`;
  return `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
