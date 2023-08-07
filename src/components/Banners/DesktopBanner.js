import "./DesktopBanner.scss"
import MobileBanner from "./MobileBanner.js"

const Banner = () => {

    return (
        <div className="banner-contenedor">

            <div className="banner-eslogan">
                <p> Ofrecemos equipos e insumos de alta calidad para el cultivo de cannabis especializado en el método de hidroponía. </p>
            </div>
            <div className="banner-img">
                <img src="/img/verdon-logo-blanco-dos.png" alt="Logo del verdón Growshop" />
            </div>
            <div className="banner-mobile-en-desktop">
                <MobileBanner />
            </div>

        </div>
    )
}

export default Banner