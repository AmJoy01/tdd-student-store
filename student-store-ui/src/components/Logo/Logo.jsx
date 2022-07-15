import { Link } from "react-router-dom";

export default function Logo(){
    const logo = "https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"
    return (
        <div className="logo">
            <Link to ="/">
                <img src={logo} alt="" />
            </Link>
        </div>
    )
}