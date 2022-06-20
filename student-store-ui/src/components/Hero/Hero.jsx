import "./Hero.css"

export default function Hero(){
    return(
        <div className="hero">
            <div className="container">
                <div className="intro">
                    <h1>Welcome!</h1>
                    <h1>Buy Our Merch!</h1>
                    <p>
                         We have books and stuff. Click on any items. Add it to your shopping cart.
                    </p>
                </div>
                <div className="image">
                    <img src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg" alt="" />
                </div>
            </div>
        </div>
    )
}