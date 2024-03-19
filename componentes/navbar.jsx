"use client";
import Link from "next/link";
import estilo from "@/estilos/nav.module.css";
import { useEffect } from "react";

export default function NavbarComponent() {

    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap");
    },[])

    return (

        <nav  className="navbar navbar-expand-md">
            <div className="container-fluid">
                <button className={`${estilo.buttonNav} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center" id="navbarNav">
                    <ul className="nav nav-tabs flex-column flex-md-row text-start">
                        <li className="nav-item">
                            <Link className={`${estilo.textoNav} nav-link`} href="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`${estilo.textoNav} nav-link`} href="/nosotros">NOSOTROS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`${estilo.textoNav} nav-link`} href="/novedades">NOVEDADES</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`${estilo.textoNav} nav-link`} href="/contacto">CONTACTO</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        

    )
} 

