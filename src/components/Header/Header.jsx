import './header.css';
import '../../constants/styles.css';
import bombheadzLogo from '../../assets/bombheadz.png';

const Header = () => {

    const tabSplitLength = window.location.href.split('/').length;
    const activeTabName = window.location.href.split('/')[tabSplitLength-1];
    console.log(activeTabName);
    const styles = {
        headerWrapper: {
            height:100, 
            maxHeight:100, 
            backgroundColor:"white", 
            display:"flex", 
            flexDirection:"row", 
            justifyContent:"space-around"
        },
        logo: {
            height:"100%",
        }

    }

    return (
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