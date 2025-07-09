import BlogPage from "./BlogPage";

export const metadata = {
  title: "Blog | Web Design & Digital Marketing Insights | Pixel Crafte",
  description:
    "Explore the Pixel Crafte blog for the latest insights, tips, and trends in web design, software development, e-commerce, and digital marketing in Zimbabwe.",
  alternates: {
    canonical: "https://pixelcrafte.co.zw/blog",
  },
  openGraph: {
    title: "Blog | Web Design & Digital Marketing Insights | Pixel Crafte",
    description:
      "Stay updated with the latest trends and tips in web design, development, and digital marketing.",
    url: "https://pixelcrafte.co.zw/blog",
  },
  twitter: {
    title: "Blog | Web Design & Digital Marketing Insights | Pixel Crafte",
    description:
      "Stay updated with the latest trends and tips in web design, development, and digital marketing.",
  },
};

const page = () => {
  return <BlogPage />;
};

export default page;
