import {Link} from "react-router-dom"
import { useState, useRef,useEffect  } from "react";

// import{Props} from"./Types/propTypes"


 type Props = {
   //React declares type by itself in states if we are passing the default value
    slidingHeader:React.SetStateAction<boolean>//I took the type from the declaration on the usestate
    headerCheckr:React.RefObject<HTMLDivElement>
    
    isMobileActive:React.SetStateAction<boolean>
    setMobileActive:React.Dispatch<React.SetStateAction<boolean>>
}


export default function Header({slidingHeader, headerCheckr, isMobileActive,setMobileActive}:Props) {


// let [isMobileActive,setisMobileActive] = useState(false)

//submenus activation
let[exploreActive, setExploreActive] = useState(false)
let[web3Active, setWeb3Active] = useState(false)
let[learnActive, setLearnActive] = useState(false)
let[individualsActive, setIndividualsActive] = useState(false)
let[businessesActive, setBusinessesActive] = useState(false)
let[developersActive, setDevelopersActive] = useState(false)
let[companyActive, setCompanyActive] = useState(false)









const showHide=() => {
  setMobileActive(!isMobileActive);
};


const showSubMenu=(evt:any)=>{
  // evt.stopPropagation()
  switch(evt.title){
    case "Explore":
      setExploreActive(!exploreActive)
      setWeb3Active(false)
      setLearnActive(false)
      setIndividualsActive(false)
      setBusinessesActive(false)
      setDevelopersActive(false)
      setCompanyActive(false)
      break;
    case "Web3":
      setExploreActive(false)
      setWeb3Active(!web3Active)
      setLearnActive(false)
      setIndividualsActive(false)
      setBusinessesActive(false)
      setDevelopersActive(false)
      setCompanyActive(false)
      break;
    case "Learn":
      setLearnActive(!learnActive)
      setExploreActive(false)
      setWeb3Active(false)
      setIndividualsActive(false)
      setBusinessesActive(false)
      setDevelopersActive(false)
      setCompanyActive(false)
      break;
    case "Individuals":
      setIndividualsActive(!individualsActive)
      setExploreActive(false)
      setBusinessesActive(false)
      setWeb3Active(false)
      setDevelopersActive(false)
      setCompanyActive(false)
      setLearnActive(false)
      break;
    case "Businesses":
      setBusinessesActive(!businessesActive)
      setExploreActive(false)
      setWeb3Active(false)
      setIndividualsActive(false)
      setDevelopersActive(false)
      setCompanyActive(false)
      setLearnActive(false)
      break;
    case "Developers":
      setDevelopersActive(!developersActive)
      setExploreActive(false)
      setWeb3Active(false)
      setIndividualsActive(false)
      setBusinessesActive(false)
      setCompanyActive(false)
      setLearnActive(false)
      break;
    case "Company":
      setCompanyActive(!companyActive)
      setExploreActive(false)
      setWeb3Active(false)
      setIndividualsActive(false)
      setBusinessesActive(false)
      setDevelopersActive(false)
      setLearnActive(false)
      break;
    default:
      setExploreActive(false)
      setWeb3Active(false)
      setIndividualsActive(false)
      setBusinessesActive(false)
      setDevelopersActive(false)
      setLearnActive(false)
      setCompanyActive(false)
      break;
    // case "Web3":

  }
  // let click = evt.title
  // console.log(click);
}

  return (
    <>
    <div className={slidingHeader&&!isMobileActive?'headerUnderlay sliding':isMobileActive?'headerUnderlay':"headerUnderlay"}></div>
    <header className={ slidingHeader&&!isMobileActive?'mainNav_wrapper sliding':isMobileActive? "mainNav_wrapper notSliding":"mainNav_wrapper notSliding"} ref = {headerCheckr}>
        <div className='bannerWrapper'>
            <div className='banner'>
                <Link className=" styledLink banerStyledLink" to = "/signup" >
                    <span>Get up to $200 for getting started</span> <sup>1</sup> <span> →</span>
                </Link>
            </div>
        </div>


        <div className="mainNavContainer" onMouseLeave={evt=>showSubMenu(evt.target)}>
          <div className="mainNav"onMouseEnter={evt=>showSubMenu(evt.target)} >{/*Mouse Event for hiding sub menus */}
            <div className="logoWrapper" onMouseEnter={evt=>showSubMenu(evt.target)}>{/*Mouse Event for hiding sub menus */}
                <Link className="styledLink" style={{height:"20px"}} to = "/" >
                  <img src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg" height="20" width="112" alt="Coinbase Logo" className="logo"></img>
                </Link>
            </div>

            <nav className="centerWrapper">
              {/* <div className="centerNavItems"> */}

                <Link className={exploreActive?"styledLink navLinkItem  active":"styledLink navLinkItem "} title="Explore" aria-expanded="false" to="/explore" onMouseEnter={evt=>showSubMenu(evt.target)}>
                  <div className="mainNavItem" >
                    <span className="textLabel" title="Explore">Explore</span>
                  </div>
                </Link>
                <section className={exploreActive?"mainSubMenuContainer active":"mainSubMenuContainer"} title="Explore" onMouseLeave={evt=>showSubMenu(evt.target)}>
                  
                  <div className="SubMenuContainer_InnerWrapper">
                    <div className="dropdownIndividuals">
                      <div className="columnWrapper">

                        <Link to="/explore" title="Coinbase Explore - Explore the cryptoeconomy" className="dropdownLink">
                          <div className="dropdownIconWrapper">
                            <img src="https://images.ctfassets.net/c5bd0wqjc7v0/2jaq2lDZhtxo16FOlRvRbu/fce2cf12493d2b8146a09df10dedd901/chart-0.svg"  alt="two vertical bars and a horizontal bar forming a graph"></img>
                          </div>
                          <div className="dropdownTextWrapper">
                            <h4 >Crypto</h4>
                            <p>View crypto prices and charts</p>
                          </div>
                        </Link>

                        <Link to="https://profile.coinbase.com/" title="Coinbase ENS - Discorver ENS Profiles and CB.ID" className="dropdownLink">
                          <div className="dropdownIconWrapper">
                            <img src="https://images.ctfassets.net/c5bd0wqjc7v0/4oZULOcKHY1JHPxHf1b8EC/ef5c707eef45d2c4d86e20d9ab217edd/decentralizedIdentity-0.svg" alt="user avatar and a checkmark forming a verified identity"></img>
                          </div>
                          <div className="dropdownTextWrapper">
                            <h4> ENS Profiles</h4>
                            <p> Build your web3 presence today</p>
                          </div>
                        </Link>
                      </div>
                      
                    </div>
                  </div>

                </section>

                <Link className={web3Active?"styledLink navLinkItem active":"styledLink navLinkItem"} title="Web3" aria-expanded="false" to="/web3" onMouseEnter={evt=>showSubMenu(evt.target)} onMouseLeave={evt=>showSubMenu(evt.target)}>
                  <div className="" title="Web3">
                    <span className="textLabel" title="Web3">Web3</span>
                  </div>
                </Link>
                

                <Link className={learnActive?"styledLink navLinkItem active":"styledLink navLinkItem"} title="Learn" aria-expanded="false" to="/learn" onMouseEnter={evt=>showSubMenu(evt.target)}>
                  <div className="" title="Learn">
                    <span className="textLabel" title="Learn">Learn</span>
                  </div>
                </Link>
                 <section className={learnActive?"mainSubMenuContainer active": "mainSubMenuContainer"} onMouseLeave={evt=>showSubMenu(evt.target)}>
                    <div className="SubMenuContainer_InnerWrapper">
                      <div className="dropdownIndividuals">
                        <div className="columnWrapper">

                          <Link to="/learn/tips-and-tutorials" title="Tips & Tutorials" className="dropdownLink">
                            <span className="DropdownItemWrapper">
                              <svg className="DropdownArrow" width="8" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z" fill="#050F19"></path>
                              </svg>

                              <div className="DropdownItem">
                                <span className="DropdownText">Tips & Tutorials</span>
                              </div>
                            </span>
                          </Link>

                          <Link to="/learn/crypto-basics" title="Crypto basics" className="dropdownLink">
                              <span className="DropdownItemWrapper">
                              <svg className="DropdownArrow" width="8" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z" fill="#050F19"></path>
                              </svg>

                              <div className="DropdownItem">
                                <span className="DropdownText">Crypto basics</span>
                              </div>
                            </span>
                          </Link>

                          <Link to="/learn/updatethesystem" title="Update the System" className="dropdownLink">
                              <span className="DropdownItemWrapper">
                              <svg className="DropdownArrow" width="8" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z" fill="#050F19"></path>
                              </svg>

                              <div className="DropdownItem">
                                <span className="DropdownText">Update the System</span>
                              </div>
                            </span>
                          </Link>

                          <Link to="/wallet/learn-web3" title = "Web3" className="dropdownLink">
                              <span className="DropdownItemWrapper">
                              <svg className="DropdownArrow" width="8" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z" fill="#050F19"></path>
                              </svg>

                              <div className="DropdownItem">
                                <span className="DropdownText">Web3</span>
                              </div>
                            </span>
                          </Link>

                          <Link to="/learn/market-updates" title = "Market Updates" className="dropdownLink">
                              <span className="DropdownItemWrapper">
                              <svg className="DropdownArrow" width="8" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z" fill="#050F19"></path>
                              </svg>

                              <div className="DropdownItem">
                                <span className="DropdownText">Market Updates</span>
                              </div>
                            </span>
                          </Link>

                          <Link to="/bytes" title = "Newsletter" className="dropdownLink">
                              <span className="DropdownItemWrapper">
                              <svg className="DropdownArrow" width="8" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z" fill="#050F19"></path>
                              </svg>

                              <div className="DropdownItem">
                                <span className="DropdownText">Newsletter</span>
                              </div>
                            </span>
                          </Link>

                          <Link to="/public-policy" title="Crypto Policy" className="dropdownLink">
                              <span className="DropdownItemWrapper">
                              <svg className="DropdownArrow" width="8" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z" fill="#050F19"></path>
                              </svg>

                              <div className="DropdownItem">
                                <span className="DropdownText">Crypto Policy</span>
                              </div>
                            </span>
                          </Link>
                        </div>

                        <div className="dropdownDescriptionWrapper">
                          <h4 className="dropdownDescriptionHeadline">Crypto questions, answered</h4>
                          <p className="dropdownDescriptionBody">Guides and explainers for your crypto questions</p>
                          <Link to ="/learn" title="See all articles" className="dropdownDescriptionLink">
                            <h4>See all articles</h4>
                          </Link>
                        </div>
                      </div>
                    </div>
                </section>

                <div className={individualsActive?"styledLink navLinkItem active defaultCursor ":"styledLink navLinkItem  defaultCursor"} title="Individuals" onMouseEnter={evt=>showSubMenu(evt.target)}>
                  <span className="textLabel" title="Individuals">Individuals</span>
                </div>
                 <section className={individualsActive?"mainSubMenuContainer active": "mainSubMenuContainer"} onMouseLeave={evt=>showSubMenu(evt.target)}>
                   
                    <div className="SubMenuContainer_InnerWrapper">
                      <div className="dropdownIndividuals">
                        <div className="columnWrapper">

                            <Link to="/signup" title="Signup for Coinbase" className="dropdownLink">
                              <div className="dropdownIconWrapper">
                                <img src="https://images.ctfassets.net/q5ulk4bp65r7/1rFQCqoq8hipvVJSKdU3fQ/21ab733af7a8ab404e29b873ffb28348/coinbase-icon2.svg"  alt="Coinbase Icon"></img>
                              </div>
                              <div className="dropdownTextWrapper">
                                <h4 >Buy and sell</h4>
                                <p>Buy, sell and use crypto</p>
                              </div>
                            </Link>

                            <Link to="/advanced-trade" title="Coinbase Advanced – Professional-grade tools for trading" className="dropdownLink">
                              <div className="dropdownIconWrapper">
                                <img src="https://static-assets.coinbase.com/assethub/coinbase-advanced-trade-icon.png" alt="Advanced Trade Icon"></img>
                              </div>
                              <div className="dropdownTextWrapper">
                                <h4>Advanced</h4>
                                <p>Buy, sell and use crypto</p>
                              </div>
                            </Link>

                            <Link to="/wallet" title="Coinbase Wallet - Store your cryptocurrency" className="dropdownLink">
                              <div className="dropdownIconWrapper">
                                <img src="https://images.ctfassets.net/c5bd0wqjc7v0/3BD4LmMLr49DnQJBr8qFdw/ab5cbe4289ff12e7d610acc8baa3dd32/coinbase_wallet_logo_bg.svg" alt="Coinbase Wallet Icon"></img>
                              </div>
                              <div className="dropdownTextWrapper">
                                <h4>Wallet</h4>
                                <p>The best self-hosted crypto wallet</p>
                              </div>
                            </Link>

                            <Link to="/earn" title="Coinbase Earn - Earn interest on your crypto" className="dropdownLink">
                              <div className="dropdownIconWrapper">
                                <img src="https://images.ctfassets.net/c5bd0wqjc7v0/6p26wqrFCoNdZDIGyGzFKH/2387448b61bc821fc229800824bc93df/Earn-asset-logged-out.svg" alt="Coinbase Earn Icon"></img>
                              </div>
                              <div className="dropdownTextWrapper">
                                <h4>Earn</h4>
                                <p>Earn rewards on your crypto</p>
                              </div>
                            </Link>
                            
                            <Link to="/card" title="Coinbase Card - Spend crypto anywhere" className="dropdownLink">
                              <div className="dropdownIconWrapper">
                                <img src="https://images.ctfassets.net/c5bd0wqjc7v0/2OUJoRinjmzcv3L4oEvD8C/68d9a0ea281708d0b859c6fd7d909a1a/new-card-icon.svg" alt="Coinbase Card Icon"></img>
                              </div>
                              <div className="dropdownTextWrapper">
                                <h4>Card</h4>
                                <p>Spend crypto, earn crypto rewards</p>
                              </div>
                            </Link>

                            <Link to="/private-client" title="Coinbase Private Client - For trusts, family offices, and UHNWIs" className="dropdownLink">
                              <div className="dropdownIconWrapper">
                                <img src="https://images.ctfassets.net/c5bd0wqjc7v0/1CmcG8xD5BPT3DYJnl0DXG/6135743862720cdd53a5a9077c64e0af/new-private-client-icon.svg" alt="Coinbase Private Client Icon"></img>
                              </div>
                              <div className="dropdownTextWrapper">
                                <h4>Private Client</h4>
                                <p>For trusts, family offices, UHNWIs</p>
                              </div>
                            </Link>

                            <Link to="/borrow" title="Coinbase Borrow - Borrow cash using Bitcoin as collateral" className="dropdownLink">
                              <div className="dropdownIconWrapper">
                                <img src="https://images.ctfassets.net/c5bd0wqjc7v0/26W7tWrpDU6eLcgKiuL7U7/887617ce48666f87365d1f4fe0675cc3/new-borrow-icon.svg" alt="Coinbase Borrow Icon"></img>
                              </div>
                              <div className="dropdownTextWrapper">
                                <h4>Borrow</h4>
                                <p>Borrow cash using Bitcoin as collateral</p>
                              </div>
                            </Link>
                            
                            <Link to="/rewards" title="Coinbase Rewards - Earn crypto, win crypto"className="dropdownLink">
                              <div className="dropdownIconWrapper">
                                <img src="https://images.ctfassets.net/c5bd0wqjc7v0/4aimnFIF9r1DhebxFhYaEm/fe83638dae90ae49bf41e4a00f2372c6/new-rewards-icon.svg" alt="Coinbase Rewards Icon"></img>
                              </div>
                              <div className="dropdownTextWrapper">
                                <h4>Rewards</h4>
                                <p>Earn crypto, win crypto</p>
                              </div>
                            </Link>

                            <Link to="/learning-rewards" title="Coinbase learning rewards - Learn about crypto and get rewards" className="dropdownLink">
                              <div className="dropdownIconWrapper">
                                <img src="https://images.ctfassets.net/c5bd0wqjc7v0/2R68T7CC9SMNPZ0qlBT27C/2b101f95e5b201bf99216dafe14c5d1a/new-earn-icon.svg" alt="Coinbase Learning Rewards Icon"></img>
                              </div>
                              <div className="dropdownTextWrapper">
                                <h4>Learning rewards</h4>
                                <p>Learn and earn crypto</p>
                              </div>
                            </Link>
                            
                            <Link to="https://nft.coinbase.com" title="Create, collect, connect" className="dropdownLink">
                              <div className="dropdownIconWrapper">
                                <img src="https://images.ctfassets.net/c5bd0wqjc7v0/MnTi2c0sf1SMl2j4rQgew/e9bd7ce56171576923eac474a862fcd0/NFT.svg" alt="Coinbase NFT Icon"></img>
                              </div>
                              <div className="dropdownTextWrapper">
                                <h4>NFT</h4>
                                <p>Create, collect, connect</p>
                              </div>
                            </Link>
                            
                            <Link to="/one" title="Get more out of crypto" className="dropdownLink">
                              <div className="dropdownIconWrapper">
                                <img src="https://images.ctfassets.net/c5bd0wqjc7v0/PFIb0wMktAxwbH75ottHF/faa45fc58125a8a365c4403a4f38fd8e/cb1_new_logo_1.svg" alt="Coinbase One Icon"></img>
                              </div>
                              <div className="dropdownTextWrapper">
                                <h4>Coinbase One</h4>
                                <p>Get more out of crypto</p>
                              </div>
                            </Link>
                          </div>

                          <div className="dropdownDescriptionWrapper">
                            <h4 className="dropdownDescriptionHeadline">Crypto tools for everyone</h4>
                            <p className="dropdownDescriptionBody">Buy, sell, and spend crypto on the world's most trusted crypto exchange</p>
                            <Link to ="/products" title="See all products" className="dropdownDescriptionLink">
                              <h4>See all products</h4>
                            </Link>
                          </div>

                        </div>
                      </div>
                    
                </section>


                <div className={businessesActive?"styledLink navLinkItem active defaultCursor ":"styledLink navLinkItem  defaultCursor"} title="Businesses" onMouseEnter={evt=>showSubMenu(evt.target)}>
                  <span className="textLabel" title="Businesses">Businesses</span>
                </div>
                 <section className={businessesActive?"mainSubMenuContainer active": "mainSubMenuContainer"} onMouseLeave={evt=>showSubMenu(evt.target)}>
                     <div className="SubMenuContainer_InnerWrapper">
                      <div className="dropdownIndividuals">
                        <div className="columnWrapper">

                            <Link to="/institutional" title="Solutions for institutional investors" className="dropdownLink">
                              <div className="dropdownIconWrapper">
                                <img src="https://images.ctfassets.net/c5bd0wqjc7v0/6rjjBsuUFcTNro1OviDdDC/fafc347876b5fede9d19d3dabc26fa0a/new-institutional-icon.svg"  alt="Institutional Icon"></img>
                              </div>
                              <div className="dropdownTextWrapper">
                                <h4 >Institutional</h4>
                                <p>Solutions for institutional investors</p>
                              </div>
                            </Link>

                            <Link to="/prime" title="Cryptocurrency trading for institutions" className="dropdownLink">
                              <div className="dropdownIconWrapper">
                                <img src="https://images.ctfassets.net/c5bd0wqjc7v0/59sLic8xsGkkCUuHfqn4wc/7e46b201f78bcd4664333d19733fb5f8/new-prime-icon.svg" alt="Coinbase Prime Trade Icon"></img>
                              </div>
                              <div className="dropdownTextWrapper">
                                <h4>Prime</h4>
                                <p>The prime brokerage platform</p>
                              </div>
                            </Link>

                            <Link to="/commerce" title="Coinbase Commerce - Start accepting cryptocurrency payments" className="dropdownLink">
                              <div className="dropdownIconWrapper">
                                <img src="https://images.ctfassets.net/c5bd0wqjc7v0/1FEdoR9yiNRC5hCCWsa5L2/61c31cd86e8a9e36f4282454b6e19cb9/new-commerce-icon.svg" alt="Coinbase Commerce Icon"></img>
                              </div>
                              <div className="dropdownTextWrapper">
                                <h4>Commerce</h4>
                                <p>Accept crypto from anyone</p>
                              </div>
                            </Link>

                            <Link to="/assethub" title="List your asset on Coinbase" className="dropdownLink">
                              <div className="dropdownIconWrapper">
                                <img src="https://images.ctfassets.net/c5bd0wqjc7v0/4sGoc9vBSbsR5hFqSixQsh/f0ef61797bb1d30ba32394b2816669be/new-assetHub-icon.svg" alt="Asset Hub Icon"></img>
                              </div>
                              <div className="dropdownTextWrapper">
                                <h4>Asset Hub</h4>
                                <p>List your asset on Coinbase</p>
                              </div>
                            </Link>
                            
                            <Link to="/exchange" title="Direct access to our exchange" className="dropdownLink">
                              <div className="dropdownIconWrapper">
                                <img src="https://images.ctfassets.net/c5bd0wqjc7v0/VZpxxgYHNWXtyzq0tE2vt/a1f11b07a5bbfc256bcdd7a4506da4b4/new-exchange-icon.svg" alt="Exchange Icon"></img>
                              </div>
                              <div className="dropdownTextWrapper">
                                <h4>Exchange</h4>
                                <p>Direct access to our exchange</p>
                              </div>
                            </Link>

                            <Link to="/derivatives" title="Trade an accessible futures market" className="dropdownLink">
                              <div className="dropdownIconWrapper">
                                <img src="https://images.ctfassets.net/c5bd0wqjc7v0/FkpxYKh8E3bCvOkM2buz3/7914de9d8ce7657ad72af6fb1af8fe92/derivativesNavigation__1_.svg" alt="Coinbase Derivatives Exchange Icon"></img>
                              </div>
                              <div className="dropdownTextWrapper">
                                <h4>Derivatives Exchange</h4>
                                <p>Trade an accessible futures market</p>
                              </div>
                            </Link>
                          </div>

                            

                          <div className="dropdownDescriptionWrapper">
                            <h4 className="dropdownDescriptionHeadline">Built for businesses and institutions</h4>
                            <p className="dropdownDescriptionBody">Crypto solutions for institutional investors, family offices, and businesses</p>
                            <Link to ="/products" title="See all products" className="dropdownDescriptionLink">
                              <h4>See all products</h4>
                            </Link>
                          </div>

                        </div>
                      </div>
                    
                </section>


                <div className={developersActive?"styledLink navLinkItem active defaultCursor ":"styledLink navLinkItem  defaultCursor"} title="Developers" onMouseEnter={evt=>showSubMenu(evt.target)}>
                  <span className="textLabel" title="Developers">Developers</span>
                </div>
                 <section className={developersActive?"mainSubMenuContainer active":"mainSubMenuContainer"} onMouseLeave={evt=>showSubMenu(evt.target)}>
                     <div className="SubMenuContainer_InnerWrapper">
                      <div className="dropdownIndividuals">
                        <div className="columnWrapper">

                            <Link to="/cloud" title="Cloud" className="dropdownLink">
                              <div className="dropdownIconWrapper">
                                <img src="https://images.ctfassets.net/c5bd0wqjc7v0/6xvB0yE6s3SBLlUw0TVQgV/b5d1936d738e25e43a484a0615bb4c0c/cloud-icon.svg"  alt="cloud icon"></img>
                              </div>
                              <div className="dropdownTextWrapper">
                                <h4 >Cloud</h4>
                                <p>Developer tools and APIs</p>
                              </div>
                            </Link>

                            <Link to="/cloud/products/pay-sdk" title="Easy, secure fiat-to-crypto solution" className="dropdownLink">
                              <div className="dropdownIconWrapper">
                                <img src="https://images.ctfassets.net/c5bd0wqjc7v0/1gvNK5eS7b2XF2URxTotha/5406957e6d27cc51ccdd28c2e8954645/PaySDK.svg" alt="Pay SDK Icon"></img>
                              </div>
                              <div className="dropdownTextWrapper">
                                <h4>Pay SDK</h4>
                                <p>A secure fiat-to-crypto solution</p>
                              </div>
                            </Link>

                            <Link to="/cloud/products/waas" title="Wallet as a Service" className="dropdownLink">
                              <div className="dropdownIconWrapper">
                                <img src="https://static-assets.coinbase.com/coinbase/globalnav/waas/Frame.png" alt="waas icon"></img>
                              </div>
                              <div className="dropdownTextWrapper">
                                <h4>Wallet as a Service</h4>
                                <p>Onboard your users to web3</p>
                              </div>
                            </Link>

                            <Link to="/cloud/products/wallet-sdk" title="Link dapps to Coinbase Wallet"  className="dropdownLink">
                              <div className="dropdownIconWrapper">
                                <img src="https://images.ctfassets.net/c5bd0wqjc7v0/6bosrgZH2jBWBZQah4JXga/2e8f64c268809143dc4302e1c3e4d932/WalletSDK.svg" alt="wallet icon"></img>
                              </div>
                              <div className="dropdownTextWrapper">
                                <h4>Wallet SDK</h4>
                                <p>Link dapps to Coinbase Wallet</p>
                              </div>
                            </Link>
                            
                            <Link to="/cloud/products/commerce-api" title="Commerce - Enable users to buy, sell and store crypto" className="dropdownLink">
                              <div className="dropdownIconWrapper">
                                <img src="https://images.ctfassets.net/c5bd0wqjc7v0/1gONxIto9cBDgURkFnHDwI/3b6162d9707fbbe38fe7cc523dce1ef2/CommerceSDK.svg" alt="commerce icon"></img>
                              </div>
                              <div className="dropdownTextWrapper">
                                <h4>Commerce API</h4>
                                <p>Accept crypto payments from customers</p>
                              </div>
                            </Link>

                            <Link to="/cloud/products/staking" title="Delegate" className="dropdownLink">
                              <div className="dropdownIconWrapper">
                                <img src="https://images.ctfassets.net/c5bd0wqjc7v0/gJjdcPXrDOa4BoiVQqPEO/b69c9c50d171dfa7464a3b1e09767662/Delegate.svg" alt="delegate icon - Stake tokens to earn rewards"></img>
                              </div>
                              <div className="dropdownTextWrapper">
                                <h4>Delegate</h4>
                                <p>Stake tokens to earn rewards</p>
                              </div>
                            </Link>

                            <Link to="https://base.org" title="Base - An Ethereum L2 to build dapps" className="dropdownLink">
                              <div className="dropdownIconWrapper">
                                <img src="https://static-assets.coinbase.com/coinbase/globalnav/base/Base_Symbol.svg" alt="Base - An Ethereum L2 to build dapps"></img>
                              </div>
                              <div className="dropdownTextWrapper">
                                <h4>Base</h4>
                                <p>An Ethereum L2 to build dapps</p>
                              </div>
                            </Link>
                            
                            <Link to="/faucets" title="faucets"className="dropdownLink">
                              <div className="dropdownIconWrapper">
                                <img src="https://images.ctfassets.net/c5bd0wqjc7v0/7o4a9wX4RbZCbVazYXVFKN/ce08e6b3cb65f1b816fc984d1193000b/faucet.svg" alt="faucet icon - Get testnet funds"></img>
                              </div>
                              <div className="dropdownTextWrapper">
                                <h4>Testnet Faucets</h4>
                                <p>Get testnet funds</p>
                              </div>
                            </Link>
                          </div>

                          <div className="dropdownDescriptionWrapper">
                            <h4 className="dropdownDescriptionHeadline">Crypto tools for everyone</h4>
                            <p className="dropdownDescriptionBody">Buy, sell, and spend crypto on the world's most trusted crypto exchange</p>
                            <Link to ="/products" title="See all products" className="dropdownDescriptionLink">
                              <h4>See all products</h4>
                            </Link>
                          </div>

                        </div>
                      </div>
                </section>


                <div className={companyActive?"styledLink navLinkItem active defaultCursor ":"styledLink navLinkItem  defaultCursor"} title="Company" onMouseEnter={evt=>showSubMenu(evt.target)}> 
                  <span className="textLabel" title="Company" >Company</span>
                </div>
                 <section className={companyActive?"mainSubMenuContainer active":"mainSubMenuContainer"} onMouseLeave={evt=>showSubMenu(evt.target)}>
                    <div className="SubMenuContainer_InnerWrapper">
                      <div className="dropdownIndividuals">
                        <div className="columnWrapper">

                          <Link to="/about" title="Learn more about the company" className="dropdownLink">
                            <span className="DropdownItemWrapper">
                              <svg className="DropdownArrow" width="8" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z" fill="#050F19"></path>
                              </svg>

                              <div className="DropdownItem">
                                <span className="DropdownText">About</span>
                              </div>
                            </span>
                          </Link>

                          <Link to="/careers" title="Work at Coinbase" className="dropdownLink">
                              <span className="DropdownItemWrapper">
                              <svg className="DropdownArrow" width="8" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z" fill="#050F19"></path>
                              </svg>

                              <div className="DropdownItem">
                                <span className="DropdownText">Careers</span>
                              </div>
                            </span>
                          </Link>

                          <Link to="/affiliates" title="Earn money becoming an affiliate" className="dropdownLink">
                              <span className="DropdownItemWrapper">
                              <svg className="DropdownArrow" width="8" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z" fill="#050F19"></path>
                              </svg>

                              <div className="DropdownItem">
                                <span className="DropdownText">Affiliates</span>
                              </div>
                            </span>
                          </Link>

                          <Link to="https://help.coinbase.com" title="Our help center" className="dropdownLink">
                              <span className="DropdownItemWrapper">
                              <svg className="DropdownArrow" width="8" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z" fill="#050F19"></path>
                              </svg>

                              <div className="DropdownItem">
                                <span className="DropdownText">Support</span>
                              </div>
                            </span>
                          </Link>

                          <Link to="/blog" title="Blog" className="dropdownLink">
                              <span className="DropdownItemWrapper">
                              <svg className="DropdownArrow" width="8" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z" fill="#050F19"></path>
                              </svg>

                              <div className="DropdownItem">
                                <span className="DropdownText">Blog</span>
                              </div>
                            </span>
                          </Link>

                          <Link to="/security" title="Security" className="dropdownLink">
                              <span className="DropdownItemWrapper">
                              <svg className="DropdownArrow" width="8" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.172 5.773L2.257.823.5 2.593l3.157 3.18L.5 8.953l1.757 1.77 4.915-4.95z" fill="#050F19"></path>
                              </svg>

                              <div className="DropdownItem">
                                <span className="DropdownText">Security</span>
                              </div>
                            </span>
                          </Link>
                        </div>

                        <div className="dropdownDescriptionWrapper">
                          <h4 className="dropdownDescriptionHeadline">Learn all about Coinbase</h4>
                          <p className="dropdownDescriptionBody">We're building an open financial system for the world.</p>
                        </div>
                      </div>
                    </div>
                </section>
              {/* </div> */}
            </nav>

            <div className="buttonWrapper" onMouseEnter={evt=>showSubMenu(evt.target)}>{/*Mouse Event for hiding sub menus */}
                  <Link to="/login" className="styledLink navLinkItem">
                      <span className="textLabel">Sign in</span>
                  </Link>

                <Link className="styledLink" to = "/signup" >
                      <button className="interactableButton">Sign up</button>
                  </Link>
            </div>

            <div className="mobileMenuToggleWrapper" onClick={showHide}>
                <div className="mobileMenuToggle">
                    <span className={isMobileActive?"bar active":"bar"}></span>
                    {/* <span className="bar"></span> */}
                    {/* <span className="bar"></span> */}
                  </div>
              </div>  
          </div>
        </div>




























{/*MOBILE */}
        <div className={isMobileActive?"mobileNavContainer active":"mobileNavContainer"}>
          
          <nav className="mobileCenterWrapper">
              <div className="centerNavItems">
                <div className="styledLink  mobileLinkItem" title="Explore" aria-expanded="false" onClick={(evt)=>{showSubMenu(evt.target); console.log(evt)}}>
                  <div  title="Explore">
                    <span className="textLabel" title="Explore">Explore</span>
                  </div>
                  <div className={exploreActive?"mobileMenuIconWrapper active":"mobileMenuIconWrapper"} title="Explore">
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
                

                <Link className="styledLink  mobileLinkItem" title="Web3" aria-expanded="false" to="/web3">
                  <div >
                    <span className="textLabel">Web3</span>
                  </div>
                </Link>

                  <div className="styledLink  mobileLinkItem" title="Learn" aria-expanded="false" onClick={evt=>showSubMenu(evt.target)}>
                  <div  title="Learn">
                    <span className="textLabel" title="Learn">Learn</span>
                  </div>
                  <div className={learnActive?"mobileMenuIconWrapper active":"mobileMenuIconWrapper"} title="Learn">
                    <svg width="12" height="8" xmlns="http://www.w3.org/2000/svg" >
                      <path d="M6.007 8L11.9 2.107 9.793 0 6.007 3.786 2.221 0 .114 2.107 6.007 8z" fill="#050F19" ></path>
                    </svg>
                  </div>
                </div>
                <div className={learnActive?"mobileMenuSubLinkWrapper active":"mobileMenuSubLinkWrapper"}>
                   <div className="mobileMenuSubLink">
                    <Link to="/learn/tips-and-tutorials" className="styledLink  mobileLinkItem mobileSubLinkItem">
                        <p className="mobileSubLinkTextLabel">Tips & Tutorials</p>
                    </Link>
                  </div>
                   <div className="mobileMenuSubLink">
                    <Link to="/learn/crypto-basics" className="styledLink  mobileLinkItem mobileSubLinkItem">
                        <p className="mobileSubLinkTextLabel">Crypto basics</p>
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

                <div className="styledLink  defaultCursor mobileLinkItem" title="Individuals" onClick={evt=>showSubMenu(evt.target)}>
                  <span className="textLabel" title="Individuals">Individuals</span>
                  <div className= {individualsActive?"mobileMenuIconWrapper active":"mobileMenuIconWrapper"} title="Individuals">
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

                
                <div className="styledLink  defaultCursor mobileLinkItem" title = "Businesses" onClick={evt=>showSubMenu(evt.target)}>
                  <span className="textLabel"title = "Businesses" >Businesses</span>
                  <div className={businessesActive?"mobileMenuIconWrapper active":"mobileMenuIconWrapper"}title = "Businesses" >
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

                <div className="styledLink  defaultCursor mobileLinkItem" title = "Developers" onClick={evt=>showSubMenu(evt.target)}>
                  <span className="textLabel"title = "Developers">Developers</span>
                  <div className={developersActive?"mobileMenuIconWrapper active":"mobileMenuIconWrapper"}title = "Developers">
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
                <div className="styledLink  defaultCursor mobileLinkItem" title="Company" onClick={evt=>showSubMenu(evt.target)}>
                  <span className="textLabel" title="Company">Company</span>
                  <div className={companyActive?"mobileMenuIconWrapper active":"mobileMenuIconWrapper"} title="Company">
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
              </div>
          </nav>
      </div>
       
    </header>
    
        </>
  )
}
