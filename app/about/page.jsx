import AboutPage from "./AboutPage";

export const metadata = {
  title: "About Pixel Crafte | Our Story, Mission, and Team",
  description:
    "Learn about Pixel Crafte, a leading web design and digital agency in Zimbabwe. Discover our story, our mission to empower businesses, and the team behind our work.",
  alternates: {
    canonical: "https://pixelcrafte.co.zw/about",
  },
  openGraph: {
    title: "About Pixel Crafte | Our Story, Mission, and Team",
    description:
      "Learn about the team and mission behind Pixel Crafte, a digital agency dedicated to helping businesses succeed online.",
    url: "https://pixelcrafte.co.zw/about",
  },
  twitter: {
    title: "About Pixel Crafte | Our Story, Mission, and Team",
    description:
      "Learn about the team and mission behind Pixel Crafte, a digital agency dedicated to helping businesses succeed online.",
  },
};

const page = () => {
  return <AboutPage />;
};

export default page;
