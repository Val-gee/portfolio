// import logo from './logo.svg';
import './App.css';
import Projects from './components/Projects/Projects.js';
import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import Footer from './components/Footer.js';
import Aboutme from './components/About/About.js';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume.js';


function App() {


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        <Header />
        <Navigation />
        <Aboutme />
        <Projects />
        <Contact />
        <Resume />
        <Footer />
      </div>
    </div>
  );
}

export default App;
