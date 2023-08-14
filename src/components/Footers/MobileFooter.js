import "./MobileFooter.scss"

const MobileFooter = () => {


    return (
        <div className="section-mobile-footer">

            <div className="img-mobile-footer">
                <img src="/img/verdon-hojita-uno.webp" alt="Hojita" />
            </div>

            <div className="mobile-footer-texto-boton-logo">
                <div id="contactanos" className="mobile-footer-text">
                    <p>¿Necesitás más información?</p>
                    <p>¡Comunicate con un vendedor!</p>
                </div>
                <div className="boton-wsp-mobile">
                    <a href="https://wa.me/send?text=%C2%A1Hola!,%20que%20producto%20desea%20adquirir?&phone=543515445372">WhatsApp</a>
                </div>
                <div className="mobile-footer-img-tres">
                    <img src="/img/verdon-logo-verde.webp" alt="Logo del Verdón Growshop" />
                </div>
            </div>

            <div className="img-mobile-footer">
                <img src="/img/verdon-hojita-dos.webp" alt="Hojita" />
            </div>

        </div>
    )
}

export default MobileFooter