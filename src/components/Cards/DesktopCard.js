import React from "react";
import "./DesktopCard.scss";
import CardSecondary from "./MobileCard.js";
import datos from "../../datos.json";

const Cards = () => {

    return (
        <section id="productos" className="section-productos">
            <h2 className="productos-title">Nuestros productos</h2>

            <div className="card-contenedor row">
                {datos.map((item, index) => (
                    <div className="card-contenedor-interior col-4" key={index}>
                        <div id="card-body" className="card-body">
                            <div style={{ display: "none" }} id="card-description-div">
                                <p id="card-description" className="card-description"> {item.description} </p>
                            </div>
                            <div className="card-body-img-container">
                                <img className="card-body-img" src={item.image} alt={item.textoAlternativo} />
                            </div>
                            <div className="card-body-title-container">
                                <h4 className="card-body-title"> {item.title} </h4>
                            </div>
                            <div className="card-body-title-container">
                                <h4 className="card-body-title-dos"> {item.titleTwin} </h4>
                            </div>
                            <a
                                target="_blank" rel="noreferrer"
                                href={`https://wa.me/send?text=${encodeURIComponent(item.mensajeWhatsApp)}&phone=543515213682`}
                                // href={`https://api.whatsapp.com/send?phone=543515213682&text=${encodeURIComponent(item.mensajeWhatsApp)}`}
                                className="card-body-div-div"
                            >
                                <div id="card-body-div" className="card-body-div">
                                    <p className="card-body-div-p"> Comprar </p>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="card-secondary-in-cards">
                <CardSecondary />
            </div>

        </section>
    );
};

export default Cards;