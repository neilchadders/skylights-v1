import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"
import './fontawesome.styles.css'

const FontAwesome = () => {
    return (
        <div id='font-awesome'>
            <Link target="_blank" to='https://music.apple.com/gb/artist/skylights/1453747940'><FontAwesomeIcon className='icon' icon="fa-brands fa-apple" size="xl" style={{ color: "#FFFFFF", }} /></Link>
            <Link target="_blank" to='https://www.instagram.com/skylightsyra/'><FontAwesomeIcon className='icon' icon="fa-brands fa-square-instagram" size="xl" style={{ color: "#FFFFFF", }} /></Link>
            <Link target="_blank" to='https://www.facebook.com/SkylightsYRA'><FontAwesomeIcon className='icon' icon="fa-brands fa-square-facebook" size="xl" tyle={{ color: "#FFFFFF", }} /></Link>
            <Link target="_blank" to='https://twitter.com/SkylightsYRA'><FontAwesomeIcon className='icon' icon="fa-brands fa-square-twitter" size="xl" style={{ color: "#FFFFFF", }} /></Link>
            <Link target="_blank" to='https://open.spotify.com/artist/66Gz29vqxLIyLZuBSUyJgP'><FontAwesomeIcon className='icon' icon="fa-brands fa-spotify" size="xl" style={{ color: "#FFFFFF", }} /></Link>
            <Link target="_blank" to='https://soundcloud.com/skylights_yra'><FontAwesomeIcon className='icon' icon="fa-brands fa-soundcloud" size="xl" style={{ color: "#FFFFFF", }} /></Link>
        </div>
    )
}

export default FontAwesome;