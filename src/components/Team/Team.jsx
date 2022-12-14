import firstSneakPeek from '../../assets/sneakpeek1.png';
import thirdSneakPeek from '../../assets/sneakpeek3.png';
import fourthSneakPeek from '../../assets/sneakpeek4.png';
import sixthSneakPeek from '../../assets/sneakpeek6.png';
import './team.css';
import constants from '../../constants/constants';
import { useState } from 'react';

const TeamItem = ({memberData, onClickCallBack}) => {

    const isMobile = window.matchMedia("(max-width: 800px)").matches;

    return (
        <div style={{ borderRadius: 5}}
            id="membercart" onClick={()=>{onClickCallBack(memberData)}} >
            <div style={isMobile ? {display:"flex"} : {width:"100%", height:280, marginBottom: 10}} >
                <img src={memberData.image} alt="img" style={{width:"100%", height:(isMobile ? "auto" : "100%")}} />
            </div>
            <div style={{fontSize: 20, fontWeight: constants.fontBoldSize, paddingLeft:20}} >
                {memberData.name} | {memberData.role}
                <br/>
                <a href={"https://twitter.com/" + memberData.twitter} target="_blank" style={{marginLeft:10, fontSize:15}} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                    @{memberData.twitter}
                </a>
            </div>
        </div>
    )
}


const Team = () => {

    const teamData = [
        {
            name: "Leifan",
            twitter: "LeifanPOOR",
            role: "Founder",
            image: sixthSneakPeek,
            description: "Leifan is the co-founder and the team leader of Degen Bomb Gang. He comes up with visionary ideas, and ensures the success is achieved."
        },
        {
            name: "Ronmel",
            role: "Comm. Manager",
            twitter: "Ronmel_Sol",
            image: firstSneakPeek,
            description: "Ronmel is an Atadia, Cet, Just Ape, he rocks for almost every project in the space. He has been in the Solana Space for almost a year. He loves the vibes, chills and make the people love the vibes and makes them chill. He takes care of the community."
        },{
            name: "XEN",
            role: "Artist",
            twitter: "XENFT46",
            image: thirdSneakPeek,
            description: "XEN is our super talented artist (you guys can see his artworks in his twitter, he is also the artist of Alpha Pharaohs). He made our complete collection including Level 2s (infected) and Level 3s (robotic) versions of our art."
        },
        {
            name: "Cornflouryyn",
            role: "Developer",
            twitter: "cornflouryyn",
            image: fourthSneakPeek,
            description: "Cornflouryyn is experienced with web2 for more than 5 years. He is the developer of our team and responsible for front-end and back-end of our leveling system. By the help of a web3 developer, he built the complete art leveling system for us."
        }
    ];

    const [selectedMember, setSelectedMember] = useState(teamData[0]);

    const handleOnClick = (memberData) => {
        setSelectedMember(memberData);
    }

    return (
        <div id="team-main" >
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}} >
                <div style={{marginBottom:20, fontSize: constants.headerFontSize}} >
                    Creators
                </div>
                <div id="team-section" >
                    {
                        teamData.map((element,index)=>
                            <TeamItem memberData={element} key={index} onClickCallBack={handleOnClick} />
                        )
                    }
                </div>
            </div>
            <div id="memberexperience" >
                <div style={{marginBottom:20, fontSize: constants.headerFontSize, textAlign:"center",}} >
                        Experience
                </div>
                <div style={{width:"100%", borderRadius: 5, overflowY:"auto"}} >
                                        
                    <div style={{fontSize:constants.headerFontSize, fontWeight: constants.fontBoldSize}} >
                        {selectedMember.name} | {selectedMember.role}
                    </div>
                    <div style={{fontSize:17, marginTop:20}} >
                        {selectedMember.description}
                    </div>
                        
                </div>
            </div>
        </div>
    )
}


export default Team;