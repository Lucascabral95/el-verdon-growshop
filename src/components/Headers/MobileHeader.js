import "./MobileHeader.scss"
import { Instagram, Facebook } from "../Icons/Icons.js"


const MobileHeader = () => {
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    };

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
                                <a href="#contactanos" onClick={scrollToBottom}> CONTACTANOS </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="mobile-header-icons">
                    <a href="https://www.instagram.com/elverdongrow" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="mobile-icons-header">
                        <Instagram />
                    </a>
                    <a href="https://www.facebook.com/elverdongrowshop" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="mobile-icons-header-dos">
                        <Facebook />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default MobileHeader