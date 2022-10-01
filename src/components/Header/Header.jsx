import './header.css';
import '../../constants/styles.css';
import bombheadzLogo from '../../assets/bombheadz.png';
import { useState } from 'react';
import magicedenWhiteLogo from '../../assets/magicedenwhite.svg';
import openseaWhiteLogo from '../../assets/openseawhite.svg';

const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const tabSplitLength = window.location.href.split('/').length;
    const activeTabName = window.location.href.split('/')[tabSplitLength-1];
    
    const isMobile = window.matchMedia("(max-width: 800px)").matches;

    const styles = {
        headerWrapper: {
            height:100, 
            maxHeight:100, 
            backgroundColor:"white", 
            display:"flex", 
            flexDirection:"row", 
            justifyContent:"space-around",
            boxSizing:"border-box"
        },
        logo: {
            height:"100%",
        }

    }

    return (
        isMobile ? 
        <div style={{height:100, maxHeight:100, boxSizing:"border-box"}} >
            <div style={{position:"absolute", top:0, left:0, width:"100%", height:100, zIndex:5, display:"flex",
                justifyContent:"space-around", alignItems:"center"}} >
                <div style={{height: isMobile ? 80 : 100}} >
                    <a href="/" > <img src={bombheadzLogo} alt="logo" style={styles.logo} /> </a>
                </div>
                {
                    modalOpen ? 
                    <svg onClick={()=>{setModalOpen(!modalOpen)}} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#ffffff" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                    :
                    <svg onClick={()=>{setModalOpen(!modalOpen)}} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                }

            </div>
            <div style={{position:"absolute", top:0, left:0, width:"100%", height:(modalOpen ? 450 : 100), zIndex:2, backgroundColor:"black",
            opacity:0.5}} >
            </div>
            {
                modalOpen ?
                <div style={{marginTop:100, height:350, width:"100%", position:"absolute", zIndex:5, color:"white", display:"flex",
                    flexDirection:"column", justifyContent:"space-around", alignItems:"center", fontSize:"25px"}} >
                    <a href="/manifesto" style={{fontSize:22, fontWeight:400}} >Manifesto</a>
                    <a href="/team" style={{fontSize:22, fontWeight:400}} >Team</a>
                    <a href="/utility" style={{fontSize:22, fontWeight:400}} >Utility</a>
                    <a href="/traitmarket" style={{fontSize:22, fontWeight:400}} >Trait Market</a>
                    <a href="/staking" style={{fontSize:22, fontWeight:400}} >Staking</a>
                    <a href="/ganghouse" style={{fontSize:22, fontWeight:400}} >Gang House</a>
                    <div>
                        <span href="https://twitter.com/DegenGang_NFT" target="_blank" className='footer-item' style={{width:"100vw", display:"flex", justifyContent:"space-evenly", flexDirection:"row",}} >
                            <a href="abc" style={{display:"flex", alignItems:"center"}} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                </svg>
                            </a>
                            <a href="https://discord.gg/bJNtcsYsh8" target="_blank" style={{display:"flex", alignItems:"center"}} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                                </svg>
                            </a>
                            <a href="" style={{display:"flex", alignItems:"center", color:"white"}} >
                                <img src={magicedenWhiteLogo} style={{width:40, height:40}} />
                            </a>
                            <a href="" style={{display:"flex", alignItems:"center"}} >
                                <img src={openseaWhiteLogo} style={{width:40, height:40}} />
                            </a>
                        </span>
                    </div>
                </div>
                :
                null
            }

        </div>
        :
        <div style={styles.headerWrapper} >
            <div style={{width:"40%", display:"flex", flexDirection:"row", justifyContent:"space-around"}} >
                <a href="manifesto" className={activeTabName==="manifesto" ? "header-item active-header-item" : "header-item"} > MANIFESTO </a>
                <a href="team" className={activeTabName==="team" ? "header-item active-header-item" : "header-item"} > TEAM </a>
                <a href="utility" className={activeTabName==="utility" ? "header-item active-header-item" : "header-item"} > UTILITY </a>
            </div>
            <a href="/" > <img src={bombheadzLogo} alt="logo" style={styles.logo} /> </a>
            <div style={{width:"40%", display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                <a href="traitmarket" className={activeTabName==="traitmarket" ? "header-item active-header-item" : "header-item"} > TRAIT MARKET </a>
                <a style={{cursor:"pointer"}} id="stak" onClick={()=>{document.getElementById('stak').innerHTML = "SOON"}} 
                onMouseLeave={()=>{document.getElementById('stak').innerHTML = "STAKING"}}  
                className={activeTabName==="staking" ? "header-item active-header-item" : "header-item"} > STAKING </a>
                <a style={{cursor:"pointer"}} id="gangh" onClick={()=>{document.getElementById('gangh').innerHTML = "SOON"}} 
                onMouseLeave={()=>{document.getElementById('gangh').innerHTML = "GANG HOUSE"}}
                className={activeTabName==="ganghouse" ? "header-item active-header-item" : "header-item"} > GANG HOUSE </a>
            </div>
                

        </div>
    )
}


export default Header;