import "./MobileHeader.scss"
import { BsFacebook } from "react-icons/bs"
import { AiOutlineInstagram } from "react-icons/ai"


const MobileHeader = () => {

    const redirectToFacebook = () => {
        window.open('https://www.facebook.com', '_blank');
    };

    const redirectToInstagram = () => {
        window.open('https://www.instagram.com', '_blank');
    };

    return (
        <div className="section-mobile-header">

            <div className="img-mobile-header">
                <img src="/img/verdon-logo-blanco-dos.png" alt="Logo de Verdón Growshop" />
            </div>
            <div className="mobile-header-categorias-icons">
                <div className="categorias-header-mobile">
                    <nav>
                        <ul>
                            <li>
                                <a href="#">  PRODUCTOS </a>
                                <a href="#"> CONTACTANOS </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="mobile-header-icons">
                    {/* <AiOutlineInstagram className="mobile-icons-header" />
                    <BsFacebook className="mobile-icons-header-dos" /> */}
                    <AiOutlineInstagram onClick={redirectToInstagram} className="mobile-icons-header" />
                    <BsFacebook onClick={redirectToFacebook} className="mobile-icons-header-dos" />
                </div>
            </div>

        </div>
    )
}

export default MobileHeader