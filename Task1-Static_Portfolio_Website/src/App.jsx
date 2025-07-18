import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar'
import Portfolios from './components/Portfolios';
import Exeperience from './components/Exeperience';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <div>
        <NavBar />      
        <Home />
        <About />
        <Portfolios />
        <Exeperience /> 
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
