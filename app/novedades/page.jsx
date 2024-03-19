"use client";
import { useEffect, useState } from "react";
import { pedirDatos } from "@/helpers/pedirDatos";
import MostrarProductos from "@/componentes/producto";
import "@/estilos/novedades.css";

export default function NovedadesPagina() {

    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res);
            })
    }, [])

    return (
    
        <main>
            <h2>Nuestros elegidos</h2>
            <section className="container">
                <MostrarProductos productos={productos}/>
            </section>
            
        </main>
    
    )
}