import './traitmarket.css';
import infectedPotion from '../../assets/infectedpotion.png';
import traitMarket from '../../assets/traitmarket.gif';
import { useState } from 'react';



const TraitMarket = () => {
    
    const [isClicked, setIsClicked] = useState(false);
    //const isMobile = window.matchMedia("(max-width: 800px)").matches;

    const styles = {
        halfImageContainer:{
            width:"100%",
            height:"100%",
            backgroundPosition:"center",
            backgroundRepeat: "no-repeat",
            backgroundSize:"cover",
            borderRadius: "5%",
            marginBottom:10
        },
        halfBottomWrapepr: {
            fontSize: 25,
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            boxSizing:"border-box",
            padding: "0px 15px"
        }
    }

    return (
        <div id="traitmarketmain" >
            <div className="half-container" style={{opacity: (isClicked ? 0.3 : 1)}} onClick={()=>{setIsClicked(true)}} >
                <div style={{background:`url(${infectedPotion})`, ...styles.halfImageContainer}} ></div>
                <div style={styles.halfBottomWrapepr} >
                    Infection Lab
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                    </svg>
                </div>
            </div>
            <div onClick={()=>{setIsClicked(true)}} className="half-container" style={{opacity: (isClicked ? 0.3 : 1), cursor: "pointer"}} >
                <div style={{background:`url(${traitMarket})`, ...styles.halfImageContainer}}></div>
                <div style={styles.halfBottomWrapepr} >
                    Trait Market
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                    </svg>
                </div>
            </div>
            {
                isClicked ?
                <div id="sooncontainer" >
                    <div className="soon-item" >S</div>
                    <div className="soon-item" >O</div>
                    <div className="soon-item" >O</div>
                    <div className="soon-item" >N</div>
                </div>
                :
                null
            }


        </div>
    )
}


export default TraitMarket;