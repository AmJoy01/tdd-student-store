import * as React from "react";
import ProductView from "../ProductView/ProductView";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import axios from "axios"

export default function ProductDetail(props){
    const [product, setProduct] = useState([]);
    const {productId} = useParams();

    useEffect(() => {
        const getProduct = async () => {
            try{
                const response = await axios.get("https://codepath-store-api.herokuapp.com/store/" + productId)
                setProduct(response.data.product);
            }catch{
                <h3 className="processing">Processing...</h3>
            }
        }
        getProduct();
    }, []);

    return(
        <div className="productDetail">
            {/* {loading ? <h1 className="loading">Loading...</h1>: } */}
            <ProductView
                product = {product}
                shoppingCart = {props.shoppingCart}
                quantity = {props.shoppingCart.quantity}
                productId = {productId}
                handleAddItemToCart = {props.handleAddItemToCart}
                handleRemoveItemToCart = {props.handleRemoveItemToCart}
            />
        </div>
    )
}