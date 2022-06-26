import './App.css';

import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Manage from './Components/Manage';
import Nav from './Components/Nav';
import Subscription from './Components/Subscription';
import Tips from './Components/Tips';

function App() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Manage/>
      <Tips/>
      <Subscription/>
      <Footer/>
    </div>
  );
}

export default App;
