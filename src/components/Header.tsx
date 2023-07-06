import {Link} from "react-router-dom"
import { useState } from "react";

export default function Header() {


let [isActive,setisActive] = useState(false)

let[exploreActive, setExploreActive] = useState(false)
let[learnActive, setLearnActive] = useState(false)
let[individualsActive, setIndividualsActive] = useState(false)
let[businessesActive, setBusinessesActive] = useState(false)
let[developersActive, setDevelopersActive] = useState(false)
let[companyActive, setCompanyActive] = useState(false)




const showHide=() => {
  setisActive(!isActive);
};

const showSubMenu=(evt:any)=>{
  switch(evt.title){
    case "Explore":
      setExploreActive(!exploreActive)
      setLearnActive(false)
      setIndividualsActive(false)
      setBusinessesActive(false)
      setDevelopersActive(false)
      setCompanyActive(false)
      break;
    case "Learn":
      setLearnActive(!learnActive)
      setExploreActive(false)
      setIndividualsActive(false)
      setBusinessesActive(false)
      setDevelopersActive(false)
      setCompanyActive(false)
      break;
    case "Individuals":
      setIndividualsActive(!individualsActive)
      setExploreActive(false)
      setBusinessesActive(false)
      setDevelopersActive(false)
      setCompanyActive(false)
      setLearnActive(false)
      break;
    case "Businesses":
      setBusinessesActive(!businessesActive)
      setExploreActive(false)
      setIndividualsActive(false)
      setDevelopersActive(false)
      setCompanyActive(false)
      setLearnActive(false)
      break;
    case "Developers":
      setDevelopersActive(!developersActive)
      setExploreActive(false)
      setIndividualsActive(false)
      setBusinessesActive(false)
      setCompanyActive(false)
      setLearnActive(false)
      break;
    case "Company":
      setCompanyActive(!companyActive)
      setExploreActive(false)
      setIndividualsActive(false)
      setBusinessesActive(false)
      setDevelopersActive(false)
      setLearnActive(false)
      break;
  }


  // if (evt.title == "Explore"){
    
  // }else if(evt.title == "Learn"){
    
  // }
  let click = evt.title
  console.log(click);
}

  return (
    <>
    <header className='mainNav_wrapper'>
        <div className='bannerWrapper'>
            <div className='banner'>
                <Link className=" styledLink banerStyledLink" to = "/signup" >
                    <span>Get up to $200 for getting started</span> <sup>1</sup> <span> →</span>
                </Link>
            </div>
        </div>

        <div className="mainNav">
          <div className="logoWrapper">
              <Link className="styledLink" to = "/" >
                <img src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg" height="20" width="112" alt="Coinbase Logo" className="logo"></img>
              </Link>
          </div>

          <nav className="centerWrapper">
            {/* <div className="centerNavItems"> */}
              <Link className="styledLink navLinkItem" title="Explore" aria-expanded="false" to="/explore">
                <div className="">
                  <span className="textLabel">Explore</span>
                </div>
              </Link>

              <Link className="styledLink navLinkItem" title="Web3" aria-expanded="false" to="/web3">
                <div className="">
                  <span className="textLabel">Web3</span>
                </div>
              </Link>

                <Link className="styledLink navLinkItem" title="Learn" aria-expanded="false" to="/learn">
                <div className="">
                  <span className="textLabel">Learn</span>
                </div>
              </Link>

              <div className=" styledLink navLinkItem  defaultCursor">
                <span className="textLabel">Individuals</span>
              </div>
              <div className="styledLink navLinkItem defaultCursor">
                <span className="textLabel">Businesses</span>
              </div>
              <div className="styledLink navLinkItem defaultCursor">
                <span className="textLabel">Developers</span>
              </div>
                <div className="styledLink navLinkItem defaultCursor">
                <span className="textLabel">Company</span>
              </div>
            {/* </div> */}
          </nav>

          <div className="buttonWrapper">
                <Link to="/login" className="styledLink navLinkItem">
                    <span className="textLabel">Sign in</span>
                </Link>

               <Link className="styledLink" to = "/signup" >
                    <button className="interactableButton">Sign up</button>
                </Link>
          </div>

           <div className="mobileMenuToggleWrapper" onClick={showHide}>
              <div className="mobileMenuToggle">
                  <span className="bar"></span>
                  {/* <span className="bar"></span> */}
                  {/* <span className="bar"></span> */}
                </div>
            </div>  
        </div>


        <div className={isActive?"mobileNavContainer active":"mobileNavContainer"}>
          
          <nav className="mobileCenterWrapper">
              {/* <div className="centerNavItems"> */}
                <div className="styledLink navLinkItem mobileLinkItem" title="Explore" aria-expanded="false" onClick={evt=>showSubMenu(evt.target)}>
                  <div className="mobileLinkItem" title="Explore">
                    <span className="textLabel">Explore</span>
                  </div>
                  <div className="mobileMenuIconWrapper" title="Explore">
                    <svg  width="12" height="8" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.007 8L11.9 2.107 9.793 0 6.007 3.786 2.221 0 .114 2.107 6.007 8z" fill="#050F19"></path>
                    </svg>
                  </div>
                </div>
                <div className={exploreActive?"mobileMenuSubLinkWrapper active": "mobileMenuSubLinkWrapper"} >
                  <div className="mobileMenuSubLink">
                      <Link className="styledLink  mobileLinkItem mobileSubLinkItem" to="/explore">
                        <p className="mobileSubLinkTextLabel">Crypto</p>
                      </Link>
                  </div>

                  <div className="mobileMenuSubLink">
                    <a href="https://profile.coinbase.com/" className="styledLink  mobileLinkItem mobileSubLinkItem">
                        <p className="mobileSubLinkTextLabel">ENS Profiles</p>
                    </a>
                  </div>
                </div>
                

                <Link className="styledLink navLinkItem mobileLinkItem" title="Web3" aria-expanded="false" to="/web3">
                  <div className="mobileLinkItem">
                    <span className="textLabel">Web3</span>
                  </div>
                </Link>

                  <div className="styledLink navLinkItem mobileLinkItem" title="Learn" aria-expanded="false" onClick={evt=>showSubMenu(evt.target)}>
                  <div className="mobileLinkItem">
                    <span className="textLabel">Learn</span>
                  </div>
                  <div className="mobileMenuIconWrapper" title="Learn">
                    <svg width="12" height="8" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.007 8L11.9 2.107 9.793 0 6.007 3.786 2.221 0 .114 2.107 6.007 8z" fill="#050F19"></path>
                    </svg>
                  </div>
                </div>
                <div className={learnActive?"mobileMenuSubLinkWrapper active":"mobileMenuSubLinkWrapper"}>
                  {/* <div className="mobileMenuSubLink">
                      <Link className="styledLink  mobileLinkItem mobileSubLinkItem" to="/learn/tips-and-tutorials">
                        <p className="mobileSubLinkTextLabel">Tips & Tutorials</p>
                      </Link>
                  </div>

                  <div className="mobileMenuSublink">
                    <Link to="/learn/crypto-basics" className="styledLink  mobileLinkItem mobileSubLinkItem">
                        <p className="mobileSubLinkTextLabel">Crypto basics</p>
                    </Link>
                  </div>

                  <div className="mobileMenuSubLink">
                    <Link to="/learn/crypto-basics" className="styledLink  mobileLinkItem mobileSubLinkItem">
                        <p className="mobileSubLinkTextLabel">Update the system</p>
                    </Link>
                  </div> */}
                   <div className="mobileMenuSubLink">
                    <Link to="/learn/tips-and-tutorials" className="styledLink  mobileLinkItem mobileSubLinkItem">
                        <p className="mobileSubLinkTextLabel">Tips & Tutorials</p>
                    </Link>
                  </div>
                   <div className="mobileMenuSubLink">
                    <Link to="/learn/crypto-basics" className="styledLink  mobileLinkItem mobileSubLinkItem">
                        <p className="mobileSubLinkTextLabel">Crypto basis</p>
                    </Link>
                  </div>

                  <div className="mobileMenuSubLink">
                    <Link to="/updatethesystem" className="styledLink  mobileLinkItem mobileSubLinkItem">
                        <p className="mobileSubLinkTextLabel">Update the system</p>
                    </Link>
                  </div>

                  <div className="mobileMenuSubLink">
                    <Link to="/learn/crypto-basics" className="styledLink  mobileLinkItem mobileSubLinkItem">
                        <p className="mobileSubLinkTextLabel">Web3</p>
                    </Link>
                  </div>

                  <div className="mobileMenuSubLink">
                    <Link to="/learn/crypto-basics" className="styledLink  mobileLinkItem mobileSubLinkItem">
                        <p className="mobileSubLinkTextLabel">Market updates</p>
                    </Link>
                  </div>

                  <div className="mobileMenuSubLink">
                    <Link to="/learn/crypto-basics" className="styledLink  mobileLinkItem mobileSubLinkItem">
                        <p className="mobileSubLinkTextLabel">Newsletter</p>
                    </Link>
                  </div>

                  <div className="mobileMenuSubLink">
                    <Link to="/learn/crypto-basics" className="styledLink  mobileLinkItem mobileSubLinkItem">
                        <p className="mobileSubLinkTextLabel">Crypto Policy</p>
                    </Link>
                  </div>

                  <div className="mobileMenuSubLink">
                    <Link to="/learn/crypto-basics" className="styledLink  mobileLinkItem mobileSubLinkItem">
                        <p className="mobileSubLinkTextLabel">See all articles</p>
                    </Link>
                  </div>
                </div>

                <div className="styledLink navLinkItem defaultCursor mobileLinkItem" title="Individuals" onClick={evt=>showSubMenu(evt.target)}>
                  <span className="textLabel">Individuals</span>
                  <div className= "mobileMenuIconWrapper">
                    <svg width="12" height="8" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.007 8L11.9 2.107 9.793 0 6.007 3.786 2.221 0 .114 2.107 6.007 8z" fill="#050F19"></path>
                    </svg>
                  </div>
                </div>
                  <div className={individualsActive?"mobileMenuSubLinkWrapper active":"mobileMenuSubLinkWrapper"}>
                    <div className="mobileMenuSubLink">
                      <Link to="/signup" className="styledLink  mobileLinkItem mobileSubLinkItem">
                          <p className="mobileSubLinkTextLabel">Buy and sell</p>
                      </Link>
                    </div>

                    <div className="mobileMenuSubLink">
                      <Link to="/advanced-trade" className="styledLink  mobileLinkItem mobileSubLinkItem">
                          <p className="mobileSubLinkTextLabel">Advanced</p>
                      </Link>
                    </div>

                    <div className="mobileMenuSubLink">
                      <Link to="/wallet" className="styledLink  mobileLinkItem mobileSubLinkItem">
                          <p className="mobileSubLinkTextLabel">Wallet</p>
                      </Link>
                    </div>

                    <div className="mobileMenuSubLink">
                      <Link to="/earn" className="styledLink  mobileLinkItem mobileSubLinkItem">
                          <p className="mobileSubLinkTextLabel">Earn</p>
                      </Link>
                    </div>

                    <div className="mobileMenuSubLink">
                      <Link to="/card" className="styledLink  mobileLinkItem mobileSubLinkItem">
                          <p className="mobileSubLinkTextLabel">Card</p>
                      </Link>
                    </div>

                    <div className="mobileMenuSubLink">
                      <Link to="/private-client" className="styledLink  mobileLinkItem mobileSubLinkItem">
                          <p className="mobileSubLinkTextLabel">Private Client</p>
                      </Link>
                    </div>

                    <div className="mobileMenuSubLink">
                      <Link to="/borrow" className="styledLink  mobileLinkItem mobileSubLinkItem">
                          <p className="mobileSubLinkTextLabel">Borrow</p>
                      </Link>
                    </div>

                    <div className="mobileMenuSubLink">
                      <Link to="/rewards" className="styledLink  mobileLinkItem mobileSubLinkItem">
                          <p className="mobileSubLinkTextLabel">Rewards</p>
                      </Link>
                    </div>

                    <div className="mobileMenuSubLink">
                      <Link to="/learning-rewards" className="styledLink  mobileLinkItem mobileSubLinkItem">
                          <p className="mobileSubLinkTextLabel">Learning rewards</p>
                      </Link>
                    </div>

                    <div className="mobileMenuSubLink">
                      <a href="https://nft.coinbase.com/" className="styledLink  mobileLinkItem mobileSubLinkItem">
                          <p className="mobileSubLinkTextLabel">NFT</p>
                      </a>
                    </div>

                    <div className="mobileMenuSubLink">
                      <Link to="/one" className="styledLink  mobileLinkItem mobileSubLinkItem">
                          <p className="mobileSubLinkTextLabel">Coinbase One</p>
                      </Link>
                    </div>
                </div>

                
                <div className="styledLink navLinkItem defaultCursor mobileLinkItem" title = "Businesses" onClick={evt=>showSubMenu(evt.target)}>
                  <span className="textLabel">Businesses</span>
                  <div className="mobileMenuIconWrapper">
                    <svg width="12" height="8" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.007 8L11.9 2.107 9.793 0 6.007 3.786 2.221 0 .114 2.107 6.007 8z" fill="#050F19"></path>
                    </svg>
                  </div>
                </div>
                <div className={businessesActive?"mobileMenuSubLinkWrapper active":"mobileMenuSubLinkWrapper"}>
                  <div className="mobileMenuSubLink">
                      <Link className="styledLink  mobileLinkItem mobileSubLinkItem" to="/institutional">
                        <p className="mobileSubLinkTextLabel">Institutional</p>
                      </Link>
                  </div>

                  <div className="mobileMenuSubLink">
                      <Link className="styledLink  mobileLinkItem mobileSubLinkItem" to="/prime">
                        <p className="mobileSubLinkTextLabel">Prime</p>
                      </Link>
                  </div>
                     <div className="mobileMenuSubLink">
                      <Link className="styledLink  mobileLinkItem mobileSubLinkItem" to="/commerce">
                        <p className="mobileSubLinkTextLabel">Commerce</p>
                      </Link>
                  </div>

                  <div className="mobileMenuSubLink">
                      <Link className="styledLink  mobileLinkItem mobileSubLinkItem" to="/assethub">
                        <p className="mobileSubLinkTextLabel">Asset Hub</p>
                      </Link>
                  </div>
                     <div className="mobileMenuSubLink">
                      <Link className="styledLink  mobileLinkItem mobileSubLinkItem" to="/exchange">
                        <p className="mobileSubLinkTextLabel">Exchange</p>
                      </Link>
                  </div>

                  <div className="mobileMenuSubLink">
                      <Link className="styledLink  mobileLinkItem mobileSubLinkItem" to="/derivatives">
                        <p className="mobileSubLinkTextLabel">Derivatives Exchange</p>
                      </Link>
                  </div>
                </div>

                <div className="styledLink navLinkItem defaultCursor mobileLinkItem" title = "Developers" onClick={evt=>showSubMenu(evt.target)}>
                  <span className="textLabel">Developers</span>
                  <div className="mobileMenuIconWrapper">
                    <svg width="12" height="8" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.007 8L11.9 2.107 9.793 0 6.007 3.786 2.221 0 .114 2.107 6.007 8z" fill="#050F19"></path>
                    </svg>
                  </div>
                </div>
                <div className={ developersActive?"mobileMenuSubLinkWrapper active":"mobileMenuSubLinkWrapper"}>
                  <div className="mobileMenuSubLink">
                      <Link className="styledLink  mobileLinkItem mobileSubLinkItem" to="/cloud">
                        <p className="mobileSubLinkTextLabel">Cloud</p>
                      </Link>
                  </div>
                  <div className="mobileMenuSubLink">
                      <Link className="styledLink  mobileLinkItem mobileSubLinkItem" to="/pay-sdk">
                        <p className="mobileSubLinkTextLabel">Pay SDK</p>
                      </Link>
                  </div>
                  <div className="mobileMenuSubLink">
                      <Link className="styledLink  mobileLinkItem mobileSubLinkItem" to="/waas">
                        <p className="mobileSubLinkTextLabel">Wallet as a Service</p>
                      </Link>
                  </div>
                  <div className="mobileMenuSubLink">
                      <Link className="styledLink  mobileLinkItem mobileSubLinkItem" to="/wallet-sdk">
                        <p className="mobileSubLinkTextLabel">Wallet SDK</p>
                      </Link>
                  </div>
                  <div className="mobileMenuSubLink">
                      <Link className="styledLink  mobileLinkItem mobileSubLinkItem" to="/cloud/products/commerce-api">
                        <p className="mobileSubLinkTextLabel">Commerce API</p>
                      </Link>
                  </div>
                  <div className="mobileMenuSubLink">
                      <Link className="styledLink  mobileLinkItem mobileSubLinkItem" to="/cloud/products/staking">
                        <p className="mobileSubLinkTextLabel">Delegate</p>
                      </Link>
                  </div>
                  <div className="mobileMenuSubLink">
                      <a className="styledLink  mobileLinkItem mobileSubLinkItem" href="https://base.org/">
                        <p className="mobileSubLinkTextLabel">Base</p>
                      </a>
                  </div>
                  <div className="mobileMenuSubLink">
                      <Link className="styledLink  mobileLinkItem mobileSubLinkItem" to="/faucets">
                        <p className="mobileSubLinkTextLabel">Testnet Faucets</p>
                      </Link>
                  </div>
                </div>
                <div className="styledLink navLinkItem defaultCursor mobileLinkItem" title="Company" onClick={evt=>showSubMenu(evt.target)}>
                  <span className="textLabel">Company</span>
                  <div className="mobileMenuIconWrapper">
                    <svg width="12" height="8" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.007 8L11.9 2.107 9.793 0 6.007 3.786 2.221 0 .114 2.107 6.007 8z" fill="#050F19"></path>
                    </svg>
                  </div>
                </div>
                 <div className={companyActive?"mobileMenuSubLinkWrapper active":"mobileMenuSubLinkWrapper"}>
                  <div className="mobileMenuSubLink">
                      <Link className="styledLink  mobileLinkItem mobileSubLinkItem" to="/about">
                        <p className="mobileSubLinkTextLabel">About</p>
                      </Link>
                  </div>
                   <div className="mobileMenuSubLink">
                      <Link className="styledLink  mobileLinkItem mobileSubLinkItem" to="/careers">
                        <p className="mobileSubLinkTextLabel">Careers</p>
                      </Link>
                  </div>
                   <div className="mobileMenuSubLink">
                      <Link className="styledLink  mobileLinkItem mobileSubLinkItem" to="/affiliates">
                        <p className="mobileSubLinkTextLabel">Affiliates</p>
                      </Link>
                  </div>
                   <div className="mobileMenuSubLink">
                      <Link className="styledLink  mobileLinkItem mobileSubLinkItem" to="/support">
                        <p className="mobileSubLinkTextLabel">Support</p>
                      </Link>
                  </div>
                   <div className="mobileMenuSubLink">
                      <Link className="styledLink  mobileLinkItem mobileSubLinkItem" to="/blog">
                        <p className="mobileSubLinkTextLabel">Blog</p>
                      </Link>
                  </div>
                   <div className="mobileMenuSubLink">
                      <Link className="styledLink  mobileLinkItem mobileSubLinkItem" to="/security">
                        <p className="mobileSubLinkTextLabel">Security</p>
                      </Link>
                  </div>
                </div>

                <div className="mobileButtonWrapper">
                  <Link className="styledLink" to='/signup'>
                    <button className="mobileInteractableButton">Sign up</button>
                  </Link>
                  <Link className="styledLink" to ="/login">
                    <button className="mobileInteractableButton mobileSignInInteractableButton">Sign in</button>
                  </Link>
                </div>
              {/* </div> */}
          </nav>
      </div>
       
    </header>
    
        </>
  )
}
