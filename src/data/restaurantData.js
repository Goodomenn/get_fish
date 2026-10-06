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
    "pairingWine": "House White Wine or Cold Beverage",
    "prepTime": "15 mins",
    "dietary": [
      "Spicy Duo",
      "Popular Specialty"
    ]
  },
  {
    "id": "dish-fish-9",
    "name": "Half Asa Lebleb & Half Firfir (ሃፍ አሳ ለበለብ ሃፍ አሳ ፍርፍር)",
    "frenchName": "ሃፍ አሳ ለበለብ ሃፍ አሳ ፍርፍር / Half Asa Lebleb Half Firfir",
    "category": "Fish Mains",
    "price": 1300,
    "priceNote": "Combo Plate",
    "badge": "Lebleb & Firfir",
    "image": null,
    "description": "A comforting combination plate of succulent seasoned fish lebleb alongside rich spicy fish firfir on fresh injera.",
    "ingredients": [
      "Sautéed Fish (Lebleb)",
      "Injera Firfir",
      "Garlic",
      "Green Peppers",
      "Clarified Herb Oil"
    ],
    "pairingWine": "Dry White Wine",
    "prepTime": "15 mins",
    "dietary": [
      "Customer Favorite"
    ]
  },
  {
    "id": "dish-fish-10",
    "name": "Half Dulet & Half Wot (ሃፍ ዱለት ሃፍ ወጥ)",
    "frenchName": "ሃፍ ዱለት ሃፍ ወጥ / Half Dulet Half Wet",
    "category": "Fish Mains",
    "price": 1300,
    "priceNote": "Dulet & Stew Duo",
    "badge": "Dulet & Wot",
    "image": null,
    "description": "Flavorful minced fish dulet seasoned with onions and peppers, served beside a rich, slow-simmered berbere fish stew (wot).",
    "ingredients": [
      "Fish Dulet",
      "Slow-Simmered Fish Wot",
      "Berbere",
      "Cardamom",
      "Injera"
    ],
    "pairingWine": "Traditional Spiced Tea or Wine",
    "prepTime": "18 mins",
    "dietary": [
      "Traditional Stew"
    ]
  },
  {
    "id": "dish-fish-11",
    "name": "Half Lebleb & Half Wot (ሃፍ ለበለብ ሃፍ ወጥ)",
    "frenchName": "ሃፍ ለበለብ ሃፍ ወጥ / Half Lebleb Half Wet",
    "category": "Fish Mains",
    "price": 1300,
    "priceNote": "Combination Plate",
    "badge": "Lebleb & Wot",
    "image": null,
    "description": "Half portion of lightly pan-sautéed fish lebleb served with authentic aromatic spicy fish wot and fresh injera.",
    "ingredients": [
      "Fish Lebleb",
      "Spiced Fish Wot",
      "Garlic",
      "Rosemary",
      "Fresh Chilies"
    ],
    "pairingWine": "Chardonnay or Mineral Water",
    "prepTime": "15 mins",
    "dietary": [
      "Authentic Flavor"
    ]
  },
  {
    "id": "dish-fish-12",
    "name": "Asa Gulash (አሳ ጉላሽ)",
    "frenchName": "አሳ ጉላሽ / Asa Gulash",
    "category": "Fish Mains",
    "price": 1200,
    "priceNote": "Main Entrée",
    "badge": "Fish Gulash",
    "image": null,
    "description": "Tender boneless fish morsels simmered in a rich tomato, garlic, and sweet bell pepper goulash reduction.",
    "ingredients": [
      "Boneless Fish Chunks",
      "Ripe Tomatoes",
      "Bell Peppers",
      "Garlic",
      "Black Pepper",
      "Herbs"
    ],
    "pairingWine": "Pinot Grigio",
    "prepTime": "15 mins",
    "dietary": [
      "Hearty Stew"
    ]
  },
  {
    "id": "dish-fish-13",
    "name": "Asa Kotelet (አሳ ኮተሌት)",
    "frenchName": "አሳ ኮተሌት / Asa Kotelet",
    "category": "Fish Mains",
    "price": 1200,
    "priceNote": "Cutlets with Sides",
    "badge": "Crispy Cutlet",
    "image": null,
    "description": "Crisp golden-crusted minced fish cutlets seasoned with fragrant herbs, served with lemon wedges and house dip.",
    "ingredients": [
      "Minced Fish Fillet",
      "Breadcrumbs",
      "Egg",
      "Fresh Herbs",
      "Lemon",
      "Tartar Sauce"
    ],
    "pairingWine": "Chilled Sauvignon Blanc",
    "prepTime": "15 mins",
    "dietary": [
      "Crispy Golden"
    ]
  },
  {
    "id": "dish-fish-14",
    "name": "Special Combo (የቤቱ ስፔሻል)",
    "frenchName": "የቤቱ ስፔሻል / Spiecal Combo",
    "category": "Fish Mains",
    "price": 3600,
    "priceNote": "Grand Platter (Feeds 2-3)",
    "badge": "House Grand Feast",
    "image": null,
    "description": "The premier Gech Fish culinary showcase: assorted platter of fish tibs, lebleb, dulet, goulash, and crispy cutlets served family-style with injera.",
    "ingredients": [
      "Fish Tibs",
      "Fish Lebleb",
      "Fish Dulet",
      "Fish Gulash",
      "Cutlet",
      "Assorted Condiments",
      "Injera"
    ],
    "pairingWine": "Fine Wine Cellar Selection",
    "prepTime": "25 mins",
    "dietary": [
      "Chef Signature Platter",
      "Feeds 2-3"
    ]
  },
  {
    "id": "dish-fish-15",
    "name": "Normal Combo (ኖርማል ኮምቦ)",
    "frenchName": "ኖርማል ኮምቦ / Normal Combo",
    "category": "Fish Mains",
    "price": 3000,
    "priceNote": "Family Platter (Feeds 2)",
    "badge": "Classic Combo",
    "image": null,
    "description": "Generous sharing combo featuring fried and sautéed fish specialties served with fresh injera and salad.",
    "ingredients": [
      "Sautéed Fish Chunks",
      "Crispy Fish Cutlets",
      "Injera",
      "Fresh Salad",
      "House Chili Sauce"
    ],
    "pairingWine": "Chardonnay",
    "prepTime": "20 mins",
    "dietary": [
      "Sharing Platter"
    ]
  },
  {
    "id": "dish-fish-16",
    "name": "Nile Perch (1 Kilo) (ናይል ፐርች)",
    "frenchName": "ናይል ፐርች / Nile Perche (1 kg)",
    "category": "Fish Mains",
    "price": 2500,
    "priceNote": "1 Kilogram Fresh Weight",
    "badge": "Fresh Catch 1kg",
    "image": null,
    "description": "One full kilogram of wild Nile Perch prepared whole or filleted to your preference (fried or grilled), served with lemons and dips.",
    "ingredients": [
      "Fresh Nile Perch 1kg",
      "Garlic Marinade",
      "Lemon Juice",
      "Spiced Flour Dredge",
      "Hot Dip"
    ],
    "pairingWine": "Sancerre Blanc",
    "prepTime": "25 mins",
    "dietary": [
      "Wild Harvested",
      "High Protein"
    ]
  },
  {
    "id": "dish-fish-17",
    "name": "Fish Koroso Full (አሳ ቆሮሶ ሙሉ)",
    "frenchName": "አሳ ቆሮሶ ሙሉ / Fish Koroso Full",
    "category": "Fish Mains",
    "price": 3000,
    "priceNote": "Whole Fish (Mulu)",
    "badge": "Whole Lake Tilapia",
    "image": null,
    "description": "Whole fresh Lake Tana Koroso (Tilapia) deep-fried to golden crispness, scored and seasoned with lemon, rosemary, and mitmita.",
    "ingredients": [
      "Whole Lake Tana Tilapia",
      "Cracked Pepper",
      "Rosemary",
      "Lime",
      "Mitmita",
      "Awaze Dip"
    ],
    "pairingWine": "Cold Draft Beer or Vermentino",
    "prepTime": "20 mins",
    "dietary": [
      "Whole Fish",
      "Crispy Skin"
    ]
  },
  {
    "id": "dish-fish-18",
    "name": "Fish Tibs Half (አሳ ጥብስ ግማሽ)",
    "frenchName": "አሳ ትቢት ግማሽ / Fish Tebit Half",
    "category": "Fish Mains",
    "price": 2000,
    "priceNote": "Half Portion (Gimash)",
    "badge": "Sautéed Fish Tibs",
    "image": null,
    "description": "Half portion of fresh fish cubes flash-sautéed in a hot pan with red onions, garlic, fresh rosemary, and sliced serrano chilies.",
    "ingredients": [
      "Fish Fillet Chunks",
      "Red Onions",
      "Garlic",
      "Rosemary",
      "Jalapeños",
      "Awaze"
    ],
    "pairingWine": "Dry White Wine",
    "prepTime": "15 mins",
    "dietary": [
      "Sautéed Tibs"
    ]
  },
  {
    "id": "dish-fish-19",
    "name": "Fish Koroso Half (አሳ ቆሮሶ ግማሽ)",
    "frenchName": "አሳ ቆሮሶ ግማሽ / Fish Koroso Half",
    "category": "Fish Mains",
    "price": 1500,
    "priceNote": "Half Portion",
    "badge": "Half Koroso",
    "image": null,
    "description": "Half serving of crispy fried Lake Tana Koroso tilapia with fresh lemon slices and traditional spices.",
    "ingredients": [
      "Fresh Koroso Tilapia",
      "Spiced Seasoning",
      "Fresh Lemon",
      "Mitmita"
    ],
    "pairingWine": "White Wine or Lager",
    "prepTime": "15 mins",
    "dietary": [
      "Crispy Tilapia"
    ]
  },
  {
    "id": "dish-fish-20",
    "name": "Fish Shekla Mulu (አሳ ሸክላ ሙሉ)",
    "frenchName": "አሳ ሸክላ ሙሉ / Fish Shekla Mulu",
    "category": "Fish Mains",
    "price": 3000,
    "priceNote": "Whole Sizzling Clay Pot",
    "badge": "Sizzling Clay Pot",
    "image": null,
    "description": "Whole seasoned fish served sizzling hot in a traditional earthenware clay pot (Shekla) over red-hot charcoal with caramelized onions.",
    "ingredients": [
      "Whole Fish",
      "Clay Pot (Shekla)",
      "Caramelized Onions",
      "Rosemary Butter",
      "Jalapeño"
    ],
    "pairingWine": "Medium Bodied White or Red Wine",
    "prepTime": "22 mins",
    "dietary": [
      "Signature Sizzler"
    ]
  },
  {
    "id": "dish-fish-21",
    "name": "Fish Shekla Half (አሳ ሸክላ ግማሽ)",
    "frenchName": "አሳ ሸክላ ግማሽ / Fish Shekla Half",
    "category": "Fish Mains",
    "price": 1500,
    "priceNote": "Half Sizzling Clay Pot",
    "badge": "Half Clay Pot",
    "image": null,
    "description": "Half portion of mouth-watering sizzling fish presented in a heated traditional smoking clay pot.",
    "ingredients": [
      "Fish Chunks",
      "Hot Clay Pot",
      "Onions",
      "Garlic",
      "Rosemary"
    ],
    "pairingWine": "Crisp White Wine",
    "prepTime": "18 mins",
    "dietary": [
      "Sizzling Clay Pot"
    ]
  },
  {
    "id": "dish-fish-22",
    "name": "Full Nile Perch Zilzil Shekla (ሙሉ ናይል ፐርች ዝልዝል ሸክላ)",
    "frenchName": "ሙሉ ናይል ፐርች ዝልዝል ሸክላ / Full Nile Purch Zlzl Shekal",
    "category": "Fish Mains",
    "price": 4000,
    "priceNote": "Premium Full Platter",
    "badge": "Nile Perch Zilzil",
    "image": null,
    "description": "Long tender strips (Zilzil) of succulent Nile Perch sizzled table-side in a burning clay pot with spiced herb butter and peppers.",
    "ingredients": [
      "Nile Perch Strips (Zilzil)",
      "Aromatic Spices",
      "Sliced Onions",
      "Garlic",
      "Hot Clay Pot"
    ],
    "pairingWine": "Sommelier Choice White",
    "prepTime": "20 mins",
    "dietary": [
      "Prime Cut",
      "Clay Pot Sizzler"
    ]
  },
  {
    "id": "dish-fish-23",
    "name": "Half Nile Perch Zilzil Shekla (ግማሽ ናይል ፐርች ዝልዝል ሸክላ)",
    "frenchName": "ግማሽ ናይል ፐርች ዝልዝል ሸክላ / Half Nile Purch Zlzl Shekal",
    "category": "Fish Mains",
    "price": 3000,
    "priceNote": "Half Clay Pot Portion",
    "badge": "Zilzil Shekla Half",
    "image": null,
    "description": "Half portion of prime Nile Perch strips sizzling hot in an authentic earthen clay bowl.",
    "ingredients": [
      "Nile Perch Strips",
      "Garlic",
      "Herb Butter",
      "Jalapeños"
    ],
    "pairingWine": "Chardonnay",
    "prepTime": "18 mins",
    "dietary": [
      "Prime Cut"
    ]
  },
  {
    "id": "dish-fish-24",
    "name": "Full Asa Zilzil Shekla (ሙሉ ዝልዝል ሸክላ)",
    "frenchName": "ሙሉ ዝልዝል ሸክላ / Full Asa Zlzl Shekla",
    "category": "Fish Mains",
    "price": 3000,
    "priceNote": "Whole Zilzil Shekla",
    "badge": "Asa Zilzil Mulu",
    "image": null,
    "description": "Full order of seasoned fish fillet strips roasted hot in a traditional earthenware dish with onions and rosemary.",
    "ingredients": [
      "Fish Strips (Zilzil)",
      "Sautéed Onions",
      "Green Chilies",
      "Clay Pot"
    ],
    "pairingWine": "Dry White Wine",
    "prepTime": "20 mins",
    "dietary": [
      "Traditional Sizzler"
    ]
  },
  {
    "id": "dish-fish-25",
    "name": "Half Asa Zilzil Shekla (ግማሽ ዝልዝል ሸክላ)",
    "frenchName": "ግማሽ ዝልዝል ሸክላ / Half Asa Zlzl Shekla",
    "category": "Fish Mains",
    "price": 1700,
    "priceNote": "Half Zilzil Shekla",
    "badge": "Asa Zilzil Half",
    "image": null,
    "description": "Half serving of sizzled fish fillet strips in hot clay pot with sweet onions and herb seasoning.",
    "ingredients": [
      "Fish Strips",
      "Rosemary",
      "Onions",
      "Garlic",
      "Clay Pot"
    ],
    "pairingWine": "House White Wine",
    "prepTime": "15 mins",
    "dietary": [
      "Clay Pot"
    ]
  },
  {
    "id": "dish-fish-26",
    "name": "Fish Agelegel Mulu (አሳ አገልግል ሙሉ)",
    "frenchName": "አሳ አገልግል ሙሉ / Fish Agelegel Mulu",
    "category": "Fish Mains",
    "price": 3000,
    "priceNote": "Full Traditional Basket",
    "badge": "Traditional Agelegel",
    "image": null,
    "description": "A feast of assorted fish dishes wrapped in layers of injera and served in a traditional hand-crafted leather Agelegel basket.",
    "ingredients": [
      "Fried & Sautéed Fish",
      "Torn Injera",
      "Awaze",
      "Fresh Lemon",
      "Agelegel Basket"
    ],
    "pairingWine": "Cellar Reserve White",
    "prepTime": "22 mins",
    "dietary": [
      "Heritage Presentation"
    ]
  },
  {
    "id": "dish-fish-27",
    "name": "Fish Agelegel Half (አሳ አገልግል ግማሽ)",
    "frenchName": "አሳ አገልግል ግማሽ / Fish Agelegel Half",
    "category": "Fish Mains",
    "price": 2000,
    "priceNote": "Half Traditional Basket",
    "badge": "Agelegel Half",
    "image": null,
    "description": "Half portion of traditional fish dishes presented in the iconic leather-bound Agelegel carrier.",
    "ingredients": [
      "Fish Dishes",
      "Injera",
      "Lemon Wedges",
      "Spiced Dip"
    ],
    "pairingWine": "White Wine or Tea",
    "prepTime": "18 mins",
    "dietary": [
      "Heritage Presentation"
    ]
  },
  {
    "id": "dish-fish-28",
    "name": "Half Gulashe & Half Cotelet (ሀፍ ጉላሽ እና ሀፍ ኮተሌት)",
    "frenchName": "ሀፍ ጉላሽ እና ሀፍ ኮተሌት / Half Gulashe & Cotelet",
    "category": "Fish Mains",
    "price": 1300,
    "priceNote": "Duo Combo",
    "badge": "Gulash & Cutlet",
    "image": null,
    "description": "Combination plate of savory tomato-simmered fish goulash alongside a crispy golden fish cutlet.",
    "ingredients": [
      "Fish Gulash",
      "Fish Cutlet (Cotelet)",
      "Tomato Gravy",
      "Crisp Breadcrumbs"
    ],
    "pairingWine": "Chilled Pinot Grigio",
    "prepTime": "16 mins",
    "dietary": [
      "Duo Special"
    ]
  },
  {
    "id": "dish-fish-29",
    "name": "Fish Finger (አሳ ፊንገር)",
    "frenchName": "አሳ ፊንገር / Fish Finger",
    "category": "Fish Mains",
    "price": 1200,
    "priceNote": "Portion with Dip",
    "badge": "Crispy Fingers",
    "image": null,
    "description": "Tender fish fillets cut into batons, lightly seasoned and fried to a crunchy golden crust with tartar sauce.",
    "ingredients": [
      "Fish Fillet Strips",
      "Spiced Breading",
      "Tartar Sauce",
      "Lemon"
    ],
    "pairingWine": "Cold Lager or Soda",
    "prepTime": "14 mins",
    "dietary": [
      "Finger Food",
      "Crispy"
    ]
  },
  {
    "id": "dish-fish-30",
    "name": "Fish Wrap (አሳ ራፕ)",
    "frenchName": "አሳ ራፕ / Fish Wrap",
    "category": "Fish Mains",
    "price": 1100,
    "priceNote": "Handheld Wrap",
    "badge": "Fresh Wrap",
    "image": null,
    "description": "Grilled fish fillets wrapped in fresh warm flatbread with shredded lettuce, tomatoes, red onions, and garlic sauce.",
    "ingredients": [
      "Grilled Fish",
      "Flatbread Wrap",
      "Lettuce & Tomatoes",
      "House Garlic Sauce"
    ],
    "pairingWine": "Iced Tea or Soft Drink",
    "prepTime": "12 mins",
    "dietary": [
      "Handheld Quick Bite"
    ]
  },
  {
    "id": "dish-fish-31",
    "name": "Kids Fish Nuggets (የልጆች አሳ)",
    "frenchName": "የልጆች አሳ / Fish Nagut",
    "category": "Fish Mains",
    "price": 1200,
    "priceNote": "Kids Meal",
    "badge": "Kids Special",
    "image": null,
    "description": "Bite-sized tender boneless fish nuggets prepared especially for kids, served with fries and mild dip.",
    "ingredients": [
      "Boneless Fish Chunks",
      "Mild Batter",
      "Crispy Fries",
      "Ketchup & Mayo"
    ],
    "pairingWine": "Fresh Fruit Juice",
    "prepTime": "12 mins",
    "dietary": [
      "Kids Friendly"
    ]
  },
  {
    "id": "dish-fish-32",
    "name": "Half Gulash & Half Finger (ሃፍ ጉላሽ ሃፍ ፊንገር)",
    "frenchName": "ሃፍ ጉላሽ ሃፍ ፊንገር / Half Gulash Half Finger",
    "category": "Fish Mains",
    "price": 1300,
    "priceNote": "Combination Plate",
    "badge": "Gulash & Finger",
    "image": null,
    "description": "A savory serving of rich fish goulash paired with crispy fried fish fingers.",
    "ingredients": [
      "Fish Gulash",
      "Fish Fingers",
      "Tomato Sauce",
      "Crispy Breading"
    ],
    "pairingWine": "House White Wine",
    "prepTime": "15 mins",
    "dietary": [
      "Popular Combination"
    ]
  },
  {
    "id": "dish-fish-33",
    "name": "Grilled Nile Perch (ግሪልድ ናይል ፐርች)",
    "frenchName": "ግሪልድ ናይል ፐርች / Grilled Nile Perch",
    "category": "Fish Mains",
    "price": 1500,
    "priceNote": "Grilled Fillet",
    "badge": "Flame-Grilled Perch",
    "image": null,
    "description": "Thick fillet of fresh Nile Perch grilled over charcoal with Ethiopian herbs, garlic butter, and fresh lime.",
    "ingredients": [
      "Nile Perch Fillet",
      "Garlic Butter",
      "Wild Herbs",
      "Lime"
    ],
    "pairingWine": "Chablis or Sauvignon Blanc",
    "prepTime": "18 mins",
    "dietary": [
      "Charcoal Grilled",
      "Heart Healthy"
    ]
  },
  {
    "id": "dish-fish-34",
    "name": "Fish & Chips (አሳ እና ቺፕስ)",
    "frenchName": "አሳ እና ቺፕስ / Asa & Chips",
    "category": "Fish Mains",
    "price": 1100,
    "priceNote": "Fillet & Hand-Cut Fries",
    "badge": "Classic Fish & Chips",
    "image": null,
    "description": "Deep-fried golden battered fish fillet served with generous hand-cut potato chips, lemon wedges, and tartar sauce.",
    "ingredients": [
      "Battered Fish Fillet",
      "Hand-Cut Potato Fries",
      "House Tartar Sauce",
      "Lemon"
    ],
    "pairingWine": "Cold Lager or Mineral Water",
    "prepTime": "15 mins",
    "dietary": [
      "Classic Comfort Food"
    ]
  },
  {
    "id": "dish-fish-35",
    "name": "Enjera Firfir be Asa (እንጀራ ፍርፍር በ አሳ)",
    "frenchName": "እንጀራ ፍርፍር በ አሳ / Enjera Frfr be Asa",
    "category": "Fish Mains",
    "price": 600,
    "priceNote": "Traditional Firfir Bowl",
    "badge": "Authentic Firfir",
    "image": null,
    "description": "Soft shredded injera soaked and sautéed in a spicy, rich berbere and garlic fish sauce with fresh herbs.",
    "ingredients": [
      "Torn Injera",
      "Fresh Fish Flakes",
      "Berbere Spice",
      "Garlic",
      "Red Onions"
    ],
    "pairingWine": "Ethiopian Spiced Tea or Beer",
    "prepTime": "12 mins",
    "dietary": [
      "Traditional Comfort Food"
    ]
  },
  {
    "id": "dish-fish-36",
    "name": "Rice with Fish (አሳ በሩዝ)",
    "frenchName": "አሳ በሩዝ / Rice with Fish",
    "category": "Fish Mains",
    "price": 1100,
    "priceNote": "Steamed Rice Platter",
    "badge": "Fish & Rice",
    "image": null,
    "description": "Steamed aromatic white rice topped with seasoned pan-sautéed fish pieces, sweet onions, and mild peppers.",
    "ingredients": [
      "Steamed Rice",
      "Seasoned Fish Fillet",
      "Sautéed Bell Peppers",
      "Onions",
      "Garlic Sauce"
    ],
    "pairingWine": "White Wine or Mineral Water",
    "prepTime": "15 mins",
    "dietary": [
      "Gluten-Free Option"
    ]
  },
  {
    "id": "dish-fish-37",
    "name": "Spaghetti with Fish (አሳ በፓስታ)",
    "frenchName": "አሳ በፓስታ / Spageti with Fish",
    "category": "Fish Mains",
    "price": 1100,
    "priceNote": "Pasta Entrée",
    "badge": "Fish Spaghetti",
    "image": null,
    "description": "Tender Italian spaghetti tossed in a rich, savory tomato, garlic, and fresh fish ragù with Ethiopian herbs.",
    "ingredients": [
      "Spaghetti Pasta",
      "Fish Chunks",
      "Tomato Garlic Sauce",
      "Ethiopian Spices",
      "Basil"
    ],
    "pairingWine": "Italian White or Pinot Grigio",
    "prepTime": "15 mins",
    "dietary": [
      "Pasta Dish"
    ]
  },
  {
    "id": "dish-6",
    "name": "Chilean Sea Bass in Miso Dashi",
    "frenchName": "Légine Australe Caramélisée au Miso",
    "category": "Chef Specials",
    "price": 48,
    "priceNote": "Signature Dish",
    "badge": "Chef's Masterpiece",
    "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    "description": "Glacier 51 Chilean sea bass marinated for 48 hours in Kyoto sweet saikyo miso. Caramelized under salamander grill and served in a fragrant shiitake dashi broth with lotus root crisps.",
    "ingredients": [
      "Chilean Sea Bass",
      "Saikyo Sweet Miso",
      "Shiitake Dashi",
      "Baby Bok Choy",
      "Lotus Crisps"
    ],
    "pairingWine": "Puligny-Montrachet 2021",
    "prepTime": "20 mins",
    "dietary": [
      "Chef Signature"
    ]
  },
  {
    "id": "dish-7",
    "name": "Squid Ink Tagliolini & Colossal Scallops",
    "frenchName": "Tagliolini à l’Encre de Seiche et Noix de St-Jacques",
    "category": "Seafood Pastas",
    "price": 36,
    "priceNote": "Handmade Pasta",
    "isHeroFeatured": true,
    "badge": "House Specialty",
    "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80",
    "description": "Handcrafted fresh squid ink pasta ribbons tossed with colossal Hokkaido diver scallops, tiger prawns, sweet datterini tomatoes, white wine garlic fumet, and finished with fresh garden basil.",
    "ingredients": [
      "Housemade Squid Ink Pasta",
      "Hokkaido Scallops",
      "Wild Tiger Prawns",
      "Datterini Tomatoes",
      "Calabrian Chili"
    ],
    "pairingWine": "Etna Bianco DOC 2022",
    "prepTime": "16 mins",
    "dietary": [
      "Handmade Fresh Pasta"
    ]
  },
  {
    "id": "dish-8",
    "name": "Dover Sole Meunière Table-Side",
    "frenchName": "Sole Meunière Façon Traditionnelle",
    "category": "Chef Specials",
    "price": 54,
    "priceNote": "Classic Tableside Service",
    "badge": "Gastronomy Classic",
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "description": "Wild North Sea Dover Sole lightly dusted in flour, gently pan-seared in foaming browned butter (beurre noisette) with fresh lemon juice and chopped flat-leaf parsley. Filleted table-side by our head maître.",
    "ingredients": [
      "Wild Dover Sole",
      "Normandy Butter",
      "Fresh Lemon Juice",
      "Capers",
      "Parsley"
    ],
    "pairingWine": "Chassagne-Montrachet 1er Cru",
    "prepTime": "25 mins",
    "dietary": [
      "French Culinary Classic"
    ]
  },
  {
    "id": "dish-9",
    "name": "Maine Lobster Bisque & Ravioli",
    "frenchName": "Bisque de Homard et Ravioles de Crabe",
    "category": "Seafood Pastas",
    "price": 34,
    "priceNote": "Entrée Course",
    "badge": "Comfort Luxury",
    "image": "https://images.unsplash.com/photo-1559742811-82286364ceaf?auto=format&fit=crop&w=800&q=80",
    "description": "Velvety slow-simmered Maine lobster bisque infused with cognac and tarragon, poured over house-made artisanal crab and mascarpone ravioli with chive cream.",
    "ingredients": [
      "Poached Maine Lobster",
      "Cognac Bisque",
      "Mascarpone Ravioli",
      "Sea Tarragon",
      "Cream"
    ],
    "pairingWine": "Condrieu Viognier 2021",
    "prepTime": "14 mins",
    "dietary": [
      "House Favorite"
    ]
  },
  {
    "id": "dish-10",
    "name": "Tignanello Toscana IGT 2019",
    "frenchName": "Marchesi Antinori, Tenuta Tignanello",
    "category": "Fine Wine Cellar",
    "price": 300,
    "priceNote": "Bottle 750ml",
    "isHeroFeatured": true,
    "badge": "Sommelier Reserve 98pts",
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    "description": "Legendary Super Tuscan masterpiece crafted from Sangiovese, Cabernet Sauvignon, and Cabernet Franc. Deep ruby red, aromas of ripe red fruits, vanilla, and sweet spices. Sublime pairing with our rich fish dishes and raw bar.",
    "ingredients": [
      "Sangiovese 80%",
      "Cabernet Sauvignon 15%",
      "Cabernet Franc 5%",
      "French Oak 14 Months"
    ],
    "pairingWine": "Pairs with Dressed Oysters, Tuna Tartare & Wood-Fired Branzino",
    "prepTime": "Cellar Temp: 16°C",
    "dietary": [
      "Organic Certified",
      "Exclusive Allocation"
    ]
  },
  {
    "id": "dish-11",
    "name": "Chablis Grand Cru Les Clos 2020",
    "frenchName": "Domaine Christian Moreau Père & Fils",
    "category": "Fine Wine Cellar",
    "price": 185,
    "priceNote": "Bottle 750ml",
    "badge": "Iconic Mineral White",
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    "description": "The pinnacle of Chablis terroir. Kimmeridgian limestone minerality, vibrant citrus zest, crushed sea shells, and intense saline elegance that elevates freshly shucked oysters.",
    "ingredients": [
      "100% Chardonnay",
      "Limestone Terroir",
      "Natural Fermentation"
    ],
    "pairingWine": "Ultimate match for Fresh Oysters & Hamachi Crudo",
    "prepTime": "Cellar Temp: 10°C",
    "dietary": [
      "Estate Bottled"
    ]
  },
  {
    "id": "dish-12",
    "name": "Dom Pérignon Vintage Champagne 2013",
    "frenchName": "Champagne Moët & Chandon",
    "category": "Fine Wine Cellar",
    "price": 350,
    "priceNote": "Bottle 750ml",
    "badge": "Prestige Cuvée",
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    "description": "Remarkable harmony and silky precision. Notes of mirabelle plum, fresh cardamom, eucalyptus, and toasted brioche with a persistent, refined bubble bead.",
    "ingredients": [
      "Pinot Noir & Chardonnay",
      "Aged 9 Years on Lees"
    ],
    "pairingWine": "Pairs with Caviar, Oysters, and Lobster Ravioli",
    "prepTime": "Chilled: 8°C",
    "dietary": [
      "Prestige Cuvée"
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
