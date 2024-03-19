import "bootstrap/dist/css/bootstrap.min.css"
import "@/estilos/normalize.css";
import "@/estilos/globals.css";
import Footer from "@/componentes/footer";
import Header from "@/componentes/header";
import NavbarComponent from "@/componentes/navbar";

export const metadata = {
  title: 'Ofiuco',
  description: 'Emprendimiento de accesorios',
  icons: {
    icon: {
      url: "/favicon.ico",
      type: "image/x-icon"
    }
  }
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="es-ar">
      <body>

        <Header />
        <NavbarComponent />
        {children}
        <Footer />

      </body>
    </html>
  )
}
