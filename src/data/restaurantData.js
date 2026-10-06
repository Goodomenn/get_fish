export const RESTAURANT_BRANCHES = [
  {
    id: 'bahir-dar',
    name: 'Bahir Dar Flagship (ባህር ዳር)',
    city: 'Bahir Dar, Ethiopia',
    title: 'Gech Fish Lake Tana Flagship (ጌች ዓሳ)',
    tagline: 'Fresh Lake Tana Catch & Waterfront Dining',
    badge: 'Lake Tana Flagship',
    address: 'Kebele 13, Near St. Michael Church, Bahir Dar',
    phone: '+251 91 800 1234',
    email: 'bahirdar@gechfish-restaurant.com',
    hours: {
      lunch: 'Daily: 11:30 AM – 4:00 PM',
      dinner: 'Daily: 5:00 PM – 11:00 PM',
      rawBar: 'Fresh Fish Bar: 10:00 AM – Late'
    },
    arrival: {
      car: 'Dedicated Restaurant Parking at Kebele 13',
      yacht: 'Lake Tana Shore Access / Boat Point'
    },
    coordinates: '11°35\'38"N 37°23\'24"E',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Bahir%20Dar%20Ethiopia&t=&z=14&ie=UTF8&iwloc=&output=embed',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Bahir+Dar+Ethiopia',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    description: 'Our founding flagship located in Bahir Dar Kebele 13 near St. Michael Church. Enjoy the freshest Lake Tana fish, authentic Fish Lebleb, whole roasted fish, and pleasant open-air dining.',
    highlights: ['Lake Tana Fresh Daily Fish', 'Signature Fish Lebleb', 'Outdoor Garden & Breeze', 'Live Fish Grilling Station']
  },
  {
    id: 'addis-summit',
    name: 'Addis Ababa - Summit (ሰሚት)',
    city: 'Addis Ababa, Ethiopia',
    title: 'Gech Fish Summit Branch (ጌች ዓሳ)',
    tagline: 'Authentic Fish Tibs, Lebleb & Family Dining',
    badge: 'Summit Branch',
    address: 'Summit Area, Behind Chanoli, Addis Ababa',
    phone: '+251 91 122 3344',
    email: 'summit@gechfish-restaurant.com',
    hours: {
      lunch: 'Daily: 11:30 AM – 4:00 PM',
      dinner: 'Daily: 5:00 PM – 11:00 PM',
      rawBar: 'Kitchen: 11:00 AM – 11:30 PM'
    },
    arrival: {
      car: 'Convenient Parking behind Chanoli',
      yacht: 'Summit Main Road Access'
    },
    coordinates: '9°01\'23"N 38°51\'45"E',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Summit%20Addis%20Ababa%20Ethiopia&t=&z=14&ie=UTF8&iwloc=&output=embed',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Summit+Addis+Ababa+Ethiopia',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    description: 'Our beloved capital city location in Summit behind Chanoli. Known across Addis Ababa for sizzling Fish Tibs, rich Fish Lebleb, Fish Combo platters, and warm hospitable dining.',
    highlights: ['Signature Fish Lebleb & Tibs', 'Special Fish Combos', 'Spacious Family Seating', 'VIP Dining Area']
  }
];

export const RESTAURANT_INFO = {
  name: 'Gech Fish',
  fullName: 'Gech Fish Restaurant (ጌች ዓሳ)',
  tagline: 'Delicious fresh fish and authentic dining',
  subHeading: 'ጌች አሳ • fresh fish',
  address: 'Bahir Dar (Kebele 13) & Addis Ababa (Summit, Behind Chanoli)',
  phone: '+251 91 800 1234 / +251 91 122 3344',
  email: 'reservations@gechfish-restaurant.com',
  branches: RESTAURANT_BRANCHES,
  hours: {
    lunch: 'Wed - Sun: 12:00 PM – 3:30 PM',
    dinner: 'Mon - Sun: 5:30 PM – 11:30 PM',
    rawBar: 'Daily: 4:00 PM – Late'
  }
};

export const MENU_CATEGORIES = [
  "All",
  "Fish Mains",
  "Traditional",
  "Fish Burger and Pizza",
  "Salad",
  "Soup",
  "Juice",
  "Shake",
  "Mojito",
  "Drinks",
  "Hot Drinks",
  "Extras",
  "Chef Specials",
  "Fine Wine Cellar"
];

export const CANONICAL_CATEGORIES = [
  "Fish Mains",
  "Traditional",
  "Fish Burger and Pizza",
  "Salad",
  "Soup",
  "Juice",
  "Shake",
  "Mojito",
  "Drinks",
  "Hot Drinks",
  "Extras",
  "Chef Specials",
  "Fine Wine Cellar"
];

export function normalizeCategory(cat) {
  if (!cat) return '';
  return cat
    .toString()
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[\s\-_]+/g, ' ');
}

export function areCategoriesEqual(a, b) {
  return normalizeCategory(a) === normalizeCategory(b);
}

export function getCanonicalCategoryName(cat) {
  const match = CANONICAL_CATEGORIES.find((c) => areCategoriesEqual(c, cat));
  return match || (cat ? cat.trim() : '');
}

export function deduplicateCategories(cats) {
  const result = [];
  for (const c of (cats || [])) {
    if (!c || c === 'All') continue;
    const canonical = getCanonicalCategoryName(c);
    if (!result.some((existing) => areCategoriesEqual(existing, canonical))) {
      result.push(canonical);
    }
  }
  return result;
}



