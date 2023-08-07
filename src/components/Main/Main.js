import "./Main.scss"
import Cards from "../Cards/DesktopCard.js"
import Slider from "../Sliders/DesktopSlider.js"
import Banner from "../Banners/DesktopBanner.js"
import Header from "../Headers/DesktopHeader.js"
import Footer from "../Footers/DesktopFooter.js"

const Main = () => {

    return (
        <div className="main-contenedor">
            <header>
                <Header />
            </header>
            <main>
                <Banner />
                <Cards />
                <Slider />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Main