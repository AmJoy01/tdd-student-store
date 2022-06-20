import "./Footer.css"
import About from "../About/About"
import Contact from "../Contact/Contact"

export default function Footer(){
    return(
        <div className="footer">
            <div className="container">
                <div className="top">
                <About/>
                <Contact/>
                </div>
                <div className="bottom">
                
                </div>
            </div>
        </div>

    )


}