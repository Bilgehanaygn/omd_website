import './header.css';
import '../../constants/styles.css';
import bombheadzLogo from '../../assets/bombheadz.png';

const Header = () => {

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
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>
            <div style={{position:"absolute", top:0, left:0, width:"100%", height:100, zIndex:2, backgroundColor:"black",
            opacity:0.5}} >

            </div>
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
                <a href="enlightment" className={activeTabName==="enlightenment" ? "header-item active-header-item" : "header-item"} > ENLIGHTENMENT </a>
                <a href="staking" className={activeTabName==="staking" ? "header-item active-header-item" : "header-item"} > STAKING </a>
                <a href="bombhouse" className={activeTabName==="bombhouse" ? "header-item active-header-item" : "header-item"} > BOMB HOUSE </a>
            </div>
                

        </div>
    )
}


export default Header;