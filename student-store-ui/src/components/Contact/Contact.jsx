import "./Contact.css"

export default function Contact(){
    return(
        <div className="contact">
            <div className="container">
                <h3>Contact Us</h3>
            </div>
            <div className="summary">
                <ul className="info">
                    <li>
                        <span>Email:</span> code@path.org
                    </li>
                    <li>
                        <span>Phone:</span> 1 800-CODEPATH
                    </li>
                    <li>
                        <span>Address:</span> 123 Fake Street, San Francisco, CA
                    </li>
                    <li>
                        <span>Socials: </span> 
                    </li>
                </ul>
                <div className="image">
                    <img src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg" alt="" />
                </div>
            </div>
        </div>
    )
}