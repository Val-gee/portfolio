import './App.css';
import Projects from './components/Projects/Projects.js';
import Header from './components/Header.js';
import Navigation from './components/Navbar/Navigation.js';
import Footer from './components/Footer.js';
import Aboutme from './components/About/About.js';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume.js';


function App() {

  // function initialDisplay() {
  //   var projects = document.querySelector('#projects');
  //   var contact = document.querySelector('.contactform');
  //   var resume = document.querySelector('.resume');
  //   var aboutme = document.querySelector('.info');
  //   projects.style = "display: none";
  //   contact.style = "display: none";
  //   resume.style = "display: none";
  //   aboutme.style = "display: block";
  // }
  // initialDisplay();

  return (
    <div className="App">
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
