
import MenuIcons from "../MenuIcons/menu.icon.component"
import "./links.styles.css"


const Links = () => {



    return (
        <div id="links">
            <a href='#home' id="home">SKYLIGHTS</a>
            <a href='#about' className="link-hov">about</a>
            <span className="pipe">|</span>
            <a href='#gigs' className="link-hov">gigs</a>
            <span className="pipe">|</span>
            <a href='#shop' className="link-hov">shop</a>
            <span className="pipe">|</span>
            <a href="#releases" className="link-hov">releases</a>


            <input type="checkbox" id="hamburger-input" class="burger-shower" />
            <label id="hamburger-menu" for="hamburger-input">
                <nav id="sidebar-menu">
                    <MenuIcons />
                    <a href='#home' id="home">SKYLIGHTS</a>
                    <ul>
                        <li><a href='#about'>about</a></li>
                        <li><a href='#gigs'>gigs</a></li>
                        <li><a href='#shop'>shop</a></li>
                        <li><a href="#releases">releases</a></li>

                    </ul>
                </nav>
            </label>

            <div class="overlay"></div>
        </div>
    )
}

export default Links