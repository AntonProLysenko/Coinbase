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
  const topSixSymbols=["BTC","ETH","USDT","XRP","USDC"]

  // let homePageCoinData={
  //   topHomepageCoins:[],
  //   topGainers:[],
  //   lastAdded:{}
  // }
    try{
      let topSixCoins = await axios.get(`${BASIC_URL}/api/topSix`,{ headers: {top:topSixSymbols}})
      // homePageCoinData.topHomepageCoins=topSixCoins.data


      let topGainers = await axios.get(`${BASIC_URL}/api/topgainers`)  
        // topGainers.data.forEach((coin:never)=>{
        //   homePageCoinData.topGainers.push(coin)
        // })

      let coinbase = await axios.get(`${BASIC_URL}/api/new`)
      // homePageCoinData.lastAdded=coinbase.data.recentlyAddedAssets[0]
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
