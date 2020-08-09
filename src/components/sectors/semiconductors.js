
import React from "react"   


class Semiconductors extends React.Component {

    constructor() {

        super();

        this.state = {

            alldata: null,

            loading: true,

        };
    }


    componentDidMount() {
        
        
        const apikey = "Tsk_85d1baac71014984b7a215ab33bb54c6"

            const url = "https://sandbox.iexapis.com/stable/stock/market/collection/tag?collectionName=Semiconductors&token="+apikey

        
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
                    
                <div className="sectorstocksbox">

                        {this.state.alldata.map(datapoint => {

                            if (datapoint.changePercent > 0.05) {

                                                                return (

                                                                        <div className="sectorstocksinfo">

                                                                            <h2>{datapoint.companyName}</h2>

                                                                            <p>Percentage Change:{datapoint.changePercent}</p>

                                                                            <p>Primary Exchange: {datapoint.primaryExchange}</p>

                                                                            <p> Symbol: {datapoint.symbol}</p>

                                                                            <p> 52 week high: {datapoint.week52High}</p>

                                                                            <p> 52 week low: {datapoint.week52Low}</p>

                                                                        </div>

                                                                        );

                                                            }
                        

                        })}

                </div>

        );
    }

}


export default Semiconductors  