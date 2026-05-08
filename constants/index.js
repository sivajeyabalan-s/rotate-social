const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const cocktailLists = [
  {
    name: "Chapel Hill Shiraz",
    country: "AU",
    detail: "Battle",
    price: "$10",
  },
  {
    name: "Caten Malbee",
    country: "AU",
    detail: "Battle",
    price: "$49",
  },
  {
    name: "Rhino Pale Ale",
    country: "CA",
    detail: "750 ml",
    price: "$20",
  },
  {
    name: "Irish Guinness",
    country: "IE",
    detail: "600 ml",
    price: "$29",
  },
];

const mockTailLists = [
  {
    name: "Tropical Bloom",
    country: "US",
    detail: "Battle",
    price: "$10",
  },
  {
    name: "Passionfruit Mint",
    country: "US",
    detail: "Battle",
    price: "$49",
  },
  {
    name: "Citrus Glow",
    country: "CA",
    detail: "750 ml",
    price: "$20",
  },
  {
    name: "Lavender Fizz",
    country: "IE",
    detail: "600 ml",
    price: "$29",
  },
];

const profileLists = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

const featureLists = [
  "Rooted in centuries of tradition",
  "Refined through discipline",
  "Delivered with intention",
  "Guided by artisanal mastery",
];

const goodLists = [
  "Purposeful craftsmanship",
  "Time-honoured methods",
  "Disciplined execution",
  "Artisanal attention to detail",
];

const storeInfo = {
  heading: "Where to Find Us",
  address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
  contact: {
    phone: "(555) 987-6543",
    email: "hello@jsmcocktail.com",
  },
};

const openingHours = [
  { day: "Monâ€“Thu", time: "11:00am â€“ 12am" },
  { day: "Fri", time: "11:00am â€“ 2am" },
  { day: "Sat", time: "9:00am â€“ 2am" },
  { day: "Sun", time: "9:00am â€“ 1am" },
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
];

const allCocktails = [
  {
    id: 1,
    name: "Classic Rotate Social",
    image: "/images/drinks/drink1.png",
    title: "Simple Ingredients, Bold Flavor",
    description:
      "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
  },
  {
    id: 2,
    name: "Raspberry Rotate Social",
    image: "/images/drinks/drink2.png",
    title: "A Zesty Classic That Never Fails",
    description:
      "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocksâ€”itâ€™s always crisp & refreshing.",
  },
  {
    id: 3,
    name: "Violet Breeze",
    image: "/images/drinks/drink3.png",
    title: "Simple Ingredients, Bold Flavor",
    description:
      "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
  },
  {
    id: 4,
    name: "Curacao Rotate Social",
    image: "/images/drinks/drink4.png",
    title: "Crafted With Care, Poured With Love",
    description:
      "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
  },
];

