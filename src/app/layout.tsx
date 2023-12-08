import './globals.css'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col justify-center items-center'>
        {children}
        </body>
    </html>
  )
}
