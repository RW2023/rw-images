import Navbar from '@/components/ui/Navbar'
import './globals.css'
import Footer from '@/components/ui/Footer';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="business">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
