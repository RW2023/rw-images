import Navbar from '@/components/ui/Navbar'
import './globals.css'
import Footer from '@/components/ui/Footer';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
