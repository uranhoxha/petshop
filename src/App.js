import logo from './logo.svg';
import './App.css';
import Navbar from './Containers/Navbar/navbar';
import Landing from './Containers/Landing/landing';
import About from './Containers/About/about';
import Adoption from './Containers/Adoption/adoption';
import Footer from './Containers/Footer/footer';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Landing />
    <About />
    <Adoption />
    <Footer />
    </div>
  );
}

export default App;
