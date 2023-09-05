import {useState,useRef, useEffect} from 'react';
import {Route, Routes} from "react-router-dom"
import axios from 'axios'

import './styles/App.scss';

import Header from "./components/Header"

import HomePage from "./pages/HomePage"
import SignUpPage from './pages/SignUpPage';


const BASIC_URL = process.env.REACT_APP_BASIC_URL


function App() {
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const homePageCheckr = useRef<HTMLDivElement>(null)
  const headerCheckr = useRef<HTMLDivElement>(null)

  let[slidingHeader, setSlidingHeader] = useState(false)
  let [isMobileActive,setMobileActive] = useState(false)
  let [homepageData, setHomepageData] = useState({
    topHomepageCoins:{},
    topGainers:{},
    lastAdded:{}
  })

  const handleResize=()=>{
    setWindowWidth(window.innerWidth)
  }

    

 const getHomepageCoinData = async()=>{  
  const topSixSymbols=["BTC","ETH2","ETH","USDT","XRP","USDC"]

  // let homePageCoinData={
  //   topHomepageCoins:[],
  //   topGainers:[],
  //   lastAdded:{}
  // }
    try{      
      let rightImage:any
      
      let getRightImage = (object:any, value:any) =>{
        object.forEach((i:any)=>{
          if(Object.values(i.node).includes(value)){
             rightImage=i.node.imageUrl

            //  console.log(rightImage);
             
          }
        })
      }
      let topSixCoins = await axios.get(`${BASIC_URL}/api/topSix`,{ headers: {top:topSixSymbols}})
      let topGainers = await axios.get(`${BASIC_URL}/api/topgainers`)  
      let coinbase = await axios.get(`${BASIC_URL}/api/new`)

      Object.keys(topSixCoins.data).forEach((coin)=>{
        getRightImage(coinbase.data.genericSearchAssets.edges, coin)

         
        //  console.log('topSixCoins.data[coin]', topSixCoins.data[coin]);

         if(coin=="ETH2"){
           topSixCoins.data[coin].IMAGEURL="https://dynamic-assets.coinbase.com/9f3242d7cd65e806cc3a12b3d5c2ba3a6a1140dee43f7d1eafaad8747855065aff50fe2bda4d897076cbdada8b9b971015cb2d19c04e67b20a8145d506283287/asset_icons/4e321a458d36c0c6467b346f85e88caddde59fcc0f03444e374de32cc3def4d6.png"
          }else{
            topSixCoins.data[coin].IMAGEURL=rightImage
          }
      })

      setHomepageData({
        topHomepageCoins:topSixCoins.data,
        topGainers:topGainers.data,
        lastAdded:coinbase.data.recentlyAddedAssets[0]
      })
    }catch(e){
        console.error(e)
    }
  }
  useEffect(()=>{
    window.addEventListener("resize", handleResize)
    const headerObserver = new IntersectionObserver((entries)=>{
      const header = entries[0]
      if (!header.isIntersecting)setSlidingHeader(true)
    })
    const homePageObserver = new IntersectionObserver((entries)=>{
          const homepage = entries[0]
            if(homepage.isIntersecting)setSlidingHeader(false)
    })
    if (headerCheckr.current)headerObserver.observe(headerCheckr.current)
    if (homePageCheckr.current)homePageObserver.observe(homePageCheckr.current)

    getHomepageCoinData()
  },[])


  return (
    <>
    <div className="App">
      <Header slidingHeader={slidingHeader} headerCheckr={headerCheckr} isMobileActive={isMobileActive} setMobileActive={setMobileActive} />
        

      <Routes>
        {/* send email on first Wrapper to sign up page  */}
        <Route path="/" element = {<HomePage homepageData={homepageData} windowWidth={windowWidth} slidingHeader={slidingHeader} isMobileActive={isMobileActive} setMobileActive={setMobileActive}  homePageCheckr={homePageCheckr}/>}/>
        <Route path="/signup" element={<SignUpPage/>}/> 
      </Routes>
     
    </div>
    </>
  )
}

export default App;
