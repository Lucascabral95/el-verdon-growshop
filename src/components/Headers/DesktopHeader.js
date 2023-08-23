import "./DesktopHeader.scss"
import MobileHeader from "../Headers/MobileHeader.js"
import { Instagram, Facebook } from "../Icons/Icons.js"

const Header = () => {

    return (
        <>
            <div className="section-header">
                <div className="header-contenedor-img">
                    <img className="header-img" src="/img/logo.webp" alt="Logo del Verdón Growshop" />
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

                        <a href="https://www.instagram.com/elverdongrow" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="header-reactIcon">
                            <Instagram />
                        </a>
                        <a href="https://www.facebook.com/elverdongrowshop" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="header-reactIcon-dos">
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