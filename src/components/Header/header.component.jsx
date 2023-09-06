
import FontAwesome from '../FontAwesome/fontawesome.component.jsx'
import Links from '../Links/links.component.jsx'
import Title from '../Title/title.component.jsx'

import './header.styles.css'

const Header = () => {
    return (
        <div id='header'>
            <Links />
            <FontAwesome />
            <Title />

        </div>

    )
}

export default Header