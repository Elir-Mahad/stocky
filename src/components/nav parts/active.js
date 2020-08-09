


import React from "react"                     

class Active extends React.Component {

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

        const url ="https://sandbox.iexapis.com/stable/stock/market/list/mostactive?token=Tsk_85d1baac71014984b7a215ab33bb54c6"
        
        // returns list of most active stocks


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

                <h1 className ="heading"> Most Active </h1>

                {/* <button className="choose" onClick={this.handleClick}>
                    Most active
                </button>

                <div
                    style={{ display: this.state.isToggle ? "block" : "none" }}
                    className="container"
                > */}

                    <section className="activebox container">
                    
                        <div className="company">

                                {this.state.alldata.map(datapoint => {

                                return (

                                        <div className="companyinfo">

                                            <h2> {datapoint.companyName}</h2>

                                            <p>
                                                <span className="tag"> Symbol </span> 
                                                {datapoint.symbol}
                                            </p>

                                            <p> 
                                                <span className="tag"> Last price </span>  
                                                {datapoint.latestPrice}
                                            </p>

                                            <p> 
                                                <span className="tag"> 52 week high </span> 
                                                {datapoint.week52High}
                                            </p>

                                            <p>
                                                <span className="tag"> 52 week Low </span>   
                                                {datapoint.week52Low}
                                            </p>

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

export default Active  