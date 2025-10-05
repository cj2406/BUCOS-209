//CAMPBELL JOEL OLUWTIMILEHIN 24/1409
//SOFTWARE ENGINEERING GROUP B

import './css/App.css';
import About from'./components/about.js';
import Products from'./components/product.js';
import Home from './components/hero.js';
import Services from './components/services.js'


//COMPONENT
 function App(){
return(
  <div>
 //COMPONENTS
    <Home />
    <About />
    <Products></Products>
    <Services />
  </div>
)
}

//XPORT
export default App;
