
import MenuIcons from "../MenuIcons/menu.icon.component"
import { Link } from "react-router-dom"

import "./links.styles.css"


const Links = () => {



    return (
        <div id="links">
            <Link className="link-hov" to='/'>Home</Link>
            <span className="pipe">|</span>
            <Link className="link-hov" to='about'>About</Link>
            <span className="pipe">|</span>
            <Link className="link-hov" to='gigs'>Gigs</Link>
            <span className="pipe">|</span>
            <Link className="link-hov" to='shop'>Shop</Link>
            <span className="pipe">|</span>
            <Link className="link-hov" to='about'>Rleases</Link>


            <input type="checkbox" id="hamburger-input" className="burger-shower" />
            <label id="hamburger-menu" htmlFor="hamburger-input">
                <nav id="sidebar-menu">

                    <Link id="home" to='/'>SKYLIGHTS</Link>
                    <ul>
                        <li><Link to='about'>about</Link></li>
                        <li><Link to='gigs'>gigs</Link></li>
                        <li><Link to='shop'>shop</Link></li>
                        <li><Link to='releases'>releases</Link></li>

                    </ul>
                    <MenuIcons />
                </nav>
            </label>

            <div className="overlay"></div>
        </div>
    )
}

export default Links