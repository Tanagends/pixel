// components/FloatingWhatsApp.jsx
"use client"; // This component uses a link, but no other client-side hooks are needed.
import Link from 'next/link';

import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppIcon = () => (
  <div className="bg-[#25D366] rounded-full p-3 shadow-md inline-flex items-center justify-center">
    <FaWhatsapp className="text-white w-6 h-6" />
  </div>
);



// Inline SVG for WhatsApp Icon
/*const WhatsAppIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M19.043 4.957c-2.27-2.27-5.3-3.515-8.485-3.515C4.782 1.442 1.442 4.782 1.442 10.558c0 1.944.528 3.876 1.575 5.565L1.5 22.5l6.512-1.51c1.623.95 3.481 1.464 5.38 1.464h.007c5.776 0 9.116-3.34 9.116-9.117s-1.244-6.213-3.472-8.38zM12.898 19.386h-.007c-1.636 0-3.264-.47-4.683-1.385l-.337-.2-3.472.812.826-3.385-.224-.35c-1.01-1.58-1.532-3.41-1.532-5.327C3.47 6.03 6.03 3.47 10.56 3.47c2.21 0 4.364.864 5.94 2.44s2.44 3.73 2.44 5.94c0 4.53-2.562 7.096-7.042 7.096z" />
        <path d="M15.463 12.5c-.28-.14-1.652-.812-1.908-.907-.256-.095-.443-.14-.63.14-.188.28-.72.907-.883 1.095-.164.188-.328.21-.608.07-.28-.14-1.185-.436-2.256-1.39-.834-.74-1.398-1.656-1.562-1.936-.164-.28-.017-.432.124-.57.124-.124.28-.328.42-.492.14-.164.188-.28.28-.468.094-.188.047-.352-.024-.492-.07-.14-.63-1.51-.86-2.075-.228-.564-.468-.485-.63-.492-.15-.01-.328-.01-.506-.01s-.468.07-.7.352c-.234.28-.883.86-1.095 2.075s.234 2.414.28 2.578c.048.164.884 1.414 2.14 2.01.295.143.54.225.753.28.3.076.57.065.778-.04c.24-.12.72-.294.82-.57.1-.274.1-.505.07-.645z" />
    </svg>
);*/


const FloatingWhatsApp = () => {
    // ==========================================================
    // === IMPORTANT: REPLACE WITH YOUR WHATSAPP NUMBER ===
    // Use the full number including country code, without "+", spaces, or dashes.
    // Example: For +1 (234) 567-8900, use 1234567890
    // ==========================================================
    const phoneNumber = "263771975597";
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    return (
        <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 p-3 bg-green-500 rounded-full text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-green-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400"
            aria-label="Chat with us on WhatsApp"
        >
            <WhatsAppIcon />
        </Link>
    );
};

export default FloatingWhatsApp;
