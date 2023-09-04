import React from "react"
import "../../styles/home.css";
import basket from "../../img/basket7.jpeg";

import basket5 from "../../img/basket5.jpeg";
import basket12 from "../../img/basket12.jpg";
import basket13 from "../../img/basket13.jpg";
import basket14 from "../../img/basket14.jpeg";
import basket15 from "../../img/basket15.jpg";
import basket16 from "../../img/basket16.jpg";
import lebron17 from "../../img/lebron17.jpg";
import basket6 from "../../img/basket6.jpeg";
const Galeria = () => {
  return (
    <div className="container">
      <div className="ecommerce-gallery" data-mdb-zoom-effect="true" data-mdb-auto-height="true">
        <div className="row">
          <div style={{ textAlign: "center" }} className="col-12">

            <h1 > <div style={{
              borderBottom: "6px solid orange",
              paddingBottom: "5px",
              width: "119px",
              marginLeft: "41%"
            }}
            >Galería</div></h1>
          </div>
        </div>
        <div className="row py-3 shadow-5">
          <div className="col-3 mb-1">
            <div className="lightbox">
              <img
                src={basket5}
                alt="Gallery image  1"
                className="ecommerce-gallery-main-img active w-100"
              />
            </div>
          </div>
          <div className="col-3 mt-1">
            <img id="image"
              src={basket12}

              alt="Gallery image 1"
              className="active w-100"
            />
          </div>
          <div className="col-3 mt-1">
            <img id="image"
              src={basket13}

              alt="Gallery image 1"
              className="active w-100"
            />
          </div>
          <div className="col-3 mt-1">
            <img id="image"
              src={basket14}

              alt="Gallery image 1"
              className="active w-100"
            />
          </div>
          <div className="col-3 mt-1">
            <img id="image"
              src={basket15}
              alt="Gallery image 1"
              className="active w-100"
            />
          </div>
          <div className="col-3 mt-1">
            <img id="image"
              src={basket16}
              alt="Gallery image 2"
              className="active w-100"
            />
          </div>
          <div className="col-3 mt-1">
            <img id="image"
              src={lebron17}
              alt="Gallery image 3"
              className="active w-100"
            />
          </div>
          <div className="col-3 mt-1">
            <img id="image"
              src={basket6}
              alt="Gallery image 4"
              className="active w-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Galeria;