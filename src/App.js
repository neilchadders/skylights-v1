import Header from './components/Header/header.component.jsx'
import Carousel from './components/Carousel/carousel.component.jsx'
//import Title from './components//Title/title.component.jsx'
import Bgimg from './components/Bgimg/bgimg.component'
import Gigs from './components/Gigs/gigs.component.jsx'

import Footer from './components/Footer/footer.component.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import './App.css';
import Mainvideo from './components/Mainvideo/mainvideo.component.jsx'



const App = () => {
  return (
    <>
      <Header />

      <Carousel />
      <Bgimg />
      <Gigs />
      <Mainvideo />
      <Footer />

    </> // fragment
  );
}

export default App;
library.add(fab, fas, far)