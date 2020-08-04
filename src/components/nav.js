


import React from "react" 

import Active from "./nav parts/active.js"

import Gainers from "./nav parts/gainers.js"

import Losers from "./nav parts/losers.js"

import stocky3 from "../assets/stocky3.png"

// import "../style.css"  

function Genstocks(){          

    return (            

        <div className="threestocks">

            <div>  <Active /> </div>

            <div>  <Gainers /> </div>

            <div>  <Losers /> </div>

            <div>

                <img 
                    className="logo"
                    
                    src={stocky3}
                />
            
            </div>

        </div>


    )


}

export default Genstocks   