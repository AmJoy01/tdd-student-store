import { useState } from "react"
import "./SubNavBar.css"

export default function SubNavbar(props){
    
    const[isOpen, setIsOpen] = useState(true);
    const toggleOpen = () => setIsOpen((isOpen) => setIsOpen(!isOpen));


    return(
        <nav className="subNavbar">
            <div className="container">
                <div className="row">
                    <div className="search-bar">
                        <input value = {props.searchInput} onChange={props.handleOnSearchInputChange} type="text" name = "search" placeholder="Searching..."/>
                        <button>Search</button>
                    </div>
                </div>

                <div className="row">
                    <div className="hamburgerMenu">
                        <button className="menu" onClick={() => toggleOpen()}>menu</button>
                    </div>

                    <ul className={`categoryMenu ${isOpen ? `open` : `closed`}`}>
            {["All Categories", "Clothing", "Food", "Accessories", "Tech"].map((c) => (
              <li key={c}>
                <button onClick={() => props.setCategory(c)}>{c}</button>
              </li>
            ))}
          </ul>

                    {/* <ul className="categoryMenu open">
                        
                        <li className="isActive">
                            <button>All Categories</button>
                        </li>
                        <li className="">
                            <button>Clothing</button>
                        </li>
                        <li className="">
                            <button>Food</button>
                        </li>
                        <li className="">
                            <button>Accessories</button>
                        </li>
                        <li className="">
                            <button>Tech</button>
                        </li>
                        
                    </ul> */}
                </div>
            </div>
        </nav>


    )
}