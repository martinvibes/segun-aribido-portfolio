# 🚀 cPanel Deployment Instructions

## What You Need to Upload

**File to use:** `segun-portfolio-UPLOAD-THIS.zip`

This ZIP file contains the **production-ready static build** of your Next.js portfolio website.

---

## Step-by-Step Upload Instructions

### 1. **Login to cPanel**
   - Go to your hosting provider's cPanel login page
   - Enter your credentials

### 2. **Navigate to File Manager**
   - Find and click on **"File Manager"** in cPanel
   - Navigate to the `public_html` folder

### 3. **Clear Existing Files (if any)**
   - If there are any files from the previous upload, **delete them first**
   - Make sure `public_html` is empty or only contains files you want to keep

### 4. **Upload the ZIP File**
   - Click the **"Upload"** button in File Manager
   - Select `segun-portfolio-UPLOAD-THIS.zip`
   - Wait for the upload to complete

### 5. **Extract the ZIP File**
   - Go back to File Manager
   - Right-click on `segun-portfolio-UPLOAD-THIS.zip`
   - Select **"Extract"**
   - Extract to: `public_html` (current directory)
   - Click **"Extract File(s)"**

### 6. **Delete the ZIP File**
   - After extraction, you can delete `segun-portfolio-UPLOAD-THIS.zip` from the server
   - Right-click → Delete

### 7. **Verify the Upload**
   - In `public_html`, you should now see:
     - ✅ `index.html` (main file)
     - ✅ `_next/` folder (JavaScript and CSS)
     - ✅ Various `.html` files (about.html, coupvouch.html, etc.)
     - ✅ Image files (.png, .svg, .jpg)
     - ✅ `font/` folder

### 8. **Test Your Website**
   - Visit your domain (e.g., `https://yourdomain.com`)
   - The portfolio should now load correctly!

---

## ✅ What's Inside the Build

This is a **static export** of your Next.js site, which means:
- All pages are pre-rendered as HTML files
- No Node.js server required
- Works perfectly on standard Apache/PHP hosting
- Fast loading times
- SEO-friendly

---

## 📁 File Structure After Upload

```
public_html/
├── index.html          ← Homepage
├── about.html          ← About page
├── coupvouch.html      ← Project pages
├── cubos.html
├── farely.html
├── getSaved.html
├── saveplus.html
├── welkom.html
├── _next/              ← Optimized JS/CSS
├── font/               ← Custom fonts
└── [images and assets]
```

---

## 🆘 Troubleshooting

### Problem: "404 Not Found" error
**Solution:** Make sure all files are extracted directly into `public_html`, not in a subfolder.

### Problem: "Styles not loading"
**Solution:** Check that the `_next` folder is present in `public_html`.

### Problem: "Images not showing"
**Solution:** Verify that image files (.png, .svg, .jpg) are in `public_html`.

---

## 📧 Need Help?

If you encounter any issues:
1. Take a screenshot of the error
2. Check what files are in your `public_html` folder
3. Contact me with the details

---

**Built with:** Next.js 16 (Static Export)  
**Compatible with:** cPanel, Apache, PHP hosting, any static hosting
