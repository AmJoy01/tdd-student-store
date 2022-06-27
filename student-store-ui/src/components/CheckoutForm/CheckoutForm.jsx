import "./CheckoutForm.css"

export default function CheckoutForm(){
    return (
        <div className="checkout-form">
            <form>
                <input type="text" id="fname" name="fname" placeholder="First Name"/>
                <input type="text" id="lname" name="lname" placeholder="Last Name"/>
            </form>
        </div>

    )
}