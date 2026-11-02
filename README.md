# Premium Car Rentals

> Complete, responsive website for **Premium Car Rentals**, a premier car rental and vehicle hire business operating in Ghana. Rent with trust, drive with ease.

---

## 1. Project Overview

Premium Car Rentals provides reliable vehicle rental services across Ghana. This website is a **production-ready static web application** architected specifically for instant, error-free hosting on **Netlify** or any modern static hosting provider.

### Core Business Information
* **Business Name**: Premium Car Rentals
* **Primary Market**: Ghana
* **Local Phone Number**: `0548009285`
* **International Phone Number**: `+233548009285`
* **Telephone Link**: `tel:+233548009285`
* **WhatsApp Booking Link**: `https://wa.me/233548009285`
* **Pricing Policy**: Contact us for rental rates.
* **Availability Policy**: Contact us to enquire about availability.

---

## 2. Technology Stack

* **Frontend Framework**: React 19 (Functional components, hooks)
* **Language**: TypeScript (Strict typing)
* **Build Tool & Bundler**: Vite 8
* **Routing**: React Router DOM 7 (Client-side SPA with Netlify rewrite rules)
* **Styling**: Tailwind CSS 4 with brand identity matching the official logo:
  * Primary brand orange: `#F58220`
  * Secondary orange: `#FF6A00`
  * Black: `#111111`
  * Charcoal: `#1C1C1C`
  * White: `#FFFFFF`
  * Light grey: `#F5F5F5`
  * Medium grey: `#6B7280`
  * Border grey: `#E5E7EB`
  * Recognizable WhatsApp green: `#25D366`
* **Icons**: Lucide React
* **Hosting Target**: Netlify (Static SPA architecture)
* **Backend Requirements**: None. Completely static client-side operation with direct WhatsApp integration.

---

## 3. Project Structure

```
premium-car-rentals/
├── package.json               # Dependencies, scripts (dev, build, preview, test)
├── package-lock.json          # Dependency lockfile
├── index.html                 # Main entry point with title, SEO tags & typography
├── vite.config.ts             # Vite build configuration & path aliases
├── tsconfig.json              # TypeScript compilation configuration
├── netlify.toml               # Netlify build and redirect configuration
├── README.md                  # Comprehensive project documentation
├── public/
│   ├── _redirects             # Netlify SPA rewrite rule (/* /index.html 200)
│   ├── favicon.svg            # Custom automotive brand favicon
│   └── images/
│       ├── hero-mercedes.jpg  # Featured luxury Mercedes-Benz hero image
│       └── cars/              # Local high-quality image assets for all 26 vehicles
├── scripts/
│   ├── download-images.cjs    # Local image downloader & asset preparation script
│   └── test-suite.cjs         # Automated test suite validating inventory & booking
└── src/
    ├── main.tsx               # React application entry point
    ├── App.tsx                # App shell, router definition, layout wrapper
    ├── index.css              # Tailwind imports, typography, automotive scrollbars
    ├── data/
    │   ├── vehicles.ts        # Single central source of truth for 26 vehicles
    │   ├── reviews.ts         # Editable sample reviews with transparency notices
    │   └── config.ts          # Business constants & WhatsApp message constructor
    ├── components/
    │   ├── Navbar.tsx         # Sticky header with links, call & WhatsApp CTAs
    │   ├── Hero.tsx           # Mercedes-Benz hero with exact headings and badges
    │   ├── BusinessIntro.tsx  # Concise, strictly factual business introduction
    │   ├── VehicleCard.tsx    # Card with specs, pricing notice & Book Now button
    │   ├── VehicleGrid.tsx    # Categorized responsive fleet grid with search
    │   ├── BookingForm.tsx    # Complete validation form with WhatsApp integration
    │   ├── Reviews.tsx        # Clearly labeled sample customer review section
    │   ├── Footer.tsx         # Closing statement, nav links, copyright year
    │   └── WhatsAppButton.tsx # Floating quick-access WhatsApp button
    └── pages/
        ├── HomePage.tsx       # 7-stage homepage containing full inventory & form
        ├── CarsPage.tsx       # Dedicated /cars page with categorized fleet
        └── BookingPage.tsx    # Dedicated /booking page with vehicle preselection
```

---

## 4. Instructions for Installing Dependencies

Clone or extract the repository, open a terminal in the project root, and execute:

```bash
npm install
```

