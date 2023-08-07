import "./MobileCard.scss"
import datos from "../../datos.json"

const CardSecondary = () => {

    return (
        <section className="card-secondary container">

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
                            href={`https://wa.me/send?text=${encodeURIComponent(item.mensajeWhatsApp)}&phone=541122431910`}
                            target="_blank"
                            className="card-secondary-map-button-contenedor"
                        >
                            <div className="card-secondary-map-button">
                                <div>
                                    <p>Comprar</p>
                                    {/* <a target="_blank" className="card-body-div-p" href={`https://wa.me/send?text=${encodeURIComponent(item.mensajeWhatsApp)}&phone=541122431910`} > Comprar </a> */}
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
                            // <div className="card-secondary-map-button">
                            //     <div>
                            //         {/* <p>Comprar</p> */}
                            //         <a target="_blank" className="card-body-div-p" href={`https://wa.me/send?text=${encodeURIComponent(item.mensajeWhatsApp)}&phone=541122431910`} > Comprar </a>
                            //     </div>
                            // </div>