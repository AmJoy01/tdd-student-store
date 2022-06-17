
import * as React from "react";
import {Link} from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard(props){
return(
    <div className="productCard">
        <div className="image">
        <Link to={"/products/" + props.productId}>
        <img src= {props.product.image}/>
        </Link>
        </div>
        <div className="product-info">
            <div className="info">
                <p className="product-name">{props.product.name}</p>
                <p className="product-price">${props.product.price}</p>
            </div>
            <div className="actions">
                <div className="buttons">
                </div>
            </div>
        </div>
        <div></div>
    </div>
)

}