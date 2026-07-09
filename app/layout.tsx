import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Chatbot from "@/components/ui/Chatbot";
import WelcomeScreen from "@/components/ui/WelcomeScreen";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import NavBar from "@/components/ui/NavBar";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://graciellajimenez.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Graciella Jimenez - Computer Science Student & Developer',
    template: '%s | Graciella Jimenez',
  },
  description:
    'BS Computer Science student at Holy Angel University, Notion Campus Leader, and frontend developer. Building modern web apps and AI-powered tools from Pampanga, Philippines.',
  keywords: [
    'Graciella Jimenez',
    'Graciella Jimenez portfolio',
    'ciellamher',
    'Computer Science student Philippines',
    'Notion Campus Leader',
    'Holy Angel University',
    'frontend developer Philippines',
    'Next.js developer',
    'React developer',
    'AI developer Philippines',
  ],
  authors: [{ name: 'Graciella Jimenez', url: siteUrl }],
  creator: 'Graciella Jimenez',
  publisher: 'Graciella Jimenez',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: '/logo-black.png', type: 'image/png', sizes: 'any' },
      { url: '/favicon.ico', sizes: '48x48' },
    ],
    apple: '/logo-black.png',
    shortcut: '/logo-black.png',
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Graciella Jimenez',
    title: 'Graciella Jimenez - Computer Science Student & Developer',
    description:
      'BS Computer Science student at Holy Angel University, Notion Campus Leader, and frontend developer. Building modern web apps and AI-powered tools from Pampanga, Philippines.',
    images: [
      {
        url: '/me.jpeg',
        width: 800,
        height: 800,
        alt: 'Graciella Jimenez',
      },
      {
        url: '/gallery/cover.png',
        width: 1200,
        height: 630,
        alt: 'Graciella Jimenez Portfolio',
      },
    ],
    firstName: 'Graciella',
    lastName: 'Jimenez',
    username: 'ciellamher',
    gender: 'female',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Graciella Jimenez - Computer Science Student & Developer',
    description:
      'BS Computer Science student at Holy Angel University, Notion Campus Leader, and frontend developer.',
    images: ['/me.jpeg'],
    creator: '@ciellamher',
  },
  verification: {
    google: 'google-site-verification-token', // Replace with your actual token from Google Search Console
  },
};

// JSON-LD Structured Data for Google rich results (Person + WebSite schemas)
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Graciella Jimenez',
      alternateName: 'ciellamher',
      url: siteUrl,
      image: {
        '@type': 'ImageObject',
        url: `${siteUrl}/me.jpeg`,
        contentUrl: `${siteUrl}/me.jpeg`,
        caption: 'Graciella Jimenez',
      },
      description:
        'BS Computer Science student at Holy Angel University, Notion Campus Leader, and frontend developer building modern web apps and AI-powered tools from Pampanga, Philippines.',
      jobTitle: 'Computer Science Student & Frontend Developer',
      worksFor: {
        '@type': 'Organization',
        name: 'Holy Angel University',
      },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Holy Angel University',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pampanga',
        addressCountry: 'PH',
      },
      email: 'work.gmdjimenez@gmail.com',
      sameAs: [
        'https://github.com/ciellamher',
        'https://www.linkedin.com/in/ciellamher/',
        'https://www.instagram.com/ciellamher/',
        'https://www.facebook.com/gramenez/',
      ],
      knowsAbout: [
        'JavaScript', 'TypeScript', 'React', 'Next.js', 'Python',
        'Machine Learning', 'Computer Vision', 'Flutter', 'Dart',
        'Notion', 'UI/UX Design', 'Frontend Development',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Graciella Jimenez',
      description:
        'Portfolio of Graciella Jimenez — Computer Science student, Notion Campus Leader, and frontend developer.',
      author: { '@id': `${siteUrl}/#person` },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'ItemList',
      name: 'Site Navigation',
      itemListElement: [
        {
          '@type': 'SiteLinksSearchBox',
          potentialAction: {
            '@type': 'SearchAction',
            target: `${siteUrl}/?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        },
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Projects',
          description: 'Explore my portfolio of software projects including AI apps, web platforms, and more.',
          url: `${siteUrl}/projects`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'All Certifications',
          description: 'View all my certifications in cloud, AI, data analytics, and Notion.',
          url: `${siteUrl}/certifications`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Tech Stack',
          description: 'JavaScript, TypeScript, React, Next.js, Python, Flutter, and more.',
          url: `${siteUrl}/tech-stack`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Contact',
          description: 'Get in touch with Graciella Jimenez for collaborations, speaking, or opportunities.',
          url: `${siteUrl}/#contact`,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-[100px]" suppressHydrationWarning>
      <head>
        {/* Favicon / Site icon */}
        <link rel="icon" href="/logo-black.png" type="image/png" />
        <link rel="shortcut icon" href="/logo-black.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-black.png" />
        {/* JSON-LD Structured Data for Google rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          <AnimatedBackground />
          <WelcomeScreen />
          {children}
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}
