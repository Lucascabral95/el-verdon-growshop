import "./Footer.scss"
import { useContext } from "react"
import { AppContext } from "../../Context/AppContext.js"

const Footer = () => {
    // Esto te dejo aca por si necesitas usar el contexto (si no lo usas, borralo)
    // const {  } = useContext(AppContext) (si no lo usas, borralo)

    return (
        <div>
            {/* HOLA CLAUDIO, ESTE ESPACIO ES PARA QUE CREES EL FOOTER Y PARA EL ESTILO POR FAVOR, USA EL SCSS IMPORTADO DE ARRIBA  */}
            <p>Hola, soy el footer</p>
        </div>
    )
}

export default Footer