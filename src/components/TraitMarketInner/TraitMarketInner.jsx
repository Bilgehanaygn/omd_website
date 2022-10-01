import './traitmarketinner.css';
import naked1 from '../../assets/traits/naked1.png';
import naked2 from '../../assets/traits/naked2.png';
import { useEffect, useState } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {Transaction } from '@solana/web3.js';
import axios from 'axios';


import GalacticOutfit from '../../assets/traits/Galactic.png';
import EastOutfit from '../../assets/traits/East.png';
import AstronautOutfit from '../../assets/traits/Astronaut.png';
import HolidayOutfit from '../../assets/traits/Holiday.png';
import SuitOutfit from '../../assets/traits/Suit.png';
import WarriorOutfit from '../../assets/traits/Warrior.png';
import ShirtOutfit from '../../assets/traits/Shirt.png';
import HoodieOutfit from '../../assets/traits/Hoodie.png';
import PrisonerOutfit from '../../assets/traits/Prisoner.png';

import HolidayCap from '../../assets/traits/HolidayCap.png';
import Angel from '../../assets/traits/Angel.png';
import Ninja from '../../assets/traits/Ninja.png';
import Robo from '../../assets/traits/Robo.png';
import InfectedCap from '../../assets/traits/InfectedCap.png';
import JuicerCap from '../../assets/traits/Juicer.png';

import LightningEffect from '../../assets/traits/Lightning.png';
import FireEffect from '../../assets/traits/Fire.png';
import NoneEffect1 from '../../assets/traits/NoneElement1.png';
import NoneEffect2 from '../../assets/traits/NoneElement2.png';



