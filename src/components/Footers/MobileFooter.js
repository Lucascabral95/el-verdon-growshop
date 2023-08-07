import "./MobileFooter.scss"

const MobileFooter = () => {


    return (
        <div className="section-mobile-footer">

            <div className="img-mobile-footer">
                <img src="/img/verdon-hojita-uno.png" alt="Hojita" />
            </div>

            <div className="mobile-footer-texto-boton-logo">
                <div className="mobile-footer-text">
                    <p>¿Necesitás más información?</p>
                    <p>¡Comunicate con un vendedor!</p>
                </div>
                <div className="boton-wsp-mobile">
                    <a href="#">WhatsApp</a>
                </div>
                <div className="mobile-footer-img-tres">
                    <img src="/img/verdon-logo-verde.png" alt="Logo del Verdón Growshop" />
                </div>
            </div>

            <div className="img-mobile-footer">
                <img src="/img/verdon-hojita-dos.png" alt="Hojita" />
            </div>

        </div>
    )
}

export default MobileFooter