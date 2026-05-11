# JVJ Computers - E-Commerce Website

A modern, responsive e-commerce website for JVJ Computers with WhatsApp ordering integration.

## Features

✅ **Frontend (Customer Side)**
- Beautiful, responsive homepage with hero section
- Product listing with advanced filtering (category, price, search)
- Detailed product pages with specifications
- Categories page for easy navigation
- About page with company information
- Contact page with integrated contact form
- Mobile-optimized with floating WhatsApp button
- Professional UI with animations and smooth transitions

✅ **WhatsApp Integration**
- Direct "Order on WhatsApp" buttons on all products
- Pre-filled messages with product details, quantity, and price
- Contact form submissions via WhatsApp
- Sticky WhatsApp button for easy access

✅ **Product Management**
- 30+ products across 4 categories (Laptops, Desktops, Accessories, Repairs & Services)
- Featured products section
- Stock status tracking
- Rich product specifications
- High-quality product images

✅ **Performance & SEO**
- Next.js 14 for optimal performance
- SEO-friendly meta tags
- Fast loading with optimized images
- Mobile-first responsive design
- Smooth animations and transitions

## Tech Stack

- **Framework:** Next.js 14 (React)
- **Styling:** Tailwind CSS
- **TypeScript:** For type safety
- **Icons:** Lucide React
- **Deployment:** Vercel

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open http://localhost:3000 in your browser

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New Project"
3. Import this repository from GitHub
4. Vercel will auto-detect Next.js configuration
5. Click "Deploy"
6. Your site will be live in minutes!

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts to complete deployment

## Adding Product Images

Your product images should be organized in the `public/images` directory with the following structure:

```
public/
└── images/
    ├── laptops/
    │   ├── dell-latitude-5420.jpg
    │   ├── hp-elitebook-840.jpg
    │   ├── lenovo-thinkpad-x1.jpg
    │   ├── asus-vivobook-15.jpg
    │   ├── macbook-air-m2.jpg
    │   └── acer-aspire-5.jpg
    ├── desktops/
    │   ├── dell-optiplex-7090.jpg
    │   ├── hp-prodesk-600.jpg
    │   ├── gaming-pc-custom.jpg
    │   └── lenovo-thinkcentre-m90.jpg
    ├── accessories/
    │   ├── logitech-mx-master-3s.jpg
    │   ├── mechanical-keyboard-rgb.jpg
    │   ├── usb-c-hub.jpg
    │   ├── external-ssd-1tb.jpg
    │   ├── webcam-1080p.jpg
    │   ├── laptop-cooling-pad.jpg
    │   ├── wireless-combo.jpg
    │   └── monitor-24-fhd.jpg
    └── services/
        ├── screen-replacement.jpg
        ├── keyboard-replacement.jpg
        ├── virus-removal.jpg
        ├── data-recovery.jpg
        ├── hardware-upgrade.jpg
        └── laptop-cleaning.jpg
```

### Image Guidelines:

1. **Format:** Use JPG for photographs, PNG for graphics
2. **Size:** Recommended 800x800px minimum
3. **Aspect Ratio:** Keep consistent (1:1 or 4:3)
4. **File Size:** Optimize to under 200KB per image
5. **Naming:** Use lowercase with hyphens (e.g., `dell-latitude-5420.jpg`)

### Steps to Add Images:

1. **Create the directory structure** in `public/images/` (if not exists)
2. **Crop and resize** your images to be uniform (recommended: 1000x1000px)
3. **Optimize images** using tools like:
   - TinyPNG (https://tinypng.com)
   - Squoosh (https://squoosh.app)
   - ImageOptim (for Mac)
4. **Place images** in their respective category folders
5. **Ensure filenames match** the ones defined in `data/products.ts`

### Quick Image Setup:

```bash
# Create image directories
mkdir -p public/images/laptops
mkdir -p public/images/desktops
mkdir -p public/images/accessories
mkdir -p public/images/services

# Copy your images to the appropriate folders
# Example:
# cp ~/Downloads/dell-laptop.jpg public/images/laptops/dell-latitude-5420.jpg
```

## Customization

### Update Contact Information

Edit `data/products.ts` and update the `contactInfo` object:

```typescript
export const contactInfo = {
  phone: '+256701188229',
  email: 'namusokejane063@gmail.com',
  whatsappNumber: '256701188229',
  // ... other fields
};
```

### Add/Edit Products

Edit `data/products.ts` and add to the `products` array:

```typescript
{
  id: 'laptop-007',
  name: 'Your Product Name',
  category: 'laptops',
  price: 2000000,
  image: '/images/laptops/your-product.jpg',
  description: 'Product description',
  specifications: ['Spec 1', 'Spec 2'],
  inStock: true,
  featured: false
}
```

### Modify Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: { /* your colors */ },
  accent: { /* your colors */ }
}
```

## Project Structure

```
jvj-computers/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── shop/              # Shop page
│   ├── product/[id]/      # Product detail pages
│   ├── categories/        # Categories page
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/            # Reusable components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer
│   └── ProductCard.tsx   # Product card component
├── data/                 # Data and configuration
│   └── products.ts       # Products and categories data
├── public/               # Static files
│   └── images/          # Product images
└── package.json         # Dependencies

```

## Support

For questions or support:
- **WhatsApp:** +256 701 188229
- **Email:** namusokejane063@gmail.com

## License

© 2024 JVJ Computers. All rights reserved.
