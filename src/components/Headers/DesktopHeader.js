import "./DesktopHeader.scss"
import { BsFacebook } from "react-icons/bs"
import { AiOutlineInstagram } from "react-icons/ai"
import MobileHeader from "../Headers/MobileHeader.js"

const Header = () => {

    const redirectToFacebook = () => {
        window.open('https://www.facebook.com', '_blank');
    };

    const redirectToInstagram = () => {
        window.open('https://www.instagram.com', '_blank');
    };

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
                        <AiOutlineInstagram onClick={redirectToInstagram} color="#DEE9DA" className="header-reactIcon" />
                        <BsFacebook onClick={redirectToFacebook} color="#DEE9DA" className="header-reactIcon-dos" />
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