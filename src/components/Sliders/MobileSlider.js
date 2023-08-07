import "./MobileSlider.scss"
import marcas from "../../marcas.json"

const MobileSlider = () => {

    return (
        <section className="section-marcas-mobile">
            <h2 className="title-marcas-mobile"> Marcas que nos acompañan </h2>

            <div className="contenedor-marcas-mobile">
                {marcas.map((item, index) => (
                    <div className="marcas-mobile-map" key={index}>
                        <div className="marcas-mobile-map-img">
                            <img src={item.image} alt={item.description} />
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default MobileSlider