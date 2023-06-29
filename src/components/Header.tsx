import {Link} from "react-router-dom"

export default function Header() {
  return (
    <div className='mainNav'>
        <div className='bannerWrapper'>
            <div className='banner'>
                <Link className="styledLink" to = "/signup" >
                    <span>Get up to $200 for getting started</span> <sup>1</sup> <span> →</span>
                </Link>
            </div>
        </div>
    </div>
  )
}
