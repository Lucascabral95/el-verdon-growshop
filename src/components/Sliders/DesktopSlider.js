import "./DesktopSlider.scss"
import MobileSlider from "./MobileSlider.js"
import marcas from "../../marcas.json"

const Slider = () => {

    return (
        <section className="section-marcas">

            <h2 className="title-marcas"> Marcas que nos acompañan</h2>
            <div className="contenedor-marcas-map">
                {marcas.map((item, index) => (
                    <div className="marcas" key={index}>
                        <div className="contenedor-marcas">
                            <img id="marcas-img" src={item.image} alt={item.description} />
                        </div>
                    </div>
                ))}
            </div>
            <div className="display-mobile-slider">
                <MobileSlider />
            </div>

        </section>
    )
}

export default Slider