
import React from "react"


class TechNews extends React.Component {

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

            // tech news
            const url = "https://sandbox-api.cityfalcon.com/v0.2/stories?offset=0&limit=20&identifier_type=assets&identifiers=AAPL%2CMSFT%2CTSM%2CNVDA%2CADBE%2CINTC%2CCSCO%2CSAP%2CCRM%2CORCL%2CASML%2CACN%2CAVGO%2CSHOP%2CQCOM%2CTXN%2CIBM%2CSNE%2CAMD%2CFIS%2CNOW%2CINTU%2CFISV%2CAMAT%2CVMW%2CSQ%2CMU%2CLRCX%2CINFY%2CUBER%2CADSK%2CDELL%2CTEAM%2CWDAY%2CADI%2CDOCU%2CERIC%2CCTSH%2CSPLK%2CNXPI%2CAPH%2CKLAC%2CCDNS%2CSNPS%2CTEL%2CDDOG%2COKTA%2CANSS%2CXLNX%2CMCHP%2CRNG%2CHPQ%2CFTV-PA%2CSTM%2CPANW%2CCRWD%2CSWKS%2CVRSN%2CMRVL%2CFTV%2CMSI%2CGLW%2CFTNT%2CFLT%2CCOUP%2CANET%2CGRMN%2CGIB%2CKEYS%2CAKAM%2CMXIM%2CCHKP%2CCTXS%2CZS%2CCAJ%2CPAYC%2CCDW%2CWORK%2CEPAM%2CZI%2CBR%2CWIX%2CZBRA%2CSSNC%2CQRVO%2CTER%2CTYL%2CJKHY%2CLDOS%2CSTNE%2CWDC%2CNICE%2CNET%2CNLOK%2CFICO%2CHPE%2CPAGS%2COTEX%2CLOGI%2CMPWR%2CDT%2CBKI%2CGDDY%2CUI%2CSTX%2CCGNX%2CAYX%2CCDAY%2CTDY%2CIT%2CTRMB%2CCCC%2CZEN%2CAVLR%2CDNB%2CHUBS%2CPTC%2CFSLY%2CGWRE%2CNTAP%2CENTG%2CIPGP%2CDBX%2CPEGA%2CCIEN%2CLYFT%2COCFT%2CSEDG%2CON%2CJNPR%2CFFIV%2CDOX%2CESTC%2COLED%2CNUAN%2CG%2CCREE%2CBILL%2CKC%2CPCTY%2CNCNO%2CWEX%2CLITE%2CMKSI%2CGLOB%2CAZPN%2CRP%2CSNX%2CFSLR%2CIPHI%2CPLAN%2CMANH%2CST%2CSWI%2CFLEX%2CSMAR%2CARW%2CCDK%2CCLGX%2CFLIR%2CJBL%2CCACI%2CIIVI%2CEEFT%2CBL%2CQTWO%2CQLYS%2CDSGX%2CPSTG%2CJAMF%2CSAIC%2CDXC%2CCYBR%2CRUN%2CNATI%2CNTNX%2CSTMP%2CSLAB%2CCCMP%2CENV%2CMDLA%2CSWCH%2CLFUS%2CNEWR%2CLOGM%2CAPI%2CLSCC%2CBRKS%2CCRUS%2CLPL%2CNOVT%2CPOWI%2CSMTC%2CVICR%2CXRX%2CBAND%2CTENB%2CPRSP%2CVRNS&time_filter=mth1&categories=mp%2Cop&min_cityfalcon_score=50&order_by=popular&languages=en&all_languages=false&access_token=9e522ad481d49a67ba237d3445b5eea849576a83e8ab46f9911f30406c42f810"

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

                    <h1 className="heading_news"> Tech News </h1>

                    {/* <button className="choose" onClick={this.handleClick}>
                        Tech News
                    </button>

                    <div
                        style={{ display: this.state.isToggle ? "block" : "none" }}
                        className="container"
                    > */}

            
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


export default TechNews  