const MarketItem = ({element, onClickCallback}) => {

    return (
        <div style={{fontWeight:500, cursor:"pointer"}} onClick={()=>{onClickCallback(element.image)}} >
            <img src={element.image} alt="img" style={{height:150, width:"auto"}} />
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
    const [gangNfts, setGangNfts] = useState([]);
    const {publicKey, signTransaction} = useWallet();
    const {connection} = useConnection();
    const [selectedBaseCharachter, setSelectedBaseCharacter] = useState(null);
    const [activeTrait, setActiveTrait] = useState('Outfits');
    const outfits = [
        {image: GalacticOutfit, price:500, name: 'Galactic'}, 
        {image: EastOutfit, price:250, name: 'Eastern' }, 
        {image: AstronautOutfit, price: 500, name: 'Astro' }, 
        {image: HolidayOutfit, price: 300, name: 'Holly' }, 
        {image: SuitOutfit, price: 500, name: 'Suit' }, 
        {image: WarriorOutfit, price: 700, name: 'Warrior' }, 
        {image: ShirtOutfit, price: 300, name:'Shirt'}, 
        {image: HoodieOutfit, price: 400, name: 'Hoodie'}
    ];
    const caps = [
        {image: HolidayCap, price: 100,name:'Holiday Cap'}, 
        {image: Angel, price: 100, name:'Angel'}, 
        {image: Ninja, price: 150, name: 'Ninja'}, 
        {image: Robo, price: 250, name: 'Robo'}, 
        {image: InfectedCap, price: 250, name: 'Infected'}, 
        {image: JuicerCap, price: 150, name: 'Juicer Cap'}
    ];
    const elements = [
        {image: LightningEffect, price: 50, name:'Lightning'}, 
        {image: FireEffect, price: 50, name:'Fire'}, 
        {image: NoneEffect1, price: 0, name: '.'}, 
        {image: NoneEffect2, price: 0, name: '.'}, 
        {image: NoneEffect2, price: 0, name:'.'},
    ];
    const [activeTraitImageList, setActiveTraitImageList] = useState(outfits);
    const [activeOutfit, setActiveOutfit] = useState(NoneEffect1);
    const [activeCap, setActiveCap] = useState(NoneEffect1);
    const [activeElement, setActiveElement] = useState(NoneEffect1);
    
    useEffect(() => {
        //query for nfts
        return;
        if(!publicKey){
            return;
        }
        setGangNfts([
            'https://nftstorage.link/ipfs/bafybeig5fgy53dttevrpug5kowiulhl472tdyacm3jn7l4g5x7ofuvjtuu/1.png',
            'https://nftstorage.link/ipfs/bafybeig5fgy53dttevrpug5kowiulhl472tdyacm3jn7l4g5x7ofuvjtuu/0.png'
        ]);
    }, [publicKey])

    const handleItemClick = function(element){
        setSelectedBaseCharacter(element);
    }

    const stylesCreator = (traitHeader) => {
        return {
            borderBottom: (activeTrait === traitHeader ? "2px solid green" : null),
            fontSize:"inherit"
        }
    }

    const handleSingleTraitClick = (elementImage) => {
        if(activeTrait==='Outfits'){
            setActiveOutfit(elementImage);
        }
        else if(activeTrait==='Caps'){
            setActiveCap(elementImage);
        }
        else if(activeTrait==="Elements"){
            setActiveElement(elementImage);
        }
        
    }

    const handleTranscendClick = async () => {
        //send request if selected gang 0 or 1
        //create transaction from response
        //await approval oftransaction

        const res = await axios.get('http://localhost:5000/update?id=0');

        const transaction = Transaction.from(res.data.tx.data);
        console.log(transaction);
        const txSigned = await signTransaction(transaction);
        
        const signature = await connection.sendRawTransaction(txSigned.serialize());
        console.log(signature);

    }
    

    return (
        <div id="traitmarketinnermain" >
            <div id="traitmarketinnerbackgroundwrapper"></div>
            <div style={{width:"100%", marginBottom:50, display:"flex", flexDirection:"row", justifyContent:"space-between", paddingTop:10, paddingRight:20, boxSizing:"border-box"}} >
                <span style={{width:"200px"}} ></span>
                <span style={{color:"white", fontSize:30}} >Trait Market</span>
                <WalletMultiButton/>
            </div>
            <div style={{display:"flex", width:"100%", flexDirection:"row", justifyContent:"space-around", alignItems:"center"}} >
                <div >
                    <div style={{width:300, height:350, marginBottom:50 }} >
                        {
                            selectedBaseCharachter ?
                            <div id="imageOverlayWrapper" style={{position:"relative"}} >
                                <img src={selectedBaseCharachter} alt="img" style={{width:"100%", height:"auto", position:"sticky",
                                top:0, left:0, zIndex:1}} />
                                <img src={activeOutfit} alt="img" style={{width:"100%", height:"auto", position:"absolute", top:0,left:0, zIndex:2}} />
                                <img src={activeCap} alt="img" style={{width:"100%", height:"auto", position:"absolute", top:0,left:0, zIndex:2}} />
                                <img src={activeElement} alt="img" style={{width:"100%", height:"auto", position:"absolute", top:0,left:0, zIndex:2}} />

                            </div>
                            :
                            null
                        }
                        <div style={{color:"white", textAlign:"center", fontSize:16}} >
                            <span style={{color:"inherit", fontSize:"inherit"}} >
                                {
                                    selectedBaseCharachter ? 'Degen Ganger' : ''
                                }
                            </span>
                            <div style={{fontSize:"inherit"}} >
                                {
                                    !selectedBaseCharachter ? '' : 
                                    selectedBaseCharachter.slice(-5)[0] === '1' ? "#0": "#1"
                                }
                            </div>       
                        </div>
                    </div>
                    <div style={{width:"100%", height:100}} >
                        {
                            gangNfts.map((element,index)=>{
                                return <img src={element} alt="img" key={index} style={{height:"100%", width:"auto", cursor:"pointer", marginRight:10}} 
                                onClick={()=>{handleItemClick(element)}} />
                            })
                        }
                    </div>
                </div>
                <div>
                    <div style={{boxSizing:"border-box", marginBottom: 50, position:"relative"}} >
                        <div style={{backgroundColor:"white", opacity:0.5, position:"absolute", left:0,top:0,width:"100%",height:"100%",zIndex:-1}} >
                            
                        </div>
                        <div style={{color:"black", cursor:"pointer", display:"flex", flexDirection:"row", justifyContent:"space-around",
                            fontSize:17,marginBottom:50,  }} >
                            <span onClick={()=>{setActiveTrait('Outfits'); setActiveTraitImageList(outfits) }} style={stylesCreator('Outfits')} >Outfits</span>
                            <span onClick={()=>{setActiveTrait('Caps'); setActiveTraitImageList(caps)}} style={stylesCreator('Caps')} >Caps</span>
                            <span onClick={()=>{setActiveTrait('Elements'); setActiveTraitImageList(elements)}} style={stylesCreator('Elements')} >Elements</span>
                            <span style={stylesCreator('Backgrounds')} >Backgrounds</span>

                        </div>
                        <div style={{display:"grid", width:"100%", gridTemplateColumns:"auto auto auto auto", columnGap:20, rowGap:15 }} >
                            {
                                activeTraitImageList.map((element,index)=>{
                                    return <MarketItem element={element} key={index} onClickCallback={handleSingleTraitClick} />
                                })
                            }
                        </div>
                    </div>
                    <div style={{height:100, width:"100%", textAlign:"center"}} >
                        <button className="bn29" onClick={handleTranscendClick} >Transcend</button>
                    </div>
                </div>
            </div>


        </div>
    )
}


export default TraitMarketInner;