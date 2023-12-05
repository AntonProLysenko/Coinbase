import React from 'react'
import {useNavigate, Link} from 'react-router-dom'
import loading_logo from "../components/assets/loading_coin_logo.png"

// import{Props} from"../components/Types/propTypes"


// type SlidingProps = {
//    //React declares type by itself in states if we are passing the default value
//     slidingHeader:React.SetStateAction<boolean>//I took the type from the declaration on the usestate
//     homePageCheckr:React.RefObject<HTMLDivElement>
//     windowWidth:number
// }


interface Object {
    [key: string]: any
}

 type Props = {
   //React declares type by itself in states if we are passing the default value
    slidingHeader:React.SetStateAction<boolean>//I took the type from the declaration on the usestate
    homePageCheckr:React.RefObject<HTMLDivElement>
    
    isMobileActive:React.SetStateAction<boolean>
    setMobileActive:React.Dispatch<React.SetStateAction<boolean>>
    windowWidth:number
    

    homepageData:Object;
    // homepageData.topHomepageCoins:object;
}
export default function HomePage({homepageData,slidingHeader,homePageCheckr,windowWidth,isMobileActive,setMobileActive}:Props) {

    

    const navigation = useNavigate();



   



//     let homepageArray= Object.keys(homepageData.topHomepageCoins)
//     if(Object.keys(homepageData).length>0){
//     homepageArray[1]="ETH2"
//     homepageArray[2]="ETH"
//     homepageArray[3]="USDT"
//     homepageArray[4]="USDC"
//     homepageArray[5]="XRP"
// }

   


    let firstSectionDesctop=( 
 
        <div className="SectionCenter SectionFlex">
            <div className="FirstWrapper SectionFlex SectionRow ">

                <div className="ImageContainer">
                    <picture className="NextGenImage">
                        <img src="https://images.ctfassets.net/c5bd0wqjc7v0/5oEZBTPlhzKLA5OrNpRmsl/763c828277bea2afdb4c981441dd700f/HeroImg.webp?fl=progressive&q=100&w=1180" alt="" />
                    </picture>
                </div>

                <div className="TextWrapper SectionFlex SectionColumn SectionCenter">

                    <div className='TitleWrapper SectionFlex SectionColumn'>
                        <div className="SectionFlex SectionMaxWidthHundred">
                            <h1>The future of money is here</h1>
                        </div>
                        <span></span>
                        <div>
                            <p>We're the most trusted place for people and businesses to buy, sell, and manage crypto.</p>
                        </div>
                    </div>


                    <div className="FormWrapper">
                    <form className='SignupForm'>
                        <div className="InputContainer">
                            <input type="email" placeholder="satoshi@nakamoto.com" aria-label="satoshi@nakamoto.com" name="email" className="InputField" />
                        </div>
                        
                        <button className="interactableButton">
                            SignUp
                        </button>
                    </form>
                    </div>

                    <div className='TitleWrapper'>
                        <span>
                            Sign up and get up to $200 in crypto¹
                        </span>
                    </div>
                </div>

                    

            </div> 
                

        </div>
        
        )

    let firstSectionMobile = ( 
      
            <div className="FirstWrapperMobile SectionFlex">
                <div className="SectionFlex SectionRow SectionCenter">
                    <div className="contentWrapper">
                        <div className="linkWrapper" onClick={()=>navigation("/signup")}>
                            
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#1652F0"></path>

                                <path d="M17.274 10.5149C17.5095 8.94294 16.3118 8.09769 14.6753 7.53369L15.2063 5.40369L13.9103 5.08119L13.3928 7.15494C13.0523 7.06944 12.7028 6.98994 12.354 6.91044L12.8753 4.82319L11.5793 4.49994L11.0483 6.62919C10.7663 6.56469 10.4888 6.50169 10.2203 6.43419L10.2218 6.42744L8.43375 5.98119L8.08875 7.36569C8.08875 7.36569 9.051 7.58619 9.03075 7.59969C9.55575 7.73094 9.65025 8.07819 9.6345 8.35419L9.03 10.7804C9.066 10.7894 9.1125 10.8029 9.165 10.8232L9.02775 10.7894L8.18025 14.1884C8.11575 14.3474 7.953 14.5867 7.5855 14.4959C7.599 14.5147 6.6435 14.2612 6.6435 14.2612L6 15.7447L7.6875 16.1654C8.001 16.2442 8.3085 16.3267 8.61075 16.4039L8.0745 18.5579L9.36975 18.8804L9.90075 16.7504C10.2548 16.8457 10.5983 16.9342 10.9343 17.0182L10.4047 19.1392L11.7008 19.4617L12.237 17.3122C14.448 17.7307 16.11 17.5619 16.8098 15.5624C17.3738 13.9529 16.782 13.0237 15.6188 12.4184C16.4663 12.2234 17.1038 11.6662 17.274 10.5149ZM14.3115 14.6684C13.9118 16.2787 11.2005 15.4079 10.3215 15.1897L11.034 12.3359C11.913 12.5557 14.7308 12.9899 14.3115 14.6684ZM14.7128 10.4917C14.3475 11.9564 12.0915 11.2117 11.3603 11.0294L12.0053 8.44194C12.7365 8.62419 15.0938 8.96394 14.7128 10.4917Z" fill="white"></path>
                            </svg>
                            Jump start your portfolio
                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M4.10013e-07 6.99994L12.17 6.99994L8.89 10.2799L10.3 11.6899L16 5.99994L10.3 0.309942L8.89 1.71994L12.17 4.99994L5.84858e-07 4.99994L4.10013e-07 6.99994Z" fill="#1652F0"></path>
                            </svg>
                        </div>

                        <div className='TitleWrapper'>
                            <h1>Jump start your crypto portfolio</h1>
                        </div>

                        <h3>Coinbase is the easiest place to buy and sell cryptocurrency. Sign up and get started today.</h3>

                        <div className="formWrapper">
                            {/* <form action=""> */}

                            <div className="inputWrapper">
                                <input type="text" placeholder='Email address' />
                            </div>

                            <div className="buttonWrapper">
                                <button className='interactableButton'>Sign Up</button>
                            </div>
                            {/* </form> */}

                        </div>

                    </div>
                </div>


            </div>
        
        )

    return(
        <>
            <main id="main" className={isMobileActive?'PageLayoutWrapper no-scroll':"PageLayoutWrapper"}>
                <div className={!slidingHeader||isMobileActive?"homePageCheckr":"homePageCheckr sliding"} ref = {homePageCheckr}></div>

                {windowWidth<=768? 
                firstSectionMobile
                :firstSectionDesctop
                }

                <div className='SecondWrapper'>
                    <div className="contentWrapper">

                        <div className="imageWrapper">
                            <img src="https://images.ctfassets.net/c5bd0wqjc7v0/5vYeJAh3qUqQPsDsHIAfMT/d7a5e7b70fa6a3226e18c8b192ab33a5/browseDecentralizedApps-2.png?fl=progressive&q=100&w=1180" alt="Decentralized Identity" />
                        </div>

                        <div className="textWrapper">
                            <div className="titleWrapper">
                                <h2>Explore Web3 Profiles</h2>
                                <div className="subTextWrapper">
                                    <p>Customize your profile with an ENS username, check out other profiles, explore popular NFT collections, and more.</p>
                                </div>
                            </div>

                            <div className="buttonWrapper">
                                <button className='interactableButton'>Learn More <span>→</span></button>
                            </div>

                        </div>

                    
                    </div>
                </div>
                <div className="ThirdWrapper">
                    <div className="ContentWrapper">
                        <div className="TextWrapper">
                            <div className="TextContainer">
                                <h2>Get up to $400 in rewards with Coinbase</h2>
                                <span></span>
                                <p>Coinbase users can earn up to $400 on average just by taking advantage of our rewards.²</p>
                                <span></span>
                                <button className='interactableButton'>Start earning</button>
                            </div>
                        </div>
                        <div className="ImageWrapper">
                            <img src="https://images.ctfassets.net/c5bd0wqjc7v0/1zkZpnhMPXqA9ZoRvHxKYz/b54f31cf0b168143d732d518bd97cb57/Creative.png?fl=progressive&q=100&w=560" alt="" />
                        </div>

                    </div>

                </div>

                <div className="HomepageCoinDataWrapper">
                    <div className="innerWrapper">
                        <div className="textWrapper">
                            <div className="innerTextWrapper">
                                <h2>Explore crypto like Bitcoin, Ethereum, and Dogecoin</h2>
                                <span></span>
                                <p>Simply and securely buy, sell, and manage hundreds of cryptocurrencies.</p>
                                <span></span>
                                <div className="buttonWrapper">
                                    <Link to="/explore">
                                        <button className="interactableButton">
                                            See more assets
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="tilesWrapper">
                            <div className="tilesHeader">
                                <button className="interactableButton active">Tradable</button>
                                <span></span>
                                <button className="interactableButton">Top Gainers</button>
                            </div>
                            

                            { <div className="tilesContainer">
                                {Object.keys(homepageData).length>0?
                                
                                    homepageData.topHomepageCoins.map((coin:any)=>{
                                        return(
                                            <Link to={`/price/${coin.FROMSYMBOL.toLowerCase() }`} className='tileWrapper'>
                                                <div className="tile">
                                                    <div className="tileInnerWrapper">

                                                        <div className="generalInfo">
                                                            <img src={`${coin.IMAGEURL}`} alt="Coin Symbol IMG"/>
                                                            <div className="title">{coin.FROMSYMBOL}</div>
                                                            <div className="price">{coin.PRICE.toLocaleString("en-US",{style:"currency",currency:"USD"})}</div>
                                                        </div>


                                                        <div className={coin.CHANGEPCT24HOUR>0?"persentage positive":"persentage negative"}>

                                                            <div className="arrowWrapper">
                                                                <div className="arrowInnerWrapper">
                                                                    <span className="arrow">↑</span>
                                                                </div>
                                                            </div>

                                                            <span className="persentageValue">
                                                                {Math.abs(coin.CHANGEPCTDAY/100).toLocaleString('en-US',{style: 'percent',minimumFractionDigits:2})}
                                                            </span>
                                                        </div>

                                                    </div>

                                                </div>
                                           
                                            </Link>
                                        )
                                    })
                                
                                :
                                <>
                                <div className='tileWrapper'>
                                    <div className="tile">
                                        <div className="tileInnerWrapper">

                                            <div className="generalInfo">
                                                <img src={loading_logo}alt="Coin Symbol IMG"/>
                                                <div className="title"> </div>
                                                <div className="price"> </div>
                                            </div>


                                            <div>

                                                <div className="arrowWrapper">
                                                    <div className="arrowInnerWrapper">

                                                    </div>
                                                </div>

                                                <span className="persentageValue">
                                                   
                                                </span>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className='tileWrapper'>
                                    <div className="tile">
                                        <div className="tileInnerWrapper">

                                            <div className="generalInfo">
                                                <img src={loading_logo} alt="Coin Symbol IMG"/>
                                                <div className="title"> </div>
                                                <div className="price"> </div>
                                            </div>


                                            <div>

                                                <div className="arrowWrapper">
                                                    <div className="arrowInnerWrapper">

                                                    </div>
                                                </div>

                                                <span className="persentageValue">
                                                   
                                                </span>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                        <div className='tileWrapper'>
                                            <div className="tile">
                                                <div className="tileInnerWrapper">

                                                    <div className="generalInfo">
                                                        <img src={loading_logo}alt="Coin Symbol IMG" />
                                                        <div className="title"> </div>
                                                        <div className="price"> </div>
                                                    </div>


                                                    <div>

                                                        <div className="arrowWrapper">
                                                            <div className="arrowInnerWrapper">

                                                            </div>
                                                        </div>

                                                        <span className="persentageValue">

                                                        </span>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                        <div className='tileWrapper'>
                                            <div className="tile">
                                                <div className="tileInnerWrapper">

                                                    <div className="generalInfo">
                                                        <img src={loading_logo}alt="Coin Symbol IMG" />
                                                        <div className="title"> </div>
                                                        <div className="price"> </div>
                                                    </div>


                                                    <div>

                                                        <div className="arrowWrapper">
                                                            <div className="arrowInnerWrapper">

                                                            </div>
                                                        </div>

                                                        <span className="persentageValue">

                                                        </span>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                        <div className='tileWrapper'>
                                            <div className="tile">
                                                <div className="tileInnerWrapper">

                                                    <div className="generalInfo">
                                                        <img src={loading_logo}alt="Coin Symbol IMG" />
                                                        <div className="title"> </div>
                                                        <div className="price"> </div>
                                                    </div>


                                                    <div>

                                                        <div className="arrowWrapper">
                                                            <div className="arrowInnerWrapper">

                                                            </div>
                                                        </div>

                                                        <span className="persentageValue">

                                                        </span>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                        <div className='tileWrapper'>
                                            <div className="tile">
                                                <div className="tileInnerWrapper">

                                                    <div className="generalInfo">
                                                        <img src={loading_logo}alt="Coin Symbol IMG" />
                                                        <div className="title"> </div>
                                                        <div className="price"> </div>
                                                    </div>


                                                    <div>

                                                        <div className="arrowWrapper">
                                                            <div className="arrowInnerWrapper">

                                                            </div>
                                                        </div>

                                                        <span className="persentageValue">

                                                        </span>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </>
                                
                                
                                }
                            </div>}

                        </div>
                    </div>
                </div>

                <br />
                <br />
                <br /><br /><br />

                Thank you for reviewing my Project!
                <br />
                Please note that prices on tiles are Real and Dynamic and fetched from Cryptocompare API
                <br />
                Since I'm using a free tier for my server deployment it might take a while to be fetched.
                <br />Hope You liked it 
                <br /><br /><br /><br />

                I would Highly appreciate any suggestions 
                <br />
                Please email me at <a href="mailto:mail@antonlys.com">mail@antonlys.com</a>

                <br />
                Thank you!

            </main>
        </>



    )

    //  return( ):return desctop
    
 
 
}