const menuItems = [
  {
    id: 1,
    name: "Classic Rotate Social",
    category: "Drinks",
    image: "/images/drinks/drink1.jpg",
    description:
      "A timeless blend of fresh mint, lime, and aged rum — balanced to perfection with a whisper of cane sugar.",
    
  },
  {
    id: 2,
    name: "Raspberry Rotate Social",
    category: "Drinks",
    image: "/images/drinks/drink2.jpg",
    description:
      "Sun-ripened raspberries muddled with mint and rum, finished with a sparkling lift of soda.",
    
  },
  {
    id: 3,
    name: "Violet Breeze",
    category: "Drinks",
    image: "/images/drinks/drink3.jpg",
    description:
      "A serene pour of violet liqueur, elderflower, and citrus — crafted for those who seek the extraordinary.",
    
  },
  {
    id: 4,
    name: "Curacao Rotate Social",
    category: "Drinks",
    image: "/images/drinks/drink4.jpg",
    description:
      "Bold blue curacao meets zesty lime and fresh mint — a Rotate Social reimagined with Caribbean soul.",
    
  },
  {
    id: 5,
    name: "Tropical Bloom",
    category: "Drinks",
    image: "/images/drinks/drink5.jpg",
    description:
      "Passionfruit, mango, and coconut water — a non-alcoholic ritual for the disciplined palate.",
    
  },
  {
    id: 6,
    name: "Passionfruit Mint",
    category: "Drinks",
    image: "/images/drinks/drink6.jpg",
    description:
      "Fresh passionfruit pressed with garden mint and a touch of agave — restrained, balanced, refined.",
    
  },
  {
    id: 7,
    name: "Citrus Glow",
    category: "Drinks",
    image: "/images/drinks/drink7.jpg",
    description:
      "Cold-pressed orange, yuzu, and ginger unite in a luminous blend that awakens the senses.",
    
  },
  {
    id: 8,
    name: "Lavender Fizz",
    category: "Drinks",
    image: "/images/drinks/drink8.jpg",
    description:
      "Provençal lavender syrup, lemon, and sparkling water — poured with monastic calm.",
    
  },
  {
    id: 9,
    name: "Citrus Ember",
    category: "Drinks",
    image: "/images/drinks/drink9.jpg",
    description:
      "A bright citrus profile layered with botanical depth and a slow, warming finish.",
    
  },
  {
    id: 10,
    name: "Monk's Reserve",
    category: "Drinks",
    image: "/images/drinks/drink10.jpg",
    description:
      "Small-batch spirit, herbal infusion, and subtle smoke — deliberate and composed.",
    
  },
  {
    id: 11,
    name: "Golden Orchard",
    category: "Drinks",
    image: "/images/drinks/drink11.jpg",
    description:
      "Pressed orchard fruit, spice, and a crisp finish inspired by late harvest evenings.",
    
  },
  {
    id: 12,
    name: "Nocturne Tonic",
    category: "Drinks",
    image: "/images/drinks/drink12.jpg",
    description:
      "Dark berries, tonic lift, and restrained bitterness built for a clean nightcap.",
    
  },
  {
    id: 13,
    name: "Saffron Mist",
    category: "Drinks",
    image: "/images/drinks/drink13.jpg",
    description:
      "Florals and saffron threads balanced with citrus oils for a refined aromatic pour.",
   
  },
  {
    id: 14,
    name: "Minted Grove",
    category: "Drinks",
    image: "/images/drinks/drink14.jpg",
    description:
      "Fresh mint, cucumber, and lime topped with sparkling water for a cooling ritual.",
    
  },
  {
    id: 15,
    name: "Ruby Fizz",
    category: "Drinks",
    image: "/images/drinks/drink15.jpg",
    description:
      "Pomegranate, citrus, and gentle effervescence for a vivid, alcohol-free finish.",
    
  },
  {
    id: 16,
    name: "Crispy Corn",
    category: "Appetizers",
    image: "/images/foods/crispy Corn.png",
    description: "Crisp-fried corn tossed with Indian fusion spices.",
    price: "",
  },
  {
    id: 17,
    name: "Gobi Manchurian",
    category: "Appetizers",
    image: "/images/foods/Gobi manchurian.png",
    description: "Crispy cauliflower in a bold Indo-Chinese Manchurian sauce.",
    price: "",
  },
  {
    id: 18,
    name: "Gobi Chilli",
    category: "Appetizers",
    image: "/images/foods/Chilli Gobi.png",
    description: "Cauliflower wok-tossed with peppers, onions, and chilli.",
    price: "",
  },
  {
    id: 19,
    name: "Paneer Chilli",
    category: "Appetizers",
    image: "/images/foods/Chilli Panner.png",
    description: "Cottage cheese cubes in a spicy chilli garlic glaze.",
    price: "",
  },
  {
    id: 20,
    name: "Sweet Chilli Popcorn Shrimp",
    category: "Appetizers",
    image: "/images/foods/Sweet Chilli Popcorn Shrimp.jpg",
    description: "Crispy shrimp bites finished with sweet chilli sauce.",
    price: "",
  },
  {
    id: 21,
    name: "Bone in Wings",
    category: "Appetizers",
    image: "/images/foods/bone in wings.jpg",
    description: "Juicy bone-in wings tossed in house seasoning.",
    price: "",
  },
  {
    id: 22,
    name: "Chicken Lollipop",
    category: "Appetizers",
    image: "/images/foods/Chicken Lollipop.png",
    description: "Crisp chicken drumettes with classic Indo-Chinese flavor.",
    price: "",
  },
  {
    id: 23,
    name: "Shrimp Chilli",
    category: "Appetizers",
    image: "/images/foods/Shrimp Chilli.png",
    description: "Shrimp stir-fried with chillies, garlic, and peppers.",
    price: "",
  },
  {
    id: 24,
    name: "Paneer Tikka Kebab",
    category: "Kebabs",
    image: "/images/foods/paneer tikka kebabs.jpg",
    description: "Tandoor-charred paneer tikka skewers with smoky spice.",
    price: "",
  },
  {
    id: 25,
    name: "Malai Chicken Kebab",
    category: "Kebabs",
    image: "/images/foods/malai chicken kebab.png",
    description: "Creamy marinated chicken kebabs, tender and aromatic.",
    price: "",
  },
  {
    id: 26,
    name: "Clay Tandoori Wings ( 5 pcs)",
    category: "Kebabs",
    image: "/images/foods/clay tandoori wings.jpg",
    description: "Five tandoor-finished wings with house clay-oven spice.",
    price: "",
  },
  {
    id: 27,
    name: "Rotate Speciality Burger",
    category: "Mains",
    image: "/images/foods/Rotate Speciality Burger.jpg",
    description: "House-crafted burger with layered Indian fusion flavors.",
    price: "",
  },
  {
    id: 28,
    name: "Plain Naan",
    category: "Breads",
    image: "/images/foods/plain naan.jpg",
    description: "Soft tandoor naan baked fresh to order.",
    price: "",
  },
  {
    id: 29,
    name: "Bullet Naan",
    category: "Breads",
    image: "/images/foods/bullet naan.png",
    description: "Spiced naan with a fiery kick.",
    price: "",
  },
  {
    id: 30,
    name: "Caesar Salad",
    category: "Salads",
    image: "/images/foods/caesar salad.jpg",
    description: "Crisp romaine, parmesan, and classic caesar dressing.",
    price: "",
  },
  {
    id: 31,
    name: "Dal Tadka",
    category: "Curries",
    image: "/images/foods/dal tadka.png",
    description: "Yellow lentils tempered with cumin, garlic, and ghee.",
    price: "",
  },
  {
    id: 32,
    name: "Chicken Mughlai",
    category: "Curries",
    image: "/images/foods/chicken mughlai.png",
    description: "Rich Mughlai-style chicken curry with warm spices.",
    price: "",
  },
  {
    id: 33,
    name: "Shrimp Tikka Masala",
    category: "Curries",
    image: "/images/foods/shrimp tikka masala.png",
    description: "Shrimp simmered in a creamy tikka masala gravy.",
    price: "",
  },
  {
    id: 34,
    name: "Egg Tikka Masala",
    category: "Curries",
    image: "/images/foods/egg tikka masala.png",
    description: "Boiled eggs in a robust tomato-onion masala.",
    price: "",
  },
  {
    id: 35,
    name: "Momos",
    category: "Appetizers",
    image: "/images/foods/momos.jpg",
    description: "Steamed dumplings served with spicy chutney.",
    price: "",
  },
  {
    id: 36,
    name: "Hyderabadi Chicken Dum Biryani",
    category: "Rice",
    image: "/images/foods/hyderabadi chicken dum biryani.png",
    description: "Aromatic basmati and chicken dum-cooked with saffron.",
    price: "",
  },
  {
    id: 37,
    name: "Street Style Fried Rice",
    category: "Rice",
    image: "/images/foods/Street Style Fried Rice.png",
    description: "Wok-fried rice inspired by classic Indian street flavors.",
    price: "",
  },
  {
    id: 38,
    name: "Fried Rice",
    category: "Rice",
    image: "/images/foods/fried rice.png",
    description: "Savory fried rice with vegetables and house seasoning.",
    price: "",
  },
  {
    id: 39,
    name: "Gulab Jamun",
    category: "Desserts",
    image: "/images/foods/Gulab jamun.png",
    description: "Soft milk-solid dumplings soaked in warm sugar syrup.",
    price: "",
  },
  {
    id: 40,
    name: "Ice Cream 3 Scoops",
    category: "Desserts",
    image: "/images/foods/ice cream 3 scoop.jpg",
    description: "Three scoops of ice cream to finish on a sweet note.",
    price: "",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allCocktails,
  menuItems,
};
