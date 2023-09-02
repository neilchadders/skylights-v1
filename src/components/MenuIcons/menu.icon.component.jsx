import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './menu.icon.styles.css'

const MenuIcons = () => {
    return (
        <div id='menu-font'>
            <FontAwesomeIcon className='menu-icon' icon="fa-brands fa-apple" size="2xl" style={{ color: "#000000", }} />
            <FontAwesomeIcon className='menu-icon' icon="fa-brands fa-square-instagram" size="xl" style={{ color: "#000000", }} />
            <FontAwesomeIcon className='menu-icon' icon="fa-brands fa-square-facebook" size="2xl" style={{ color: "#000000", }} />
            <FontAwesomeIcon className='menu-icon' icon="fa-brands fa-square-twitter" size="2xl" style={{ color: "#000000", }} />
            <FontAwesomeIcon className='menu-icon' icon="fa-brands fa-spotify" size="2xl" style={{ color: "#080808", }} />
        </div>
    )
}

export default MenuIcons;