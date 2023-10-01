
import MenuIcons from "../MenuIcons/menu.icon.component"
import "./links.styles.css"


const Links = () => {



    return (
        <div id="links">
            <a href='#about' className="link-hov">Home</a>
            <span className="pipe">|</span>
            <a href='#about' className="link-hov">About</a>
            <span className="pipe">|</span>
            <a href='#gigs' className="link-hov">Gigs</a>
            <span className="pipe">|</span>
            <a href='#shop' className="link-hov">Shop</a>
            <span className="pipe">|</span>
            <a href="#releases" className="link-hov">Releases</a>


            <input type="checkbox" id="hamburger-input" class="burger-shower" />
            <label id="hamburger-menu" for="hamburger-input">
                <nav id="sidebar-menu">

                    <a href='#home' id="home">SKYLIGHTS</a>
                    <ul>
                        <li><a href='#about'>about</a></li>
                        <li><a href='#gigs'>gigs</a></li>
                        <li><a href='#shop'>shop</a></li>
                        <li><a href="#releases">releases</a></li>

                    </ul>
                    <MenuIcons />
                </nav>
            </label>

            <div class="overlay"></div>
        </div>
    )
}

export default Links