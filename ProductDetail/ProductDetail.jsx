import * as React from "react";
import ProductView from "../ProductView/ProductView";
import "./ProductDetail.css";
import { useEffect } from "react"
import axios from "axios"

export default function ProductDetail(props){
    const [product, setProduct] = useState([]);
    const {productId} = useParams();

    useEffect(() => {
        const getProduct = async () => {
            try{
                const response = await axios.get("https://codepath-store-api.herokuapp.com/store" + productId)
                setProduct(response.data.product);
            }catch{
                <h3 className="processing">Processing...</h3>
            }
        }
        getProduct();
    }, []);

    return(
        <div className="productDetail">
            <ProductView
                product = {product}
                productId = {productId}
                handleAddItemToCart = {null}
                handleRemoveItemToCart = {null}
            />
        </div>
    )
}