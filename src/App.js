
import React from "react"                    //this line imports react, it is necessary because without it jsx won't work 

// import "./App.css"                         // this imports the style.css file so that all the styles can work, without it the styles won't work

import Genstocks from "./components/nav.js"

import TechNews from "./components/technews.js"

import CryptoNews from "./components/cryptonews.js"

import GeneralNews from "./components/generalnews.js"


function App(){          

    return (            

        <div className="mainbox">
            
            <div className="gstocks"> <Genstocks />  </div> 

            <div className="techcrypto">

                <div className="gnews"> <GeneralNews />  </div>

                <div className="tnews"> <TechNews /> </div>

                <div className="cnews"> <CryptoNews /> </div>

            </div>

        </div>


    )


}

export default App 
