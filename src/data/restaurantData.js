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
  'All',
  'Chef Specials',
  'Fish Mains',
  'Fine Wine Cellar',
  'Traditional'
];

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
