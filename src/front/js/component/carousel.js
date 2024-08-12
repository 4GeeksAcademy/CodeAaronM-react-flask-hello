import React from "react";
import "../../styles/carousel.css";

const Carousel = () => {

    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide mt-5">
            <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card text-center">
                            <div className="card-img-container">
                                <img
                                    src="https://media.istockphoto.com/id/1476170969/es/foto/retrato-de-un-joven-listo-para-el-trabajo-concepto-de-negocio.webp?b=1&s=170667a&w=0&k=20&c=zh48SUji-WA9JiFnLNADswQlrYq-bmbc1eoynSkqBIw="
                                    className="profile-img"
                                    alt="Giordano L"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Giordano L</h5>
                                <p className="card-text">
                                    "Excelente servicio y atención al cliente. Tuve un problema con la compra de mis entradas y el equipo de Tickeate respondió de inmediato y resolvió todo rápidamente. Además, los precios son competitivos y la selección de eventos es impresionante. Recomiendo totalmente Tickeate."
                                </p>
                                <p className="card-details">Buenos Aires, Argentina - Usuario</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card text-center">
                            <div className="card-img-container">
                                <img
                                    src="https://www.hubspot.com/hubfs/media/bancosimagenes.jpeg"
                                    className="profile-img"
                                    alt="Maria G"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Maria G</h5>
                                <p className="card-text">
                                    "¡Tickeate ha hecho que la compra de entradas sea más fácil que nunca! La interfaz es muy amigable y el proceso de compra es rápido y seguro. Compré entradas para un concierto y todo salió perfecto. ¡Sin duda, seguiré usando Tickeate para futuros eventos!"
                                </p>
                                <p className="card-details">Madrid, España - Usuario</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card text-center">
                            <div className="card-img-container">
                                <img
                                    src="https://st.depositphotos.com/2309453/3120/i/450/depositphotos_31203671-stock-photo-friendly-smiling-man.jpg"
                                    className="profile-img"
                                    alt="Daniel M"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Daniel M</h5>
                                <p className="card-text">
                                    "Publicar mi evento en Tickeate fue muy sencillo y eficiente. La plataforma hizo que el proceso de promoción y venta de entradas fuera mucho más fácil. Los usuarios encontraron rápidamente mi evento, y el soporte técnico fue excelente durante todo el proceso. Recomiendo Tickeate a cualquier organizador de eventos que busque una solución confiable."
                                </p>
                                <p className="card-details">Ciudad de México, México - Organizador de eventos</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
        </div>
    );
};

export default Carousel;