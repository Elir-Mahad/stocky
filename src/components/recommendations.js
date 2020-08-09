



import React from "react"                     

class Recommendation extends React.Component {

    constructor() {

        super();

        this.state = {

            alldata: null,

            loading: true

        };
    }

    componentDidMount() {

        const url =  "https://finnhub.io/api/v1/stock/recommendation?symbol=AAPL&token=bshf1p7rh5r9t1gmt61g"


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

            <div className ="rebigcontainer">

                <h1 className ="reheading"> Recommendation </h1>

                    <section className="rebox recontainer">
                    
                        <div className="recompany">

                                {this.state.alldata.map(datapoint => {

                                return (

                                        <div className="recompanyinfo">

                                            <div className="symbolntime"> 

                                                <h3>{datapoint.symbol}</h3>

                                                <h3>{datapoint.period}</h3>

                                            </div>

                                            <p>Buy recommendation: {datapoint.buy}</p>

                                            <p>Hold recommendation:{datapoint.hold}</p>

                                            <p>Strong buy recommendation:{datapoint.strongBuy}</p>

                                            <p>Strong sell recommendation:{datapoint.strongSell}</p>

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

export default Recommendation  