# Pixel Crafte (Website)

This document contains all the necessary information about the Pixel Crafte website project.

- **Website:** [pixelcrafte.co.zw](https://pixelcrafte.co.zw)
- **GitHub Repository:** [https://github.com/Tanagends/pixel](https://github.com/Tanagends/pixel) <!-- Please update with actual link -->

## Hosting

| Service         | Provider | Expiry |
| --------------- | -------- | ------ |
| Website Hosting | Vercel   | Infinite    |
| Domain Hosting  | Webzim   | Null   |

## Client Information

| Item         | Details          |
| ------------ | ---------------- |
| Phone        | +263 771 975 597 |
| Email        | [pixelcraftewt@gmail.com](mailto:pixelcraftewt@gmail.com)|
| Locations    | Harare          |

## Tech Stack

| Category  | Technology                                                 |
| --------- | ---------------------------------------------------------- |
| Framework | Next.js                                                    |
| Styling   | Tailwind CSS                                               |

## CMS

Currently, there is no CMS integrated with this project.

## Sitemaps

The sitemaps are managed via Google Search Console.

- **Account Holder:** [Name of the account holder]

## Routes File Structure

```text
app
├── about
│  ├── AboutPage.jsx
│  ├── page.jsx
│  └── Values.jsx
├── api
│  ├── contact
│  │  └── route.js
│  ├── get-quote
│  │  └── route.js
│  └── subscribe
│     └── route.js
├── blog
│  ├── BlogPage.jsx
│  └── page.jsx
├── contact
│  ├── ContactForm.jsx
│  ├── ContactPage.jsx
│  ├── page.jsx
│  └── Subscribe.jsx
├── error.jsx
├── globals.css
├── graphic-design
│  ├── GraphicDesignPage.jsx
│  ├── GraphicDesignsSection.jsx
│  └── page.jsx
├── HomePage.jsx
├── layout.js
├── not-found.jsx
├── page.jsx
├── website-development
│  ├── page.jsx
│  ├── WebDevelopPage.jsx
│  └── websiteTpyeSection.jsx
└── work
   ├── AnimatedList.jsx
   ├── page.jsx
   └── WorkPage.jsx
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/Tanagends/pixel.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Run the development server

   ```sh
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env.local` file:

| Variable           | Description                                  |
| ------------------ | -------------------------------------------- |
| `EMAIL_USER` | Gmail for Emailing          |
| `EMAIL_PASS`    | App Password from Gmail |

