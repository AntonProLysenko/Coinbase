import {useState,useRef, useEffect} from 'react';
import {Route, Routes} from "react-router-dom"

import './styles/App.scss';

import Header from "./components/Header"

import HomePage from "./pages/HomePage"
import SignUpPage from './pages/SignUpPage';

const KEY = process.env.REACT_APP_KEY;
const BASIC_URL = process.env.REACT_APP_BASIC_URL


function App() {
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const homePageCheckr = useRef<HTMLDivElement>(null)
  const headerCheckr = useRef<HTMLDivElement>(null)

  let[slidingHeader, setSlidingHeader] = useState(false)
  let [isMobileActive,setMobileActive] = useState(false)

  const handleResize=()=>{
    setWindowWidth(window.innerWidth)
  }


 
fetch(`${BASIC_URL}/exchangerate/BTC/USD`, {
  headers: {
    "X-CoinAPI-Key": `${KEY}` // Replace with your API key
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));



 const getCoin = async()=>{
        try{
            const response = await fetch(`${BASIC_URL}/exchangerate/BTC/USD?apikey=${KEY}`)
            const data = await response.json();
            
            console.log("Personal",data);

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
  },[])


  return (
    <div className="App">
      <Header slidingHeader={slidingHeader} headerCheckr={headerCheckr} isMobileActive={isMobileActive} setMobileActive={setMobileActive} />
      <button onClick={getCoin}>Fetch</button>
      <Routes>
        {/* send email on first Wrapper to sign up page  */}
        <Route path="/" element = {<HomePage windowWidth={windowWidth} slidingHeader={slidingHeader} isMobileActive={isMobileActive} setMobileActive={setMobileActive}  homePageCheckr={homePageCheckr}/>}/>
        <Route path="/signup" element={<SignUpPage/>}/> 
      </Routes>
     
    </div>
  );
}

export default App;
