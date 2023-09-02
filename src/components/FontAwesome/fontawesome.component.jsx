import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './fontawesome.styles.css'

const FontAwesome = () => {
    return (
        <div id='font-awesome'>
            <FontAwesomeIcon className='icon' icon="fa-brands fa-apple" size="xl" style={{ color: "#000000", }} />
            <FontAwesomeIcon className='icon' icon="fa-brands fa-square-instagram" size="xl" style={{ color: "#000000", }} />
            <FontAwesomeIcon className='icon' icon="fa-brands fa-square-facebook" size="xl" style={{ color: "#000000", }} />
            <FontAwesomeIcon className='icon' icon="fa-brands fa-square-twitter" size="xl" style={{ color: "#000000", }} />
            <FontAwesomeIcon className='icon' icon="fa-brands fa-spotify" size="xl" style={{ color: "#080808", }} />
            <FontAwesomeIcon className='icon' icon="fa-brands fa-soundcloud" size="xl" style={{ color: "#000000", }} />
        </div>
    )
}

export default FontAwesome;