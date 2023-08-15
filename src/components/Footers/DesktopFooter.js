import "./DesktopFooter.scss"
import MobileFooter from "./MobileFooter.js"

const Footer = () => {

    return (
        <div className="section-footer">

            <div className="footer-contenedor">
                <img src="/img/verdon-hojita-uno.webp" alt="Hojita" />
                <div className="contenedor-footer-info">
                    <div id="contactanos" className="contenedor-footer-info-texto">
                        <p>¿Necesitás más información?</p>
                        <p> ¡Comunicate con un vendedor!</p>
                    </div>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        title="Contactate con un vendedor."
                        href="https://wa.me/send?text=%C2%A1Hola!,%20que%20producto%20desea%20adquirir?&phone=543515445372"
                        className="boton-wsp"
                    >
                        <a> WhatsApp </a>
                    </a>
                    <div className="img-logo-footer">
                        <img src="/img/verdon-logo-verde.webp" alt="Logo Del Verdón Growshop" />
                    </div>
                </div>
                <img src="/img/verdon-hojita-dos.webp" alt="Hojita" />
            </div>

            <div className="display-mobile-footer">
                <MobileFooter />
            </div>

        </div>
    )
}

export default Footer