
import Navbar from '@/components/ui/navbar'
import './globals.css'
import Footer from '@/components/ui/footer'
import NavbarMain from './../components/ui/navbarMain';
import NavbarOptions from '@/components/ui/navbarOptions';



export const metadata = {
  title: 'Ambar - Alquiler de vestidos',
  description: 'Ambar - Alquiler y venta de vestidos.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className=" ">


  
        <NavbarMain></NavbarMain>
        <NavbarOptions></NavbarOptions>
        {children}
        <Footer></Footer>

        </body>
    </html>
  )
}
