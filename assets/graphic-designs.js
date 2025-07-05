// types/graphicDesignServices.js
export const graphicDesigns = [
  {
    type: "Logo Design",
    description: "Craft a memorable and unique brand identity with our professional logo design services.",
    price: "$300",
    duration: "1-2 Weeks",
    image: {
      src: "/images/pixel-digital-bg.png", // Path to your image in the public folder
      alt: "Modern logo design example",
      width: 800, // Actual width of the image file
      height: 600, // Actual height of the image file
    },
  },
  {
    type: "Branding Package",
    description: "Comprehensive branding solution including logo, color palette, typography, and brand guidelines.",
    price: "$800",
    duration: "3-4 Weeks",
    image: {
      src: "/images/pixel-digital-bg.png",
      alt: "Full branding kit with stationery mockups",
      width: 900,
      height: 1200, // This is a 3:4 portrait image
    },
  },
  {
    type: "Social Media Graphics",
    description: "Engaging visuals for all your social media platforms, designed to boost your online presence.",
    price: "$200/5 Graphics",
    duration: "1 Week",
    image: {
      src: "/images/pixel-digital-bg.png",
      alt: "Collection of social media posts",
      width: 1920, // This is a 16:9 landscape image
      height: 1080,
    },
  },
  {
    type: "Print Collateral",
    description: "Design for business cards, brochures, flyers, and other print materials that leave an impact.",
    price: "$250+",
    duration: "2-3 Weeks",
    image: {
      src: "/images/pixel-digital-bg.png",
      alt: "Mockup of business cards and brochures",
      width: 1000,
      height: 1000, // A square image
    },
  },
];