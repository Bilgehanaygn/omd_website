import constants from '../../constants/constants';
import './utility.css';
import tokenImage from '../../assets/dynamittokenimage.png';
import enlightenmentImage from '../../assets/enlightenmentimage2.png';


const Utility = () => {


    const styles = {
        tokenomics: {
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            opacity:0.2,
            position: 'absolute',
            top:0,
            left:0,
            width:"100%",
            height:"100%"
        },
        questionHeader: {
            fontSize:20,
            fontWeight:500
        },
        answer:{
            fontSize:16,
            fontWeight:450
        }
    }

    return (
        <div id="utilitymain" >
            <div className='utilitypart' style={{position:'relative', fontWeight: 500}}  >
                <div style={{backgroundImage: `url(${tokenImage})`, ...styles.tokenomics}} ></div>
                <div style={{fontSize: constants.headerFontSize, fontWeight: constants.fontBoldSize, 
                    textAlign:"center", marginBottom:25}} >
                    Tokenomics
                </div>
                <div>
                    <div style={styles.questionHeader} >
                        What is $DYNMT?
                    </div>
                    <div style={styles.answer} >
                    <br/>

                        $DYNMT is a community utility token.
                    </div>
                    <br/>
                    <br/>
                    <div style={styles.questionHeader} >
                        What are the utilities?
                    </div>
                    <div style={styles.answer} >
                    <br/>
                        $DYNMT allows you to purchase all art stuffs in our Marketplaces, participate in Raffles & Auctions in 
                        Bomb House and more.
                        <br/>
                        <br/>
                        BUT
                        <br/>
                        <br/>
                        The main utility of the token is it allows you to take your art to the next level 😈  
                    </div>
                    <br/>
                    <br/>
                    <div style={styles.questionHeader} >
                        What is the supply?
                    </div>
                    <div style={styles.answer} >
                    <br/>
                        $DYNMT has a fixed supply of 10.000.000 and can mainly be Earned from NFT Staking,
                        and Mystery Boxes.
                    </div>

                    <br/>
                    <br/>

                    <div style={styles.questionHeader} >
                        How many tokens can be earned by staking?
                    </div>
                    <div style={styles.answer} >
                    <br/>
                        Each Degen Bomb NFT stakes 10 $DYNMT/Day.
                    </div>
                    <br/>
                    <br/>
                    <div style={styles.questionHeader} >
                        What are the mechanisms for stabilizing token?
                    </div>
                    <div style={styles.answer} >
                    <br/>
                        Powerful Burning Mechanics including the tokens going to be spent on enlightenment 
                        and raffles make $DYN deflationary and stabilize in the Long-Term perspective.
                    </div>
                  


                </div>
            </div>
            <div className='utilitypart' style={{position:"relative"}} >
                <div style={{backgroundImage: `url(${enlightenmentImage})`, ...styles.tokenomics, borderRadius:"50%"}} ></div>
                <div style={{fontSize: constants.headerFontSize, fontWeight: constants.fontBoldSize, 
                    textAlign:"center", marginBottom:25 }} >
                    Enlightenment
                </div>
                <div >
                    <div style={styles.questionHeader} >
                        What is Enlightenment?
                    </div>
                    <div style={styles.answer} >
                        <br/>
                        It is the process of leveling your art. Every time you upgraded the level of your NFT,
                        the metadata will be changed. You will be able to see Enlightenment Level as a trait in your NFT,
                        which will notify the level of your NFT.
                    </div>
                        <br/>
                        <br/>
                    <div style={styles.questionHeader} >
                        What are the benefits of upgrading?
                    </div>
                    <div style={styles.answer} >
                        <br/>
                            In every time your NFT levels up, the art of the NFT will be evolved. 
                            And every time your NFT levels up the amount of $DYNMT your NFT stakes will be doubled as well.                        
                        <br/>
                        <br/>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Utility;