import ContactPage from "./ContactPage";

export const metadata = {
  title: "Contact Pixel Crafte | Get in Touch for a Free Quote",
  description:
    "Contact Pixel Crafte for web design, development, and graphic design services in Zimbabwe. Reach out to us via our contact form, email, or phone for a free consultation.",
  alternates: {
    canonical: "https://pixelcrafte.co.zw/contact",
  },
  openGraph: {
    title: "Contact Pixel Crafte | Let's Start Your Project",
    description:
      "Ready to start your project? Contact us today for a free consultation on web design, development, or graphic design.",
    url: "https://pixelcrafte.co.zw/contact",
  },
  twitter: {
    title: "Contact Pixel Crafte | Let's Start Your Project",
    description:
      "Ready to start your project? Contact us today for a free consultation on web design, development, or graphic design.",
  },
};

const page = () => {
  return <ContactPage />;
};

export default page;
