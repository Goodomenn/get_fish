export const INITIAL_PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Wild Alaskan King Salmon',
    category: 'Fillets & Steaks',
    origin: 'Bristol Bay, Alaska',
    price: 34.99,
    unit: 'kg',
    stock: 28,
    badge: "Chef's Pick",
    rating: 4.9,
    reviewsCount: 128,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    description: 'Prized for its exceptionally high omega-3 fat content, rich coral hue, and meltingly tender texture. Sustainably caught by day-boat fishermen in the pristine cold waters of Alaska.',
    flavorProfile: {
      richness: 'Rich & Buttery',
      texture: 'Flaky & Tender',
      taste: 'Full & Savory'
    },
    nutrition: {
      calories: '208 kcal / 100g',
      protein: '22g',
      omega3: '2.5g',
      fat: '13g'
    },
    cookingTips: 'Pan-sear skin-side down on medium heat until crispy (approx. 4 mins), flip and baste with garlic thyme butter for 2 mins. Also sublime baked or grilled on cedar planks.',
    cuts: ['Skin-on Fillet', 'Thick Center-Cut Steaks', 'Sashimi Grade Block'],
    isPopular: true,
    isSashimi: true
  },
  {
    id: 'prod-2',
    name: 'Atlantic Bluefin Tuna Loin',
    category: 'Fillets & Steaks',
    origin: 'North Atlantic (Line-Caught)',
    price: 48.50,
    unit: 'kg',
    stock: 14,
    badge: 'Sashimi Grade',
    rating: 5.0,
    reviewsCount: 94,
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44a0349?auto=format&fit=crop&w=800&q=80',
    description: 'Deep ruby red and velvety, line-caught Atlantic Bluefin tuna loin. Super-frozen at -60°C at sea to preserve pristine sashimi quality, freshness, and delicate sweetness.',
    flavorProfile: {
      richness: 'Lean to Medium-Fatty',
      texture: 'Firm & Velvety',
      taste: 'Clean, Meaty & Mildly Sweet'
    },
    nutrition: {
      calories: '144 kcal / 100g',
      protein: '29g',
      omega3: '1.2g',
      fat: '2.5g'
    },
    cookingTips: 'Best served raw as sashimi, poke, or carpaccio. If cooking, sear on high heat for 30-45 seconds per side to leave a cold rare center.',
    cuts: ['Saku Sashimi Block', 'Thick Rare-Cut Steaks', 'Poke/Tartare Cubes'],
    isPopular: true,
    isSashimi: true
  },
  {
    id: 'prod-3',
    name: 'Fresh Maine Jumbo Lobster',
    category: 'Shellfish & Crustaceans',
    origin: 'Bar Harbor, Maine',
    price: 42.00,
    unit: 'piece (1.2kg)',
    stock: 18,
    badge: 'Live Catch',
    rating: 4.8,
    reviewsCount: 86,
    image: 'https://images.unsplash.com/photo-1559742811-82286364ceaf?auto=format&fit=crop&w=800&q=80',
    description: 'Hard-shell jumbo Maine lobster harvested daily from rocky coastal waters. Sweet, tender claw meat and succulent tail, packed alive with chilled seaweed and gel ice packs.',
    flavorProfile: {
      richness: 'Sweet & Succulent',
      texture: 'Plump & Juicy',
      taste: 'Ocean Sweetness'
    },
    nutrition: {
      calories: '89 kcal / 100g',
      protein: '19g',
      omega3: '0.4g',
      fat: '0.9g'
    },
    cookingTips: 'Steam over salted water with aromatic herbs for 12-14 minutes until shell turns bright red. Serve immediately with lemon wedges and melted clarified garlic butter.',
    cuts: ['Whole Live Chilled', 'Steamed & Pre-Cracked', 'Raw Tails Only (Pair)'],
    isPopular: true,
    isSashimi: false
  },
  {
    id: 'prod-4',
    name: 'Mediterranean Sea Bass (Branzino)',
    category: 'Whole Fish',
    origin: 'Aegean Sea, Greece',
    price: 22.00,
    unit: 'kg',
    stock: 35,
    badge: 'Best Seller',
    rating: 4.9,
    reviewsCount: 156,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    description: 'A European culinary treasure. Pristine white flesh with a delicate, mildly sweet flavor and fine flake. Delivered whole, expertly scaled, and gutted per your custom preference.',
    flavorProfile: {
      richness: 'Mild & Clean',
      texture: 'Fine-Flaked & Moist',
      taste: 'Delicate Sweet'
    },
    nutrition: {
      calories: '124 kcal / 100g',
      protein: '23g',
      omega3: '0.8g',
      fat: '3.2g'
    },
    cookingTips: 'Stuff cavity with fresh lemon slices, rosemary, garlic cloves, and extra virgin olive oil. Roast whole at 425°F (220°C) for 18-22 minutes until skin is crispy.',
    cuts: ['Whole Scaled & Gutted', 'Butterfly Fillet (Head On)', 'Boneless Fillets Pair'],
    isPopular: true,
    isSashimi: false
  },
  {
    id: 'prod-5',
    name: 'Pacific Red Snapper',
    category: 'Whole Fish',
    origin: 'Gulf of California',
    price: 26.50,
    unit: 'kg',
    stock: 22,
    badge: 'Day-Boat Catch',
    rating: 4.7,
    reviewsCount: 72,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    description: 'Iconic crimson-skinned fish with lean, firm, and nutty white meat. Remarkable versatility that excels in grilling, pan-frying whole with garlic chili oil, or steaming.',
    flavorProfile: {
      richness: 'Lean & Sweet',
      texture: 'Firm & Flaky',
      taste: 'Nutty & Mild'
    },
    nutrition: {
      calories: '100 kcal / 100g',
      protein: '22g',
      omega3: '0.5g',
      fat: '1.3g'
    },
    cookingTips: 'Score skin diagonally, dust lightly with seasoned flour, and pan-fry in olive oil. Drizzle with a soy-ginger-scallion reduction.',
    cuts: ['Whole Scaled & Cleaned', 'Skin-on Fillets', 'Head-off Pan-Dressed'],
    isPopular: false,
    isSashimi: false
  },
  {
    id: 'prod-6',
    name: 'Colossal Black Tiger Prawns (U-8)',
    category: 'Shellfish & Crustaceans',
    origin: 'Indo-Pacific Wild',
    price: 38.00,
    unit: 'kg',
    stock: 45,
    badge: 'Jumbo Size',
    rating: 4.8,
    reviewsCount: 110,
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80',
    description: 'Enormous tiger prawns (under 8 pieces per pound). Incredibly snappy bite, distinct tiger stripes, and intense natural shrimp sweetness. Perfect showstopper for seafood BBQs.',
    flavorProfile: {
      richness: 'Savory & Briny',
      texture: 'Firm & Crunchy',
      taste: 'Rich & Sweet'
    },
    nutrition: {
      calories: '99 kcal / 100g',
      protein: '21g',
      omega3: '0.4g',
      fat: '1.1g'
    },
    cookingTips: 'Butterfly with shell-on, brush with garlic butter and fresh chili flakes, and char-grill over high coals for 2-3 minutes per side.',
    cuts: ['Whole Head-on Shell-on', 'Easy-Peel Deveined', 'Peeled & Tail-on'],
    isPopular: true,
    isSashimi: false
  },
  {
    id: 'prod-7',
    name: 'Hokkaido Sea Scallops (Dry-Pack U-10)',
    category: 'Shellfish & Crustaceans',
    origin: 'Hokkaido, Japan',
    price: 54.00,
    unit: 'kg',
    stock: 11,
    badge: 'Premium Import',
    rating: 5.0,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=800&q=80',
    description: '100% natural, chemical-free dry-packed scallops harvested from icy subarctic waters. Silky smooth, naturally sweet, with no water retention so they caramelize to golden perfection.',
    flavorProfile: {
      richness: 'Buttery & Sweet',
      texture: 'Tender & Melt-in-Mouth',
      taste: 'Clean Ocean Sweetness'
    },
    nutrition: {
      calories: '111 kcal / 100g',
      protein: '20g',
      omega3: '0.3g',
      fat: '0.8g'
    },
    cookingTips: 'Pat completely dry with paper towels. Sear in smoking hot cast iron with ghee or avocado oil for 90 seconds, flip, baste with butter for 60 seconds.',
    cuts: ['Whole Fresh Shucked (Dry)', 'Sashimi Sliced Ready'],
    isPopular: true,
    isSashimi: true
  },
  {
    id: 'prod-8',
    name: 'Wild Pacific Halibut Fillet',
    category: 'Fillets & Steaks',
    origin: 'Haida Gwaii, British Columbia',
    price: 39.50,
    unit: 'kg',
    stock: 19,
    badge: 'Mild & Flaky',
    rating: 4.8,
    reviewsCount: 65,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    description: 'The steak of the sea. Pure white, thick, meaty fillets with large flakes and a subtle flavor that welcomes marinades, miso glazes, or herb crusts.',
    flavorProfile: {
      richness: 'Lean & Clean',
      texture: 'Dense & Meaty',
      taste: 'Mild & Gentle'
    },
    nutrition: {
      calories: '110 kcal / 100g',
      protein: '23g',
      omega3: '0.6g',
      fat: '1.6g'
    },
    cookingTips: 'Poach gently in aromatic olive oil with tarragon and cherry tomatoes, or pan-sear with a golden parmesan herb crust.',
    cuts: ['Thick Center-Cut Loin', 'Portion Fillets (200g)', 'Halibut Cheeks (Delicacy)'],
    isPopular: false,
    isSashimi: false
  },
  {
    id: 'prod-9',
    name: 'Norwegian Skrei Cod Loin',
    category: 'Fillets & Steaks',
    origin: 'Lofoten Islands, Norway',
    price: 24.50,
    unit: 'kg',
    stock: 32,
    badge: 'Seasonal Prime',
    rating: 4.7,
    reviewsCount: 92,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    description: 'Migrating Arctic cod known as Skrei. Its long swim through icy currents produces pristine snow-white, extraordinarily firm and translucent flesh with massive pearlescent flakes.',
    flavorProfile: {
      richness: 'Lean & Pure',
      texture: 'Firm Giant Flakes',
      taste: 'Crisp & Clean'
    },
    nutrition: {
      calories: '82 kcal / 100g',
      protein: '18g',
      omega3: '0.3g',
      fat: '0.7g'
    },
    cookingTips: 'Salt lightly 15 mins prior to cooking to firm up the flakes. Pan-roast with crushed garlic and capers, or steam with ginger and scallions.',
    cuts: ['Center-Cut Thick Loin', 'Skin-on Fillet', 'Fish & Chips Cut'],
    isPopular: false,
    isSashimi: false
  },
  {
    id: 'prod-10',
    name: 'Fresh PEI Blue Mussels',
    category: 'Shellfish & Crustaceans',
    origin: 'Prince Edward Island, Canada',
    price: 14.50,
    unit: '2kg mesh bag',
    stock: 48,
    badge: 'Farm Fresh',
    rating: 4.8,
    reviewsCount: 104,
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80',
    description: 'Rope-grown in clean, phytoplankton-rich bays. Grit-free, pre-washed, and debearded. Delivered live in aerated wet packaging ready for the steaming pot.',
    flavorProfile: {
      richness: 'Plump & Briny',
      texture: 'Tender & Juicy',
      taste: 'Oceanic & Mineral Sweet'
    },
    nutrition: {
      calories: '86 kcal / 100g',
      protein: '12g',
      omega3: '0.7g',
      fat: '2.2g'
    },
    cookingTips: 'Sauté shallots and garlic in butter, pour in a glass of crisp white wine, add mussels, cover tightly and steam for 5 minutes until shells open wide.',
    cuts: ['Debearded 2kg Mesh Bag', 'Bulk 5kg Restaurant Pack'],
    isPopular: true,
    isSashimi: false
  },
  {
    id: 'prod-11',
    name: 'Yellowtail Kingfish (Hamachi)',
    category: 'Fillets & Steaks',
    origin: 'Kagoshima, Japan',
    price: 46.00,
    unit: 'kg',
    stock: 7,
    badge: 'Low Stock Alert',
    rating: 4.9,
    reviewsCount: 78,
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44a0349?auto=format&fit=crop&w=800&q=80',
    description: 'Exceptional Hamachi with decadent marbling and a rich, creamy finish. Renowned across Tokyo sushi restaurants for its clean sweetness and luxurious mouthfeel.',
    flavorProfile: {
      richness: 'Rich & Creamy',
      texture: 'Buttery Soft',
      taste: 'Subtle Sweet, No Fishiness'
    },
    nutrition: {
      calories: '256 kcal / 100g',
      protein: '23g',
      omega3: '2.1g',
      fat: '17g'
    },
    cookingTips: 'Finely slice for hamachi crudo with serrano peppers and yuzu dressing. The collar (kama) is heavenly salted and grilled under high heat.',
    cuts: ['Sashimi Saku Loin', 'Hamachi Kama (Collar)', 'Crudo Sliced (200g)'],
    isPopular: true,
    isSashimi: true
  },
  {
    id: 'prod-12',
    name: 'Whole Mediterranean Turbot',
    category: 'Whole Fish',
    origin: 'Galicia, Spain',
    price: 44.00,
    unit: 'kg',
    stock: 12,
    badge: 'Chef Special',
    rating: 4.9,
    reviewsCount: 51,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    description: 'Regarded as the King of Flatfish in high-end gastronomy. Gelatinous skin that melts into a luscious sauce, with firm, milky-white meat that retains unbelievable moisture.',
    flavorProfile: {
      richness: 'Rich & Gelatinous',
      texture: 'Firm, Dense & Juicy',
      taste: 'Nutty & Deeply Savory'
    },
    nutrition: {
      calories: '95 kcal / 100g',
      protein: '16g',
      omega3: '0.4g',
      fat: '3.0g'
    },
    cookingTips: 'Roast whole on the bone in a Basque-style grill basket with cider vinegar, garlic chips, and spicy guindilla peppers.',
    cuts: ['Whole Cleaned & Trimmed (1.5-2kg)', 'Trimmed Steaks on Bone'],
    isPopular: false,
    isSashimi: false
  }
];

