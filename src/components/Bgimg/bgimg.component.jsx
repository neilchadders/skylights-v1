
import './bgimg.styles.css'
import bg from './bg4.png'
const Bgimg = () => {
    return (
        <div id='bg-img-div'>
            <div>
                <img className="bgimg" src={bg}></img>
            </div>

        </div>
    )
}

export default Bgimg