import '../../constants/styles.css';
import './home.css';
import firstSneakPeek from '../../assets/clickme1.png';
import secondSneakPeek from '../../assets/clickme2.png';
import thirdSneakPeek from '../../assets/clickme3.png';
import fourthSneakPeek from '../../assets/clickme4.png';
import fifthSneakPeek from '../../assets/clickme5.png';
import sixthSneakPeek from '../../assets/clickme6.png'
import backgroundImage from '../../assets/backgroundBeach.png';
import { useState } from 'react';
import constants from '../../constants/constants';

const Home = () => {
    const images = [
        firstSneakPeek,
        secondSneakPeek,
        thirdSneakPeek,
        fourthSneakPeek,
        fifthSneakPeek,
        sixthSneakPeek
    ];
    const colors = [
        "green",
        "grey",
        `url(${backgroundImage})`,
        "orange",
        "purple",
        "#fce3b5"
    ]

    const [activeIndex, setActiveIndex] = useState(0);


    const isMobile = window.matchMedia("(max-width: 800px)").matches;

    const styles = {
        main:{
            height: "calc(100vh - 150px)",
            background:colors[activeIndex],
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            alignItems:"center",
            overflowY:"auto"
        },
        imageBackground:{
            backgroundSize: "cover",
            backgroundPosition:"center",
            backgroundRepeat: "no-repeat"
        },

    }

    const handleClick = () => {
        setActiveIndex(activeIndex===5 ? 0 : (activeIndex+1))
    }


    return (
        
        <div style={activeIndex === 2 ? {...styles.main, ...styles.imageBackground} : styles.main} >
            {
                isMobile ?
                <div style={{fontSize: constants.headerFontSize, marginTop:40}} >
                    Bomb Gang
                    <br/>
                    Are u ready?
                </div>
                :
                null
            }
            {
                <img src={images[activeIndex]} alt="img" id="sneakpeek" onClick={handleClick} />
            }
        </div>
    )
}

export default Home;