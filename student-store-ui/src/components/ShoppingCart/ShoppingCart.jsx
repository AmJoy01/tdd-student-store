import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart(props){
   let subTotal = 0

   return (
     <div className="tableCart">
       <div className="shoppingCart">
         <table>
           <thead>
             <tr className="cartHeader">
               <th className="nameHeader">Name</th>
               <th className="header">Quantity</th>
               <th className="header">Unit Price</th>
               <th className="header">Cost</th>
             </tr>
           </thead>
           
           {props.shoppingCart.map((product) => {
             subTotal += props.products[product.itemId-1].price * product.quantity
             
             return(
               <tbody>
                 <tr>
                   <td className="cart-product-name"> <div>{props.products[product.itemId-1].name}</div></td>
                   <td className="cart-product-quantity"><div>{product.quantity}</div></td>
                   <td className="cart-unit-price"><div>${(props.products[product.itemId-1].price)?.toFixed(2)}</div></td>
                   <td className="cart-unit-total"><div>${(props.products[product.itemId-1].price * product.quantity)?.toFixed(2)}</div></td>
                 </tr>
               </tbody>
             )})}
           
         <tfoot>
         
           <tr>
             <td></td>
             <td></td>
             <td className="title">Subtotal: </td>
             <td className="subTotal">${subTotal?.toFixed(2)}</td>
           </tr>
           <tr>
             <td></td>
             <td></td>
             <td className="title">Tax Rate: </td>
             <td className="taxRate">8.75%</td>
           </tr>
           <tr>
             <td></td>
             <td></td>
             <td className="title">Total: </td>
             <td className="totalPrice">${(subTotal * 1.0875).toFixed(2)}</td>
           </tr>
         </tfoot>
         </table>
           {props.shoppingCart[0]? "" : <div className="notification" display="none">"No items added to cart yet. Start shopping now!"</div> }
       </div>
     </div>
 
   )
}