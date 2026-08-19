# Slekco

Slekco is a premium, minimalist e-commerce platform offering a curated selection of fashion, beauty, and everyday luxury essentials. Designed with an editorial aesthetic and a philosophy rooted in wabi-sabi, it provides users with a serene and effortless shopping experience.

## Live Demo
*[Link to live demo to be added post-deployment]*

![Slekco Hero Section](docs/hero-screenshot.png)

## Overview
Slekco was built to challenge the cluttered, high-anxiety environments of traditional e-commerce. By stripping away non-essential elements, utilizing a muted color palette, and focusing on high-quality editorial imagery, the platform creates a calming digital environment where the products speak for themselves.

## Features
- **Premium UI/UX:** A serene, sophisticated design featuring beautiful typography, subtle animations, and curated custom lifestyle photography.
- **Responsive Layout:** Flawless experience across desktop, tablet, and mobile devices.
- **Product Filtering & Categories:** Browse products by categories (Home, Accessories, Fragrance, Wellness) or partner brands.
- **Wishlist Functionality:** Save your favorite items seamlessly with Redux state management.
- **Cart Management:** Real-time cart calculations and a beautifully designed, non-intrusive checkout flow.
- **Dedicated Brand & Collection Pages:** Immersive pages detailing brand philosophies and curated lookbooks.

## Tech Stack
**Frontend:**
- React (Vite)
- Redux Toolkit (State Management)
- Tailwind CSS (Styling)
- Framer Motion (Animations)
- React Router DOM (Navigation)
- Lucide React (Icons)

**Backend:**
- Node.js
- Express.js
- CORS & dotenv

## Architecture
Slekco utilizes a decoupled Client-Server architecture. 
- The **Frontend** is a Single Page Application (SPA) built with React. It handles the presentation layer, global state (Redux), and client-side routing.
- The **Backend** is an Express.js RESTful API that handles data requests and business logic. It currently serves data from a sophisticated mock data engine, structured to be easily replaceable with a real database.

## Project Structure
```
slekco/
├── client/                 # Frontend React Application
│   ├── public/             # Static assets and custom generated images
│   ├── src/
│   │   ├── components/     # Reusable UI components (Navbar, Footer, ProductCard)
│   │   ├── layouts/        # Page layout wrappers (MainLayout)
│   │   ├── pages/          # Route components (Home, Shop, ProductDetail, Cart)
│   │   ├── services/       # API integration logic (Axios)
│   │   └── store/          # Redux slices (cart, products, wishlist)
│   └── vite.config.js
└── server/                 # Backend Node/Express API
    ├── config/             # Configuration files (DB connection)
    ├── controllers/        # Request handlers
    ├── data/               # Mock database engine (mockData.js)
    ├── middleware/         # Custom Express middleware (error handling)
    ├── routes/             # API route definitions
    └── server.js           # Entry point
```

## API Documentation
The backend exposes the following RESTful endpoints:
- `GET /api/products` - Fetch all products
- `GET /api/products/:id` - Fetch a single product by its ID
- `GET /api/categories/:category` - Fetch products filtered by a specific category

## Database Schema
Currently, the application utilizes a structured JSON mock engine. The `Product` model adheres to the following schema structure, ready for MongoDB integration:
- `id` (String): Unique identifier
- `name` (String): Product title
- `slug` (String): URL-friendly name
- `description` (String): Detailed product description
- `price` (Number): Float value
- `images` (Array of Strings): Local or remote image URLs
- `category` (String): e.g., 'home', 'wellness'
- `brand` (String): e.g., 'Atelier'
- `rating` (Number): Average review score
- `reviews` (Number): Total review count
- `stock` (Number): Available inventory
- `isNew` (Boolean): Flag for new arrivals

## Environment Variables
To run this project, you will need to configure the following environment variables:

**Backend (`server/.env`):**
- `PORT` (default: 5000)
- `NODE_ENV` (development/production)

**Frontend (`client/.env`):**
- `VITE_API_URL` (default: http://localhost:5000/api)

## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/slekco.git
   cd slekco
   ```

2. **Install Backend Dependencies & Run:**
   ```bash
   cd server
   npm install
   npm run dev
   ```

3. **Install Frontend Dependencies & Run:**
   ```bash
   cd ../client
   npm install
   npm run dev
   ```

## Deployment
**Frontend (Vercel/Netlify):**
- Build command: `npm run build`
- Output directory: `dist`
- Set the `VITE_API_URL` environment variable to your deployed backend URL.

**Backend (Render/Heroku):**
- Build command: `npm install`
- Start command: `node server.js`

## AI-Assisted Development
This project was developed with the assistance of **Google Antigravity**. AI was utilized to:
- Rapidly prototype and refine the Tailwind CSS UI components.
- Generate custom, premium, royalty-free e-commerce lifestyle photography for the products and lookbooks to circumvent third-party API rate limits.
- Architect the Redux Toolkit state management flow.
- Refactor the layout to hide global components (like the footer) dynamically based on the current route.

## Design Decisions
- **Muted Color Palette:** The use of `#F7F5F0` (surface) and `#2A2A2A` (primary text) creates an editorial, printed-magazine feel.
- **Local Image Hosting:** Initially reliant on Unsplash APIs, the project was pivoted to use local, AI-generated custom imagery. This ensures perfect visual consistency, exact product matching, and zero broken links.
- **Contextual Layouts:** The global footer is intentionally disabled on Cart, Checkout, and Product Detail pages to reduce cognitive load and focus the user on the primary action (purchasing).
- **Modal-style Cart:** The cart layout mimics a full-screen modal, allowing for a focused checkout experience without leaving the application context.

## Performance
- **Vite:** Utilized for ultra-fast Hot Module Replacement (HMR) during development and highly optimized rollup builds for production.
- **Code Splitting:** Route-level code splitting is implemented using `React.lazy` and `Suspense` in `AnimatedRoutes.jsx` to ensure the initial JavaScript payload remains small.
- **Image Optimization:** All heavy lifestyle and product images are appropriately sized and compressed.

## Future Improvements
- **Database Integration:** Swap the mock data engine with a live MongoDB instance using Mongoose.
- **Authentication:** Implement JWT-based user authentication and user profiles for order history.
- **Payment Gateway:** Integrate the Stripe API to process real transactions in the checkout flow.
