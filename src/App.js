import Header from './components/Header/header.component.jsx'
import Carousel from './components/Carousel/carousel.component.jsx'
//import Title from './components//Title/title.component.jsx'
//import Bgimg from './components/Bgimg/bgimg.component'
//import Gigs from './components/Gigs/gigs.component.jsx'

import Home from './routes/home/home.route.jsx'
import About from './routes/about/about.route.jsx'


import Footer from './components/Footer/footer.component.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'

import { Route, Routes } from 'react-router-dom'



// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import './App.css';




const App = () => {
  return (
    <>
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        {/*<Route path='auth' element={<Gigs />} />
        <Route path='shop' element={<Shop />} />
        <Route path='releases' element={<Releases />} /> */}
      </Routes>
      <Footer />


      {/*<Routes path = "/" element = <Carousel />
        <Bgimg />
      </Router>
      <Footer /> */}

    </> // fragment
  );
}

export default App;
library.add(fab, fas, far)