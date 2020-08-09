


import React from "react"


import Semiconductors from "./sectors/semiconductors"


class Semiconductor_sn extends React.Component {

    constructor() {

        super();

        this.state = { isToggle: false };
        
        this.handleClick = this.handleClick.bind(this);


        this.state = {

            alldata: null,

            loading: true

        };
    }

    handleClick(e) {

        this.setState({ isToggle: !this.state.isToggle });

    }

    componentDidMount() {


            const url = "https://sandbox-api.cityfalcon.com/v0.2/stories?offset=0&limit=20&identifier_type=assets&identifiers=WKEY%2CACIA%2CIOTS%2CAMD%2CAOSL%2CAMBA%2CAMRH%2CAMKR%2CADI%2CAMAT%2CAAOI%2CATOM%2CAXTI%2CAVGO%2CCCMP%2CCAN%2CCSIQ%2CCEVA%2CIMOS%2CCRUS%2CCREE%2CDIOD%2CDSPG%2CEMKR%2CENPH%2CEVSI%2CMRAM%2CFSLR%2CFORM%2CGSIT%2CHIMX%2CICHR%2CINTC%2CIPGP%2CKOPN%2CKLIC%2CLSCC%2CLPTH%2CMTSI%2CMRVL%2CMXIM%2CMLNX%2CMCHP%2CMU%2CMPWR%2CMOSY%2CLASR%2CNVEC%2CNVDA%2CNXPI%2COIIM%2CON%2COSIS%2CPLAB%2CPXLW%2CPOWI%2CQRVO%2CQUIK%2CRMBS%2CRESN%2CRBCN%2CLEDS%2CSMTC%2CSLAB%2CSIMO%2CSITM%2CSWKS%2CSGH%2CSEDG%2CSPI%2CWISA%2CSPWR%2CSPCB%2CSYNA%2CTXN%2CTSEM%2CUCTT%2CVIAV%2CXLNX%2CXPER&time_filter=mth1&categories=mp%2Cop&min_cityfalcon_score=50&order_by=popular&languages=en&all_languages=false&access_token=9e522ad481d49a67ba237d3445b5eea849576a83e8ab46f9911f30406c42f810"


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

                <div className="sectorcontainer">

                    <button className="sectorheading" onClick={this.handleClick}>
                        Semiconductors
                    </button>

                    <div
                        style={{ display: this.state.isToggle ? "block" : "none" }}
                        
                    >

            
                    <section className="sectorbox">

                            <div className="sector">

                                    <div className="sectorstocks">

                                        <Semiconductors />

                                    </div>

                                    <div className="sectorarticle">

                                        {this.state.alldata.stories.map(datapoint => {

                                            return (

                                                    <div className="secarticleinfo" key="datapoint.title">

                                                        <h2> Headline: {datapoint.title}</h2>

                                                        <p>{datapoint.publishTime}</p>

                                                        <img 
                                                            style={{display: !datapoint.imageUrls &&  "none"}} 
                                                            className="image"  
                                                            src ={datapoint.imageUrls}
                                                        />

                                                        <p 
                                                            style={{display: !datapoint.description &&  "none"}}
                                                            className="summary"  
                                                            src ={datapoint.description}
                                                        >
                                                            {datapoint.description}
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

            </div>

        </div>


        );
    }

}





export default Semiconductor_sn  