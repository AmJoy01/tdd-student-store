import "./About.css"

export default function About(){
    return(
        <div className="about">
            <div className="container">
                <h3>About</h3>
                <div className="summary">
                    <div className="text">
                    <p>
                        The codepath student store offers great products at great prices from a great team and for a great cause.
                    </p>
                    <p>
                        We've searched far and wide for items that perk the interests of even the most eccentric students and
                        decided to offer them all here in one place.
                    </p>
                    <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
                    </div>
                    {/* end of text */}

                    <div className="image">
                        <img src="https://codepath-student-store-demo.surge.sh/assets/giant_codepath.6952ef57.svg" alt="" />
                    </div>
                </div>
                {/* end of summary */}
            </div>
            {/* end of container */}
        </div>
        // end of about
    )

}