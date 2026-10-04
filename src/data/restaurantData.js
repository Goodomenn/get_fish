export const RESTAURANT_BRANCHES = [
  {
    id: 'pier-24',
    name: 'Pier 24 Flagship',
    city: 'San Francisco, CA',
    title: 'SEACLUB Flagship & Marina Vault',
    tagline: 'The Original Waterfront Flagship',
    badge: 'Flagship Haven',
    address: 'Pier 24 Marina Boulevard, Harbor View Harbor, San Francisco, CA',
    phone: '+1 (800) 732-2582',
    email: 'sf@seaclub-restaurant.com',
    hours: {
      lunch: 'Wed - Sun: 12:00 PM – 3:30 PM',
      dinner: 'Mon - Sun: 5:30 PM – 11:30 PM',
      rawBar: 'Daily: 4:00 PM – Late'
    },
    arrival: {
      car: 'Complimentary Valet at Marina Gate 2',
      yacht: 'Tender Slip 4B (VHF Ch. 68 hailing)'
    },
    coordinates: '37°47\'28"N 122°23\'19"W',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Pier%2024%20The%20Embarcadero%20San%20Francisco%20CA&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Pier+24+The+Embarcadero+San+Francisco+CA',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    description: 'Our iconic founding haven perched directly over San Francisco Bay with panoramic water views, book-matched dark marble salons, and private yacht tender slips.',
    highlights: ['Deepwater Yacht Mooring', 'Private Wine Vault', 'Heated Tideside Terrace', 'Raw Bar Omakase Counter']
  },
  {
    id: 'carmel-cove',
    name: 'Carmel Ocean Bluff',
    city: 'Carmel-by-the-Sea, CA',
    title: 'SEACLUB Pacific Bluff & Hearth',
    tagline: 'Sunset Cliffside Dining & Reserve Cellar',
    badge: 'Pacific Bluff',
    address: 'Scenic Road & 8th Avenue, Carmel-by-the-Sea, CA 93921',
    phone: '+1 (831) 624-7322',
    email: 'carmel@seaclub-restaurant.com',
    hours: {
      lunch: 'Thu - Sun: 12:00 PM – 3:00 PM',
      dinner: 'Daily: 5:00 PM – 10:30 PM',
      rawBar: 'Sunset Lounge: 4:30 PM – Late'
    },
    arrival: {
      car: 'Private Ocean Way Porte-Cochère Valet',
      yacht: 'Monterey Bay Marina Shuttle Service'
    },
    coordinates: '36°33\'18"N 121°55\'42"W',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Scenic%20Rd%20and%208th%20Ave%20Carmel-by-the-Sea%20CA&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Scenic+Rd+and+8th+Ave+Carmel-by-the-Sea+CA',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    description: 'Set on the rugged cypress-lined bluffs of Carmel Cove. Features wood-stone hearth roasted whole catches, rare Central Coast and Tuscan vintages, and breath-taking Pacific sunsets.',
    highlights: ['Pacific Sunset Views', 'Wood-Stone Fire Hearth', '800-Label Wine Cave', 'Heated Fire Pit Patios']
  },
  {
    id: 'newport-harbor',
    name: 'Newport Harbor Marina',
    city: 'Newport Beach, CA',
    title: 'SEACLUB Yacht Club & Champagne Lounge',
    tagline: 'Deepwater Mega-Yacht Pavilions & Oyster Bar',
    badge: 'Yacht Club & Marina',
    address: '2801 West Coast Highway, Newport Beach, CA 92663',
    phone: '+1 (949) 673-7322',
    email: 'newport@seaclub-restaurant.com',
    hours: {
      lunch: 'Fri - Sun: 11:30 AM – 3:30 PM',
      dinner: 'Mon - Sun: 5:00 PM – 11:00 PM',
      rawBar: 'Harbor Lounge: 3:00 PM – 1:00 AM'
    },
    arrival: {
      car: 'Complimentary Marina Promenade Valet',
      yacht: 'Dock & Dine Mega-Yacht Slip 12 (VHF Ch. 71)'
    },
    coordinates: '33°36\'54"N 117°55\'18"W',
    mapEmbedUrl: 'https://maps.google.com/maps?q=2801%20W%20Coast%20Hwy%20Newport%20Beach%20CA&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=2801+W+Coast+Hwy+Newport+Beach+CA',
    image: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&w=900&q=80',
    description: 'Our luxurious southern California waterfront retreat with private mega-yacht moorings, world-class caviar service, live oyster shucking theatre, and open-air harbor cabanas.',
    highlights: ['Mega-Yacht Dock & Dine', 'Dom Pérignon Cabanas', 'Live Omakase Oyster Theater', 'Late-Night Harbor Lounge']
  }
];

