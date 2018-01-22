import React from "react";
import "./CarCard.css";

const CarCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectCar(props.car)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.car} src={props.image} />
            </a>
        </div>
    </div>
);

export default CarCard;
