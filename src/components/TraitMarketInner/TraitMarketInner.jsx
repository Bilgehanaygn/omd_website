import './traitmarketinner.css';
import { useEffect, useState } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {Transaction } from '@solana/web3.js';
import axios from 'axios';

import spinnerLogo from '../../assets/spinner-logo.png';

import Basketballer from '../../assets/traits/outfit/Basketballer.png';
import Hoodie from '../../assets/traits/outfit/Hoodie.png';
import Jacket from '../../assets/traits/outfit/Jacket.png';
import Jailbreak from '../../assets/traits/outfit/Jailbreak.png';
import NecklessSweat from '../../assets/traits/outfit/NecklessSweat.png';
import Scarf from '../../assets/traits/outfit/Scarf.png';
import Shirt from '../../assets/traits/outfit/Shirt.png';
import Suit from '../../assets/traits/outfit/Suit.png';
import Sweater from '../../assets/traits/outfit/Sweater.png';
import Vest from '../../assets/traits/outfit/Vest.png';
import NoOutfit from '../../assets/traits/outfit/NoOutfit.png';

import HollyCap from '../../assets/traits/cap/HollyCap.png';
import JustCap from '../../assets/traits/cap/JustCap.png';
import Goolfy from '../../assets/traits/cap/Goolfy.png';
import ElectricWire from '../../assets/traits/cap/ElectricWire.png';
import Cloud from '../../assets/traits/cap/Cloud.png';
import NoCap from '../../assets/traits/cap/NoCap.png';

import LightningEffect from '../../assets/traits/element/Lightning.png';
import AirEffect from '../../assets/traits/element/Air.png';
import FireEffect from '../../assets/traits/element/Fire.png';
import WaterEffect from '../../assets/traits/element/Water.png';
import NoElement from '../../assets/traits/element/NoElement.png';

const MarketItem = ({element, onClickCallback}) => {

    return (
        <div style={{fontWeight:500, cursor:"pointer"}} onClick={()=>{onClickCallback(element)}} >
            <img src={element.image} alt="img" style={{height:140, width:"auto"}} />
            <div style={{marginLeft:5}} >
                {element.name}
            </div>
            <div style={{marginLeft:5}} >
                {
                    element.price === 0 ? '.' : element.price+' $DYNMT'
                }
                
            </div>
        </div>
    )
}



