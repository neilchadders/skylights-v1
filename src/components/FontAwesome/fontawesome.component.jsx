import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './fontawesome.styles.css'

const FontAwesome = () => {
    return (
        <div id='font-awesome'>
            <a target="_blank" attribute href='https://music.apple.com/gb/artist/skylights/1453747940'><FontAwesomeIcon className='icon' icon="fa-brands fa-apple" size="xl" style={{ color: "#000000", }} /></a>
            <a target="_blank" attribute href='https://www.instagram.com/skylightsyra/'><FontAwesomeIcon className='icon' icon="fa-brands fa-square-instagram" size="xl" style={{ color: "#000000", }} /></a>
            <a target="_blank" attribute href='https://www.facebook.com/SkylightsYRA'><FontAwesomeIcon className='icon' icon="fa-brands fa-square-facebook" size="xl" style={{ color: "#000000", }} /></a>
            <a target="_blank" attribute href='https://twitter.com/SkylightsYRA'><FontAwesomeIcon className='icon' icon="fa-brands fa-square-twitter" size="xl" style={{ color: "#000000", }} /></a>
            <a target="_blank" attribute href='https://open.spotify.com/artist/66Gz29vqxLIyLZuBSUyJgP'><FontAwesomeIcon className='icon' icon="fa-brands fa-spotify" size="xl" style={{ color: "#080808", }} /></a>
            <a target="_blank" attribute href='https://soundcloud.com/skylights_yra'><FontAwesomeIcon className='icon' icon="fa-brands fa-soundcloud" size="xl" style={{ color: "#000000", }} /></a>
        </div>
    )
}

export default FontAwesome;