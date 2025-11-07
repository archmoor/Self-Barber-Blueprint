# Complete Guide: Turn Your Website Into a Shopify Theme

## Overview
Your React website has already been converted into a Shopify theme located in the `shopify-theme/` folder. Now you just need to upload it to Shopify and customize it.

---

## STEP 1: Create Your Shopify Store

### 1.1 Sign Up for Shopify
1. Go to **https://shopify.com**
2. Click **"Start free trial"**
3. Enter your email address
4. Fill in your business details
5. You'll get a store URL like: `yourstore.myshopify.com`

### 1.2 Complete Initial Setup
1. Skip or complete the quick setup wizard
2. Note down your store URL (you'll need this)

**✅ Checkpoint:** You should be able to access `yourstore.myshopify.com/admin`

---

## STEP 2: Log Into Shopify from Your Computer

### 2.1 Open Terminal
Navigate to your project's shopify-theme folder:

```bash
cd shopify-theme
```

### 2.2 Log In to Shopify
Run this command:

```bash
npx shopify auth login
```

**What happens:**
- A browser window will open
- You'll be asked to log into your Shopify store
- Select your store from the list
- Authorize the Shopify CLI

**✅ Checkpoint:** You should see "Logged in to yourstore.myshopify.com"

---

## STEP 3: Preview Your Theme Locally

### 3.1 Start Development Server
Run this command:

```bash
npx shopify theme dev
```

**What happens:**
- Shopify CLI uploads a temporary version of your theme
- Opens a preview URL in your browser (like: https://yourstore.myshopify.com?preview_theme_id=123456)
- Any changes you make to files will update in real-time

### 3.2 View Your Site
- Your website should now be visible with the gold/black design
- All sections (hero, features, FAQs) should be there
- The product section will be empty (we'll fix that in Step 5)

**✅ Checkpoint:** Your website loads and looks like your React version

**Troubleshooting:**
- If it's blank, check the browser console for errors
- If styles are missing, make sure `assets/theme.css` exists
- Press `Ctrl+C` to stop the dev server when done

---

## STEP 4: Upload Theme to Shopify

### 4.1 Push Your Theme
Run this command:

```bash
npx shopify theme push
```

### 4.2 Choose Upload Option
You'll be asked:
```
? Select a theme to push to:
  > Create new development theme
    Your Current Theme (live)
```

**Choose:** "Create new development theme" (safest option)

### 4.3 Confirm Upload
- Type `yes` when asked to confirm
- Wait for upload to complete (30-60 seconds)

**✅ Checkpoint:** You'll see "Theme pushed successfully"

---

## STEP 5: Create Your Product in Shopify

### 5.1 Go to Shopify Admin
Open your browser and go to:
```
yourstore.myshopify.com/admin
```

### 5.2 Add a Product
1. Click **"Products"** in the left sidebar
2. Click **"Add product"** button
3. Fill in the details:

**Product Information:**
- **Title:** Self-Barber Blueprint
- **Description:** Complete guide to cutting your own hair with professional results
- **Price:** $97.00 (or your price)
- **Compare at price:** $197.00 (optional - shows as "on sale")

**Media:**
- Upload a product image if you have one
- Or skip for now

4. Scroll down and click **"Save"**

**✅ Checkpoint:** Your product appears in the Products list

---

## STEP 6: Customize Your Theme

### 6.1 Go to Theme Editor
1. In Shopify Admin, click **"Online Store"** in left sidebar
2. Click **"Themes"**
3. Find your uploaded theme (not the live one)
4. Click **"Customize"**

### 6.2 Select Your Product
1. The theme editor will open
2. Scroll down to the **"Products"** section
3. Click on it to open settings on the left
4. Click **"Select Product"**
5. Choose **"Self-Barber Blueprint"**
6. Click **"Select"**

**✅ Checkpoint:** Your product should now appear on the page with price and "Add to Cart" button

### 6.3 Customize Text (Optional)
You can edit any text by clicking on sections:

**Hero Section:**
- Click on the hero to change title/subtitle
- Edit the CTA button text

**Features:**
- Click "Add block" to add more features
- Click on any feature to edit text
- Drag to reorder
- Click trash icon to delete

**FAQs:**
- Click on FAQ section
- Add/edit/remove questions
- Same process as features

**Testimonials:**
- Add customer testimonials
- Edit existing ones

### 6.4 Add Social Media Links
1. Click the theme settings icon (looks like a paintbrush) at the top left
2. Scroll to **"Social Media"**
3. Add your Instagram URL: `https://instagram.com/yourhandle`
4. Add your TikTok URL: `https://tiktok.com/@yourhandle`

### 6.5 Save Your Changes
- Click **"Save"** in the top right
- Your changes are saved to the development theme

**✅ Checkpoint:** All your content is customized and looks good

---

## STEP 7: Set Up Payment & Shipping

### 7.1 Configure Payments
1. Go to **Settings** (bottom left in Shopify Admin)
2. Click **"Payments"**
3. Set up Shopify Payments or PayPal
4. Fill in your banking details
5. Click **"Activate"**

### 7.2 Configure Shipping
1. In Settings, click **"Shipping and delivery"**
2. Set up shipping zones
3. For digital products (your PDF):
   - Add a "Digital Download" rate at $0.00
   - Or skip shipping entirely in product settings

---

## STEP 8: Test Your Store

### 8.1 Test Checkout
1. Go to your theme preview
2. Click **"Add to Cart"**
3. Go to checkout
4. Complete a test order (Shopify provides test mode)

### 8.2 Enable Test Mode
1. Go to **Settings → Payments**
2. Enable **"Test mode"**
3. Use test credit card: `4242 4242 4242 4242`

**✅ Checkpoint:** You can complete a test order successfully

---

## STEP 9: Publish Your Theme Live

### 9.1 Make Theme Live
1. Go to **Online Store → Themes**
2. Find your development theme
3. Click **"Actions" → "Publish"**
4. Confirm by clicking **"Publish"**

**Your theme is now live!** 🎉

### 9.2 View Your Live Site
Go to: `yourstore.myshopify.com`

---

## STEP 10: Connect Your Domain (Optional)

### 10.1 Buy or Connect Domain
1. Go to **Settings → Domains**
2. Either:
   - Buy a domain through Shopify
   - Connect an existing domain

### 10.2 Follow Setup Wizard
- Shopify will guide you through DNS settings
- Takes 24-48 hours to propagate

---

## STEP 11: Remove Password Page (Go Live)

Your store starts with a password page. To remove it:

1. Go to **Online Store → Preferences**
2. Scroll to **"Password protection"**
3. Uncheck **"Enable password"**
4. Click **"Save"**

**Your store is now public!** 🚀

---

## Common Commands Reference

```bash
# Preview theme locally
npx shopify theme dev

# Upload theme to Shopify
npx shopify theme push

# Pull theme from Shopify (download changes)
npx shopify theme pull

# Check which store you're logged into
npx shopify auth logout
npx shopify auth login
```

---

## File Structure (Where Everything Is)

```
shopify-theme/
├── assets/
│   ├── theme.css          # All your styles (colors, animations, layout)
│   └── theme.js           # Smooth scrolling & cart functionality
├── config/
│   └── settings_schema.json  # Theme settings in admin
├── layout/
│   └── theme.liquid       # Main HTML wrapper (header, footer)
├── sections/
│   └── landing-page.liquid   # Your entire landing page
├── snippets/
│   └── meta-tags.liquid   # SEO tags
└── templates/
    └── index.json         # Homepage template (has default content)
```

---

## Customization Tips

### Change Colors
Edit `shopify-theme/assets/theme.css`:

```css
:root {
  --color-gold: #D4AF37;     /* Change to your brand color */
  --color-black: #000000;
  --color-neutral-900: #171717;
}
```

Then push changes:
```bash
npx shopify theme push
```

### Add More Sections
In the theme editor:
1. Click "Add section"
2. Choose from available sections
3. Customize content

### Edit Text Without Code
Everything can be edited in the Shopify theme editor at:
**Online Store → Themes → Customize**

---

## Troubleshooting

### "Command not found: shopify"
**Solution:** Use `npx shopify` instead of `shopify`

### Theme looks broken after upload
**Solution:**
- Make sure all files uploaded
- Check browser console for errors
- Clear browser cache

### Product not showing
**Solution:**
1. Make sure product is created in Products
2. In theme editor, select the product
3. Make sure product status is "Active"

### Cart not working
**Solution:**
- Check product has inventory
- Look for JavaScript errors in browser console
- Make sure `theme.js` uploaded correctly

### Can't log in to Shopify
**Solution:**
```bash
npx shopify auth logout
npx shopify auth login
```

### Changes not appearing
**Solution:**
- Save in theme editor
- Clear browser cache
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

---

## Next Steps After Going Live

1. **Set up email notifications** (Settings → Notifications)
2. **Add legal pages** (Privacy Policy, Terms, Refund Policy)
3. **Set up Google Analytics** (Online Store → Preferences)
4. **Install Shopify mobile app** to manage orders
5. **Create backup of theme** (Download theme from Themes page)
6. **Test on mobile devices**
7. **Set up abandoned cart emails** (Marketing → Automations)

---

## Support Resources

- **Shopify Help:** https://help.shopify.com
- **Theme Documentation:** https://shopify.dev/docs/themes
- **Community Forum:** https://community.shopify.com

---

## Summary: Quick Start Checklist

- [ ] Create Shopify store
- [ ] Run `cd shopify-theme`
- [ ] Run `npx shopify auth login`
- [ ] Run `npx shopify theme push`
- [ ] Create product in Shopify admin
- [ ] Customize theme (Online Store → Themes → Customize)
- [ ] Select product in theme settings
- [ ] Set up payments
- [ ] Test checkout
- [ ] Publish theme
- [ ] Remove password protection
- [ ] You're live! 🎉

---

**Questions?** Re-read the relevant section above. Each step has checkpoints to verify you're on track.
