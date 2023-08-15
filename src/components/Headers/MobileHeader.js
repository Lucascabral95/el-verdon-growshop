import "./MobileHeader.scss"
import { Instagram, Facebook } from "../Icons/Icons.js"


const MobileHeader = () => {

    return (
        <div className="section-mobile-header">

            <div className="img-mobile-header">
                <img src="/img/logo.webp" alt="Logo de Verdón Growshop" />
            </div>
            <div className="mobile-header-categorias-icons">
                <div className="categorias-header-mobile">
                    <nav>
                        <ul>
                            <li>
                                <a href="#productos">  PRODUCTOS </a>
                                <a href="#contactanos"> CONTACTANOS </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="mobile-header-icons">
                    <a href="http://instagram.com" target="_blank" rel="noopener noreferrer" className="mobile-icons-header">
                        <Instagram />
                    </a>
                    <a href="http://facebook.com" target="_blank" rel="noopener noreferrer" className="mobile-icons-header-dos">
                        <Facebook />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default MobileHeader