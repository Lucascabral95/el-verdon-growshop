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
                    <a 
                    target="_blank" rel="noopener noreferrer"
                    href="https://api.whatsapp.com/send?phone=543515445372&text=¡Hola!%20Quiero%20información%20sobre...">WhatsApp</a>
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