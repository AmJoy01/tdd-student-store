import "./SubNavbar.css"

export default function SubNavbar(props) {
  
    // const { handleOnSearchChange } = props

    return (
        <div className="search-container">
            <form className="search-bar">
                <input className="search-input" placeholder="search..." onChange={props.handleOnSearchInputChange} />
            </form>
            <SearchCategories handleCategory={props.handleOnCategory} />
        </div>
    )
}

export function SearchCategories(props) {

    return (
        <div className="category-buttons">
            <button className="category" onClick={() => props.handleCategory("")}>All Items</button>
            <button className="category" onClick={() => props.handleCategory("clothing")}>Clothing</button>
            <button className="category" onClick={() => props.handleCategory("food")}>Food</button>
            <button className="category" onClick={() => props.handleCategory("accessories")}>Accessories</button>
            <button className="category" onClick={() => props.handleCategory("tech")}>Tech</button>
        </div>
        
    )

}