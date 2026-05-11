# IMAGE SETUP GUIDE FOR JVJ COMPUTERS

## Required Images

You need to add product images for all items in your catalog. Below is the complete list of images needed.

## Directory Structure to Create

```
public/images/
├── laptops/
├── desktops/
├── accessories/
└── services/
```

## Complete Image List

### Laptops (6 images)
1. `dell-latitude-5420.jpg` - Dell Latitude 5420 laptop
2. `hp-elitebook-840.jpg` - HP EliteBook 840 G8 laptop
3. `lenovo-thinkpad-x1.jpg` - Lenovo ThinkPad X1 Carbon
4. `asus-vivobook-15.jpg` - ASUS VivoBook 15
5. `macbook-air-m2.jpg` - MacBook Air M2
6. `acer-aspire-5.jpg` - Acer Aspire 5

### Desktops (4 images)
1. `dell-optiplex-7090.jpg` - Dell OptiPlex 7090 desktop
2. `hp-prodesk-600.jpg` - HP ProDesk 600 G6
3. `gaming-pc-custom.jpg` - Custom Gaming PC
4. `lenovo-thinkcentre-m90.jpg` - Lenovo ThinkCentre M90

### Accessories (8 images)
1. `logitech-mx-master-3s.jpg` - Logitech MX Master 3S mouse
2. `mechanical-keyboard-rgb.jpg` - RGB Mechanical Keyboard
3. `usb-c-hub.jpg` - USB-C Hub 7-in-1
4. `external-ssd-1tb.jpg` - External SSD 1TB
5. `webcam-1080p.jpg` - 1080p Webcam
6. `laptop-cooling-pad.jpg` - Laptop Cooling Pad
7. `wireless-combo.jpg` - Wireless Mouse & Keyboard Combo
8. `monitor-24-fhd.jpg` - 24" Full HD Monitor

### Services (6 images)
1. `screen-replacement.jpg` - Laptop screen being replaced
2. `keyboard-replacement.jpg` - Keyboard replacement service
3. `virus-removal.jpg` - Computer virus removal
4. `data-recovery.jpg` - Data recovery service
5. `hardware-upgrade.jpg` - Hardware upgrade (RAM/SSD)
6. `laptop-cleaning.jpg` - Laptop cleaning and maintenance

## Step-by-Step Setup

### Step 1: Create Directories

Run these commands in your terminal from the project root:

```bash
cd public
mkdir -p images/laptops images/desktops images/accessories images/services
```

### Step 2: Prepare Your Images

For each product:
1. Find or take a high-quality photo
2. Crop to a square or 4:3 aspect ratio
3. Resize to at least 800x800 pixels (recommended: 1000x1000px)
4. Optimize the file size (aim for under 200KB per image)

**Free Image Optimization Tools:**
- TinyPNG: https://tinypng.com
- Squoosh: https://squoosh.app
- Online Image Optimizer: https://imagecompressor.com

### Step 3: Rename and Place Images

Rename your images **exactly** as shown in the list above and place them in the correct folders:

```
public/images/laptops/dell-latitude-5420.jpg
public/images/laptops/hp-elitebook-840.jpg
... and so on
```

### Step 4: Verify Image Names

Make sure the filenames match **exactly** (case-sensitive):
- Use lowercase letters
- Use hyphens (-) not underscores (_) or spaces
- Use .jpg or .png extension

### Step 5: Test Your Website

After adding all images:
1. Run `npm run dev`
2. Visit http://localhost:3000
3. Check that all images load correctly
4. If an image doesn't appear, check:
   - Is the filename correct?
   - Is it in the right folder?
   - Is the file extension correct?

## Using Placeholder Images (Temporary)

If you don't have all images yet, you can use placeholder images temporarily:

**Option 1: Use Unsplash**
Search for product images on https://unsplash.com and download them.

**Option 2: Use Placeholder Service**
You can temporarily modify `data/products.ts` to use placeholder images:

```typescript
image: 'https://via.placeholder.com/800x800/0ea5e9/ffffff?text=Product+Image'
```

But remember to replace these with real images before launching!

## Quick Checklist

- [ ] Create all four image directories
- [ ] Collect/prepare all 24 product images
- [ ] Optimize all images (resize and compress)
- [ ] Rename images to match exact filenames
- [ ] Place images in correct folders
- [ ] Test website locally
- [ ] Verify all images load correctly
- [ ] Deploy to Vercel

## Tips for Best Results

1. **Consistency:** Use the same aspect ratio for all images
2. **Quality:** Higher resolution looks better but optimize file size
3. **Background:** White or clean backgrounds work best for products
4. **Lighting:** Well-lit, clear photos are essential
5. **Angle:** Show products from the best angle (front view for most items)

## Need Help?

If you need assistance with image preparation:
- Contact: namusokejane063@gmail.com
- WhatsApp: +256 701 188229

---

Once you've added all images, your website will look professional and complete!
