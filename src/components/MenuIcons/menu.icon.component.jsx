import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './menu.icon.styles.css'

const MenuIcons = () => {
    return (
        <div id='menu-font'>
            <a target="_blank" attribute href='https://music.apple.com/gb/artist/skylights/1453747940'><FontAwesomeIcon className='menu-icon' icon="fa-brands fa-apple" style={{ color: "#000000", }} /></a>
            <a target="_blank" attribute href='https://www.instagram.com/skylightsyra/'><FontAwesomeIcon className='menu-icon' icon="fa-brands fa-square-instagram" style={{ color: "#000000", }} /></a>
            <a target="_blank" attribute href='https://www.facebook.com/SkylightsYRA'><FontAwesomeIcon className='menu-icon' icon="fa-brands fa-square-facebook" style={{ color: "#000000", }} /></a>
            <a target="_blank" attribute href='https://twitter.com/SkylightsYRA'><FontAwesomeIcon className='menu-icon' icon="fa-brands fa-square-twitter" style={{ color: "#000000", }} /></a>
            <a target="_blank" attribute href='https://open.spotify.com/artist/66Gz29vqxLIyLZuBSUyJgP'><FontAwesomeIcon className='menu-icon' icon="fa-brands fa-spotify" style={{ color: "#080808", }} /></a>
            <a target="_blank" attribute href='https://soundcloud.com/skylights_yra'><FontAwesomeIcon className='menu-icon' icon="fa-brands fa-soundcloud" style={{ color: "#000000", }} /></a>
        </div>
    )
}

export default MenuIcons;