

import React from "react"                     

class Gainers extends React.Component {

    constructor() {

        super();

        // this.state = { isToggle: false };
        
        // this.handleClick = this.handleClick.bind(this);


        this.state = {

            alldata: null,

            loading: true

        };
    }

    // handleClick(e) {

    //     this.setState({ isToggle: !this.state.isToggle });

    // }


    componentDidMount() {

        // const sandboxtoken = "Tsk_85d1baac71014984b7a215ab33bb54c6"

        const url ="https://sandbox.iexapis.com/stable/stock/market/list/gainers?token=Tsk_85d1baac71014984b7a215ab33bb54c6"
        
        // returns list of top gainers stocks


        fetch(url)
        
        .then(response => response.json())
        
        .then(data => {
        
            this.setState({ 

                alldata: data, 

                loading: false

            });

        });

    }
    render() {

        if (this.state.loading) return <p>Loading...</p>;

        return (

                <div className ="bigcontainer">

                    <h1 className ="heading"> Gainers </h1>

                    {/* <button className="choose" onClick={this.handleClick}>
                        Winners
                    </button>

                    <div
                        style={{ display: this.state.isToggle ? "block" : "none" }}
                        className="container"
                    > */}
                            <section className="gainerbox container">
                            
                                <div className="company">

                                        {this.state.alldata.map(datapoint => {

                                        return (

                                                <div className="companyinfo">

                                                    <h2> {datapoint.companyName}</h2>

                                                    <p> Symbol: {datapoint.symbol}</p>

                                                    <p> last price: {datapoint.latestPrice}</p>

                                                    <p> Market cap:{datapoint.marketCap}</p>

                                                    <p> 52 week high: {datapoint.week52High}</p>

                                                    <p> 52 week low: {datapoint.week52Low}</p>

                                                </div>

                                        );
                                        

                                        })}

                                </div>

                            </section>

                    {/* </div> */}
                
                </div>
        );
    }

}

export default Gainers  