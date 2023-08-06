import {useState,useRef, useEffect} from 'react';
import {Route, Routes} from "react-router-dom"

import './styles/App.scss';

import Header from "./components/Header"

import HomePage from "./pages/HomePage"
import SignUpPage from './pages/SignUpPage';


function App() {

  const homePageCheckr = useRef<HTMLDivElement>(null)
  const headerCheckr = useRef<HTMLDivElement>(null)

  let[slidingHeader, setSlidingHeader] = useState(false)

  useEffect(()=>{
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
      <Header slidingHeader={slidingHeader} headerCheckr={headerCheckr} />
      <Routes>
        {/* send email on first Wrapper to sign up page  */}
        <Route path="/" element = {<HomePage slidingHeader={slidingHeader} homePageCheckr={homePageCheckr}/>}/>
        <Route path="/signup" element={<SignUpPage/>}/> 
      </Routes>
     
    </div>
  );
}

export default App;