This installs all dependencies declared in `package.json` (`react`, `react-dom`, `react-router-dom`, `lucide-react`, `tailwindcss`, etc.).

---

## 5. Running the Development Server

To start the local Vite development server:

```bash
npm run dev
```

The server will be available at `http://localhost:3000` (or `http://localhost:5173`).

---

## 6. Running the Production Build

To create the optimized static production build:

```bash
npm run build
```

This compiles your TypeScript files, optimizes assets, and outputs the finished static website into the `dist/` directory.

---

## 7. Previewing the Production Build

To preview the built static bundle locally prior to deployment:

```bash
npm run preview
```

Open the printed URL in your browser to test the compiled static output.

---

## 8. Running Automated Verification Tests

To verify that the vehicle inventory (all 26 records across the 4 categories), unique IDs, special badges, WhatsApp message builders, and local images are valid:

```bash
npm run test
```

Expected output: **30 tests passed, 0 failed**.

---

## 9. Instructions for Downloading the Project ZIP from Google AI Studio

1. In the Google AI Studio interface, look for the **Code / Project Options** menu (or top-right three dots menu).
2. Select **Download Project** or **Export as ZIP**.
3. Save the ZIP file (`premium-car-rentals.zip`) to your computer.

---

## 10. Instructions for Extracting the ZIP

* **Windows**: Right-click the `.zip` file, select **Extract All...**, choose a destination directory, and click **Extract**.
* **macOS**: Double-click the `.zip` file in Finder.
* **Linux**: Run `unzip premium-car-rentals.zip -d premium-car-rentals`.

Open the extracted folder in VS Code or your terminal.

---

## 11. Deploying Through Netlify's Git-Based Workflow (Recommended)

1. **Push your code to GitHub / GitLab / Bitbucket**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Premium Car Rentals website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. **Log into Netlify**: Go to [https://app.netlify.com](https://app.netlify.com).
3. **Add New Site**:
   * Click **Add new site** > **Import an existing project**.
   * Choose **GitHub** (or your Git provider) and authorize access.
   * Select your repository.
4. **Verify Build Settings** (Netlify will auto-detect from `netlify.toml`):
   * **Build command**: `npm run build`
   * **Publish directory**: `dist`
5. **Deploy Site**: Click **Deploy site**.
   * Netlify will run `npm install`, then `npm run build`, and publish your site with continuous deployment.

---

## 12. Instructions for Manual Deployment of the Production Output (Drag & Drop)

If you prefer not to use Git:

1. Open your terminal in the extracted project folder and run:
   ```bash
   npm install
   npm run build
   ```
2. Verify that the `dist/` directory was created and contains `index.html`, `_redirects`, `favicon.svg`, and the `images/` directory.
3. Log into [https://app.netlify.com](https://app.netlify.com).
4. Go to the **Sites** tab and locate the **"Want to deploy a new site without connecting to Git? Drag and drop your site output folder here"** area.
5. **CRITICAL**: Drag and drop the **`dist`** folder (NOT the source root or the ZIP file) into that area.
6. Netlify will deploy your static site immediately.

---

## 13. Common Deployment Errors and Their Solutions

### Error 1: "Page Not Found / 404" on refreshing `/cars` or `/booking`
* **Cause**: Netlify receives a direct request for a path that has no matching `.html` file.
* **Solution**: Ensure `public/_redirects` contains `/* /index.html 200` and `netlify.toml` contains `[[redirects]] from = "/*" to = "/index.html" status = 200`. Both are already configured in this project. When `npm run build` runs, Vite automatically copies `public/_redirects` to `dist/_redirects`.

### Error 2: Missing Images on Netlify
* **Cause**: Images referenced with absolute file paths from the dev machine, or images not included in `public/`.
* **Solution**: All vehicle images and the hero image reside in `public/images/`. During `npm run build`, Vite copies the entire `public/` directory into `dist/`. Always reference images starting with `/images/...`.

### Error 3: Build failure: "vite: not found" or "tsc: not found"
* **Cause**: Netlify attempted to build before dependencies were installed, or dev dependencies were excluded.
* **Solution**: Ensure your package manager is configured to install devDependencies. The provided `package.json` correctly declares all build tools.

### Error 4: WhatsApp link does not auto-send
* **Explanation**: WhatsApp's click-to-chat API (`https://wa.me/...`) is designed to open WhatsApp with the conversation prefilled. By design, privacy rules require the customer to review and tap "Send". This is the intended behavior.
