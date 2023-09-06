import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './carousel.styles.css'
//import bg from './bg4.png'

const items = [
    <div className="item" data-value="1"><img className="image" alt="test" src="https://www.yorkpress.co.uk/resources/images/10809630/?type=responsive-gallery-fullscreen" /></div>,
    <div className="item" data-value="2"><img className="image" alt="test" src="https://www.yorkpress.co.uk/resources/images/10809633/?type=responsive-gallery-fullscreen" /></div>,
    <div className="item" data-value="3"><img className="image" alt="test" src="https://www.yorkpress.co.uk/resources/images/12185527.jpg?type=mds-article-962" /></div>,

];

const Carousel = () => (
    <div className=' carousel-div'>
        {/*<img src={bg} className="bgimg"></img>*/}
        <AliceCarousel id="carousel"
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={2000}
            animationDuration={4000}
            animationType="slide"
            infinite
            touchTracking={false}
            disableDotsControls
            disableButtonsControls
            items={items}
        />
    </div>
);
export default Carousel