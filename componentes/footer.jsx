import Link from "next/link";
import estilo from "@/estilos/footer.module.css";

export default function Footer() {
    return (

        <footer className={estilo.piePagina}>

            <div className={estilo.redes}>

                <div className={estilo.container}>
                    <div className={estilo.titleContainer}>
                        <h4>Nuestras redes:</h4>
                    </div>

                    <div className={estilo.linkContainer}>
                        <Link className={estilo.link} href="https://www.instagram.com/ofiuco_acc" target="_blank"> <img src="/img/redes/instagram.png" alt="logo instagram" /> @ofiuco_acc</Link>
                        <br />
                        <Link className={estilo.link} href="https://www.facebook.com/ofiucoacc" target="_blank"> <img src="/img/redes/facebook.png" alt="logo facebook" /> ofiucoacc</Link>
                    </div>
                </div>
                
                <div className={estilo.container}>
                    <div className={estilo.titleContainer}>
                        <h4>Contacto:</h4>
                    </div>

                    <div className={estilo.linkContainer}>
                        <Link className={estilo.link} href="https://web.whatsapp.com/" target="_blank"> <img src="/img/redes/whatsapp.png" alt="logo whatsapp" /> 2915072859</Link>
                        <br />
                        <Link className={estilo.link} href="https://maps.app.goo.gl/fv1NmbM9JdWQtbTm9" target="_blank"> <img src="/img/redes/maps.png" alt="logo google maps" /> Canadá 235 - Bahía Blanca, Buenos Aires</Link>
                    </div>
                </div>

            </div>

            <hr />

            <div className={estilo.container}>

                <p>Diseño y desarrollo por Micaela Hormazabal</p>
                <p>&copy; 2024</p>

            </div>
            
        </footer>

    )
}