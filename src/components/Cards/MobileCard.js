import "./MobileCard.scss"
import datos from "../../datos.json"

const CardSecondary = () => {

    return (
        <section id="productos" className="card-secondary container">

            <h2 className="card-secondary-title"> Nuestros productos</h2>

            <div className="card-secondary-contenedor">
                {datos.map((item, index) => (
                    <div className="card-secondary-map" key={index}>
                        <div className="card-secondary-map-titleImg">
                            <div>
                                <span> {item.title} </span>
                                <span> {item.titleTwin} </span>
                            </div>
                            <div className="div-img-secondary">
                                <img src={item.imageSecondary} alt={item.textoAlternativo} />
                            </div>
                        </div>
                        <div className="card-secondary-map-description">
                            <p> {item.description} </p>
                        </div>
                        <a
                            // href={`https://api.whatsapp.com/send?phone=543515213682&text=${encodeURIComponent(item.mensajeWhatsApp)}`}
                            // href={`https://wa.me/send?text=${encodeURIComponent(item.mensajeWhatsApp)}&phone=543515213682`}
                            href={`https://wa.me/c/5493515213682`}
                            target="_blank" rel="noreferrer"
                            className="card-secondary-map-button-contenedor"
                        >
                            <div className="card-secondary-map-button">
                                <div>
                                    <p>Comprar</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>


        </section>
    )
}

export default CardSecondary
