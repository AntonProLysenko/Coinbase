import {Link} from "react-router-dom"

export default function Header() {
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

           <div className="mobileMenuToggleWrapper">
              <div className="mobileMenuToggle">
                  <span className="bar"></span>
                  {/* <span className="bar"></span> */}
                  {/* <span className="bar"></span> */}
                </div>
            </div>  
        </div>

         <nav className="mobileCenterWrapper">
             {/* <div className="centerNavItems"> */}
              <Link className="styledLink navLinkItem" title="Explore" aria-expanded="false" to="/explore">
                <div className="mobileLinkItem">
                  <span className="textLabel">Explore</span>
                </div>
              </Link>

              <Link className="styledLink navLinkItem" title="Web3" aria-expanded="false" to="/web3">
                <div className="mobileLinkItem">
                  <span className="textLabel">Web3</span>
                </div>
              </Link>

                <Link className="styledLink navLinkItem" title="Learn" aria-expanded="false" to="/learn">
                <div className="mobileLinkItem">
                  <span className="textLabel">Learn</span>
                </div>
              </Link>

              <div className="styledLink navLinkItem defaultCursor mobileLinkItem">
                <span className="textLabel">Individuals</span>
              </div>
              <div className="styledLink navLinkItem defaultCursor mobileLinkItem">
                <span className="textLabel">Businesses</span>
              </div>
              <div className="styledLink navLinkItem defaultCursor mobileLinkItem">
                <span className="textLabel">Developers</span>
              </div>
              <div className="styledLink navLinkItem defaultCursor mobileLinkItem">
                <span className="textLabel">Company</span>
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
       
    </header>
    
        </>
  )
}
