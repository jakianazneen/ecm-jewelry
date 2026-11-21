export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  images: string[];
  description: string;
  story: string;
  badge?: string;
  featured?: boolean;
}

// Using Unsplash jewelry images
const baseProducts: Product[] = [
  // Earrings
  {
    id: 1,
    name: "Luna Crescent Earrings",
    price: 45,
    category: "Earrings",
    image: "/images/1535632066927-ab7c9ab60908.jpg",
    images: [
      "/images/1535632066927-ab7c9ab60908.jpg",
      "/images/1617038260897-41a1f14a8ca0.jpg",
    ],
    description: "Delicate crescent moon earrings crafted in 18k gold-plated sterling silver with moonstone accents.",
    story: "Inspired by the lunar cycle and the quiet energy of moonlit nights. Each crescent captures the mystical glow of the moon.",
    badge: "Bestseller",
    featured: true,
  },
  {
    id: 2,
    name: "Celestial Drop Earrings",
    price: 58,
    category: "Earrings",
    image: "/images/1602173574767-37ac01994b2a.jpg",
    images: [
      "/images/1602173574767-37ac01994b2a.jpg",
      "/images/1535632066927-ab7c9ab60908.jpg",
    ],
    description: "Elegant drop earrings with hand-set gemstones, perfect for both day and evening wear.",
    story: "Born from the stars — each drop reflects the celestial beauty of a night sky.",
    featured: true,
  },
  {
    id: 3,
    name: "Vintage Pearl Studs",
    price: 42,
    category: "Earrings",
    image: "/images/1611591437281-460bfbe1220a.jpg",
    images: ["/images/1611591437281-460bfbe1220a.jpg"],
    description: "Classic freshwater pearl studs set in sterling silver — timeless elegance.",
    story: "Pearls have adorned queens and goddesses for centuries. These studs carry that legacy.",
  },
  {
    id: 4,
    name: "Golden Hoop Earrings",
    price: 38,
    category: "Earrings",
    image: "/images/1630019852942-f89202989a59.jpg",
    images: ["/images/1630019852942-f89202989a59.jpg"],
    description: "Modern minimalist hoops in 18k gold-fill. Lightweight and everyday-ready.",
    story: "Simple. Bold. Timeless. These hoops speak for themselves.",
    badge: "New",
  },
  // Necklaces
  {
    id: 5,
    name: "Moonstone Pendant Necklace",
    price: 72,
    category: "Necklaces",
    image: "/images/1599643478518-a784e5dc4c8f.jpg",
    images: [
      "/images/1599643478518-a784e5dc4c8f.jpg",
      "/images/1611591437281-460bfbe1220a.jpg",
    ],
    description: "A luminous moonstone pendant on a delicate 18k gold chain. Mesmerizing iridescence.",
    story: "Inspired by lunar energy and quiet night skies. The moonstone glows like the full moon.",
    badge: "Bestseller",
    featured: true,
  },
  {
    id: 6,
    name: "Layered Gold Necklace",
    price: 65,
    category: "Necklaces",
    image: "/images/1599643478518-a784e5dc4c8f.jpg",
    images: ["/images/1599643478518-a784e5dc4c8f.jpg"],
    description: "Three delicate gold chains layered to create effortless depth and elegance.",
    story: "Layers tell stories — wear yours with confidence.",
    featured: true,
  },
  {
    id: 7,
    name: "Turquoise Beaded Necklace",
    price: 55,
    category: "Necklaces",
    image: "/images/1506630448388-4e683c67ddb0.jpg",
    images: ["/images/1506630448388-4e683c67ddb0.jpg"],
    description: "Hand-strung turquoise beads with gold accents — culturally rich and vibrant.",
    story: "Turquoise has been worn by ancient civilizations as a stone of protection and wisdom.",
    badge: "New",
  },
  {
    id: 8,
    name: "Diamond Clavicle Chain",
    price: 89,
    category: "Necklaces",
    image: "/images/1599643478518-a784e5dc4c8f.jpg",
    images: ["/images/1599643478518-a784e5dc4c8f.jpg"],
    description: "Dainty diamond-cut chain that sits perfectly at the clavicle.",
    story: "Understated luxury at its finest — this chain whispers elegance.",
  },
  // Bracelets
  {
    id: 9,
    name: "Gold Bangle Set",
    price: 48,
    category: "Bracelets",
    image: "/images/1605100804763-247f67b3557e.jpg",
    images: ["/images/1605100804763-247f67b3557e.jpg"],
    description: "Set of 3 gold-plated bangles — stack them all or wear one at a time.",
    story: "In many cultures, bangles symbolize prosperity and joy. Stack your story.",
    badge: "Bestseller",
  },
  {
    id: 10,
    name: "Beaded Wrap Bracelet",
    price: 35,
    category: "Bracelets",
    image: "/images/1611591437281-460bfbe1220a.jpg",
    images: ["/images/1611591437281-460bfbe1220a.jpg"],
    description: "Handwoven beaded wrap bracelet with 14k gold clasp. Bohemian chic.",
    story: "Crafted by artisans who weave stories into every bead.",
  },
  {
    id: 11,
    name: "Tennis Bracelet",
    price: 95,
    category: "Bracelets",
    image: "/images/1605100804763-247f67b3557e.jpg",
    images: ["/images/1605100804763-247f67b3557e.jpg"],
    description: "Classic tennis bracelet with channel-set cubic zirconia stones.",
    story: "Elegance has a name, and it sparkles on your wrist.",
    badge: "Premium",
  },
  {
    id: 12,
    name: "Charm Link Bracelet",
    price: 52,
    category: "Bracelets",
    image: "/images/1617038260897-41a1f14a8ca0.jpg",
    images: ["/images/1617038260897-41a1f14a8ca0.jpg"],
    description: "Gold link bracelet with celestial charm pendants — moon, star, and sun.",
    story: "Wear the universe on your wrist.",
    badge: "New",
  },
  // Rings
  {
    id: 13,
    name: "Moon Ring",
    price: 35,
    category: "Rings",
    image: "/images/1605100804763-247f67b3557e.jpg",
    images: ["/images/1605100804763-247f67b3557e.jpg"],
    description: "Minimalist crescent moon ring in sterling silver. Stack or wear alone.",
    story: "A ring that channels moonlight and mystery.",
    badge: "Bestseller",
  },
  {
    id: 14,
    name: "Stackable Gemstone Rings",
    price: 28,
    category: "Rings",
    image: "/images/1617038260897-41a1f14a8ca0.jpg",
    images: ["/images/1617038260897-41a1f14a8ca0.jpg"],
    description: "Set of 3 dainty gemstone rings — amethyst, rose quartz, and citrine.",
    story: "Three stones, three intentions. Choose your energy.",
    badge: "New",
  },
  {
    id: 15,
    name: "Vintage Signet Ring",
    price: 62,
    category: "Rings",
    image: "/images/1602751584552-8ba73aad10e1.jpg",
    images: ["/images/1602751584552-8ba73aad10e1.jpg"],
    description: "Bold gold signet ring with floral engraving. A statement piece.",
    story: "Signet rings were once sealed with identity. This one is yours.",
  },
  {
    id: 16,
    name: "Twisted Band Ring",
    price: 32,
    category: "Rings",
    image: "/images/1611591437281-460bfbe1220a.jpg",
    images: ["/images/1611591437281-460bfbe1220a.jpg"],
    description: "Elegant twisted rope-pattern band ring in 18k gold-fill.",
    story: "Intertwined strength and beauty — a perfect everyday ring.",
  },
  // Extras
  {
    id: 17,
    name: "Anklet Chain",
    price: 29,
    category: "Extras",
    image: "/images/1630019852942-f89202989a59.jpg",
    images: ["/images/1630019852942-f89202989a59.jpg"],
    description: "Delicate gold-fill anklet with tiny charm detail. Summer-ready.",
    story: "Let every step tell a story of elegance.",
    badge: "New",
  },
  {
    id: 18,
    name: "Jewelry Gift Box",
    price: 18,
    category: "Extras",
    image: "/images/1549388604-817d15aa0110.jpg",
    images: ["/images/1549388604-817d15aa0110.jpg"],
    description: "Luxury velvet jewelry box — perfect for gifting your loved ones.",
    story: "Because the box is part of the magic.",
  },
  {
    id: 19,
    name: "Body Chain",
    price: 55,
    category: "Extras",
    image: "/images/1506630448388-4e683c67ddb0.jpg",
    images: ["/images/1506630448388-4e683c67ddb0.jpg"],
    description: "Boho-inspired gold body chain. A statement accessory for any occasion.",
    story: "Adorn yourself. You are the canvas.",
    badge: "Premium",
  },
  {
    id: 20,
    name: "Hair Pin Set",
    price: 22,
    category: "Extras",
    image: "/images/1602173574767-37ac01994b2a.jpg",
    images: ["/images/1602173574767-37ac01994b2a.jpg"],
    description: "Set of 4 decorative gold hair pins with floral and star motifs.",
    story: "Beauty from crown to sole — adorn even your hair.",
    badge: "New",
  },
];

