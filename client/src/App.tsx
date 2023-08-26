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

  const possibleCoins=["1ST","2GIVE","808","AAVE","ABT","ABY","AC","ACT","ADA","ADT","ADX","AE","AEON","AGI","AGRS","AI","AID","AION","AIR","AKY","ALGO","ALIS","AMBER","AMP","AMPL","ANC","ANT","APPC","APX","ARDR","ARK","ARN","AST","ATB","ATM","ATOM","ATS","AUR","AVAX","AVT","B3","BAND","BAT","BAY","BBR","BCAP","BCC","BCD","BCH","BCN","BCPT","BCX","BCY","BDL","BEE","BELA","BET","BFT","BIS","BITB","BITBTC","BITCNY","BITEUR","BITGOLD","BITSILVER","BITUSD","BIX","BLITZ","BLK","BLN","BLOCK","BLZ","BMC","BNB","BNT","BNTY","BOST","BOT","BQ","BRD","BRK","BRX","BSV","BTA","BTC","BTCB","BTCD","BTCP","BTG","BTM","BTS","BTSR","BTT","BTX","BURST","BUSD","BUZZ","BYC","BYTOM","C20","CAKE","CANN","CAT","CCRB","CDT","CFI","CHAT","CHIPS","CLAM","CLOAK","CMP","CMT","CND","CNX","COFI","COMP","COSS","COVAL","CRBIT","CREA","CREDO","CRO","CRW","CSNO","CTR","CTXC","CURE","CVC","DAI","DAR","DASH","DATA","DAY","DBC","DBIX","DCN","DCR","DCT","DDF","DENT","DFS","DGB","DGC","DGD","DICE","DLT","DMD","DMT","DNT","DOGE","DOPE","DOT","DRGN","DTA","DTB","DYN","EAC","EBST","EBTC","ECC","ECN","EDG","EDO","EFL","EGC","EGLD","EKT","ELA","ELEC","ELF","ELIX","EMB","EMC","EMC2","ENG","ENJ","ENRG","EOS","EOT","EQT","ERC","ETC","ETH","ETHD","ETHOS","ETN","ETP","ETT","EVE","EVX","EXCL","EXP","FCT","FIL","FLDC","FLO","FLT","FRST","FTC","FTT","FUEL","FUN","GAM","GAME","GAS","GBG","GBX","GBYTE","GCR","GEO","GLD","GNO","GNT","GOLOS","GRC","GRT","GRS","GRWI","GTC","GTO","GUP","GVT","GXS","HBAR","HBN","HEAT","HMQ","HPB","HSR","HT","HUSH","HVN","HXX","ICN","ICX","IFC","IFT","IGNIS","INCNT","IND","INF","INK","INS","INSTAR","INT","INXT","IOC","ION","IOP","IOST","IOTA","IOTX","IQT","ITC","IXC","IXT","J8T","JNT","KCS","KICK","KIN","KLAY","KMD","KNC","KORE","KSM","LBC","LCC","LEND","LEO","LEV","LGD","LINDA","LINK","LKK","LMC","LOCI","LOOM","LRC","LSK","LTC","LUN","LUNA","MAID","MANA","MATIC","MAX","MBRS","MCAP","MCO","MDA","MEC","MED","MEME","MER","MGC","MGO","MINEX","MINT","MIOTA","MITH","MKR","MLN","MNE","MNX","MOD","MONA","MRT","MSP","MTH","MTN","MUE","MUSIC","MYB","MYST","MZC","NAMO","NANO","NAS","NAV","NBT","NCASH","NDC","NEBL","NEO","NEOS","NET","NLC2","NLG","NMC","NMR","NOBL","NOTE","NPXS","NSR","NTO","NULS","NVC","NXC","NXS","NXT","OAX","OBITS","OCL","OCN","ODEM","ODN","OF","OK","OMG","OMNI","ONION","ONT","OPT","ORN","OST","PART","PASC","PAY","PBL","PBT","PFR","PING","PINK","PIVX","PIX","PLBT","PLR","PLU","POA","POE","POLY","POSW","POT","POWR","PPC","PPT","PPY","PRG","PRL","PRO","PST","PTC","PTOY","PURA","QASH","QAU","QLC","QRK","QRL","QSP","QTL","QTUM","QUICK","QWARK","R","RADS","RAIN","RBIES","RBX","RBY","RCN","RDD","RDN","REC","RED","REP","REQ","RHOC","RIC","RISE","RLC","RLT","RPX","RRT","RUFF","RUNE","RUP","RVT","SAFEX","SALT","SAN","SBD","SBTC","SC","SEELE","SEQ","SHIB","SHIFT","SIB","SIGMA","SIGT","SJCX","SKIN","SKY","SLR","SLS","SMART","SMT","SNC","SNGLS","SNM","SNRG","SNT","SOC","SOL","SOUL","SPANK","SPC","SPHR","SPR","SNX","SRN","START","STEEM","STK","STORJ","STORM","STQ","STRAT","STX","SUB","SWFTC","SWIFT","SWT","SYNX","SYS","TAAS","TAU","TCC","TFL","THC","THETA","TIME","TIX","TKN","TKR","TKS","TNB","TNT","TOA","TRAC","TRC","TRCT","TRIBE","TRIG","TRST","TRUE","TRUST","TRX","TUSD","TX","UBQ","UKG","ULA","UNB","UNI","UNITY","UNO","UNY","UP","URO","USDT","UST","UTK","VEE","VEN","VERI","VET","VIA","VIB","VIBE","VIVO","VOISE","VOX","VPN","VRC","VRM","VRS","VSL","VTC","VTR","WABI","WAN","WAVES","WAX","WBTC","WCT","WDC","WGO","WGR","WINGS","WPR","WTC","WTT","XAS","XAUR","XBC","XBY","XCN","XCP","XDN","XEL","XEM","NEM","XHV","XID","XLM","XMG","XMR","XMT","XMY","XPM","XRL","XRP","XSPEC","XST","XTZ","XUC","XVC","XVG","XWC","XZC","XZR","YEE","YOYOW","ZCC","ZCL","ZCO","ZEC","ZEN","ZET","ZIL","ZLA","ZRX"
  ]

  const handleResize=()=>{
    setWindowWidth(window.innerWidth)
  }

 const getCoin = async()=>{  
        try{
          let metric = await axios.get(`${BASIC_URL}/api/coins`,{headers:{"coins":possibleCoins}})            
            console.log("Personal",metric );

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
    // getCoin()
  },[])


  return (
    <>
    <div className="App">
      <Header slidingHeader={slidingHeader} headerCheckr={headerCheckr} isMobileActive={isMobileActive} setMobileActive={setMobileActive} />
      <div style={{margin:"100px"}}>
      <button onClick={getCoin}>Server request</button>
      </div>
        

      <Routes>
        {/* send email on first Wrapper to sign up page  */}
        <Route path="/" element = {<HomePage windowWidth={windowWidth} slidingHeader={slidingHeader} isMobileActive={isMobileActive} setMobileActive={setMobileActive}  homePageCheckr={homePageCheckr}/>}/>
        <Route path="/signup" element={<SignUpPage/>}/> 
      </Routes>
     
    </div>
    </>
  )
}

export default App;
