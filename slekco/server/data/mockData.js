const products = [
  {
    id: '1',
    name: 'Minimalist Leather Tote',
    slug: 'minimalist-leather-tote',
    description: 'A premium, full-grain leather tote designed for everyday carry. Features an unlined interior for a raw, natural feel and reinforced handles.',
    price: 295.00,
    images: ['/products/tote.jpg'],
    category: 'accessories',
    brand: 'Atelier',
    rating: 4.8,
    stock: 12
  },
  {
    id: '2',
    name: 'Ceramic Pour-Over Set',
    slug: 'ceramic-pour-over-set',
    description: 'Elevate your morning ritual with this handcrafted ceramic pour-over set. Includes dripper, server, and measuring scoop.',
    price: 65.00,
    images: ['/products/coffee.jpg'],
    category: 'home',
    brand: 'Kinto',
    rating: 4.9,
    stock: 30
  },
  {
    id: '3',
    name: 'Eau de Parfum - Signature',
    slug: 'eau-de-parfum-signature',
    description: 'A deeply personal and intimate fragrance with notes of bergamot, cedarwood, and vetiver. Long-lasting and subtle.',
    price: 140.00,
    images: ['/products/perfume.jpg'],
    category: 'beauty',
    brand: 'Aethel',
    rating: 4.7,
    stock: 15
  },
  {
    id: '4',
    name: 'Noise-Cancelling Over-Ears',
    slug: 'noise-cancelling-over-ears',
    description: 'Industry-leading noise cancellation meets premium design. Features 30-hour battery life and touch controls.',
    price: 350.00,
    images: ['/products/headphones.jpg'],
    category: 'electronics',
    brand: 'Aura',
    rating: 4.6,
    stock: 8
  },
  {
    id: '5',
    name: 'Cashmere Blend Overcoat',
    slug: 'cashmere-blend-overcoat',
    description: 'A tailored, timeless overcoat made from a luxurious cashmere-wool blend. Perfect for the modern minimalist.',
    price: 450.00,
    images: ['/products/coat.jpg'],
    category: 'fashion',
    brand: 'Lumina',
    rating: 5.0,
    stock: 5
  },
  {
    id: '6',
    name: 'Architectural Desk Lamp',
    slug: 'architectural-desk-lamp',
    description: 'Sleek, matte black desk lamp with adjustable arm and warm LED lighting. A statement piece for any workspace.',
    price: 185.00,
    images: ['/products/lamp.jpg'],
    category: 'home',
    brand: 'Void',
    rating: 4.5,
    stock: 20
  }
];

const categories = [
  { id: 'c1', name: 'Fashion', slug: 'fashion' },
  { id: 'c2', name: 'Electronics', slug: 'electronics' },
  { id: 'c3', name: 'Home', slug: 'home' },
  { id: 'c4', name: 'Beauty', slug: 'beauty' },
  { id: 'c5', name: 'Accessories', slug: 'accessories' },
];

module.exports = { products, categories };
