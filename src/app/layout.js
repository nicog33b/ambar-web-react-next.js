
import Navbar from '@/components/ui/navbar'
import './globals.css'
import Footer from '@/components/ui/footer'
import NavbarMain from './../components/ui/navbarMain';




export const metadata = {
  title: 'Ambar - Alquiler de vestidos',
  description: 'Ambar - Alquiler y venta de vestidos.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className=" ">


        <Navbar></Navbar>
        <NavbarMain></NavbarMain>
        {children}
        <Footer></Footer>

        </body>
    </html>
  )
}
