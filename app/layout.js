import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/HeaderFooter";
import { Toaster } from "sonner";
import Whatsapp from "@/components/FloatingWhatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://pixelcrafte.co.zw";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pixel Crafte | Web Design, Software & Mobile App Development",
    template: `%s | Pixel Crafte`,
  },
  description:
    "Pixel Crafte is a premier web design agency specializing in custom web applications, e-commerce solutions, mobile apps, and graphic design. We empower businesses and startups to enhance their digital presence.",
  keywords: [
    "web design",
    "web development",
    "software development",
    "mobile app development",
    "e-commerce",
    "graphic design",
    "business websites",
    "startups",
    "digital presence",
    "agents",
    "web agency zimbabwe",
  ],
  authors: [{ name: "Pixel Crafte", url: siteUrl }],
  creator: "Pixel Crafte",
  publisher: "Pixel Crafte",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Pixel Crafte | Web Design, Software & Mobile App Development",
    description:
      "Empowering businesses and startups with custom web design, e-commerce, mobile apps, and graphic design.",
    url: siteUrl,
    siteName: "Pixel Crafte",
    images: [
      {
        url: "/logo.svg", // Assuming logo.svg is in the /public folder
        width: 1200,
        height: 630,
        alt: "Pixel Crafte Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixel Crafte | Web Design, Software & Mobile App Development",
    description:
      "Empowering businesses and startups with custom web design, e-commerce, mobile apps, and graphic design.",
    images: ["/logo.svg"], // Assuming logo.svg is in the /public folder
    creator: "@pixelcrafte", // Optional: Replace with your Twitter handle
  },
  icons: {
    icon: "/pixel-crafte-logo.png",
    shortcut: "/pixel-crafte-logo.png",
    apple: "/pixel-crafte-logo.png",
  },
  manifest: `${siteUrl}/site.webmanifest`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
          {children}
        <Whatsapp />
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 3000,
          }}
          richColors
        />
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Pixel Crafte",
          "url": "https://pixelcrafte.co.zw",
          "logo": "https://pixelcrafte.co.zw/logo.svg",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+263-77-197-5597", // Add your phone number
            "contactType": "customer service"
          }
        }) }}
      />
      </body>
    </html>
  );
}
