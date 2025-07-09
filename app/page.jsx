import App from "./HomePage";

export const metadata = {
  title: "Pixel Crafte | Web Design, Software & Mobile App Development",
  description:
    "Pixel Crafte is a premier web design agency in Zimbabwe specializing in custom web applications, e-commerce solutions, mobile apps, and graphic design. We empower businesses and startups to enhance their digital presence.",
  alternates: {
    canonical: "https://pixelcrafte.co.zw",
  },
};

const page = () => {
  // throw new Error("This is a test error for the new error boundary feature in Next.js 14.0.0");
  return <App />;
};

export default page;
