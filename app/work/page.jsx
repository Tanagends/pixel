import WorkPage from "./WorkPage";

export const metadata = {
  title: "Our Work | Web & Graphic Design Portfolio | Pixel Crafte",
  description:
    "Explore the portfolio of Pixel Crafte. See our latest projects in custom web design, e-commerce, mobile app development, and graphic design for clients in Zimbabwe.",
  alternates: {
    canonical: "https://pixelcrafte.co.zw/work",
  },
  openGraph: {
    title: "Our Work & Portfolio | Pixel Crafte",
    description: "A showcase of our best web and graphic design projects.",
    url: "https://pixelcrafte.co.zw/work",
  },
  twitter: {
    title: "Our Work & Portfolio | Pixel Crafte",
    description: "A showcase of our best web and graphic design projects.",
  },
};

const page = () => {
  return <WorkPage />;
};

export default page;