export const RESTAURANT_INFO = {
  name: 'SEACLUB',
  fullName: 'SEACLUB Fish Restaurant & Wine Cellar',
  tagline: 'Delicious food and fine wine',
  subHeading: 'seafood + wine',
  address: 'Pier 24 Marina Boulevard, Harbor View Harbor',
  phone: '+1 (800) 732-2582',
  email: 'reservations@seaclub-restaurant.com',
  branches: RESTAURANT_BRANCHES,
  hours: {
    lunch: 'Wed - Sun: 12:00 PM – 3:30 PM',
    dinner: 'Mon - Sun: 5:30 PM – 11:30 PM',
    rawBar: 'Daily: 4:00 PM – Late'
  }
};

export const MENU_CATEGORIES = [
  'All',
  'Raw Bar & Oysters',
  'Chef Specials',
  'Fish Mains',
  'Seafood Pastas',
  'Fine Wine Cellar'
];

export const RESTAURANT_DISHES = [
  {
    id: 'dish-1',
    name: 'Dressed Fine de Claire Oysters',
    frenchName: 'Huîtres Dégustation sur Glace',
    category: 'Raw Bar & Oysters',
    price: 25.00,
    priceNote: 'Half Dozen (6 pcs)',
    isHeroFeatured: true,
    badge: 'Signature Platter',
    image: 'https://images.unsplash.com/photo-1559742811-82286364ceaf?auto=format&fit=crop&w=800&q=80',
    description: 'Freshly shucked premium French Atlantic oysters presented on a bed of crushed glacier ice. Served with shallot-champagne mignonette, citrus ponzu, yuzu pearls, and fresh lime slices.',
    ingredients: ['Fine de Claire Oysters', 'Shallot Mignonette', 'Fresh Lime & Lemon', 'Yuzu Pearls', 'Herb Pepper'],
    pairingWine: 'Chablis Premier Cru 2021 or Tignanello 2019',
    prepTime: '8 mins',
    dietary: ['Gluten-Free', 'Wild Harvested', 'Raw Bar']
  },
  {
    id: 'dish-2',
    name: 'Bluefin Tuna Tartare & Caviar',
    frenchName: 'Tartare de Thon Rouge et Caviar Royal',
    category: 'Raw Bar & Oysters',
    price: 32.00,
    priceNote: 'Starter Course',
    badge: 'Chef Choice',
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44a0349?auto=format&fit=crop&w=800&q=80',
    description: 'Line-caught Atlantic bluefin tuna hand-cut and seasoned with white truffle essence, avocado purée, crispy shallot crumble, topped with 10g of Royal Oscietra caviar and served with grilled brioche.',
    ingredients: ['Bluefin Tuna Loin', 'Oscietra Caviar', 'Hass Avocado', 'White Truffle Oil', 'Brioche Toast'],
    pairingWine: 'Dom Pérignon Vintage 2013',
    prepTime: '12 mins',
    dietary: ['Sashimi Grade', 'Sustainable Sourced']
  },
  {
    id: 'dish-3',
    name: 'Yellowtail Hamachi Crudo',
    frenchName: 'Crudo de Sériole du Japon',
    category: 'Raw Bar & Oysters',
    price: 28.00,
    priceNote: 'Raw Bar',
    badge: 'Seasonal Rare',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    description: 'Delicate slices of Kagoshima yellowtail hamachi garnished with shaved black winter truffles, serrano chili slices, micro cilantro, and white soy yuzu kosho vinaigrette.',
    ingredients: ['Hamachi Loin', 'Black Truffle', 'Serrano Chili', 'Yuzu Kosho', 'Microgreens'],
    pairingWine: 'Sancerre Blanc Terroir 2022',
    prepTime: '10 mins',
    dietary: ['Gluten-Free', 'High Omega-3']
  },
  {
    id: 'dish-4',
    name: 'Wood-Fired Mediterranean Branzino',
    frenchName: 'Bar de Ligne Entier Rôti au Four',
    category: 'Fish Mains',
    price: 42.00,
    priceNote: 'Whole Fish (approx 800g)',
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    description: 'Whole wild Aegean sea bass baked in our 800° wood-fired stone oven. Stuffed with fresh thyme, rosemary, garlic cloves, and lemon wheels, finished with Greek extra virgin olive oil and crispy capers.',
    ingredients: ['Whole Aegean Sea Bass', 'Fresh Herbs', 'Pantelleria Capers', 'Garlic', 'Cold-Pressed EVOO'],
    pairingWine: 'Vermentino di Bolgheri 2022',
    prepTime: '22 mins',
    dietary: ['Gluten-Free', 'Wood Fired']
  },
  {
    id: 'dish-5',
    name: 'Wild Alaskan King Salmon Fillet',
    frenchName: 'Pavé de Saumon Royal au Beurre d’Aneth',
    category: 'Fish Mains',
    price: 38.00,
    priceNote: 'Chef Main Course',
    badge: 'Wild Caught',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    description: 'Crispy skin pan-roasted King salmon fillet from Bristol Bay. Resting upon butter-braised baby leeks and fingerling potato mousseline, finished with a champagne dill emulsion.',
    ingredients: ['King Salmon', 'Braised Leeks', 'Potato Purée', 'Champagne Reduction', 'Fresh Dill'],
    pairingWine: 'Meursault Domaine 2020',
    prepTime: '18 mins',
    dietary: ['Gluten-Free']
  },
  {
    id: 'dish-6',
    name: 'Chilean Sea Bass in Miso Dashi',
    frenchName: 'Légine Australe Caramélisée au Miso',
    category: 'Chef Specials',
    price: 48.00,
    priceNote: 'Signature Dish',
    badge: "Chef's Masterpiece",
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    description: 'Glacier 51 Chilean sea bass marinated for 48 hours in Kyoto sweet saikyo miso. Caramelized under salamander grill and served in a fragrant shiitake dashi broth with lotus root crisps.',
    ingredients: ['Chilean Sea Bass', 'Saikyo Sweet Miso', 'Shiitake Dashi', 'Baby Bok Choy', 'Lotus Crisps'],
    pairingWine: 'Puligny-Montrachet 2021',
    prepTime: '20 mins',
    dietary: ['Chef Signature']
  },
  {
    id: 'dish-7',
    name: 'Squid Ink Tagliolini & Colossal Scallops',
    frenchName: 'Tagliolini à l’Encre de Seiche et Noix de St-Jacques',
    category: 'Seafood Pastas',
    price: 36.00,
    priceNote: 'Handmade Pasta',
    isHeroFeatured: true,
    badge: 'House Specialty',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80',
    description: 'Handcrafted fresh squid ink pasta ribbons tossed with colossal Hokkaido diver scallops, tiger prawns, sweet datterini tomatoes, white wine garlic fumet, and finished with fresh garden basil.',
    ingredients: ['Housemade Squid Ink Pasta', 'Hokkaido Scallops', 'Wild Tiger Prawns', 'Datterini Tomatoes', 'Calabrian Chili'],
    pairingWine: 'Etna Bianco DOC 2022',
    prepTime: '16 mins',
    dietary: ['Handmade Fresh Pasta']
  },
  {
    id: 'dish-8',
    name: 'Dover Sole Meunière Table-Side',
    frenchName: 'Sole Meunière Façon Traditionnelle',
    category: 'Chef Specials',
    price: 54.00,
    priceNote: 'Classic Tableside Service',
    badge: 'Gastronomy Classic',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    description: 'Wild North Sea Dover Sole lightly dusted in flour, gently pan-seared in foaming browned butter (beurre noisette) with fresh lemon juice and chopped flat-leaf parsley. Filleted table-side by our head maître.',
    ingredients: ['Wild Dover Sole', 'Normandy Butter', 'Fresh Lemon Juice', 'Capers', 'Parsley'],
    pairingWine: 'Chassagne-Montrachet 1er Cru',
    prepTime: '25 mins',
    dietary: ['French Culinary Classic']
  },
  {
    id: 'dish-9',
    name: 'Maine Lobster Bisque & Ravioli',
    frenchName: 'Bisque de Homard et Ravioles de Crabe',
    category: 'Seafood Pastas',
    price: 34.00,
    priceNote: 'Entrée Course',
    badge: 'Comfort Luxury',
    image: 'https://images.unsplash.com/photo-1559742811-82286364ceaf?auto=format&fit=crop&w=800&q=80',
    description: 'Velvety slow-simmered Maine lobster bisque infused with cognac and tarragon, poured over house-made artisanal crab and mascarpone ravioli with chive cream.',
    ingredients: ['Poached Maine Lobster', 'Cognac Bisque', 'Mascarpone Ravioli', 'Sea Tarragon', 'Cream'],
    pairingWine: 'Condrieu Viognier 2021',
    prepTime: '14 mins',
    dietary: ['House Favorite']
  },
  {
    id: 'dish-10',
    name: 'Tignanello Toscana IGT 2019',
    frenchName: 'Marchesi Antinori, Tenuta Tignanello',
    category: 'Fine Wine Cellar',
    price: 300.00,
    priceNote: 'Bottle 750ml',
    isHeroFeatured: true,
    badge: 'Sommelier Reserve 98pts',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    description: 'Legendary Super Tuscan masterpiece crafted from Sangiovese, Cabernet Sauvignon, and Cabernet Franc. Deep ruby red, aromas of ripe red fruits, vanilla, and sweet spices. Sublime pairing with our rich fish dishes and raw bar.',
    ingredients: ['Sangiovese 80%', 'Cabernet Sauvignon 15%', 'Cabernet Franc 5%', 'French Oak 14 Months'],
    pairingWine: 'Pairs with Dressed Oysters, Tuna Tartare & Wood-Fired Branzino',
    prepTime: 'Cellar Temp: 16°C',
    dietary: ['Organic Certified', 'Exclusive Allocation']
  },
  {
    id: 'dish-11',
    name: 'Chablis Grand Cru Les Clos 2020',
    frenchName: 'Domaine Christian Moreau Père & Fils',
    category: 'Fine Wine Cellar',
    price: 185.00,
    priceNote: 'Bottle 750ml',
    badge: 'Iconic Mineral White',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    description: 'The pinnacle of Chablis terroir. Kimmeridgian limestone minerality, vibrant citrus zest, crushed sea shells, and intense saline elegance that elevates freshly shucked oysters.',
    ingredients: ['100% Chardonnay', 'Limestone Terroir', 'Natural Fermentation'],
    pairingWine: 'Ultimate match for Fresh Oysters & Hamachi Crudo',
    prepTime: 'Cellar Temp: 10°C',
    dietary: ['Estate Bottled']
  },
  {
    id: 'dish-12',
    name: 'Dom Pérignon Vintage Champagne 2013',
    frenchName: 'Champagne Moët & Chandon',
    category: 'Fine Wine Cellar',
    price: 350.00,
    priceNote: 'Bottle 750ml',
    badge: 'Prestige Cuvée',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    description: 'Remarkable harmony and silky precision. Notes of mirabelle plum, fresh cardamom, eucalyptus, and toasted brioche with a persistent, refined bubble bead.',
    ingredients: ['Pinot Noir & Chardonnay', 'Aged 9 Years on Lees'],
    pairingWine: 'Pairs with Caviar, Oysters, and Lobster Ravioli',
    prepTime: 'Chilled: 8°C',
    dietary: ['Prestige Cuvée']
  }
];

