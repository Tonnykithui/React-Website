import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar'
import Home from './components/pages/Home';
import Pricing from './components/pricing/Pricing';
import {homeObj, mktObj, mktExchObj} from './data/Data'
function App() {
  return (
    
    <div className="App">
      <Navbar />
      <Home {...homeObj} />
      <Home {...mktObj}/>
      <Pricing />
      <Home {...mktExchObj}/>
      <Footer />
    </div>
    
  );
}

export default App;