export const INITIAL_ORDERS = [
  {
    id: 'GF-8921',
    customer: {
      name: 'Sarah Jenkins',
      email: 'sarah.j@example.com',
      phone: '+1 (555) 234-8901',
      address: '742 Evergreen Terrace, Springfield',
      notes: 'Please leave in the thermal cooler bag on front porch.'
    },
    items: [
      {
        id: 'prod-1',
        name: 'Wild Alaskan King Salmon',
        cut: 'Skin-on Fillet',
        price: 34.99,
        quantity: 2,
        weight: '1kg'
      },
      {
        id: 'prod-6',
        name: 'Colossal Black Tiger Prawns (U-8)',
        cut: 'Easy-Peel Deveined',
        price: 38.00,
        quantity: 1,
        weight: '1kg'
      }
    ],
    subtotal: 107.98,
    deliveryFee: 0,
    discount: 10.80,
    total: 97.18,
    status: 'Out for Delivery',
    timeSlot: 'Today, 1:00 PM - 3:00 PM',
    paymentMethod: 'Credit Card (Visa •••• 4242)',
    placedAt: new Date(Date.now() - 1000 * 60 * 85).toISOString(),
    driver: {
      name: 'Carlos Ruiz',
      phone: '+1 (555) 912-3004',
      vehicle: 'Refrigerated Van #04'
    }
  },
  {
    id: 'GF-8922',
    customer: {
      name: 'Marcus Vance',
      email: 'm.vance@oceanview.org',
      phone: '+1 (555) 489-3210',
      address: '124 Conch Street, Pacific Bay',
      notes: 'Call before arriving so I can meet at lobby.'
    },
    items: [
      {
        id: 'prod-2',
        name: 'Atlantic Bluefin Tuna Loin',
        cut: 'Saku Sashimi Block',
        price: 48.50,
        quantity: 1,
        weight: '1kg'
      },
      {
        id: 'prod-7',
        name: 'Hokkaido Sea Scallops (Dry-Pack U-10)',
        cut: 'Sashimi Sliced Ready',
        price: 54.00,
        quantity: 1,
        weight: '1kg'
      }
    ],
    subtotal: 102.50,
    deliveryFee: 0,
    discount: 0,
    total: 102.50,
    status: 'Preparing',
    timeSlot: 'Today, 3:00 PM - 5:00 PM',
    paymentMethod: 'Apple Pay',
    placedAt: new Date(Date.now() - 1000 * 60 * 35).toISOString()
  },
  {
    id: 'GF-8923',
    customer: {
      name: 'Elena Rostova',
      email: 'elena.rostova@gmail.com',
      phone: '+1 (555) 872-4419',
      address: '88 Ocean Drive, Apt 4B, Harbor City',
      notes: 'Apartment buzzer code #4012.'
    },
    items: [
      {
        id: 'prod-3',
        name: 'Fresh Maine Jumbo Lobster',
        cut: 'Whole Live Chilled',
        price: 42.00,
        quantity: 2,
        weight: 'piece'
      },
      {
        id: 'prod-10',
        name: 'Fresh PEI Blue Mussels',
        cut: 'Debearded 2kg Mesh Bag',
        price: 14.50,
        quantity: 1,
        weight: 'bag'
      }
    ],
    subtotal: 98.50,
    deliveryFee: 0,
    discount: 0,
    total: 98.50,
    status: 'Delivered',
    timeSlot: 'Today, 10:00 AM - 12:00 PM',
    paymentMethod: 'Cash on Delivery',
    placedAt: new Date(Date.now() - 1000 * 60 * 210).toISOString(),
    driver: {
      name: 'Alexandre Roy',
      phone: '+1 (555) 774-2190',
      vehicle: 'Eco Electric Van #01'
    }
  },
  {
    id: 'GF-8924',
    customer: {
      name: 'David Kim',
      email: 'david.kim@techfirm.co',
      phone: '+1 (555) 601-9982',
      address: '312 Marina Boulevard, Suite 10',
      notes: 'Reception desk accepts packages until 6 PM.'
    },
    items: [
      {
        id: 'prod-4',
        name: 'Mediterranean Sea Bass (Branzino)',
        cut: 'Butterfly Fillet (Head On)',
        price: 22.00,
        quantity: 3,
        weight: '1kg'
      }
    ],
    subtotal: 66.00,
    deliveryFee: 5.99,
    discount: 0,
    total: 71.99,
    status: 'Pending',
    timeSlot: 'Today, 5:00 PM - 7:00 PM',
    paymentMethod: 'Credit Card (Mastercard •••• 9811)',
    placedAt: new Date(Date.now() - 1000 * 60 * 8).toISOString()
  }
];

export const CATEGORIES = [
  'All',
  'Fillets & Steaks',
  'Whole Fish',
  'Shellfish & Crustaceans',
  'Sashimi Grade'
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Chef Anthony Laurent',
    title: 'Executive Chef, L’Océan Bistro',
    content: 'The quality of the Atlantic Bluefin and Hokkaido Scallops delivered by GetFish rivals what we source directly from Tokyo Toyosu Market. Packed with extreme care on shaved ice.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 2,
    name: 'Claire Davenport',
    title: 'Culinary Enthusiast, Seattle',
    content: 'Ordered King Salmon for a dinner party. The cut options let me choose exact center-cut fillets. Arrived within 90 minutes colder than my home fridge! Guests were blown away.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 3,
    name: 'Marcus & Jessica Sterling',
    title: 'Weekly Seafood Subscribers',
    content: 'Live Maine lobsters arrived lively and sweet. We stopped buying grocery store seafood completely. GetFish has changed how our family eats healthy proteins.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  }
];
