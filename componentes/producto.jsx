import estilo from "@/estilos/productos.module.css";
import Item from "@/componentes/item";

export default function MostrarProductos( {productos} ) {
    
    return (

        <div className={estilo.productsContainer}>
            { productos.map((prod) => <Item producto={prod} key={prod.id} />)}
        </div>
    
    )
}