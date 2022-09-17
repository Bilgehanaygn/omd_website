import manifestoImage from '../../assets/manifestoimage.png';



const Manifesto = () => {

    const isMobile = window.matchMedia("(max-width: 800px)").matches;


    const styles = {
        main:{
            height: "calc(100vh - 150px)",
            minHeight: "calc(100vh - 150px)",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            paddingTop: "1vw",
            boxSizing: "border-box",
            backgroundColor:"#88dfbd",
            paddingLeft:15,
        },
        mainMobile: {
            height: "calc(100vh - 150px)",
            minHeight: "calc(100vh - 150px)",
            display:"block",
            overflowY:"auto",
            padding: "0px 10px",
        }
    }



    return (
        <div style={isMobile ? styles.mainMobile : styles.main} >
            <div style={{width: (isMobile ? "100%" : "30%"), textAlign:"left", marginRight: "3vw"}} >
                <div style={{width:30, fontSize: 35, fontWeight: 700, marginBottom:"2vw", borderBottom: "5px solid #f88378",}} >
                    MANIFESTO
                </div>
                <div style={{fontSize:15,}} >
                    I'm a member of bomb gang.
                    <br/>
                    <br/>
                    I promise, I will gang.
                    <br/>
                    I promsie, I will wibe.
                    <br/>
                    I promise, I will mint.
                    <br/>
                    <br/>
                    Over park, over pale,
                    <br/>
                    Thorough flood, thorough fire!
                    <br/>
                    I do wander everywhere,
                    <br/>
                    Swifter than the moon's sphere;
                    <br/>
                    <br/>
                        I was a Bombhead before, 
                    <br/>
                        I'm a bombhead now,
                    <br/> 
                        I will be a bombhead forever.
                    <br/>
                        From the start of time until the very end.
                    <br/>
                    <br/>
                    <span style={{fontSize:16, fontWeight:600}} >
                        Why predict the future, when we can BOOOM it?
                    </span>
                </div>
            </div>
            <div style={{height:"100%"}} >
                <img src={manifestoImage} alt="img" style={{width:"100%", height:"100%"}} />
            </div>

        </div>
    )
}



export default Manifesto;