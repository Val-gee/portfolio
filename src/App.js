import './App.css';
import Projects from './components/Projects/Projects.js';
import Header from './components/Header.js';
import Navigation from './components/Navbar/Navigation.js';
import Footer from './components/Footer.js';
import Aboutme from './components/About/About.js';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume.js';
import { useState } from 'react';


function App() {

  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showAbout, setShowAbout] = useState(true);


  return (
    <div className="App">
      <div>
        <Header />
        <Navigation
          setShowProjects={setShowProjects}
          showProjects={showProjects}
          setShowContact={setShowContact}
          showContact={showContact}
          setShowResume={setShowResume}
          showResume={showResume}
          setShowAbout={setShowAbout}
          showAbout={showAbout}
        />
        {showAbout &&
          <>
            <Aboutme />
          </>
        }
        {showProjects &&
          <>
            <Projects />
          </>
        }
        {showContact &&
          <>
            <Contact />
          </>
        }{showResume &&
          <>
            <Resume />
          </>
        }
        <Footer />
      </div>
    </div>
  );
}

export default App;
