import estilo from "@/estilos/galeria.module.css";

function Galeria() {

  return (
    <section className={estilo.galeria}>
        <img className={estilo.imgGaleria} src="/img/productos/cadenitaRapunzel.jpg" alt="Cadenita Rapunzel"/>
        <img className={estilo.imgGaleria} src="/img/productos/pulseraFlor.jpg" alt="Pulsera Flor"/>
        <img className={estilo.imgGaleria} src="/img/productos/cadenitaSolLuna.jpg" alt="Cadenitas Sol & Luna"/>
        <img className={estilo.imgGaleria} src="/img/productos/abrFlor.jpg" alt="Abridor 3 florcitas"/>
        <img className={estilo.imgGaleria} src="/img/productos/aroCorazon.jpg" alt="Aros cubik corazón"/>
        <img className={estilo.imgGaleria} src="/img/productos/argollaLopa.jpg" alt="Argollas Lopa"/>
        <img className={estilo.imgGaleria} src="/img/productos/anilloOla.jpg" alt="Anillo Ola"/>
        <img className={estilo.imgGaleria} src="/img/productos/argollaViper.jpg" alt="Argollas Viper"/>
    </section>
  )
}

export default Galeria;