export const RESTAURANT_DISHES = [
  {
    "id": "dish-fish-1",
    "name": "Fish Lebleb (አሳ ለበለብ)",
    "frenchName": "አሳ ለበለብ / Fish Lebleb",
    "category": "Fish Mains",
    "price": 1200,
    "priceNote": "Portion with Injera",
    "badge": "Ethiopian Classic",
    "image": null,
    "description": "Fresh diced fish fillet lightly cooked in hot spiced oil with garlic, ginger, rosemary, and green chilies, served with fresh injera.",
    "ingredients": [
      "Fresh Fish Fillet",
      "Garlic",
      "Ginger",
      "Green Chilies",
      "Ethiopian Spiced Oil",
      "Rosemary",
      "Injera"
    ],
    "pairingWine": "Crisp White Wine or Draft Beer",
    "prepTime": "15 mins",
    "dietary": [
      "Daily Catch",
      "Traditional Specialty"
    ]
  },
  {
    "id": "dish-fish-2",
    "name": "Fish Wot (አሳ ወጥ)",
    "frenchName": "አሳ ወጥ / Fish Wet",
    "category": "Fish Mains",
    "price": 1100,
    "priceNote": "Portion with Injera",
    "badge": "Rich & Spicy",
    "image": null,
    "description": "Traditional Ethiopian spicy fish stew simmered in slow-cooked berbere sauce, caramelized onions, garlic, and wild herbs.",
    "ingredients": [
      "Fresh Fish Fillet",
      "Berbere Sauce",
      "Caramelized Onions",
      "Garlic",
      "Korerima (Cardamom)",
      "Injera"
    ],
    "pairingWine": "Bold Red Wine or Cold Lager",
    "prepTime": "20 mins",
    "dietary": [
      "Traditional Stew",
      "Spicy"
    ]
  },
  {
    "id": "dish-fish-3",
    "name": "Fish Dulet (አሳ ዱለት)",
    "frenchName": "አሳ ዱለት / Fish Dulet",
    "category": "Fish Mains",
    "price": 1100,
    "priceNote": "Portion with Injera",
    "badge": "House Favorite",
    "image": null,
    "description": "Finely minced fresh fish seasoned with mitmita, diced jalapeño peppers, red onions, garlic, and seasoned Ethiopian spiced oil.",
    "ingredients": [
      "Minced Fish Fillet",
      "Mitmita Spice",
      "Diced Jalapeños",
      "Red Onions",
      "Garlic",
      "Spiced Oil"
    ],
    "pairingWine": "Sauvignon Blanc or Chilled Lager",
    "prepTime": "15 mins",
    "dietary": [
      "Minced Specialty",
      "Spicy"
    ]
  },
  {
    "id": "dish-fish-4",
    "name": "Fish Firfir (አሳ ፍርፍር)",
    "frenchName": "አሳ ፍርፍር / Fish Firfir",
    "category": "Fish Mains",
    "price": 1100,
    "priceNote": "Portion with Injera",
    "badge": "Savory Classic",
    "image": null,
    "description": "Torn pieces of soft injera simmered into savory fish stew, sautéed with berbere, garlic, and fresh herbs.",
    "ingredients": [
      "Fresh Fish",
      "Torn Injera",
      "Berbere Sauce",
      "Garlic",
      "Fresh Herbs",
      "Green Pepper"
    ],
    "pairingWine": "Cold Draft Beer",
    "prepTime": "15 mins",
    "dietary": [
      "Traditional Firfir",
      "Hearty"
    ]
  },
  {
    "id": "dish-fish-5",
    "name": "Fish Kitfo (አሳ ክትፎ)",
    "frenchName": "አሳ ክትፎ / Fish Kitfo",
    "category": "Fish Mains",
    "price": 1100,
    "priceNote": "Portion with Injera / Kocho",
    "badge": "Chef's Cut",
    "image": null,
    "description": "Delicately minced fresh fish fillet marinated in fragrant mitmita spice and seasoned herb oil, served with chili and greens.",
    "ingredients": [
      "Finely Minced Fish",
      "Mitmita Spice",
      "Seasoned Spiced Oil",
      "Ayib (Cottage Cheese)",
      "Gomen"
    ],
    "pairingWine": "Crisp Chilled White Wine",
    "prepTime": "10 mins",
    "dietary": [
      "Delicacy",
      "High Protein"
    ]
  },
  {
    "id": "dish-fish-6",
    "name": "Special Fish Lebleb (ስፔሻል አሳ ለበለብ)",
    "frenchName": "ስፔሻል አሳ ለበለብ / Spiecal Fish Lebeleb",
    "category": "Fish Mains",
    "price": 1300,
    "priceNote": "Portion with Injera",
    "badge": "Special Lebleb",
    "image": null,
    "description": "Tender fresh Lake Tana fish sautéed lightly in aromatic spiced oil with fresh garlic, sliced green chilies, and Ethiopian herbs served warm with injera.",
    "ingredients": [
      "Fresh Fish Fillet",
      "Garlic",
      "Green Chilies",
      "Ethiopian Spiced Oil",
      "Rosemary",
      "Fresh Lemon"
    ],
    "pairingWine": "Crisp White Wine or Draft Beer",
    "prepTime": "15 mins",
    "dietary": [
      "Fresh Daily Catch",
      "Ethiopian Traditional"
    ]
  },
  {
    "id": "dish-fish-7",
    "name": "Grilled Fish (ግሪልድ አሳ)",
    "frenchName": "ግሪልድ አሳ / Griled Fish",
    "category": "Fish Mains",
    "price": 1300,
    "priceNote": "Whole / Cut",
    "badge": "Charcoal Grilled",
    "image": null,
    "description": "Fresh seasonal fish marinated with garlic, ginger, and wild herbs, flame-grilled over open coals to crispy skin perfection.",
    "ingredients": [
      "Fresh Fish",
      "Garlic & Ginger Marinade",
      "Rosemary",
      "Lemon Wedges",
      "Mitmita"
    ],
    "pairingWine": "Chilled Sauvignon Blanc",
    "prepTime": "20 mins",
    "dietary": [
      "Charcoal Grilled",
      "High Protein"
    ]
  },
  {
    "id": "dish-fish-8",
    "name": "Half Asa Dulet & Half Firfir (ሃፍ አሳ ዱለት ሃፍ ፍርፍር)",
    "frenchName": "ሃፍ አሳ ዱለት ሃፍ ፍርፍር / Half Asa Dulet Half Firfir",
    "category": "Fish Mains",
    "price": 1300,
    "priceNote": "Half & Half Platter",
    "badge": "Dulet & Firfir Combo",
    "image": null,
    "description": "Signature duo platter featuring minced spicy fish dulet sautéed with onions and jalapeños paired with savory berbere fish firfir.",
    "ingredients": [
      "Minced Fish (Dulet)",
      "Torn Injera (Firfir)",
      "Berbere Sauce",
      "Jalapeño Peppers",
      "Red Onions"
    ],
    "pairingWine": "Draft Beer or Dry White Wine",
    "prepTime": "18 mins",
    "dietary": [
      "Combo Platter",
      "Authentic"
    ]
  },
  {
    "id": "dish-fish-9",
    "name": "Half Asa Lebleb & Half Firfir (ሃፍ አሳ ለበለብ ሃፍ አሳ ፍርፍር)",
    "frenchName": "ሃፍ አሳ ለበለብ ሃፍ አሳ ፍርፍር / Half Asa Lebleb Half Firfir",
    "category": "Fish Mains",
    "price": 1300,
    "priceNote": "Half & Half Platter",
    "badge": "Lebleb & Firfir Combo",
    "image": null,
    "description": "Flavorful combination of pan-seared warm fish lebleb and richly seasoned fish firfir soaked in spiced berbere broth.",
    "ingredients": [
      "Fish Fillet Lebleb",
      "Injera Firfir",
      "Ethiopian Spices",
      "Garlic",
      "Green Chilies"
    ],
    "pairingWine": "Pinot Grigio or Local Beer",
    "prepTime": "18 mins",
    "dietary": [
      "Combo Platter",
      "Chef Recommended"
    ]
  },
  {
    "id": "dish-fish-10",
    "name": "Half Dulet & Half Wot (ሃፍ ዱለት ሃፍ ወጥ)",
    "frenchName": "ሃፍ ዱለት ሃፍ ወጥ / Half Dulet Half Wet",
    "category": "Fish Mains",
    "price": 1300,
    "priceNote": "Half & Half Platter",
    "badge": "Dulet & Wot Duo",
    "image": null,
    "description": "Half portion of seasoned minced fish dulet paired with half portion of slow-simmered spicy Ethiopian fish stew (wot).",
    "ingredients": [
      "Minced Fish Dulet",
      "Fish Wot (Stew)",
      "Berbere Paste",
      "Garlic",
      "Spiced Butter Essence",
      "Injera"
    ],
    "pairingWine": "Chilled Rosé or St. George Beer",
    "prepTime": "18 mins",
    "dietary": [
      "Spicy Duo",
      "Traditional"
    ]
  },
  {
    "id": "dish-fish-11",
    "name": "Half Lebleb & Half Wot (ሃፍ ለበለብ ሃፍ ወጥ)",
    "frenchName": "ሃፍ ለበለብ ሃፍ ወጥ / Half Lebleb Half Wet",
    "category": "Fish Mains",
    "price": 1300,
    "priceNote": "Half & Half Platter",
    "badge": "Lebleb & Wot Duo",
    "image": null,
    "description": "Sautéed garlicky fish lebleb alongside a hearty serving of rich berbere-infused fish stew served with fresh rolled injera.",
    "ingredients": [
      "Fish Lebleb Fillet",
      "Fish Wot Stew",
      "Berbere",
      "Garlic",
      "Rosemary",
      "Injera"
    ],
    "pairingWine": "Chardonnay or Cold Draft",
    "prepTime": "18 mins",
    "dietary": [
      "Rich & Savory",
      "Combo Special"
    ]
  },
  {
    "id": "dish-fish-12",
    "name": "Asa Gulash (አሳ ጉላሽ)",
    "frenchName": "አሳ ጉላሽ / Asa Gulash",
    "category": "Fish Mains",
    "price": 1200,
    "priceNote": "Portion with Bread or Injera",
    "badge": "House Gulash",
    "image": null,
    "description": "Tender cubes of fresh fish fillet simmered with tomatoes, bell peppers, onions, and mild spices in a thick savory sauce.",
    "ingredients": [
      "Fish Cubes",
      "Fresh Tomato Reduction",
      "Sweet Bell Peppers",
      "Onions",
      "Garlic",
      "Herbs"
    ],
    "pairingWine": "Sauvignon Blanc",
    "prepTime": "15 mins",
    "dietary": [
      "Mild & Savory",
      "Family Favorite"
    ]
  },
  {
    "id": "dish-fish-13",
    "name": "Asa Kotelet (አሳ ኮተሌት)",
    "frenchName": "አሳ ኮተሌት / Asa Kotelet",
    "category": "Fish Mains",
    "price": 1200,
    "priceNote": "Crispy Cutlet Platter",
    "badge": "Crispy Cutlet",
    "image": null,
    "description": "Golden breaded and seasoned crispy fish cutlet fried to a crunchy finish, accompanied by fresh lemon and house dipping sauce.",
    "ingredients": [
      "Fresh Fish Fillet",
      "Golden Breadcrumbs",
      "Garlic & Herb Seasoning",
      "Lemon",
      "House Tartar/Awaze"
    ],
    "pairingWine": "Chablis or Pilsner",
    "prepTime": "15 mins",
    "dietary": [
      "Crispy Fried",
      "Popular"
    ]
  },
  {
    "id": "dish-fish-14",
    "name": "Special Combo (የቤቱ ስፔሻል)",
    "frenchName": "የቤቱ ስፔሻል / Spiecal Combo",
    "category": "Fish Mains",
    "price": 3600,
    "priceNote": "Grand Feast for 3-4",
    "badge": "Grand Feast 3-4 Pax",
    "image": null,
    "description": "The ultimate restaurant centerpiece platter with assorted fish delicacies: Dulet, Lebleb, Gulash, Cotelet, Fried Fish, and sides.",
    "ingredients": [
      "Assorted Fresh Fish Cuts",
      "Fish Dulet",
      "Fish Lebleb",
      "Fish Gulash",
      "Cotelet",
      "Injera & Bread"
    ],
    "pairingWine": "Tignanello Toscana or Bottle Champagne",
    "prepTime": "25 mins",
    "dietary": [
      "Grand Platter",
      "Sharing Feast"
    ]
  },
  {
    "id": "dish-fish-15",
    "name": "Normal Combo (ኖርማል ኮምቦ)",
    "frenchName": "ኖርማል ኮምቦ / Normal Combo",
    "category": "Fish Mains",
    "price": 3000,
    "priceNote": "Sharing Platter for 2-3",
    "badge": "Sharing Platter 2-3 Pax",
    "image": null,
    "description": "Generous sharing platter offering three chef favorite fish preparations served family style on fresh Ethiopian injera.",
    "ingredients": [
      "Fish Tibs",
      "Fish Dulet",
      "Fish Wot / Firfir",
      "Fresh Chilies",
      "Injera Platter"
    ],
    "pairingWine": "Chilled White Wine or Premium Beer",
    "prepTime": "22 mins",
    "dietary": [
      "Sharing Platter",
      "Family Style"
    ]
  },
  {
    "id": "dish-fish-16",
    "name": "Nile Perch (1 Kilo) (ናይል ፐርች)",
    "frenchName": "ናይል ፐርች / Nile Perche 1 Kilo",
    "category": "Fish Mains",
    "price": 2500,
    "priceNote": "Per 1 Kilogram",
    "badge": "1kg Lake Tana Perch",
    "image": null,
    "description": "One full kilogram of premium Nile Perch prepared whole or cut to your preference: deep-fried, pan-roasted, or spiced grilled.",
    "ingredients": [
      "Fresh Nile Perch 1kg",
      "Garlic Marinade",
      "Ethiopian Seasonings",
      "Lemon Slices",
      "Dipping Sauces"
    ],
    "pairingWine": "Chablis Grand Cru or Dry Riesling",
    "prepTime": "25 mins",
    "dietary": [
      "Whole Fish",
      "Fresh Catch"
    ]
  },
  {
    "id": "dish-fish-17",
    "name": "Fish Koroso Full (አሳ ቆሮሶ ሙሉ)",
    "frenchName": "አሳ ቆሮሶ ሙሉ / Fish Koroso Full",
    "category": "Fish Mains",
    "price": 3000,
    "priceNote": "Full Whole Tilapia",
    "badge": "Full Whole Catch",
    "image": null,
    "description": "Whole fresh Lake Tana Koroso (Tilapia) scored and seasoned with garlic and mitmita, crisp-fried whole to golden crunch.",
    "ingredients": [
      "Whole Koroso Fish",
      "Spiced Batter Coating",
      "Fresh Lemon",
      "Awaze Dip",
      "Hot Peppers"
    ],
    "pairingWine": "Crisp Sauvignon Blanc",
    "prepTime": "20 mins",
    "dietary": [
      "Whole Fried Fish",
      "Lake Catch"
    ]
  },
  {
    "id": "dish-fish-18",
    "name": "Fish Tibs Half (አሳ ጥብስ ግማሽ)",
    "frenchName": "አሳ ጥብስ ግማሽ / Fish Tebit Half",
    "category": "Fish Mains",
    "price": 2000,
    "priceNote": "Half Order",
    "badge": "Half Tibs Portion",
    "image": null,
    "description": "Half portion of tender fish chunks pan-sautéed with onions, rosemary, jalapeños, and spiced clarified butter/oil.",
    "ingredients": [
      "Fresh Fish Cubes",
      "Sautéed Onions",
      "Jalapeño Peppers",
      "Rosemary",
      "Garlic"
    ],
    "pairingWine": "Light Red or Craft Beer",
    "prepTime": "15 mins",
    "dietary": [
      "Pan Sautéed",
      "Popular"
    ]
  },
  {
    "id": "dish-fish-19",
    "name": "Fish Koroso Half (አሳ ቆሮሶ ግማሽ)",
    "frenchName": "አሳ ቆሮሶ ግማሽ / Fish Koroso Half",
    "category": "Fish Mains",
    "price": 1500,
    "priceNote": "Half Portion",
    "badge": "Half Koroso Catch",
    "image": null,
    "description": "Half portion of seasoned crispy fried Lake Tana Koroso tilapia served with lemon wedges and spicy dipping condiment.",
    "ingredients": [
      "Half Koroso Tilapia",
      "Garlic & Spices",
      "Lemon",
      "Mitmita Seasoning"
    ],
    "pairingWine": "Cold Draught Beer",
    "prepTime": "15 mins",
    "dietary": [
      "Crispy Fried",
      "Traditional"
    ]
  },
  {
    "id": "dish-fish-20",
    "name": "Fish Shekla Mulu (አሳ ሸክላ ሙሉ)",
    "frenchName": "አሳ ሸክላ ሙሉ / Fish Shekla Mulu",
    "category": "Fish Mains",
    "price": 3000,
    "priceNote": "Full Clay Pot Sizzler",
    "badge": "Clay Pot Sizzler (Full)",
    "image": null,
    "description": "Full portion of fresh fish chunks served sizzling hot over live coals in a traditional Ethiopian terracotta clay dish (shekla).",
    "ingredients": [
      "Fresh Fish Cuts",
      "Caramelized Onions",
      "Rosemary Sprigs",
      "Green Chilies",
      "Kibe Spiced Oil"
    ],
    "pairingWine": "Pinot Noir or Tuscan Red",
    "prepTime": "22 mins",
    "dietary": [
      "Clay Pot Sizzler",
      "Chef Signature"
    ]
  },
  {
    "id": "dish-fish-21",
    "name": "Fish Shekla Half (አሳ ሸክላ ግማሽ)",
    "frenchName": "አሳ ሸክላ ግማሽ / Fish Shekla Half",
    "category": "Fish Mains",
    "price": 1500,
    "priceNote": "Half Clay Pot Sizzler",
    "badge": "Clay Pot Sizzler (Half)",
    "image": null,
    "description": "Half portion of aromatic fish sautéed with rosemary and garlic, served sizzling on a traditional charcoal clay stove.",
    "ingredients": [
      "Fish Fillet Chunks",
      "Onions",
      "Rosemary",
      "Green Pepper",
      "Spiced Oil"
    ],
    "pairingWine": "Chilled Beer or Rosé",
    "prepTime": "18 mins",
    "dietary": [
      "Clay Pot Sizzler",
      "Sizzling Hot"
    ]
  },
  {
    "id": "dish-fish-22",
    "name": "Full Nile Perch Zilzil Shekla (ሙሉ ናይል ፐርች ዝልዝል ሸክላ)",
    "frenchName": "ሙሉ ናይል ፐርች ዝልዝል ሸክላ / Full Nile Purch Zlzl Shekal",
    "category": "Fish Mains",
    "price": 4000,
    "priceNote": "Full Premium Sizzler",
    "badge": "Premium Strip Sizzler (Full)",
    "image": null,
    "description": "Full portion of long prime Nile Perch fillet strips (zilzil) flash-sautéed with onions, rosemary, and peppers in a clay brazier.",
    "ingredients": [
      "Nile Perch Fillet Strips (Zilzil)",
      "Sliced Red Onions",
      "Fresh Rosemary",
      "Jalapeño",
      "Garlic Butter/Oil"
    ],
    "pairingWine": "Dom Pérignon or Bold Red Wine",
    "prepTime": "25 mins",
    "dietary": [
      "Prime Fillet",
      "Signature Sizzler"
    ]
  },
  {
    "id": "dish-fish-23",
    "name": "Half Nile Perch Zilzil Shekla (ግማሽ ናይል ፐርች ዝልዝል ሸክላ)",
    "frenchName": "ግማሽ ናይል ፐርች ዝልዝል ሸክላ / Half Nile Purch Zlzl Shekal",
    "category": "Fish Mains",
    "price": 3000,
    "priceNote": "Half Premium Sizzler",
    "badge": "Premium Strip Sizzler (Half)",
    "image": null,
    "description": "Half portion of succulent Nile Perch tender fillet strips sizzling hot in an earthenware clay pot with fresh rosemary.",
    "ingredients": [
      "Nile Perch Strips",
      "Rosemary",
      "Onions",
      "Peppers",
      "Seasoned Oil"
    ],
    "pairingWine": "Chardonnay or Cold Lager",
    "prepTime": "20 mins",
    "dietary": [
      "Prime Fillet",
      "Sizzling Clay Pot"
    ]
  },
  {
    "id": "dish-fish-24",
    "name": "Full Asa Zilzil Shekla (ሙሉ ዝልዝል ሸክላ)",
    "frenchName": "ሙሉ ዝልዝል ሸክላ / Full Asa Zlzl Shekla",
    "category": "Fish Mains",
    "price": 3000,
    "priceNote": "Full Clay Pot Strips",
    "badge": "Strip Sizzler (Full)",
    "image": null,
    "description": "Full platter of tender fish strips seared with garlic, rosemary, and sliced chilies, served on an Ethiopian smoking clay pot.",
    "ingredients": [
      "Tender Fish Fillet Strips",
      "White & Red Onions",
      "Rosemary",
      "Green Chilies",
      "Spiced Oil"
    ],
    "pairingWine": "Sauvignon Blanc or Chilled Red",
    "prepTime": "20 mins",
    "dietary": [
      "Clay Pot Sizzler",
      "Traditional"
    ]
  },
  {
    "id": "dish-fish-25",
    "name": "Half Asa Zilzil Shekla (ግማሽ ዝልዝል ሸክላ)",
    "frenchName": "ግማሽ ዝልዝል ሸክላ / Half Asa Zlzl Shekla",
    "category": "Fish Mains",
    "price": 1700,
    "priceNote": "Half Clay Pot Strips",
    "badge": "Strip Sizzler (Half)",
    "image": null,
    "description": "Half portion of marinated fish strips served sizzling hot in a clay dish with aromatic herbs, onions, and dipping awaze.",
    "ingredients": [
      "Fish Strips",
      "Onions",
      "Rosemary",
      "Chili",
      "Awaze Sauce"
    ],
    "pairingWine": "Draft Beer or Pinot Grigio",
    "prepTime": "16 mins",
    "dietary": [
      "Clay Pot Sizzler",
      "Savory"
    ]
  },
  {
    "id": "dish-fish-26",
    "name": "Fish Agelegel Mulu (አሳ አገልግል ሙሉ)",
    "frenchName": "አሳ አገልግል ሙሉ / Fish Agelegel Mulu",
    "category": "Fish Mains",
    "price": 3000,
    "priceNote": "Full Leather Basket Feast",
    "badge": "Traditional Leather Basket (Full)",
    "image": null,
    "description": "Full authentic Ethiopian leather basket (agelegel) presentation lined with injera, packed with variety fish delicacies.",
    "ingredients": [
      "Assorted Seasoned Fish Dishes",
      "Fresh Injera Layers",
      "Awaze",
      "Ayib",
      "Gomen Greens"
    ],
    "pairingWine": "Traditional Tej or Rich Red Wine",
    "prepTime": "25 mins",
    "dietary": [
      "Traditional Feast",
      "Cultural Specialty"
    ]
  },
  {
    "id": "dish-fish-27",
    "name": "Fish Agelegel Half (አሳ አገልግል ግማሽ)",
    "frenchName": "አሳ አገልግል ግማሽ / Fish Agelegel Half",
    "category": "Fish Mains",
    "price": 2000,
    "priceNote": "Half Leather Basket Feast",
    "badge": "Traditional Leather Basket (Half)",
    "image": null,
    "description": "Half portion served in an authentic woven agelegel basket filled with flavorful fish preparations on rolled injera.",
    "ingredients": [
      "Selected Fish Stews",
      "Injera",
      "Spiced Herbs",
      "Green Chilies"
    ],
    "pairingWine": "Ethiopian Tej or Amber Beer",
    "prepTime": "20 mins",
    "dietary": [
      "Traditional Presentation",
      "Hearty"
    ]
  },
  {
    "id": "dish-fish-28",
    "name": "Half Gulashe & Half Cotelet (ሀፍ ጉላሽ እና ሀፍ ኮተሌት)",
    "frenchName": "ሀፍ ጉላሽ እና ሀፍ ኮተሌት / Half Gulashe & Cotelet",
    "category": "Fish Mains",
    "price": 1300,
    "priceNote": "Duo Platter",
    "badge": "Gulash & Cotelet Duo",
    "image": null,
    "description": "Perfect pair of rich savory fish gulash in tomato sauce alongside a golden crispy fried fish cutlet.",
    "ingredients": [
      "Fish Gulash",
      "Crispy Fish Cotelet",
      "Tomato Stew Sauce",
      "Lemon",
      "House Dip"
    ],
    "pairingWine": "Sauvignon Blanc or Lager",
    "prepTime": "18 mins",
    "dietary": [
      "Duo Platter",
      "Popular"
    ]
  },
  {
    "id": "dish-fish-29",
    "name": "Fish Finger (አሳ ፊንገር)",
    "frenchName": "አሳ ፊንገር / Fish Finger",
    "category": "Fish Mains",
    "price": 1200,
    "priceNote": "Finger Food Platter",
    "badge": "Crispy Strips",
    "image": null,
    "description": "Crispy battered fish tenders seasoned with Ethiopian spices, served golden hot with house dipping sauce and lemon.",
    "ingredients": [
      "Fresh Fish Fillet Tenders",
      "Crispy Batter Coating",
      "House Tartar / Awaze Dip",
      "Lemon"
    ],
    "pairingWine": "Cold Draught Beer",
    "prepTime": "12 mins",
    "dietary": [
      "Crispy Finger Food",
      "Snack / Main"
    ]
  },
  {
    "id": "dish-fish-30",
    "name": "Fish Wrap (አሳ ራፕ)",
    "frenchName": "አሳ ራፕ / Fish Wrap",
    "category": "Fish Mains",
    "price": 1100,
    "priceNote": "Fresh Wrap with Fries",
    "badge": "Fresh Wrap",
    "image": null,
    "description": "Flaky fish fillet rolled in a warm flatbread with crisp lettuce, sliced tomatoes, onions, and creamy spiced herb sauce.",
    "ingredients": [
      "Fish Fillet",
      "Warm Flatbread / Tortilla",
      "Crisp Lettuce",
      "Tomatoes",
      "Creamy Spiced Sauce"
    ],
    "pairingWine": "Sparkling Water or Light Beer",
    "prepTime": "12 mins",
    "dietary": [
      "Quick Casual",
      "Handheld"
    ]
  },
  {
    "id": "dish-fish-31",
    "name": "Kids Fish Nuggets (የልጆች አሳ)",
    "frenchName": "የልጆች አሳ / Fish Nagut",
    "category": "Fish Mains",
    "price": 1200,
    "priceNote": "Kid Friendly Portion",
    "badge": "Kids Menu Favorite",
    "image": null,
    "description": "Bite-sized tender fresh fish fillets in a mild crunchy golden coating, crafted specially for children with mild dip.",
    "ingredients": [
      "Tender Fish Fillet Bites",
      "Mild Crunchy Coating",
      "Mild Dipping Sauce",
      "Golden Fries"
    ],
    "pairingWine": "Fresh Fruit Juice",
    "prepTime": "12 mins",
    "dietary": [
      "Kids Menu",
      "Mild Seasoning"
    ]
  },
  {
    "id": "dish-fish-32",
    "name": "Half Gulash & Half Finger (ሃፍ ጉላሽ ሃፍ ፊንገር)",
    "frenchName": "ሃፍ ጉላሽ ሃፍ ፊንገር / Half Gulash Half Finger",
    "category": "Fish Mains",
    "price": 1300,
    "priceNote": "Combo Platter",
    "badge": "Gulash & Finger Duo",
    "image": null,
    "description": "Combines a portion of savory saucy fish gulash with golden crunchy fried fish fingers for dual texture satisfaction.",
    "ingredients": [
      "Fish Gulash in Sauce",
      "Crispy Fish Fingers",
      "Lemon Wedge",
      "Dipping Condiment"
    ],
    "pairingWine": "Chilled White Wine or Beer",
    "prepTime": "16 mins",
    "dietary": [
      "Combo Platter",
      "Crunchy & Saucy"
    ]
  },
  {
    "id": "dish-fish-33",
    "name": "Grilled Nile Perch (ግሪልድ ናይል ፐርች)",
    "frenchName": "ግሪልድ ናይል ፐርች / Grilled Nile Perch",
    "category": "Fish Mains",
    "price": 1500,
    "priceNote": "Fresh Cut",
    "badge": "Flame Grilled Fillet",
    "image": null,
    "description": "Thick cut of prime Nile Perch fillet seasoned with wild herbs, lime juice, and garlic, grilled to juicy flakiness.",
    "ingredients": [
      "Prime Nile Perch Cut",
      "Wild Mountain Herbs",
      "Lime Juice",
      "Garlic & Olive Oil",
      "Fresh Vegetables"
    ],
    "pairingWine": "Chardonnay or Crisp Rosé",
    "prepTime": "20 mins",
    "dietary": [
      "Flame Grilled",
      "High Protein"
    ]
  },
  {
    "id": "dish-fish-34",
    "name": "Fish & Chips (አሳ እና ቺፕስ)",
    "frenchName": "አሳ እና ቺፕስ / Asa & Chips",
    "category": "Fish Mains",
    "price": 1100,
    "priceNote": "Classic Platter",
    "badge": "Classic Fish & Chips",
    "image": null,
    "description": "Golden battered crispy fresh fish fillets served hot with crispy hand-cut potato chips, lemon wedges, and tartar sauce.",
    "ingredients": [
      "Crispy Battered Fish",
      "Fresh Potato Chips / Fries",
      "House Tartar Sauce",
      "Lemon Slices"
    ],
    "pairingWine": "Cold Pilsner or Sparkling Water",
    "prepTime": "15 mins",
    "dietary": [
      "Classic Favorite",
      "Crispy Fried"
    ]
  },
  {
    "id": "dish-fish-35",
    "name": "Enjera Firfir be Asa (እንጀራ ፍርፍር በ አሳ)",
    "frenchName": "እንጀራ ፍርፍር በ አሳ / Enjera Frfr Be Asa",
    "category": "Fish Mains",
    "price": 600,
    "priceNote": "Traditional Portion",
    "badge": "Traditional Breakfast / Lunch",
    "image": null,
    "description": "Torn pieces of soft injera simmered into a spicy berbere fish sauce with onions, garlic, and sliced hot green peppers.",
    "ingredients": [
      "Torn Injera",
      "Fresh Fish Pieces",
      "Berbere Paste",
      "Garlic",
      "Red Onions",
      "Green Peppers"
    ],
    "pairingWine": "Spiced Ethiopian Tea or Cold Beer",
    "prepTime": "12 mins",
    "dietary": [
      "Spicy Stew",
      "Traditional Firfir"
    ]
  },
  {
    "id": "dish-fish-36",
    "name": "Rice with Fish (አሳ በሩዝ)",
    "frenchName": "አሳ በሩዝ / Rice With Fish",
    "category": "Fish Mains",
    "price": 1100,
    "priceNote": "Full Platter",
    "badge": "Savory Fish Rice",
    "image": null,
    "description": "Fluffy fragrant spiced rice topped with sautéed or crispy fish fillet, diced bell peppers, and mild seasoning.",
    "ingredients": [
      "Fragrant Steamed Rice",
      "Fish Fillet",
      "Bell Peppers",
      "Sautéed Onions",
      "Mild Ethiopian Seasoning"
    ],
    "pairingWine": "Sauvignon Blanc or Fresh Juice",
    "prepTime": "15 mins",
    "dietary": [
      "Rice Platter",
      "Gluten Conscious"
    ]
  },
  {
    "id": "dish-fish-37",
    "name": "Spaghetti with Fish (አሳ በፓስታ)",
    "frenchName": "አሳ በፓስታ / Spageti With Fish",
    "category": "Fish Mains",
    "price": 1100,
    "priceNote": "Full Pasta Bowl",
    "badge": "Fish Pasta Fusion",
    "image": null,
    "description": "Al dente spaghetti tossed in a rich, herbed tomato and garlic fish ragù with fresh basil and Ethiopian pepper touch.",
    "ingredients": [
      "Al Dente Spaghetti",
      "Fresh Fish Ragù",
      "Tomato & Garlic Sauce",
      "Fresh Basil",
      "Olive Oil"
    ],
    "pairingWine": "Pinot Grigio or Chianti",
    "prepTime": "15 mins",
    "dietary": [
      "Italian Ethiopian Fusion",
      "Hearty Pasta"
    ]
  },
  {
    "id": "dish-6",
    "name": "Chilean Sea Bass in Miso Dashi",
    "frenchName": "Loup de Mer Chilien au Dashi Miso",
    "category": "Chef Specials",
    "price": 48,
    "priceNote": "Per Tasting Portion",
    "badge": "Chef Signature",
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "description": "Sustainably caught Patagonian sea bass pan-roasted with white miso and umami-rich kombu dashi broth.",
    "ingredients": [
      "Chilean Sea Bass",
      "White Miso",
      "Kombu Dashi",
      "Bok Choy",
      "Enoki Mushrooms"
    ],
    "pairingWine": "Chablis Grand Cru Les Clos 2020",
    "prepTime": "25 mins",
    "dietary": [
      "Gluten Conscious",
      "Omega-3 Rich"
    ]
  },
  {
    "id": "dish-8",
    "name": "Dover Sole Meunière Table-Side",
    "frenchName": "Sole Meunière Façon Traditionnelle",
    "category": "Chef Specials",
    "price": 54,
    "priceNote": "Whole Fish Table-side Deboned",
    "badge": "Table-Side Deboning",
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "description": "Wild caught North Sea Dover sole gently pan-fried in noisette butter, finished table-side with fresh Meyer lemon and parsley.",
    "ingredients": [
      "Wild Dover Sole",
      "Normandy Beurre Noisette",
      "Meyer Lemon",
      "Flat Parsley",
      "Capers"
    ],
    "pairingWine": "Puligny-Montrachet 1er Cru",
    "prepTime": "25 mins",
    "dietary": [
      "Classic French Technique",
      "High Protein"
    ]
  },
  {
    "id": "dish-10",
    "name": "Tignanello Toscana IGT 2019",
    "producer": "Marchesi Antinori • Toscana",
    "category": "Fine Wine Cellar",
    "price": 300,
    "priceNote": "750ml Bottle",
    "badge": "Sommelier Reserve 98pts",
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
    "description": "Intense ruby red with complex aromas of ripe red fruits, vanilla, and dark chocolate. Silky tannins with exceptional persistence.",
    "ingredients": [
      "Sangiovese",
      "Cabernet Sauvignon",
      "Cabernet Franc"
    ],
    "pairingWine": "Pairs sublime with Wood-Fired Fish & Meat",
    "prepTime": "Immediate",
    "dietary": [
      "Aged in French Oak for 14-16 Months",
      "14.5% ABV"
    ]
  },
  {
    "id": "dish-11",
    "name": "Chablis Grand Cru Les Clos 2020",
    "producer": "Domaine Christian Moreau Père & Fils",
    "category": "Fine Wine Cellar",
    "price": 185,
    "priceNote": "750ml Bottle",
    "badge": "Iconic Mineral White",
    "image": "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&w=600&q=80",
    "description": "Purity of limestone minerality, green apple, crushed oyster shell and brioche notes. The quintessence of Burgundy whites.",
    "ingredients": [
      "100% Chardonnay"
    ],
    "pairingWine": "Ultimate match for Fresh Oysters & Hamachi Crudo",
    "prepTime": "Immediate",
    "dietary": [
      "Kimmeridgian Clay Soil",
      "13.0% ABV"
    ]
  },
  {
    "id": "dish-12",
    "name": "Dom Pérignon Vintage Champagne 2013",
    "producer": "Champagne Moët & Chandon",
    "category": "Fine Wine Cellar",
    "price": 350,
    "priceNote": "750ml Bottle",
    "badge": "Prestige Cuvée",
    "image": "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?auto=format&fit=crop&w=600&q=80",
    "description": "Vibrant citrus and stone fruit with smoky, toasted brioche and white floral undertones. Precision, density and endless elegance.",
    "ingredients": [
      "Chardonnay",
      "Pinot Noir"
    ],
    "pairingWine": "Pairs with Caviar, Oysters, and Lobster Ravioli",
    "prepTime": "Immediate",
    "dietary": [
      "10 Years Cellar Aging on Lees",
      "12.5% ABV"
    ]
  },
  {
    "id": "dish-38",
    "name": "Special Fish Burger (ስፔሻል አሳ በርገር)",
    "frenchName": "ስፔሻል አሳ በርገር / Spiecal Fish Burger",
    "category": "Fish Burger and Pizza",
    "price": 800,
    "priceNote": "With Hand-Cut Fries",
    "badge": "House Special Burger",
    "image": null,
    "description": "Deluxe crispy fish fillet in a toasted sesame bun with melted cheese, caramelized onions, fresh lettuce, tomato, and house tartar awaze sauce.",
    "ingredients": [
      "Lake Fish Fillet",
      "Sesame Brioche Bun",
      "Melted Cheese",
      "Caramelized Onions",
      "Lettuce & Tomato",
      "House Tartar Sauce"
    ],
    "pairingWine": "Cold Draft Beer or Soda",
    "prepTime": "15 mins",
    "dietary": [
      "House Special",
      "Handcrafted"
    ]
  },
  {
    "id": "dish-39",
    "name": "Fish Burger (አሳ በርገር)",
    "frenchName": "አሳ በርገር / Fish Burger",
    "category": "Fish Burger and Pizza",
    "price": 600,
    "priceNote": "With Fries",
    "badge": "Classic Burger",
    "image": null,
    "description": "Golden pan-fried fish patty on a fresh soft bun with crisp greens, sliced pickles, and savory burger sauce.",
    "ingredients": [
      "Seasoned Fish Patty",
      "Soft Bun",
      "Crisp Lettuce",
      "Tomato",
      "Pickles",
      "Burger Sauce"
    ],
    "pairingWine": "Chilled Soda or Beer",
    "prepTime": "12 mins",
    "dietary": [
      "Fresh Daily",
      "Classic"
    ]
  },
  {
    "id": "dish-40",
    "name": "Fish Pizza (አሳ ፒዛ)",
    "frenchName": "አሳ ፒዛ / Fish Pizza",
    "category": "Fish Burger and Pizza",
    "price": 800,
    "priceNote": "Medium / Large",
    "badge": "Seafood Pizza",
    "image": null,
    "description": "Stone-baked pizza crust topped with rich tomato sauce, melted mozzarella, tender seasoned fish chunks, sliced peppers, and oregano.",
    "ingredients": [
      "Hand-tossed Dough",
      "Rich Tomato Sauce",
      "Mozzarella Cheese",
      "Fresh Fish Chunks",
      "Bell Peppers",
      "Wild Oregano"
    ],
    "pairingWine": "Crisp White Wine or Lager",
    "prepTime": "18 mins",
    "dietary": [
      "Stone Baked",
      "Popular"
    ]
  },
  {
    "id": "dish-41",
    "name": "Tuna Pizza (ቱና ፒዛ)",
    "frenchName": "ቱና ፒዛ / Tuna Pizza",
    "category": "Fish Burger and Pizza",
    "price": 700,
    "priceNote": "Medium / Large",
    "badge": "Tuna & Mozzarella",
    "image": null,
    "description": "Wood-fired crust loaded with flaked tuna, sliced red onions, black olives, mozzarella, and savory tomato base.",
    "ingredients": [
      "Pizza Crust",
      "Flaked Tuna",
      "Red Onions",
      "Black Olives",
      "Mozzarella Cheese",
      "Tomato Coulis"
    ],
    "pairingWine": "Pinot Grigio or Beer",
    "prepTime": "18 mins",
    "dietary": [
      "Wood Fired",
      "High Protein"
    ]
  },
  {
    "id": "dish-42",
    "name": "Special Fish Sandwich (ስፔሻል አሳ ሳንድዊች)",
    "frenchName": "ስፔሻል አሳ ሳንድዊች / Spiecal Fish Sandwich",
    "category": "Fish Burger and Pizza",
    "price": 800,
    "priceNote": "With Hand-Cut Fries",
    "badge": "Chef Special Sandwich",
    "image": null,
    "description": "Toasted artisanal baguette packed with marinated fish fillet, sautéed peppers, caramelized onions, melted cheese, and herb dressing.",
    "ingredients": [
      "Marinated Fish Fillet",
      "Artisanal Baguette",
      "Melted Cheese",
      "Sautéed Peppers",
      "Caramelized Onions"
    ],
    "pairingWine": "Chilled White Wine",
    "prepTime": "14 mins",
    "dietary": [
      "Hot Pressed",
      "House Special"
    ]
  },
  {
    "id": "dish-43",
    "name": "Fish Sandwich (አሳ ሳንድዊች)",
    "frenchName": "አሳ ሳንድዊች / Fish Sandwich",
    "category": "Fish Burger and Pizza",
    "price": 700,
    "priceNote": "With Fries",
    "badge": "Classic Sandwich",
    "image": null,
    "description": "Crispy seasoned fish fillet tucked into warm crusty bread with crisp lettuce, fresh tomatoes, and seasoned mayonnaise.",
    "ingredients": [
      "Fish Fillet",
      "Crusty Bread",
      "Lettuce",
      "Tomatoes",
      "Seasoned Mayo"
    ],
    "pairingWine": "Fresh Juice or Soda",
    "prepTime": "12 mins",
    "dietary": [
      "Crispy",
      "Casual Favorite"
    ]
  },
  {
    "id": "dish-44",
    "name": "Vegetable Sandwich (አትክልት ሳንድዊች)",
    "frenchName": "አትክልት ሳንድዊች / Vegetable Sandwich",
    "category": "Fish Burger and Pizza",
    "price": 600,
    "priceNote": "With Fries",
    "badge": "Vegetarian / Fasting",
    "image": null,
    "description": "Layered garden vegetables including grilled peppers, cucumbers, tomatoes, shredded lettuce, and creamy vinaigrette on toasted bread.",
    "ingredients": [
      "Grilled Bell Peppers",
      "Sliced Cucumber",
      "Fresh Tomatoes",
      "Shredded Lettuce",
      "Toasted Bread"
    ],
    "pairingWine": "Iced Tea or Fresh Juice",
    "prepTime": "10 mins",
    "dietary": [
      "Vegetarian",
      "Fasting Friendly"
    ]
  },
  {
    "id": "dish-45",
    "name": "Vegetable Pizza (አትክልት ፒዛ)",
    "frenchName": "አትክልት ፒዛ / Vegetable Pizza",
    "category": "Fish Burger and Pizza",
    "price": 600,
    "priceNote": "Medium / Large",
    "badge": "Garden Veggie",
    "image": null,
    "description": "Oven-baked crust generously loaded with colorful bell peppers, red onions, mushrooms, sweet corn, and rich tomato sauce.",
    "ingredients": [
      "Pizza Crust",
      "Bell Peppers",
      "Mushrooms",
      "Onions",
      "Sweet Corn",
      "Tomato Herb Sauce"
    ],
    "pairingWine": "Cold Soda or White Wine",
    "prepTime": "16 mins",
    "dietary": [
      "Vegetarian",
      "Fasting Option Available"
    ]
  },
  {
    "id": "dish-46",
    "name": "Margarita Pizza (ማርጋሪታ ፒዛ)",
    "frenchName": "ማርጋሪታ ፒዛ / Margarita Pizza",
    "category": "Fish Burger and Pizza",
    "price": 800,
    "priceNote": "Medium / Large",
    "badge": "Italian Classic",
    "image": null,
    "description": "Classic Italian style pizza with slow-simmered San Marzano style tomato sauce, premium melted mozzarella, and fresh basil.",
    "ingredients": [
      "Hand-tossed Dough",
      "Rich Tomato Sauce",
      "Melted Mozzarella",
      "Fresh Basil",
      "Extra Virgin Olive Oil"
    ],
    "pairingWine": "Chianti or Sparkling Water",
    "prepTime": "16 mins",
    "dietary": [
      "Classic",
      "Vegetarian"
    ]
  },
  {
    "id": "dish-47",
    "name": "Avocado Salad (አቮካዶ ሳላድ)",
    "frenchName": "አቮካዶ ሳላድ / Avocado Salad",
    "category": "Salad",
    "price": 700,
    "priceNote": "Fresh Garden Bowl",
    "badge": "Fresh Avocado",
    "image": null,
    "description": "Fresh ripe diced Ethiopian avocado tossed with tomatoes, red onions, jalapeños, lime juice, and cold-pressed olive oil.",
    "ingredients": [
      "Fresh Ripe Avocado",
      "Diced Tomatoes",
      "Red Onions",
      "Jalapeño",
      "Fresh Lime",
      "Olive Oil"
    ],
    "pairingWine": "Sauvignon Blanc or Fresh Juice",
    "prepTime": "10 mins",
    "dietary": [
      "Fresh & Healthy",
      "Fasting Friendly"
    ]
  },
  {
    "id": "dish-48",
    "name": "Fish Salad (አሳ ሳላድ)",
    "frenchName": "አሳ ሳላድ / Fish Salad",
    "category": "Salad",
    "price": 800,
    "priceNote": "Protein Salad Bowl",
    "badge": "Protein Rich",
    "image": null,
    "description": "Tender grilled or poached fish fillet flakes over mixed crisp greens, cucumbers, sweet corn, cherry tomatoes, and herb lemon dressing.",
    "ingredients": [
      "Fresh Fish Flakes",
      "Crisp Greens",
      "Cucumbers",
      "Cherry Tomatoes",
      "Sweet Corn",
      "Herb Lemon Dressing"
    ],
    "pairingWine": "Chardonnay or Crisp Rosé",
    "prepTime": "12 mins",
    "dietary": [
      "High Protein",
      "Gluten Conscious"
    ]
  },
  {
    "id": "dish-49",
    "name": "Fruit Salad (ፍሩት ሳላድ)",
    "frenchName": "ፍሩት ሳላድ / Fruit Salad",
    "category": "Salad",
    "price": 600,
    "priceNote": "Chilled Fruit Bowl",
    "badge": "Seasonal Fruits",
    "image": null,
    "description": "Refreshing bowl of seasonal diced tropical fruits including mango, papaya, pineapple, banana, and fresh citrus squeeze.",
    "ingredients": [
      "Fresh Mango",
      "Ripe Papaya",
      "Pineapple",
      "Banana",
      "Citrus Juice"
    ],
    "pairingWine": "Sparkling Water",
    "prepTime": "10 mins",
    "dietary": [
      "100% Fresh",
      "Vitamin Rich"
    ]
  },
  {
    "id": "dish-50",
    "name": "Normal Salad (ኖርማል ሳላድ)",
    "frenchName": "ኖርማል ሳላድ / Normal Salad",
    "category": "Salad",
    "price": 600,
    "priceNote": "Garden Fresh",
    "badge": "House Green Salad",
    "image": null,
    "description": "Crisp garden salad with fresh romaine lettuce, sliced tomatoes, onions, cucumbers, and mild Ethiopian vinaigrette.",
    "ingredients": [
      "Romaine Lettuce",
      "Tomatoes",
      "Cucumbers",
      "Onions",
      "House Vinaigrette"
    ],
    "pairingWine": "Light White Wine",
    "prepTime": "8 mins",
    "dietary": [
      "Light & Crisp",
      "Fasting Friendly"
    ]
  },
  {
    "id": "dish-51",
    "name": "Tuna Salad (ቱና ሳላድ)",
    "frenchName": "ቱና ሳላድ / Tuna Salad",
    "category": "Salad",
    "price": 800,
    "priceNote": "Mediterranean Bowl",
    "badge": "Tuna & Crisp Greens",
    "image": null,
    "description": "Flaked tuna tossed with mixed garden greens, red onions, black olives, sliced cucumbers, and zesty mustard vinaigrette.",
    "ingredients": [
      "Tuna Chunks",
      "Mixed Garden Greens",
      "Red Onions",
      "Black Olives",
      "Zesty Dressing"
    ],
    "pairingWine": "Pinot Grigio",
    "prepTime": "10 mins",
    "dietary": [
      "High Protein",
      "Keto Friendly"
    ]
  },
  {
    "id": "dish-52",
    "name": "Potato Salad (ድንች ሳላድ)",
    "frenchName": "ድንች ሳላድ / Potato Salad",
    "category": "Salad",
    "price": 600,
    "priceNote": "Traditional Portion",
    "badge": "Savory Potato",
    "image": null,
    "description": "Tender steamed potato cubes dressed with fresh red onions, parsley, mild mustard dressing, and olive oil.",
    "ingredients": [
      "Steamed Potatoes",
      "Red Onions",
      "Fresh Parsley",
      "Olive Oil",
      "Mild Mustard Dressing"
    ],
    "pairingWine": "Cold Beer",
    "prepTime": "10 mins",
    "dietary": [
      "Hearty",
      "Fasting Friendly"
    ]
  },
  {
    "id": "dish-53",
    "name": "Mixed Salad (ሚክስድ ሳላድ)",
    "frenchName": "ሚክስድ ሳላድ / Mixed Salad",
    "category": "Salad",
    "price": 700,
    "priceNote": "Colorful Medley",
    "badge": "Garden Medley",
    "image": null,
    "description": "Colorful garden medley combining shredded carrots, beetroots, cabbage, tomatoes, and cucumbers with lime dressing.",
    "ingredients": [
      "Carrots",
      "Beetroots",
      "Shredded Cabbage",
      "Tomatoes",
      "Cucumbers",
      "Citrus Dressing"
    ],
    "pairingWine": "Crisp Sauvignon Blanc",
    "prepTime": "10 mins",
    "dietary": [
      "Vibrant & Crunchy",
      "Fasting Friendly"
    ]
  },
  {
    "id": "dish-54",
    "name": "Special Salad (ስፔሻል ሳላድ)",
    "frenchName": "ስፔሻል ሳላድ / Special Salad",
    "category": "Salad",
    "price": 900,
    "priceNote": "Grand Chef Bowl",
    "badge": "Chef Signature Salad",
    "image": null,
    "description": "Deluxe chef salad loaded with avocado, grilled fish cuts, sweet corn, crisp mixed greens, and honey-lime dressing.",
    "ingredients": [
      "Avocado",
      "Grilled Fish Cuts",
      "Sweet Corn",
      "Crisp Mixed Greens",
      "Chef Dressing"
    ],
    "pairingWine": "Chablis Grand Cru",
    "prepTime": "12 mins",
    "dietary": [
      "Chef Signature",
      "Nutrient Packed"
    ]
  },
  {
    "id": "dish-55",
    "name": "Fruit Punch (ፍሩት ፓንች)",
    "frenchName": "ፍሩት ፓንች / Fruit Punch",
    "category": "Salad",
    "price": 600,
    "priceNote": "Chilled Glass",
    "badge": "Chilled Punch",
    "image": null,
    "description": "Chilled refreshing fruit cocktail blend with tropical fruit juices, diced fruit bits, and crushed mint.",
    "ingredients": [
      "Mixed Tropical Juices",
      "Diced Fruit Bits",
      "Crushed Mint",
      "Chilled Ice"
    ],
    "pairingWine": "Sparkling Water",
    "prepTime": "5 mins",
    "dietary": [
      "Refreshing",
      "Non-Alcoholic"
    ]
  },
  {
    "id": "dish-56",
    "name": "Special Fruit Punch (ስፔሻል ፍሩት ፓንች)",
    "frenchName": "ስፔሻል ፍሩት ፓንች / Special Fruit Punch",
    "category": "Salad",
    "price": 900,
    "priceNote": "Tall Signature Glass",
    "badge": "Grand Cocktail Punch",
    "image": null,
    "description": "Premium layered tropical fruit punch with pureed mango, strawberry, avocado cream, and sparkling splash.",
    "ingredients": [
      "Layered Mango Puree",
      "Strawberry Coulis",
      "Avocado Cream",
      "Tropical Nectar",
      "Fresh Mint"
    ],
    "pairingWine": "Non-Alcoholic",
    "prepTime": "8 mins",
    "dietary": [
      "Signature Punch",
      "Party Favorite"
    ]
  },
  {
    "id": "dish-57",
    "name": "Special Fish Soup (ስፔሻል የአሳ ሱፕ)",
    "frenchName": "ስፔሻል የአሳ ሱፕ / Spiecal Fish Soup",
    "category": "Soup",
    "price": 800,
    "priceNote": "Hot Terracotta Bowl",
    "badge": "Chef Special Broth",
    "image": null,
    "description": "Rich, aromatic slow-simmered fish broth loaded with tender fillet chunks, garlic, ginger, rosemary, and seasonal root vegetables.",
    "ingredients": [
      "Fish Fillet Chunks",
      "Slow-Cooked Fish Broth",
      "Garlic & Ginger",
      "Fresh Rosemary",
      "Carrots & Celery",
      "Lemon"
    ],
    "pairingWine": "Crisp Sauvignon Blanc",
    "prepTime": "15 mins",
    "dietary": [
      "Warm & Nourishing",
      "Immunity Boosting"
    ]
  },
  {
    "id": "dish-58",
    "name": "Fish Soup (አሳ ሱፕ)",
    "frenchName": "አሳ ሱፕ / Fish Soup",
    "category": "Soup",
    "price": 600,
    "priceNote": "Warm Bowl with Bread",
    "badge": "Clear Fish Broth",
    "image": null,
    "description": "Hearty and warming traditional clear fish broth infused with herbs, black pepper, garlic, and diced fish pieces.",
    "ingredients": [
      "Fish Stock",
      "Diced Fish",
      "Garlic",
      "Black Pepper",
      "Fresh Herbs",
      "Lemon Wedge"
    ],
    "pairingWine": "Draft Beer or Sparkling Water",
    "prepTime": "12 mins",
    "dietary": [
      "Comforting",
      "Low Calorie"
    ]
  },
  {
    "id": "dish-59",
    "name": "Gebeta (ገበታ)",
    "frenchName": "ገበታ / Gebeta",
    "category": "Traditional",
    "price": 1500,
    "priceNote": "Grand Feast for 2-3",
    "badge": "Grand Feast Platter",
    "image": null,
    "description": "Grand shared Ethiopian feast platter served on injera with an assortment of spicy and mild traditional stews, shiro, and greens.",
    "ingredients": [
      "Shiro",
      "Misir Wot",
      "Kik Alicha",
      "Gomen",
      "Atkilt Wot",
      "Fresh Injera"
    ],
    "pairingWine": "Traditional Tej or Rich Red",
    "prepTime": "20 mins",
    "dietary": [
      "Sharing Platter",
      "Traditional Feast"
    ]
  },
  {
    "id": "dish-60",
    "name": "Special Shiro (ስፔሻል ሽሮ)",
    "frenchName": "ስፔሻል ሽሮ / Spiecal Shro",
    "category": "Traditional",
    "price": 500,
    "priceNote": "Bubbling Clay Pot",
    "badge": "Clay Pot Sizzler",
    "image": null,
    "description": "Rich spiced powdered chickpea stew slow-simmered with minced garlic, onions, and spicy berbere in a bubbling clay pot.",
    "ingredients": [
      "Spiced Chickpea Powder",
      "Berbere Sauce",
      "Garlic",
      "Red Onions",
      "Spiced Oil",
      "Injera"
    ],
    "pairingWine": "St. George Beer or Cold Water",
    "prepTime": "15 mins",
    "dietary": [
      "Bubbling Hot",
      "Traditional Classic"
    ]
  },
  {
    "id": "dish-61",
    "name": "Tegabino (ተጋቢኖ)",
    "frenchName": "ተጋቢኖ / Tegabino",
    "category": "Traditional",
    "price": 500,
    "priceNote": "Clay Pot Serving",
    "badge": "Extra Thick Shiro",
    "image": null,
    "description": "Extra thick, concentrated spiced shiro cooked and served sizzling hot in a heavy traditional earthenware pot.",
    "ingredients": [
      "Concentrated Shiro",
      "Garlic",
      "Green Chilies",
      "Ethiopian Spices",
      "Injera"
    ],
    "pairingWine": "Cold Draft Beer",
    "prepTime": "15 mins",
    "dietary": [
      "Sizzling Clay Pot",
      "Rich & Hearty"
    ]
  },
  {
    "id": "dish-62",
    "name": "Shiro Feses (ሽሮ ፈሰስ)",
    "frenchName": "ሽሮ ፈሰስ / Shero",
    "category": "Traditional",
    "price": 350,
    "priceNote": "Portion with Injera",
    "badge": "Classic Shiro",
    "image": null,
    "description": "Classic smooth and velvety chickpea stew gently simmered with mild spices, served warm with injera.",
    "ingredients": [
      "Smooth Chickpea Puree",
      "Onions",
      "Garlic",
      "Mild Spices",
      "Injera"
    ],
    "pairingWine": "Water or Tea",
    "prepTime": "12 mins",
    "dietary": [
      "Comfort Food",
      "Fasting Friendly"
    ]
  },
  {
    "id": "dish-63",
    "name": "Shiro be Selata (ሽሮ በ ሰላጣ)",
    "frenchName": "ሽሮ በ ሰላጣ / Shro Be Selata",
    "category": "Traditional",
    "price": 400,
    "priceNote": "Combo Plate",
    "badge": "Shiro & Salad Duo",
    "image": null,
    "description": "Warm comforting bowl of spiced shiro served alongside a fresh crisp tomato, onion, and jalapeño garden salad.",
    "ingredients": [
      "Simmered Shiro",
      "Tomato & Green Pepper Salad",
      "Lime Dressing",
      "Injera"
    ],
    "pairingWine": "Cold Beverage",
    "prepTime": "14 mins",
    "dietary": [
      "Balanced Duo",
      "Popular Lunch"
    ]
  },
  {
    "id": "dish-64",
    "name": "Misir (ምስር)",
    "frenchName": "ምስር / Misir Wot",
    "category": "Traditional",
    "price": 400,
    "priceNote": "Portion with Injera",
    "badge": "Spicy Red Lentils",
    "image": null,
    "description": "Slow-simmered red lentils in a deeply flavorful berbere paste with garlic, ginger, and caramelized red onions.",
    "ingredients": [
      "Red Split Lentils",
      "Berbere Paste",
      "Red Onions",
      "Garlic & Ginger",
      "Injera"
    ],
    "pairingWine": "Red Wine or Lager",
    "prepTime": "15 mins",
    "dietary": [
      "High Fiber",
      "Fasting Stew"
    ]
  },
  {
    "id": "dish-65",
    "name": "Spaghetti with Vegetables (ፓስታ በአትክልት)",
    "frenchName": "ፓስታ በአትክልት / Spagetti Vge.",
    "category": "Traditional",
    "price": 500,
    "priceNote": "Full Bowl",
    "badge": "Veggie Pasta",
    "image": null,
    "description": "Al dente spaghetti tossed with sautéed seasonal garden vegetables, garlic, olive oil, and herbs.",
    "ingredients": [
      "Spaghetti",
      "Carrots",
      "Bell Peppers",
      "Zucchini",
      "Garlic",
      "Herbs"
    ],
    "pairingWine": "White Wine",
    "prepTime": "14 mins",
    "dietary": [
      "Vegetarian",
      "Fasting Friendly"
    ]
  },
  {
    "id": "dish-66",
    "name": "Rice with Vegetables (ሩዝ በአትክልት)",
    "frenchName": "ሩዝ በአትክልት / Rice Vge.",
    "category": "Traditional",
    "price": 500,
    "priceNote": "Full Plate",
    "badge": "Spiced Veggie Rice",
    "image": null,
    "description": "Aromatic steamed basmati rice sautéed with mixed vegetables, onions, and mild Ethiopian spices.",
    "ingredients": [
      "Steamed Rice",
      "Carrots",
      "Green Peas",
      "Bell Peppers",
      "Mild Spices"
    ],
    "pairingWine": "Fresh Juice",
    "prepTime": "14 mins",
    "dietary": [
      "Gluten Conscious",
      "Vegetarian"
    ]
  },
  {
    "id": "dish-67",
    "name": "Spaghetti with Tomato Sauce (ፓስታ በሶስ)",
    "frenchName": "ፓስታ በሶስ / Spagetti with Tomato Souce",
    "category": "Traditional",
    "price": 450,
    "priceNote": "Full Bowl",
    "badge": "Classic Tomato Pasta",
    "image": null,
    "description": "Italian-Ethiopian pasta classic tossed in rich slow-simmered tomato, garlic, and fresh basil sauce.",
    "ingredients": [
      "Spaghetti",
      "Tomato Reduction",
      "Garlic",
      "Basil",
      "Olive Oil"
    ],
    "pairingWine": "Chianti",
    "prepTime": "12 mins",
    "dietary": [
      "Classic",
      "Vegetarian"
    ]
  },
  {
    "id": "dish-68",
    "name": "Tomato Lebleb (ቲማቲም ለበለብ)",
    "frenchName": "ቲማቲም ለበለብ / Tomato Lebeleb",
    "category": "Traditional",
    "price": 350,
    "priceNote": "Portion with Bread / Injera",
    "badge": "Warm Spiced Tomatoes",
    "image": null,
    "description": "Quick-sautéed fresh ripe tomatoes with garlic, sliced green chilies, onions, and spiced olive oil.",
    "ingredients": [
      "Fresh Ripe Tomatoes",
      "Green Chilies",
      "Red Onions",
      "Garlic",
      "Spiced Oil"
    ],
    "pairingWine": "Cold Drink",
    "prepTime": "10 mins",
    "dietary": [
      "Warm & Zesty",
      "Quick Sauté"
    ]
  },
  {
    "id": "dish-69",
    "name": "Tomato Qurt (ቲማቲም ቁርጥ)",
    "frenchName": "ቲማቲም ቁርጥ / Tomato Qurt",
    "category": "Traditional",
    "price": 350,
    "priceNote": "Chilled Plate",
    "badge": "Chilled Sliced Tomatoes",
    "image": null,
    "description": "Fresh chilled sliced ripe tomatoes served with diced jalapeños, onions, mitmita spice, and lemon dressing.",
    "ingredients": [
      "Fresh Sliced Tomatoes",
      "Diced Jalapeño",
      "Mitmita Seasoning",
      "Lemon Dressing"
    ],
    "pairingWine": "Iced Tea",
    "prepTime": "8 mins",
    "dietary": [
      "Refreshing",
      "Crisp"
    ]
  },
  {
    "id": "dish-70",
    "name": "Special Injera Firfir (ስፔሻል እንጀራ ፍርፍር)",
    "frenchName": "ስፔሻል እንጀራ ፍርፍር / Spiecal Enjra Firfir",
    "category": "Traditional",
    "price": 450,
    "priceNote": "Full Portion",
    "badge": "Chef Special Firfir",
    "image": null,
    "description": "Torn pieces of fresh injera soaked in rich spicy berbere sauce with caramelized onions, garlic, and jalapeños.",
    "ingredients": [
      "Torn Injera",
      "Berbere Sauce",
      "Caramelized Onions",
      "Garlic",
      "Green Chilies"
    ],
    "pairingWine": "Cold Beer",
    "prepTime": "12 mins",
    "dietary": [
      "Spicy & Tangy",
      "House Special"
    ]
  },
  {
    "id": "dish-71",
    "name": "Injera Firfir (እንጀራ ፍርፍር)",
    "frenchName": "እንጀራ ፍርፍር / Enjra Firfir",
    "category": "Traditional",
    "price": 400,
    "priceNote": "Regular Portion",
    "badge": "Traditional Firfir",
    "image": null,
    "description": "Traditional Ethiopian comfort food with soft injera simmered into savory berbere stew.",
    "ingredients": [
      "Injera",
      "Berbere Stew",
      "Garlic",
      "Onions"
    ],
    "pairingWine": "Ethiopian Spiced Tea",
    "prepTime": "10 mins",
    "dietary": [
      "Traditional Comfort",
      "Fasting Friendly"
    ]
  },
  {
    "id": "dish-72",
    "name": "Beyaynet (በያይነት)",
    "frenchName": "በያይነት / Beyaynet",
    "category": "Traditional",
    "price": 600,
    "priceNote": "Full Fasting Platter",
    "badge": "Fasting Combo Platter",
    "image": null,
    "description": "Authentic multi-dish fasting platter with shiro, misir wot, kik alicha, gomen, and cabbage arranged on injera.",
    "ingredients": [
      "Shiro",
      "Spicy Lentils",
      "Yellow Split Peas",
      "Collard Greens",
      "Cabbage & Carrots",
      "Injera"
    ],
    "pairingWine": "Cold Beverage or Tej",
    "prepTime": "15 mins",
    "dietary": [
      "100% Vegan",
      "Fasting Platter"
    ]
  },
  {
    "id": "dish-73",
    "name": "Fasting Full Agelgl (የጾም አገልግል ሙሉ)",
    "frenchName": "የጾም አገልግል ሙሉ / Fasting Full Agelgl",
    "category": "Traditional",
    "price": 2000,
    "priceNote": "Full Woven Basket",
    "badge": "Full Basket Feast",
    "image": null,
    "description": "Complete authentic woven leather basket filled with an expansive spread of vegan fasting stews layered on fresh injera.",
    "ingredients": [
      "Assorted Fasting Stews",
      "Fresh Injera Layers",
      "Awaze",
      "Peppers"
    ],
    "pairingWine": "Traditional Tej",
    "prepTime": "22 mins",
    "dietary": [
      "Traditional Agelgl",
      "Sharing Platter"
    ]
  },
  {
    "id": "dish-74",
    "name": "Fasting Half Agelgl (የጾም አገልግል ግማሽ)",
    "frenchName": "የጾም አገልግል ግማሽ / Fasting Half Agelgl",
    "category": "Traditional",
    "price": 1000,
    "priceNote": "Half Woven Basket",
    "badge": "Half Basket Feast",
    "image": null,
    "description": "Half portion of authentic leather basket fasting feast packed with diverse vegan delicacies.",
    "ingredients": [
      "Selected Fasting Stews",
      "Injera",
      "Spiced Greens",
      "Peppers"
    ],
    "pairingWine": "Cold Drink",
    "prepTime": "18 mins",
    "dietary": [
      "Traditional Presentation",
      "Vegan"
    ]
  },
  {
    "id": "dish-75",
    "name": "Special Juice (ስፔሻል ጁስ)",
    "frenchName": "ስፔሻል ጁስ / Special Juice",
    "category": "Juice",
    "price": 400,
    "priceNote": "Tall Glass",
    "badge": "House Special Blend",
    "image": null,
    "description": "Layered signature cocktail of mango, avocado, and papaya with vimto syrup drizzle.",
    "ingredients": [
      "Fresh Mango",
      "Avocado",
      "Papaya",
      "Vimto Drizzle",
      "Lime"
    ],
    "pairingWine": "Non-Alcoholic",
    "prepTime": "5 mins",
    "dietary": [
      "100% Fresh",
      "House Signature"
    ]
  },
  {
    "id": "dish-76",
    "name": "Mango Juice (ማንጎ ጁስ)",
    "frenchName": "ማንጎ ጁስ / Mango Juice",
    "category": "Juice",
    "price": 350,
    "priceNote": "Chilled Glass",
    "badge": "Fresh Mango",
    "image": null,
    "description": "Pure chilled thick mango nectar freshly blended from sun-ripened Ethiopian mangoes.",
    "ingredients": [
      "Ripe Mango",
      "Touch of Lime",
      "Chilled Ice"
    ],
    "pairingWine": "Non-Alcoholic",
    "prepTime": "4 mins",
    "dietary": [
      "100% Fruit",
      "Thick & Sweet"
    ]
  },
  {
    "id": "dish-77",
    "name": "Avocado Juice (አቮካዶ ጁስ)",
    "frenchName": "አቮካዶ ጁስ / Avocado Juice",
    "category": "Juice",
    "price": 350,
    "priceNote": "Chilled Glass",
    "badge": "Creamy Avocado",
    "image": null,
    "description": "Creamy velvety Ethiopian avocado juice served thick with a fresh squeeze of lime.",
    "ingredients": [
      "Ripe Avocado",
      "Fresh Lime Squeeze",
      "Pure Honey Touch"
    ],
    "pairingWine": "Non-Alcoholic",
    "prepTime": "4 mins",
    "dietary": [
      "Rich & Creamy",
      "Healthy Fats"
    ]
  },
  {
    "id": "dish-78",
    "name": "Papaye Juice (ፓፓዬ ጁስ)",
    "frenchName": "ፓፓዬ ጁስ / Papaye Juice",
    "category": "Juice",
    "price": 300,
    "priceNote": "Chilled Glass",
    "badge": "Tropical Papaya",
    "image": null,
    "description": "Sweet sun-ripened papaya blended smooth and served ice cold with lime wedge.",
    "ingredients": [
      "Fresh Papaya",
      "Lime Juice",
      "Ice"
    ],
    "pairingWine": "Non-Alcoholic",
    "prepTime": "4 mins",
    "dietary": [
      "Digestive Wellness",
      "Natural Sweetness"
    ]
  },
  {
    "id": "dish-79",
    "name": "Watermelon Juice (ሃብሃብ ጁስ)",
    "frenchName": "ሃብሃብ ጁስ / Watermelon Juice",
    "category": "Juice",
    "price": 300,
    "priceNote": "Chilled Glass",
    "badge": "Hydrating Melon",
    "image": null,
    "description": "Ultra-refreshing cold-pressed fresh watermelon juice served crisp and chilled.",
    "ingredients": [
      "Fresh Watermelon",
      "Mint Leaf",
      "Crushed Ice"
    ],
    "pairingWine": "Non-Alcoholic",
    "prepTime": "3 mins",
    "dietary": [
      "Hydrating",
      "Low Calorie"
    ]
  },
  {
    "id": "dish-80",
    "name": "Pineapple Juice (አናናስ ጁስ)",
    "frenchName": "አናናስ ጁስ / Pineapple Juice",
    "category": "Juice",
    "price": 400,
    "priceNote": "Chilled Glass",
    "badge": "Zesty Pineapple",
    "image": null,
    "description": "Zesty sweet freshly extracted pineapple juice packed with tropical vibrance.",
    "ingredients": [
      "Fresh Pineapple",
      "Ice"
    ],
    "pairingWine": "Non-Alcoholic",
    "prepTime": "4 mins",
    "dietary": [
      "Digestive Enzyme Rich",
      "Zesty Sweet"
    ]
  },
  {
    "id": "dish-81",
    "name": "Moca Juice (ሞካ ጁስ)",
    "frenchName": "ሞካ ጁስ / Moca Juice",
    "category": "Juice",
    "price": 400,
    "priceNote": "Tall Glass",
    "badge": "Moca Fusion",
    "image": null,
    "description": "Rich and energizing chocolate-coffee tropical juice fusion blend.",
    "ingredients": [
      "Cocoa Extract",
      "Ethiopian Coffee Essence",
      "Banana",
      "Milk / Soy Option"
    ],
    "pairingWine": "Non-Alcoholic",
    "prepTime": "5 mins",
    "dietary": [
      "Energizing",
      "Rich Flavor"
    ]
  },
  {
    "id": "dish-82",
    "name": "Strawberry Juice (እንጆሪ ጁስ)",
    "frenchName": "እንጆሪ ጁስ / Strawberry Juice",
    "category": "Juice",
    "price": 400,
    "priceNote": "Chilled Glass",
    "badge": "Sweet Strawberry",
    "image": null,
    "description": "Bright and sweet freshly blended local strawberry nectar served ice cold.",
    "ingredients": [
      "Fresh Strawberries",
      "Citrus Splash",
      "Chilled Ice"
    ],
    "pairingWine": "Non-Alcoholic",
    "prepTime": "4 mins",
    "dietary": [
      "Antioxidant Rich",
      "Sweet Berry"
    ]
  },
  {
    "id": "dish-83",
    "name": "Apple Juice (አፕል ጁስ)",
    "frenchName": "አፕል ጁስ / Apple Juice",
    "category": "Juice",
    "price": 400,
    "priceNote": "Chilled Glass",
    "badge": "Crisp Apple",
    "image": null,
    "description": "Crisp and clean fresh pressed natural apple juice with a light cinnamon hint.",
    "ingredients": [
      "Fresh Apples",
      "Ice"
    ],
    "pairingWine": "Non-Alcoholic",
    "prepTime": "4 mins",
    "dietary": [
      "Crisp & Pure",
      "Refreshing"
    ]
  },
  {
    "id": "dish-84",
    "name": "Banana Juice (ሙዝ ጁስ)",
    "frenchName": "ሙዝ ጁስ / Banana Juice",
    "category": "Juice",
    "price": 350,
    "priceNote": "Chilled Glass",
    "badge": "Creamy Banana",
    "image": null,
    "description": "Smooth and creamy ripe banana shake blend, rich in potassium and energy.",
    "ingredients": [
      "Ripe Bananas",
      "Honey",
      "Chilled Milk / Water"
    ],
    "pairingWine": "Non-Alcoholic",
    "prepTime": "4 mins",
    "dietary": [
      "Creamy & Sweet",
      "Energy Booster"
    ]
  },
  {
    "id": "dish-85",
    "name": "Orange Juice (ብርቱካን ጁስ)",
    "frenchName": "ብርቱካን ጁስ / Orange Juice",
    "category": "Juice",
    "price": 400,
    "priceNote": "Fresh Squeezed Glass",
    "badge": "Pure Citrus",
    "image": null,
    "description": "Freshly squeezed citrus orange juice bursting with natural Vitamin C and freshness.",
    "ingredients": [
      "Fresh Oranges",
      "Pulp"
    ],
    "pairingWine": "Non-Alcoholic",
    "prepTime": "4 mins",
    "dietary": [
      "100% Squeezed",
      "Immunity Booster"
    ]
  },
  {
    "id": "dish-86",
    "name": "Sweet Juice (ጣፋጭ ጁስ)",
    "frenchName": "ጣፋጭ ጁስ / Sweet Juice",
    "category": "Juice",
    "price": 400,
    "priceNote": "Tall Glass",
    "badge": "Sweet Cocktail",
    "image": null,
    "description": "Naturally sweet honeyed mixed fruit blend of banana, mango, and date nectar.",
    "ingredients": [
      "Mixed Sweet Fruits",
      "Pure Honey",
      "Ice"
    ],
    "pairingWine": "Non-Alcoholic",
    "prepTime": "4 mins",
    "dietary": [
      "Naturally Sweet",
      "Delightful"
    ]
  },
  {
    "id": "dish-87",
    "name": "Mixed Juice (ሚክስድ ጁስ)",
    "frenchName": "ሚክስድ ጁስ / Mixed Juice",
    "category": "Juice",
    "price": 400,
    "priceNote": "Layered 'Spris' Glass",
    "badge": "Classic 'Spris' Layers",
    "image": null,
    "description": "Classic layered Ethiopian 'Spris' tri-color juice with mango, avocado, and papaya served with fresh lime.",
    "ingredients": [
      "Layered Mango",
      "Layered Avocado",
      "Layered Papaya",
      "Lime Wedge"
    ],
    "pairingWine": "Non-Alcoholic",
    "prepTime": "5 mins",
    "dietary": [
      "Ethiopian Classic Spris",
      "Tri-Color"
    ]
  },
  {
    "id": "dish-88",
    "name": "Carrot Juice (ካሮት ጁስ)",
    "frenchName": "ካሮት ጁስ / Carot Juice",
    "category": "Juice",
    "price": 300,
    "priceNote": "Cold Pressed Glass",
    "badge": "Fresh Carrot",
    "image": null,
    "description": "Fresh earthy cold-pressed sweet carrot juice with a touch of ginger and orange.",
    "ingredients": [
      "Fresh Carrots",
      "Orange Splash",
      "Ginger Hint"
    ],
    "pairingWine": "Non-Alcoholic",
    "prepTime": "4 mins",
    "dietary": [
      "Beta-Carotene Rich",
      "Healthy"
    ]
  },
  {
    "id": "dish-89",
    "name": "Shenkora Juice (ሸንኮራ ጁስ)",
    "frenchName": "ሸንኮራ ጁስ / Shenkora Juice",
    "category": "Juice",
    "price": 400,
    "priceNote": "Pure Sugarcane Glass",
    "badge": "Pure Sugarcane",
    "image": null,
    "description": "Freshly pressed pure natural sugarcane juice with a squeeze of lime and crushed ginger.",
    "ingredients": [
      "Pure Sugarcane",
      "Fresh Lime",
      "Crushed Ginger"
    ],
    "pairingWine": "Non-Alcoholic",
    "prepTime": "4 mins",
    "dietary": [
      "Pure Natural Sweetener",
      "Energizing"
    ]
  },
  {
    "id": "dish-90",
    "name": "Ginger Juice (ዝንጅብል ጁስ)",
    "frenchName": "ዝንጅብል ጁስ / Ginger Juice",
    "category": "Juice",
    "price": 300,
    "priceNote": "Wellness Tonic Glass",
    "badge": "Ginger Wellness Tonic",
    "image": null,
    "description": "Invigorating fresh ginger wellness tonic blended with honey, lime juice, and cold water.",
    "ingredients": [
      "Fresh Ginger Root",
      "Pure Honey",
      "Lime Juice",
      "Spring Water"
    ],
    "pairingWine": "Non-Alcoholic",
    "prepTime": "3 mins",
    "dietary": [
      "Immunity Shot",
      "Digestive Aid"
    ]
  },
  {
    "id": "dish-91",
    "name": "Telba Juice (ተልባ ጁስ)",
    "frenchName": "ተልባ ጁስ / Telba Juice",
    "category": "Juice",
    "price": 450,
    "priceNote": "Traditional Roasted Flax Glass",
    "badge": "Flaxseed Superfood",
    "image": null,
    "description": "Traditional roasted flaxseed health drink blended with pure honey and water, known for high Omega-3 and vitality.",
    "ingredients": [
      "Roasted Flaxseed (Telba)",
      "Pure Honey",
      "Purified Water"
    ],
    "pairingWine": "Non-Alcoholic",
    "prepTime": "5 mins",
    "dietary": [
      "Omega-3 Rich",
      "Ethiopian Superfood"
    ]
  },
  {
    "id": "dish-92",
    "name": "Suf Juice (ሱፍ ጁስ)",
    "frenchName": "ሱፍ ጁስ / Suf Juice",
    "category": "Juice",
    "price": 450,
    "priceNote": "Traditional Safflower Milk",
    "badge": "Safflower Seed Milk",
    "image": null,
    "description": "Traditional roasted safflower seed milk drink, smooth, nutritious, and lightly sweetened with honey.",
    "ingredients": [
      "Roasted Safflower Seeds (Suf)",
      "Water",
      "Honey"
    ],
    "pairingWine": "Non-Alcoholic",
    "prepTime": "5 mins",
    "dietary": [
      "Plant Milk Tradition",
      "Protein Rich"
    ]
  },
  {
    "id": "dish-shake-93",
    "name": "Mango Shake (ማንጎ ሼክ)",
    "frenchName": "ማንጎ ሼክ / Mango Shake",
    "category": "Shake",
    "price": 650,
    "priceNote": "Fresh Chilled Glass",
    "badge": "Creamy Shake",
    "image": null,
    "description": "Rich, velvety sweet mango milkshake blended with chilled fresh milk.",
    "ingredients": [
      "Fresh Mango",
      "Milk",
      "Ice",
      "Sugar"
    ],
    "pairingWine": "Crisp Sparkling Water",
    "prepTime": "8 mins",
    "dietary": [
      "Vegetarian",
      "Dairy"
    ]
  },
  {
    "id": "dish-shake-94",
    "name": "Avocado Shake (አቮካዶ ሼክ)",
    "frenchName": "አቮካዶ ሼክ / Avocado Shake",
    "category": "Shake",
    "price": 650,
    "priceNote": "Fresh Chilled Glass",
    "badge": "Super Rich",
    "image": null,
    "description": "Luscious creamy ripe avocado shake with a silky smooth, thick texture.",
    "ingredients": [
      "Fresh Avocado",
      "Milk",
      "Ice",
      "Dash of Lime"
    ],
    "pairingWine": "Mineral Water",
    "prepTime": "8 mins",
    "dietary": [
      "Vegetarian",
      "Dairy"
    ]
  },
  {
    "id": "dish-shake-95",
    "name": "Papaya Shake (ፓፓዬ ሼክ)",
    "frenchName": "ፓፓዬ ሼክ / Papaya Shake",
    "category": "Shake",
    "price": 600,
    "priceNote": "Fresh Chilled Glass",
    "badge": "Tropical",
    "image": null,
    "description": "Smooth tropical ripe papaya shake blended fresh with chilled milk.",
    "ingredients": [
      "Fresh Papaya",
      "Milk",
      "Ice"
    ],
    "pairingWine": "Mineral Water",
    "prepTime": "8 mins",
    "dietary": [
      "Vegetarian",
      "Dairy"
    ]
  },
  {
    "id": "dish-shake-96",
    "name": "Watermelon Shake (ሃባብ ሼክ)",
    "frenchName": "ሃባብ ሼክ / Watermelon Shake",
    "category": "Shake",
    "price": 600,
    "priceNote": "Fresh Chilled Glass",
    "badge": "Refreshing",
    "image": null,
    "description": "Sweet and ultra-refreshing watermelon shake blended cool with milk.",
    "ingredients": [
      "Fresh Watermelon",
      "Milk",
      "Crushed Ice"
    ],
    "pairingWine": "Chilled Soda",
    "prepTime": "8 mins",
    "dietary": [
      "Vegetarian",
      "Dairy"
    ]
  },
  {
    "id": "dish-shake-97",
    "name": "Chocolate Shake (ቸኮሌት ሼክ)",
    "frenchName": "ቸኮሌት ሼክ / Chocolate Shake",
    "category": "Shake",
    "price": 600,
    "priceNote": "Fresh Chilled Glass",
    "badge": "Indulgent",
    "image": null,
    "description": "Rich cocoa chocolate milkshake whipped to decadent, frothy perfection.",
    "ingredients": [
      "Cocoa / Chocolate",
      "Fresh Milk",
      "Ice cream base"
    ],
    "pairingWine": "Draft Beer or Espresso",
    "prepTime": "8 mins",
    "dietary": [
      "Vegetarian",
      "Dairy"
    ]
  },
  {
    "id": "dish-shake-98",
    "name": "Banana Shake (ሙዝ ሼክ)",
    "frenchName": "ሙዝ ሼክ / Banana Shake",
    "category": "Shake",
    "price": 600,
    "priceNote": "Fresh Chilled Glass",
    "badge": "Classic",
    "image": null,
    "description": "Sweet ripe bananas blended fresh with milk for a smooth, hearty shake.",
    "ingredients": [
      "Ripe Bananas",
      "Milk",
      "Ice",
      "Vanilla hint"
    ],
    "pairingWine": "Mineral Water",
    "prepTime": "8 mins",
    "dietary": [
      "Vegetarian",
      "Dairy"
    ]
  },
  {
    "id": "dish-shake-99",
    "name": "Pineapple Shake (አናናስ ሼክ)",
    "frenchName": "አናናስ ሼክ / Pineapple Shake",
    "category": "Shake",
    "price": 600,
    "priceNote": "Fresh Chilled Glass",
    "badge": "Zesty & Sweet",
    "image": null,
    "description": "Zesty tropical pineapple shake whipped cold with chilled milk.",
    "ingredients": [
      "Fresh Pineapple",
      "Milk",
      "Ice"
    ],
    "pairingWine": "Sparkling Water",
    "prepTime": "8 mins",
    "dietary": [
      "Vegetarian",
      "Dairy"
    ]
  },
  {
    "id": "dish-shake-100",
    "name": "Milk Shake (ወተት ሼክ)",
    "frenchName": "ወተት ሼክ / Milk Shake",
    "category": "Shake",
    "price": 650,
    "priceNote": "Fresh Chilled Glass",
    "badge": "Pure Dairy",
    "image": null,
    "description": "Traditional sweet dairy milkshake, chilled and frothy.",
    "ingredients": [
      "Fresh Pure Milk",
      "Ice",
      "Vanilla Essence"
    ],
    "pairingWine": "Mineral Water",
    "prepTime": "6 mins",
    "dietary": [
      "Vegetarian",
      "Dairy"
    ]
  },
  {
    "id": "dish-mojito-101",
    "name": "Strawberry Mojito (እንጆሪ ሞዲቶ)",
    "frenchName": "እንጆሪ ሞዲቶ / Strawberry Mojito",
    "category": "Mojito",
    "price": 500,
    "priceNote": "Ice Cold Mocktail",
    "badge": "Berry Fresh",
    "image": null,
    "description": "Crushed sweet strawberries muddled with garden mint, lime, and fizzy soda.",
    "ingredients": [
      "Fresh Strawberries",
      "Mint Leaves",
      "Lime",
      "Sparkling Soda",
      "Crushed Ice"
    ],
    "pairingWine": "Sparkling Rosé",
    "prepTime": "6 mins",
    "dietary": [
      "Vegetarian",
      "Vegan"
    ]
  },
  {
    "id": "dish-mojito-102",
    "name": "Orange Mojito (ብርቱካን ሞዲቶ)",
    "frenchName": "ብርቱካን ሞዲቶ / Orange Mojito",
    "category": "Mojito",
    "price": 400,
    "priceNote": "Ice Cold Mocktail",
    "badge": "Citrus Zing",
    "image": null,
    "description": "Freshly squeezed sweet orange muddled with aromatic mint, lime, and soda.",
    "ingredients": [
      "Fresh Orange Juice",
      "Mint",
      "Lime",
      "Sparkling Soda",
      "Ice"
    ],
    "pairingWine": "Chilled White Wine",
    "prepTime": "6 mins",
    "dietary": [
      "Vegetarian",
      "Vegan"
    ]
  },
  {
    "id": "dish-mojito-103",
    "name": "Watermelon Mojito (ሃባብ ሞዲቶ)",
    "frenchName": "ሃባብ ሞዲቶ / Watermelon Mojito",
    "category": "Mojito",
    "price": 400,
    "priceNote": "Ice Cold Mocktail",
    "badge": "Summer Crisp",
    "image": null,
    "description": "Crisp crushed watermelon with fresh mint sprigs, lime wedge, and fizzy soda.",
    "ingredients": [
      "Watermelon",
      "Garden Mint",
      "Lime",
      "Soda Water",
      "Ice"
    ],
    "pairingWine": "Prosecco",
    "prepTime": "6 mins",
    "dietary": [
      "Vegetarian",
      "Vegan"
    ]
  },
  {
    "id": "dish-mojito-104",
    "name": "Smoothie Mojito (ስሞዚ ሞዲቶ)",
    "frenchName": "ስሞዚ ሞዲቶ / Smoothie Mojito",
    "category": "Mojito",
    "price": 500,
    "priceNote": "Blended Specialty",
    "badge": "Fruit Fusion",
    "image": null,
    "description": "Thick fruit smoothie blend infused with refreshing mint and zesty lime bubbles.",
    "ingredients": [
      "Mixed Fruit Puree",
      "Mint",
      "Lime",
      "Sparkling Float"
    ],
    "pairingWine": "Chilled Cider",
    "prepTime": "7 mins",
    "dietary": [
      "Vegetarian"
    ]
  },
  {
    "id": "dish-mojito-105",
    "name": "Titanic Mojito (ታይታኒክ ሞዲቶ)",
    "frenchName": "ታይታኒክ ሞዲቶ / Titanic Mojito",
    "category": "Mojito",
    "price": 400,
    "priceNote": "Signature Mocktail",
    "badge": "House Special",
    "image": null,
    "description": "Signature Titanic layered cooler with deep blue curaçao flavor, mint, and citrus.",
    "ingredients": [
      "Blue Citrus Syrup",
      "Fresh Mint",
      "Lime",
      "Soda Water",
      "Ice"
    ],
    "pairingWine": "Draft Beer",
    "prepTime": "6 mins",
    "dietary": [
      "Vegetarian",
      "Vegan"
    ]
  },
  {
    "id": "dish-mojito-106",
    "name": "Avatar Mojito (አቫተር ሞዲቶ)",
    "frenchName": "አቫተር ሞዲቶ / Avatar Mojito",
    "category": "Mojito",
    "price": 500,
    "priceNote": "Signature Mocktail",
    "badge": "Electric Blue",
    "image": null,
    "description": "Striking electric blue tropical mojito infused with mint, lime, and crushed ice.",
    "ingredients": [
      "Tropical Blue Blend",
      "Mint Leaves",
      "Lime",
      "Sparkling Soda"
    ],
    "pairingWine": "Crisp White Wine",
    "prepTime": "6 mins",
    "dietary": [
      "Vegetarian",
      "Vegan"
    ]
  },
  {
    "id": "dish-mojito-107",
    "name": "Love Mojito (ፍቅር ሞዲቶ)",
    "frenchName": "ፍቅር ሞዲቶ / Love Mojito",
    "category": "Mojito",
    "price": 500,
    "priceNote": "Signature Mocktail",
    "badge": "Ruby Red",
    "image": null,
    "description": "Romantic ruby-red berry infusion muddled with fresh mint and tart lime.",
    "ingredients": [
      "Ruby Red Berry Syrup",
      "Fresh Strawberries",
      "Mint",
      "Lime",
      "Soda"
    ],
    "pairingWine": "Rosé",
    "prepTime": "6 mins",
    "dietary": [
      "Vegetarian",
      "Vegan"
    ]
  },
  {
    "id": "dish-mojito-108",
    "name": "Pineapple Mojito (አናናስ ሞዲቶ)",
    "frenchName": "አናናስ ሞዲቶ / Pineapple Mojito",
    "category": "Mojito",
    "price": 400,
    "priceNote": "Ice Cold Mocktail",
    "badge": "Tropical Zing",
    "image": null,
    "description": "Tangy sweet pineapple juice muddled with garden mint and sparkling soda.",
    "ingredients": [
      "Fresh Pineapple Juice",
      "Mint",
      "Lime",
      "Soda",
      "Crushed Ice"
    ],
    "pairingWine": "Sauvignon Blanc",
    "prepTime": "6 mins",
    "dietary": [
      "Vegetarian",
      "Vegan"
    ]
  },
  {
    "id": "dish-mojito-109",
    "name": "Yam Mojito (ያም ሞዲቶ)",
    "frenchName": "ያም ሞዲቶ / Yam Mojito",
    "category": "Mojito",
    "price": 400,
    "priceNote": "Specialty Mocktail",
    "badge": "Sweet Cooler",
    "image": null,
    "description": "House special sweet layered refreshing mojito served over mountains of crushed ice.",
    "ingredients": [
      "Yam Specialty Blend",
      "Mint",
      "Lime",
      "Sparkling Water"
    ],
    "pairingWine": "Light Beer",
    "prepTime": "6 mins",
    "dietary": [
      "Vegetarian"
    ]
  },
  {
    "id": "dish-mojito-110",
    "name": "Sunset Mojito (ሰንሰት ሞዲቶ)",
    "frenchName": "ሰንሰት ሞዲቶ / Sunset Mojito",
    "category": "Mojito",
    "price": 400,
    "priceNote": "Layered Mocktail",
    "badge": "Lake Tana Sunset",
    "image": null,
    "description": "Dramatic gradient of orange, grenadine, and lime muddled with fresh mint.",
    "ingredients": [
      "Orange & Grenadine",
      "Lime",
      "Garden Mint",
      "Sparkling Soda",
      "Ice"
    ],
    "pairingWine": "Pinot Grigio",
    "prepTime": "6 mins",
    "dietary": [
      "Vegetarian",
      "Vegan"
    ]
  },
  {
    "id": "dish-drinks-111",
    "name": "Acacia Wine (አካሺያ ወይን / Acisha)",
    "frenchName": "አካሺያ / Acisha Wine",
    "category": "Drinks",
    "price": 2000,
    "priceNote": "Full Bottle 750ml",
    "badge": "Ethiopian Wine",
    "image": null,
    "description": "Premium Ethiopian bottled wine from the Rift Valley, elegant and aromatic.",
    "ingredients": [
      "Ethiopian Grapes",
      "Sulfites"
    ],
    "pairingWine": "Whole Fried Fish or Sizzling Tibs",
    "prepTime": "Served Immediately",
    "dietary": [
      "Alcoholic"
    ]
  },
  {
    "id": "dish-drinks-112",
    "name": "Kemila / Axumite Wine (አክሱማይት / ከሚላ)",
    "frenchName": "አክሱማይት / Kemila/Axumit Wine",
    "category": "Drinks",
    "price": 1300,
    "priceNote": "Full Bottle 750ml",
    "badge": "Sweet Red Wine",
    "image": null,
    "description": "Classic sweet Ethiopian red wine, rich in fruit flavors and heritage.",
    "ingredients": [
      "Red Grapes",
      "Natural Sweeteners"
    ],
    "pairingWine": "Fish Tibs or Fish Asa Gulash",
    "prepTime": "Served Immediately",
    "dietary": [
      "Alcoholic"
    ]
  },
  {
    "id": "dish-drinks-113",
    "name": "Tkesheno Honey Wine (ተከሸና ጠጅ)",
    "frenchName": "ተከሸና / Tkesheno Honey Wine",
    "category": "Drinks",
    "price": 1500,
    "priceNote": "Full Bottle",
    "badge": "Royal Tej",
    "image": null,
    "description": "Traditional fermented Ethiopian honey wine (Tej), golden, fragrant, and smooth.",
    "ingredients": [
      "Pure Honey",
      "Gesho Leaves",
      "Water"
    ],
    "pairingWine": "Traditional Fish Combo Platter",
    "prepTime": "Served Immediately",
    "dietary": [
      "Alcoholic",
      "Gluten-Free"
    ]
  },
  {
    "id": "dish-drinks-114",
    "name": "Awash / Guder Wine (አዋሽ ፤ ጉደር ወይን)",
    "frenchName": "አዋሽ ፤ ጉደር / Awash/Guder Wine",
    "category": "Drinks",
    "price": 1200,
    "priceNote": "Full Bottle 750ml",
    "badge": "Heritage Wine",
    "image": null,
    "description": "Beloved vintage Ethiopian wine from Awash or Guder vineyards.",
    "ingredients": [
      "Locally Harvested Grapes"
    ],
    "pairingWine": "Fish Lebleb or Grilled Fish Fillet",
    "prepTime": "Served Immediately",
    "dietary": [
      "Alcoholic"
    ]
  },
  {
    "id": "dish-drinks-115",
    "name": "Special Beer (ስፔሻል ቢራ)",
    "frenchName": "ስፔሻል ቢራ / Special Beer",
    "category": "Drinks",
    "price": 150,
    "priceNote": "Chilled Bottle 330ml",
    "badge": "Cold Beer",
    "image": null,
    "description": "Chilled bottle of premium Ethiopian special malt lager beer.",
    "ingredients": [
      "Malt",
      "Hops",
      "Barley",
      "Pure Water"
    ],
    "pairingWine": "Spicy Fish Tibs or Fish Cutlet",
    "prepTime": "Served Immediately",
    "dietary": [
      "Alcoholic"
    ]
  },
  {
    "id": "dish-drinks-116",
    "name": "Bottled Beer (ቢራ)",
    "frenchName": "ቢራ / Standard Beer",
    "category": "Drinks",
    "price": 120,
    "priceNote": "Chilled Bottle 330ml",
    "badge": "Lager",
    "image": null,
    "description": "Classic crisp Ethiopian bottled lager beer served ice cold.",
    "ingredients": [
      "Barley Malt",
      "Hops",
      "Water"
    ],
    "pairingWine": "Crispy Fried Fish",
    "prepTime": "Served Immediately",
    "dietary": [
      "Alcoholic"
    ]
  },
  {
    "id": "dish-drinks-117",
    "name": "Soft Drink (ለስላሳ መጠጦች)",
    "frenchName": "ለስላሳ መጠጦች / Soft Drink",
    "category": "Drinks",
    "price": 100,
    "priceNote": "Chilled Glass Bottle",
    "badge": "Cold Soda",
    "image": null,
    "description": "Chilled glass bottle of Coca-Cola, Fanta, Sprite, or Mirinda.",
    "ingredients": [
      "Carbonated Water",
      "Cane Sugar",
      "Natural Flavors"
    ],
    "pairingWine": "Any Fish Main",
    "prepTime": "Served Immediately",
    "dietary": [
      "Non-Alcoholic"
    ]
  },
  {
    "id": "dish-drinks-118",
    "name": "Bottled Water 1L (ውሃ 1 ሊትር)",
    "frenchName": "ውሃ 1 ሊትር / Water 1 Liter",
    "category": "Drinks",
    "price": 100,
    "priceNote": "Sealed Bottle 1L",
    "badge": "Pure Water",
    "image": null,
    "description": "Pure natural spring mineral drinking water in 1 liter sealed bottle.",
    "ingredients": [
      "Natural Spring Mineral Water"
    ],
    "pairingWine": "All Dishes",
    "prepTime": "Served Immediately",
    "dietary": [
      "Non-Alcoholic",
      "Gluten-Free"
    ]
  },
  {
    "id": "dish-drinks-119",
    "name": "Bottled Water 0.5L (ውሃ ግማሽ ሊትር)",
    "frenchName": "ውሃ ግማሽ ሊትር / Water Half Liter",
    "category": "Drinks",
    "price": 80,
    "priceNote": "Sealed Bottle 500ml",
    "badge": "Pure Water",
    "image": null,
    "description": "Pure natural spring mineral drinking water in 500ml sealed bottle.",
    "ingredients": [
      "Natural Spring Mineral Water"
    ],
    "pairingWine": "All Dishes",
    "prepTime": "Served Immediately",
    "dietary": [
      "Non-Alcoholic",
      "Gluten-Free"
    ]
  },
  {
    "id": "dish-drinks-120",
    "name": "Draft Beer (ድራፍት ቢራ)",
    "frenchName": "ድራፍት / Draft Beer",
    "category": "Drinks",
    "price": 100,
    "priceNote": "Fresh Cold Glass",
    "badge": "On Tap",
    "image": null,
    "description": "Freshly poured chilled draught beer on tap with crisp golden foam.",
    "ingredients": [
      "Freshly Brewed Malt Beer on Tap"
    ],
    "pairingWine": "Sizzling Fish Tibs",
    "prepTime": "Served Immediately",
    "dietary": [
      "Alcoholic"
    ]
  },
  {
    "id": "dish-drinks-121",
    "name": "Habesha Araqe (ሀበሻ አረቄ)",
    "frenchName": "ሀበሻ አረቄ / Habesh Arqe",
    "category": "Drinks",
    "price": 100,
    "priceNote": "Shot / Portion",
    "badge": "Traditional Spirit",
    "image": null,
    "description": "Traditional high-proof clear Ethiopian distilled spirit (Araqe).",
    "ingredients": [
      "Distilled Grain & Aniseed"
    ],
    "pairingWine": "Spicy Fish Lebleb",
    "prepTime": "Served Immediately",
    "dietary": [
      "Alcoholic",
      "Potent"
    ]
  },
  {
    "id": "dish-extras-122",
    "name": "Whole Injera (ሙሉ እንጀራ)",
    "frenchName": "ሙሉ እንጀራ / Mulu Enjra",
    "category": "Extras",
    "price": 40,
    "priceNote": "1 Whole Piece",
    "badge": "Teff Injera",
    "image": null,
    "description": "Extra fresh whole round of traditional soft, spongy teff injera.",
    "ingredients": [
      "Pure Teff Flour",
      "Water",
      "Sourdough Starter"
    ],
    "pairingWine": "Any Ethiopian Dish",
    "prepTime": "Instant",
    "dietary": [
      "Vegan",
      "Gluten-Free Option"
    ]
  },
  {
    "id": "dish-extras-123",
    "name": "Half Injera (ሃፍ እንጀራ)",
    "frenchName": "ሃፍ እንጀራ / Half Enjra",
    "category": "Extras",
    "price": 30,
    "priceNote": "Half Piece",
    "badge": "Side Portion",
    "image": null,
    "description": "Extra half piece of fresh soft Ethiopian injera.",
    "ingredients": [
      "Pure Teff Flour",
      "Water"
    ],
    "pairingWine": "Any Ethiopian Dish",
    "prepTime": "Instant",
    "dietary": [
      "Vegan"
    ]
  },
  {
    "id": "dish-extras-124",
    "name": "Bread (ዳቦ)",
    "frenchName": "ዳቦ / Bread",
    "category": "Extras",
    "price": 30,
    "priceNote": "1 Roll / Piece",
    "badge": "Fresh Baked",
    "image": null,
    "description": "Freshly baked soft white roll or bread portion.",
    "ingredients": [
      "Wheat Flour",
      "Yeast",
      "Water"
    ],
    "pairingWine": "Fish Soup",
    "prepTime": "Instant",
    "dietary": [
      "Vegetarian"
    ]
  },
  {
    "id": "dish-extras-125",
    "name": "Barley Bread (የገብስ ዳቦ)",
    "frenchName": "የገብስ ዳቦ / Barley Bread",
    "category": "Extras",
    "price": 40,
    "priceNote": "Traditional Portion",
    "badge": "Whole Grain",
    "image": null,
    "description": "Traditional rustic Ethiopian roasted barley bread (የገብስ ዳቦ).",
    "ingredients": [
      "Roasted Barley Flour",
      "Water",
      "Salt"
    ],
    "pairingWine": "Fish Tibs or Soup",
    "prepTime": "Instant",
    "dietary": [
      "Vegetarian"
    ]
  },
  {
    "id": "dish-extras-126",
    "name": "Extra Rice (ጭማሪ ሩዝ)",
    "frenchName": "ጭማሪ ሩዝ / Extra Rice",
    "category": "Extras",
    "price": 40,
    "priceNote": "Side Bowl",
    "badge": "Steamed Rice",
    "image": null,
    "description": "Side bowl of seasoned fluffy steamed white rice.",
    "ingredients": [
      "Long Grain White Rice",
      "Oil",
      "Light Seasoning"
    ],
    "pairingWine": "Fish Fillet",
    "prepTime": "Instant",
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ]
  },
  {
    "id": "dish-extras-127",
    "name": "Extra Salad (ጭማሪ ሰላጣ)",
    "frenchName": "ጭማሪ ሰላጣ / Extra Salad",
    "category": "Extras",
    "price": 40,
    "priceNote": "Side Bowl",
    "badge": "Fresh Veg",
    "image": null,
    "description": "Crisp side salad of diced tomatoes, red onions, and green chilies.",
    "ingredients": [
      "Tomatoes",
      "Onions",
      "Jalapeño",
      "Lemon Vinaigrette"
    ],
    "pairingWine": "Fish Mains",
    "prepTime": "Instant",
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ]
  },
  {
    "id": "dish-extras-128",
    "name": "Extra Cooked Vegetables (ጭማሪ የበሰለ አትክልት)",
    "frenchName": "ጭማሪ የበሰለ አትክልት / Extra Veg",
    "category": "Extras",
    "price": 40,
    "priceNote": "Side Portion",
    "badge": "Warm Veg",
    "image": null,
    "description": "Extra side serving of warm, seasoned sautéed garden vegetables.",
    "ingredients": [
      "Carrots",
      "Green Beans",
      "Onions",
      "Herbs"
    ],
    "pairingWine": "Fish Mains",
    "prepTime": "5 mins",
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ]
  },
  {
    "id": "dish-extras-129",
    "name": "Takeaway Foil (ፎይል)",
    "frenchName": "ፎይል / Foil Packaging",
    "category": "Extras",
    "price": 100,
    "priceNote": "Per Pack",
    "badge": "Packaging",
    "image": null,
    "description": "Thermal insulated aluminum foil food container for takeaway orders.",
    "ingredients": [
      "Food Grade Aluminum Foil Container"
    ],
    "pairingWine": "Takeout Orders",
    "prepTime": "Instant",
    "dietary": [
      "Non-Edible"
    ]
  },
  {
    "id": "dish-extras-130",
    "name": "Extra Paper Bag (ዘንቢል / Extra Paper Bag)",
    "frenchName": "ዘንቢል / Extra Paper Bag",
    "category": "Extras",
    "price": 100,
    "priceNote": "Per Bag",
    "badge": "Eco Bag",
    "image": null,
    "description": "Sturdy eco-friendly kraft paper carrier bag with handles.",
    "ingredients": [
      "Recycled Kraft Paper"
    ],
    "pairingWine": "Takeout Orders",
    "prepTime": "Instant",
    "dietary": [
      "Non-Edible"
    ]
  },
  {
    "id": "dish-hot-129",
    "name": "Traditional Coffee (ቡና)",
    "frenchName": "ቡና / Coffee",
    "category": "Hot Drinks",
    "price": 80,
    "priceNote": "Fresh Hot Cup / Sini",
    "badge": "Ethiopian Roast",
    "image": null,
    "description": "Freshly roasted and brewed authentic Ethiopian coffee, rich and fragrant.",
    "ingredients": [
      "Single-Origin Ethiopian Arabica Beans",
      "Spring Water"
    ],
    "pairingWine": "Mineral Water",
    "prepTime": "5 mins",
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ]
  },
  {
    "id": "dish-hot-130",
    "name": "Spiced Tea (ሻይ)",
    "frenchName": "ሻይ / Tea",
    "category": "Hot Drinks",
    "price": 80,
    "priceNote": "Fresh Hot Cup",
    "badge": "Spiced Tea",
    "image": null,
    "description": "Freshly steeped hot Ethiopian spiced black tea with cinnamon, cloves, and cardamom.",
    "ingredients": [
      "Black Tea Leaves",
      "Cinnamon",
      "Cardamom",
      "Cloves"
    ],
    "pairingWine": "Mineral Water",
    "prepTime": "4 mins",
    "dietary": [
      "Vegan",
      "Gluten-Free"
    ]
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
