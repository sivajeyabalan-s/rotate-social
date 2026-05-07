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
	name: "Classic Mojito",
	image: "/images/drink1.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
 },
 {
	id: 2,
	name: "Raspberry Mojito",
	image: "/images/drink2.png",
	title: "A Zesty Classic That Never Fails",
	description:
	 "The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocksâ€”itâ€™s always crisp & refreshing.",
 },
 {
	id: 3,
	name: "Violet Breeze",
	image: "/images/drink3.png",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.",
 },
 {
	id: 4,
	name: "Curacao Mojito",
	image: "/images/drink4.png",
	title: "Crafted With Care, Poured With Love",
	description:
	 "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
 },
];

const menuItems = [
 {
  id: 1,
  name: "Classic Mojito",
  category: "Signature",
  image: "/images/drink1.png",
  description: "A timeless blend of fresh mint, lime, and aged rum — balanced to perfection with a whisper of cane sugar.",
  price: "$14",
 },
 {
  id: 2,
  name: "Raspberry Mojito",
  category: "Seasonal",
  image: "/images/drink2.png",
  description: "Sun-ripened raspberries muddled with mint and rum, finished with a sparkling lift of soda.",
  price: "$16",
 },
 {
  id: 3,
  name: "Violet Breeze",
  category: "Artisanal",
  image: "/images/drink3.png",
  description: "A serene pour of violet liqueur, elderflower, and citrus — crafted for those who seek the extraordinary.",
  price: "$18",
 },
 {
  id: 4,
  name: "Curacao Mojito",
  category: "Signature",
  image: "/images/drink4.png",
  description: "Bold blue curacao meets zesty lime and fresh mint — a mojito reimagined with Caribbean soul.",
  price: "$16",
 },
 {
  id: 5,
  name: "Tropical Bloom",
  category: "Seasonal",
  image: "/images/drink1.png",
  description: "Passionfruit, mango, and coconut water — a non-alcoholic ritual for the disciplined palate.",
  price: "$12",
 },
 {
  id: 6,
  name: "Passionfruit Mint",
  category: "Artisanal",
  image: "/images/drink2.png",
  description: "Fresh passionfruit pressed with garden mint and a touch of agave — restrained, balanced, refined.",
  price: "$13",
 },
 {
  id: 7,
  name: "Citrus Glow",
  category: "Mocktail",
  image: "/images/drink3.png",
  description: "Cold-pressed orange, yuzu, and ginger unite in a luminous blend that awakens the senses.",
  price: "$11",
 },
 {
  id: 8,
  name: "Lavender Fizz",
  category: "Mocktail",
  image: "/images/drink4.png",
  description: "Provençal lavender syrup, lemon, and sparkling water — poured with monastic calm.",
  price: "$11",
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
