import "./DesktopHeader.scss"
import MobileHeader from "../Headers/MobileHeader.js"
import { Instagram, Facebook } from "../Icons/Icons.js"

const Header = () => {

    return (
        <>
            <div className="section-header">
                <div className="header-contenedor-img">
                    <img className="header-img" src="/img/verdon-logo-blanco-dos.webp" alt="Logo del Verdón Growshop" />
                </div>
                <div className="contenedor-categorias-icons">
                    <div className="header-contenedor-categorias">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#productos"> PRODUCTOS </a>
                                </li>
                                <li>
                                    <a href="#contactanos"> CONTACTANOS </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-contenedor-icons">

                        <a href="http://instagram.com" target="_blank" rel="noopener noreferrer" className="header-reactIcon">
                            <Instagram />
                        </a>
                        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer" className="header-reactIcon-dos">
                            <Facebook />
                        </a>
                    </div>
                </div>
            </div>

            <div id="mobile-header-container" style={{ display: "none" }}>
                <MobileHeader />
            </div>
        </>
    )
}

export default Header