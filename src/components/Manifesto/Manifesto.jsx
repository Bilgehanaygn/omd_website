



const Manifesto = () => {


    const styles = {
        main:{
            height: "calc(100vh - 150px)",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            paddingTop: "1vw",
            boxSizing: "border-box"
        },
    }

    return (
        <div style={styles.main} >
            <div style={{width:"25%", textAlign:"left", marginRight: "3vw"}} >
                <div style={{width:30, fontSize: 35, fontWeight: 700, marginBottom:"2vw", borderBottom: "5px solid #f88378",}} >
                    MANIFESTO
                </div>
                <div style={{fontSize:15}} >
                    In all of time, I have found fortune.
                    <br/>
                    In all of time, I have conquered malice.
                    <br/>
                    In all of time, I have spilt blood.
                    <br/>
                    <br/>
                    I have done all there is to do, but live a moment where truth forgets its name.
                    <br/>
                    <br/>
                    Whichever direction I go, whatever goal I seek, I will not forget those who stand beside me.
                    <br/>
                    <br/>
                    This is for the dreamers, with the courage to step into the unknown, where hope flourishes under dark and heavy skies.
                    <br/>
                    <br/>
                    This is for the valiant, who lead in hopeless moments, with an infinite army whose armors glisten with radiance.
                    <br/>
                    <br/>
                    I was a Jikan before, and I will be a Jikan tomorrow.
                    <br/>
                    From the start of time until the very end.
                    <br/>
                    <br/>
                    <span style={{color:"#f88378", fontSize:16, fontWeight:600}} >
                        Why predict the future, when we can create it?
                    </span>
                </div>
            </div>
            <div style={{width:"55%"}} >
                kidamsmdsa
            </div>
        </div>
    )
}



export default Manifesto;