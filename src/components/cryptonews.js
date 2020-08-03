

import React from "react"


class CryptoNews extends React.Component {

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

            // cryptocurrency news
            const url = " https://sandbox-api.cityfalcon.com/v0.2/stories?offset=0&limit=20&identifier_type=assets&identifiers=BTC%2CETH%2CXRP%2CUSDT%2CBCH%2CBSV%2CLTC%2CADA%2CCRO%2CBNB%2CEOS%2CLINK%2CXTZ%2CXLM%2CXMR%2CTRX%2CLEO%2CUSDC%2CVET%2CHT%2CETC%2CNEO%2CMIOTA%2CDASH%2CATOM%2CZEC%2CMKR%2CONT%2CXEM%2CHEDG%2CDOGE%2CLEND%2CDAI%2CBAT%2CCOMP%2COKB%2CSNX%2CDGB%2CFTT%2CERD%2CAMPL%2CKNC%2CZRX%2CBTT%2CALGO%2CPAX%2CHYN%2CQTUM%2CTHETA%2COMG%2CREP%2CHBAR%2CICX%2CTUSD%2CZIL%2CDCR%2CBTG%2CBCD%2CBUSD%2CLSK%2CWAVES%2CTMTG%2CENJ%2CREN%2CRVN%2CMONA%2CHUSD%2CNEXO%2CHOT%2CSC%2CFXC%2CDX%2CNANO%2CSXP%2CBTM%2CBNT%2CLUNA%2CDIVI%2CLRC%2CCKB%2CZB%2CQNT%2CXVG%2CCEL%2CRLC%2CSNT%2CSTX%2CIOST%2CABBC%2CBAND%2CKAVA%2CDGTX%2CCHSB%2CKMD%2CSTEEM%2CANT%2CZEN%2CRUNE%2CMATIC%2CBTS%2COCEAN%2CRSR%2CNRG%2CAOA%2CHIVE%2CCHZ%2CMANA%2CMCO%2CKCS%2CWAXP%2CUBT%2CXDCE%2CTOMO%2CHC%2CVLX%2CGNT%2CELA%2CAVA%2CXZC%2CRIF%2CELF%2CFET%2CARDR%2CSYS%2CVSYS%2CNMR%2CSTRAT%2CARK%2CPAXG%2CETN%2CMAID%2CAE%2CONE%2CSERO%2CNPXS%2CIRIS%2CVTHO%2CAION%2CNULS%2CSOLVE%2CWICC%2CUTK%2CRDD%2CPOWR%2CCVT%2CGT%2CEURS%2CNIM%2CPNT%2CORBS%2CVGX%2CSTORJ%2CMOF%2CIOTX%2CDATA%2CDAD%2CGNO%2CGXC%2CWAN%2CTRAC%2CTFUEL%2CLOKI%2CCRPT%2CTT%2CPNK%2CFUN%2CANKR%2CKSM%2CWTC%2CTRUE%2CHPT%2CWXT%2CWRX%2CMXC%2CCTXC%2CFSN%2CRCN%2CSOL%2CFTM%2CREQ%2CBEAM%2CBHT%2CPAI%2CCELR%2CDRGN%2COGN%2CPIVX%2CWIN%2CXNS%2CPERL%2CTSHP%2CMX%2CCHR%2CNAS%2CGRIN%2CCOTI%2CMLN%2CIPX%2CMTL%2CBLZ&time_filter=mth1&categories=mp%2Cop&min_cityfalcon_score=50&order_by=popular&languages=en&all_languages=false&access_token=9e522ad481d49a67ba237d3445b5eea849576a83e8ab46f9911f30406c42f810"

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

                <div className="newsbigcontainer">

                    {/* <button className="choose" onClick={this.handleClick}>
                        Crypto News
                    </button>

                    <div
                        style={{ display: this.state.isToggle ? "block" : "none" }}
                        className="container"
                    > */}

                    <h1 className="heading_news"> Crypto News </h1>
            
                    <section className="technewsbox">

                            <div className="technews">

                                    <div className="techarticle">

                                        {this.state.alldata.stories.map(datapoint => {

                                            return (

                                                    <div className="articleinfo" key="datapoint.title">

                                                        <h2 className="articleheading"> Headline: {datapoint.title}</h2>

                                                        <p>{datapoint.source.brandName}</p>

                                                        {/* <p>{datapoint.publishTime}</p> */}

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

            {/* </div> */}

        </div>


        );
    }

}


export default CryptoNews  