baseProducts.forEach((product, index) => {
  const image = `/images/catalog-real/jewelry-${String(index + 1).padStart(3, "0")}.jpg`;
  product.image = image;
  product.images = [image];
});

const catalogNames = [
  "Aurora", "Celeste", "Soleil", "Stella", "Rosalia", "Luna", "Serena", "Elara",
  "Vela", "Iris", "Mira", "Nora", "Amara", "Zara", "Diana", "Lyra",
];

const catalogStyles = [
  "Hoop", "Pendant", "Bracelet", "Signet", "Drop", "Chain", "Cuff", "Charm",
];

const categoriesForCatalog = ["Earrings", "Necklaces", "Bracelets", "Rings", "Extras"];

const extraProducts: Product[] = Array.from({ length: 80 }, (_, index) => {
  const id = index + 21;
  const category = categoriesForCatalog[index % categoriesForCatalog.length];
  const namePrefix = catalogNames[index % catalogNames.length];
  const style = catalogStyles[index % catalogStyles.length];
  const image = `/images/catalog-real/jewelry-${String(id).padStart(3, "0")}.jpg`;

  return {
    id,
    name: `${namePrefix} ${style} ${category === "Extras" ? "Collection" : category.slice(0, -1)}`,
    price: 24 + ((index * 7) % 78),
    category,
    image,
    images: [image],
    description: `A refined ${namePrefix.toLowerCase()}-inspired ${category.toLowerCase().replace(/s$/, "")} piece with a polished finish and artisan-inspired detailing.`,
    story: `The ${namePrefix} ${style.toLowerCase()} is designed as a timeless keepsake for everyday elegance and meaningful moments.`,
    badge: index % 7 === 0 ? "New" : index % 11 === 0 ? "Premium" : undefined,
  };
});

export const products: Product[] = [...baseProducts, ...extraProducts];

export const categories = ["Complete", "Earrings", "Bracelets", "Necklaces", "Rings", "Extras"];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getProductsByCategory = (cat: string) =>
  cat === "Complete" ? products : products.filter(p => p.category === cat);
export const getProductById = (id: number) => products.find(p => p.id === id);
