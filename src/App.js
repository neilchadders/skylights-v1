import Header from './components/Header/header.component.jsx'
import Carousel from './components/Carousel/carousel.component.jsx'
import Title from './components/Title/title.component.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import './App.css';


const App = () => {
  return (
    <>
      <Header />
      <Title />
      <Carousel />

    </> // fragment
  );
}

export default App;
library.add(fab, fas, far)