export const INITIAL_RESERVATIONS = [
  {
    id: 'RES-8491',
    guestName: 'Lord & Lady Alistair',
    email: 'alistair.p@luxury.co.uk',
    phone: '+1 (555) 392-1092',
    partySize: 4,
    date: 'Tonight',
    time: '19:30',
    seatingArea: 'Ocean Terrace',
    status: 'Confirmed',
    notes: 'Anniversary celebration. Please prepare Sommelier wine pairing and terrace heater.',
    createdAt: new Date(Date.now() - 1000 * 60 * 120).toISOString()
  },
  {
    id: 'RES-8492',
    guestName: 'Marcus Vance',
    email: 'm.vance@oceanview.org',
    phone: '+1 (555) 489-3210',
    partySize: 2,
    date: 'Tonight',
    time: '20:00',
    seatingArea: "Chef's Counter",
    status: 'Confirmed',
    notes: 'Prefers raw bar omakase experience.',
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString()
  },
  {
    id: 'RES-8493',
    guestName: 'Elena Rostova & Guests',
    email: 'elena.rostova@gmail.com',
    phone: '+1 (555) 872-4419',
    partySize: 6,
    date: 'Tonight',
    time: '20:30',
    seatingArea: 'Private Wine Vault',
    status: 'Seated',
    notes: 'Corporate degustation dinner. Pre-ordered Tignanello 2019 and Dressed Oysters platter.',
    createdAt: new Date(Date.now() - 1000 * 60 * 240).toISOString()
  },
  {
    id: 'RES-8494',
    guestName: 'Jonathan Davis',
    email: 'j.davis@investments.com',
    phone: '+1 (555) 601-9982',
    partySize: 2,
    date: 'Tomorrow',
    time: '19:00',
    seatingArea: 'Main Dining Salon',
    status: 'Pending',
    notes: 'Window table requested if available.',
    createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString()
  }
];

export const UPCOMING_EVENTS = [
  {
    id: 'evt-1',
    title: 'Oysters & Champagne Masterclass',
    date: 'Every Thursday Evening',
    time: '18:00 – 20:30',
    price: '$120 per guest',
    description: 'Executive Chef guided shucking experience tasting 6 distinct oceanic oyster varieties paired with Grand Cru champagnes.',
    tag: 'Tasting Experience'
  },
  {
    id: 'evt-2',
    title: 'Super Tuscan Wine Maker Gala',
    date: 'Next Saturday, Oct 14',
    time: '19:00 – 22:30',
    price: '$280 per guest',
    description: 'A 5-course wild fish gastronomic dinner with special vertical vintages presented by Marchesi Antinori sommeliers.',
    tag: 'Exclusive Evening'
  },
  {
    id: 'evt-3',
    title: 'Sunday Seafood & Live Jazz Brunch',
    date: 'Sundays',
    time: '12:00 – 16:00',
    price: 'À La Carte & Free-Flow',
    description: 'Harbor breezes, chilled crudo towers, wood-fired fish and soothing live acoustic jazz on the ocean terrace.',
    tag: 'Weekend Tradition'
  }
];