const TraitMarketInner = () => {
    const [deerNftsByOwner, setDeerNftsByOwner] = useState([]);
    const {publicKey, signTransaction} = useWallet();
    const {connection} = useConnection();
    const [selectedDeerNft, setSelectedDeerNft] = useState(null);
    const [activeTrait, setActiveTrait] = useState('Outfits');
    const outfits = [
        {image: Basketballer, price:500, name: 'Basketballer'}, 
        {image: Hoodie, price:250, name: 'Hoodie' }, 
        {image: Jacket, price: 500, name: 'Jacket' }, 
        {image: Jailbreak, price: 300, name: 'Jailbreak' }, 
        {image: NecklessSweat, price: 500, name: 'NecklessSweat' }, 
        {image: Scarf, price: 700, name: 'Scarf' }, 
        {image: Shirt, price: 300, name:'Shirt'}, 
        {image: Suit, price: 400, name: 'Suit'},
        {image: Sweater, price: 400, name: 'Sweater'},
        {image: Vest, price: 400, name: 'Vest'},
        {image: NoOutfit, price: 400, name: 'NoOutfit'}
    ];
    const caps = [
        {image: Cloud, price: 100,name:'Cloud'}, 
        {image: ElectricWire, price: 100, name:'ElectricWire'}, 
        {image: Goolfy, price: 150, name: 'Goolfy'}, 
        {image: HollyCap, price: 250, name: 'HollyCap'}, 
        {image: JustCap, price: 250, name: 'JustCap'},
        {image: NoCap, price: 400, name: 'NoCap'}
    ];

    const elements = [
        {image: LightningEffect, price: 50, name:'Lightning'}, 
        {image: FireEffect, price: 50, name:'Fire'},
        {image: AirEffect, price: 50, name:'Air'} ,
        {image: WaterEffect, price: 50, name:'Water'},
        {image: NoElement, price: 50, name:'NoElement'}
    ];

    const [activeTraitImageList, setActiveTraitImageList] = useState(outfits);
    const [activeOutfit, setActiveOutfit] = useState(null);
    const [activeCap, setActiveCap] = useState(null);
    const [activeElement, setActiveElement] = useState(null);

    const [errorState, setErrorState] = useState({status: 0, message: 'Waiting for wallet connection.'});
    
    useEffect(() => {

        if(!publicKey){
            return;
        }
        //set Fetching Nfts
        setErrorState({status:1, message:'Fetching your NFTs...'});

        //detect deer nfts by owner

        try{
            (async()=>{
                //fetch deer nfts from the server
                await new Promise(resolve=>{setTimeout(()=>{resolve()},7000)});

                let {data} = await axios.get(`http://localhost:5000/api/findNftsByOwner?wallet=${publicKey.toBase58()}`);
                console.log(data);
                setDeerNftsByOwner(data);

                //set success state
                setErrorState({status:2, message:''});
            })()
        }
        catch(err){
            //set error state
            setErrorState({status:-1, message:'Error while fetching your NFTs...'});
        }
        

        //setdeernfts
        
    }, [publicKey])

    const handleItemClick = function(element){
        console.log(deerNftsByOwner);
        setSelectedDeerNft(element);
    }

    const stylesCreator = (traitHeader) => {
        return {
            borderBottom: (activeTrait === traitHeader ? "2px solid green" : null),
            fontSize:"inherit"
        }
    }

    const handleSingleTraitClick = (element) => {
        if(activeTrait==='Outfits'){
            setActiveOutfit(element);
        }
        else if(activeTrait==='Caps'){
            setActiveCap(element);
        }
        else if(activeTrait==="Elements"){
            setActiveElement(element);
        }
        
    }

    const handleTranscendClick = async () => {
        //send request if selected gang 0 or 1
        //create transaction from response
        //await approval oftransaction

        let data = {
            senderPubkeyStr: publicKey.toBase58(),
            tokenMintStr: selectedDeerNft.tokenMintStr,
            metadataIdStr: selectedDeerNft.metadataIdStr,
            oldUri: selectedDeerNft.oldUri,
            requestedTraits: {
                base: 'https://nftstorage.link/ipfs/bafybeig5fgy53dttevrpug5kowiulhl472tdyacm3jn7l4g5x7ofuvjtuu/0.png',
            }
        };

        
    
        if(activeOutfit){
            data.requestedTraits.outfit= activeOutfit.name;
        }
        if(activeCap){
            data.requestedTraits.cap= activeCap.name;
        }
        if(activeElement){
            data.requestedTraits.element= activeElement.name;
        }

        let res = await axios.post('http://localhost:5000/api/update',data);
        console.log(res);

        const transaction = Transaction.from(res.data.message.data);

        const txSigned = await signTransaction(transaction);
        
        const signature = await connection.sendRawTransaction(txSigned.serialize());
        console.log(signature);

    }
    
    const isMobile = window.matchMedia("(max-width: 800px)").matches;

    
    return (
        <div id="traitmarketinnermain" >
            <div id="traitmarketinnerbackgroundwrapper"></div>
            <div style={{width:"100%", display:"flex", flexDirection:"row", justifyContent:"space-between", padding:"10px 20px", boxSizing:"border-box"}} >
                <span style={{width:"100px"}} ></span>
                <WalletMultiButton/>
            </div>
            {
                errorState.status===0?
                <div style={{fontSize:30, fontWeight:"550", margin:"auto", textAlign:"center"}} >
                    Please connect your wallet to see your NFTs and the trait market.
                </div>
                :
                errorState.status===1?
                <div style={{fontSize:30, fontWeight:"550", margin:"auto", textAlign:"center"}} >
                    Fetching your nfts...
                    <br/>
                    <img src={spinnerLogo} alt="img" className="loading-spinner" />
                </div>
                :
                <div id="main-wrapper" >
                    {
                        isMobile ? 
                        <div style={{width:"100%", maxWidth:300, height:120, minHeight:120, display:"flex", flexDirection:"row", overflowX:"auto", 
                        paddingBottom:10, boxSizing:"border-box", marginBottom:(isMobile ? 40 : null), marginTop:(isMobile ? 20 : null) }} >
                            {
                                deerNftsByOwner.map((element,index)=>{
                                    return <img src={element.nftImageUri} alt="img" key={index} style={{height:"100%", width:"auto", cursor:"pointer", marginRight:10}} 
                                    onClick={()=>{handleItemClick(element)}} />
                                })
                            }
                        </div>
                        :
                        null
                    }
                    <div id="middle-main-wrapper" >
                        <div id="portrait-wrapper"  >
                            <div style={{width:(isMobile ? 275 : 300), height:(isMobile ? 275 : 300) }} >
                                {
                                    selectedDeerNft ?
                                    <div id="imageOverlayWrapper" style={{position:"relative"}} >
                                        <img src={selectedDeerNft.nftImageUri} alt="img" style={{width:"100%", height:"auto", position:"sticky",
                                        top:0, left:0, zIndex:1}} />
                                        {
                                            activeOutfit ? 
                                            <img src={activeOutfit.image} alt="img" style={{width:"100%", height:"auto", position:"absolute", top:0,left:0, zIndex:2}} />
                                            :
                                            null
                                        }
                                        {
                                            activeCap ? 
                                            <img src={activeCap.image} alt="img" style={{width:"100%", height:"auto", position:"absolute", top:0,left:0, zIndex:2}} />
                                            :
                                            null
                                        }
                                        {
                                            activeElement ? 
                                            <img src={activeElement.image} alt="img" style={{width:"100%", height:"auto", position:"absolute", top:0,left:0, zIndex:2}} />
                                            :
                                            null
                                        }

                                    </div>
                                    :
                                    null
                                }

                            </div>
                            <div style={{color:"black", textAlign:"center", fontSize:18,fontWeight:550, marginTop: 10, marginBottom: (isMobile ? 20 : 40)}} >
                                        {
                                            selectedDeerNft ? selectedDeerNft.nftName : ''
                                        }
                                </div>
                            <div style={{height:100, width:"100%", textAlign:"center"}} >
                                <button className="bn29" onClick={handleTranscendClick} >Transcend</button>
                            </div>
                        </div>
                        <div id="traitmarket-ui-wrapper" >
                            <div style={{boxSizing:"border-box", marginBottom: 20, position:"relative"}} >
                                <div style={{backgroundColor:"white", opacity:0.5, position:"absolute", left:0,top:0,width:"100%",height:"100%",zIndex:-1}} >
                                    
                                </div>
                                <div style={{color:"black", cursor:"pointer", display:"flex", flexDirection:"row", justifyContent:"space-around",
                                    fontSize:17,marginBottom:50,  }} >
                                    <span onClick={()=>{setActiveTrait('Outfits'); setActiveTraitImageList(outfits) }} style={stylesCreator('Outfits')} >Outfits</span>
                                    <span onClick={()=>{setActiveTrait('Caps'); setActiveTraitImageList(caps)}} style={stylesCreator('Caps')} >Caps</span>
                                    <span onClick={()=>{setActiveTrait('Elements'); setActiveTraitImageList(elements)}} style={stylesCreator('Elements')} >Elements</span>

                                </div>
                                <div id="trait-wrapper" >
                                    {
                                        activeTraitImageList.map((element,index)=>{
                                            return <MarketItem element={element} key={index} onClickCallback={handleSingleTraitClick} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        isMobile ? null :
                        <div style={{width:"100%", maxWidth:900, height:120, display:"flex", flexDirection:"row", overflowX:"auto", 
                            paddingBottom:10, boxSizing:"border-box", }} >
                                {
                                    deerNftsByOwner.map((element,index)=>{
                                        return <img src={element.nftImageUri} alt="img" key={index} style={{height:"100%", width:"auto", cursor:"pointer", marginRight:10}} 
                                        onClick={()=>{handleItemClick(element)}} />
                                    })
                                }
                        </div>
                    }


                </div>
            }



        </div>
    )
}


export default TraitMarketInner;

/*

*/