import '../../constants/styles.css';
import './home.css';
import firstSneakPeek from '../../assets/sneakpeek1.png';
import secondSneakPeek from '../../assets/sneakpeek2.png';
import thirdSneakPeek from '../../assets/sneakpeek3.png';
import fourthSneakPeek from '../../assets/sneakpeek4.png';
import backgroundImage from '../../assets/backgroundBeach.png';
import { useState } from 'react';

const Home = () => {
    const images = [
        firstSneakPeek,
        secondSneakPeek,
        thirdSneakPeek,
        fourthSneakPeek,
    ];
    const colors = [
        "green",
        "grey",
        `url(${backgroundImage})`,
        "orange",
    ]

    const [activeIndex, setActiveIndex] = useState(0);



    const styles = {
        main:{
            height: "calc(100vh - 150px)",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"end",
            background:colors[activeIndex]
        },
        imageBackground:{
            backgroundSize: "cover",
            backgroundPosition:"center",
            backgroundRepeat: "no-repeat"
        },

    }

    const handleClick = () => {
        setActiveIndex(activeIndex===3 ? 0 : (activeIndex+1))
    }


    return (
        <div style={activeIndex === 2 ? {...styles.main, ...styles.imageBackground} : styles.main} >
            {
                <img src={images[activeIndex]} alt="img" 
                id="sneakpeek" onClick={handleClick} />
            }
        </div>
    )
}

export default Home;