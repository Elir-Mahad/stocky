




import React from "react"



class GeneralNews extends React.Component {

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

        // general news -Works
        const url = "https://finnhub.io/api/v1/news?category=general&token=bshf1p7rh5r9t1gmt61g"

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

                <div className= "newsbigcontainer">

                    {/* <button className="choose" onClick={this.handleClick}>
                        General news
                    </button>

                    <div
                        style={{ display: this.state.isToggle ? "block" : "none" }}
                        className="container"
                    > */}

                    <h1 className ="heading_news"> General News </h1>
            
                    <section className="technewsbox">

                            <div className="technews">

                                    <div className="techarticle">

                                        {this.state.alldata.map(datapoint => {

                                                    return (

                                                            <div className="articleinfo" key ={datapoint.lastUpdated}>

                                                                <h2 className="articleheading"> Headline: {datapoint.headline}</h2>

                                                                <p>{datapoint.source}</p>

                                                                {/* <p>{datapoint.datetime}</p> */}

                                                                <img 
                                                                    style={{display: !datapoint.image &&  "none"}} 
                                                                    className="image"  
                                                                    src ={datapoint.image}
                                                                    alt =""
                                                                />

                                                                <p 
                                                                    style={{display: !datapoint.summary &&  "none"}}
                                                                    className="summary"  
                                                                    src ={datapoint.summary}
                                                                >
                                                                    {datapoint.summary}
                                                                </p>
                                                                
                                                                <a href ={datapoint.url}>
                                                                    <p>Read more</p>
                                                                </a>

                                                            </div>

                                                    );
                                        

                                        })}

                                    </div>

                            </div>

                    </section>

            {/* </div> */}

        </div>


        );
    }

}


export default GeneralNews  