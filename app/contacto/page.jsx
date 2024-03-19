"use client";
import "@/estilos/contacto.css";

export default function ContactoPagina() {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Se envió en formulario");
    }

    return (
        
        <main>
            <h2>Dejanos tu sugerencia o mensajito</h2>

            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </main>
    )
}