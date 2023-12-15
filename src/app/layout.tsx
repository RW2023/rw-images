import Navbar from '@/components/ui/Navbar'
import './globals.css'
import Footer from '@/components/ui/Footer';
import Head from 'next/head';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="business">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="author" content="Ryan Wilson" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Professional Photography, Artistic Photography, Landscape Photography, Urban Photography, Creative Portraits, Fine Art Photography, Street Photography, Event Photography, One Off Project Photography, Product Photography, Ryan Wilson Photographer, High-Quality Photography, Nature Photography, Photography Art, Photography Portfolio, Ryan Wilson Gallery"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <title>Ryan Wilson Images</title>
      </head>
      <body data-theme="light">
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
