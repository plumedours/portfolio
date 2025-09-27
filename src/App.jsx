import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import DevelopmentPage from './Development';
import PhotoGallery from './Gallery';
import ModelizationPage from './Modelization';
import Page from './components/commons/Page';

import './App.css'

function App() {

  return (
    <div className='flex flex-col min-h-screen bg-neutral-800'>
      <Router basename="/portfolio">
        <Navbar />
        <div className="flex flex-grow">
          <Routes>
            <Route path="/" element={<Page title="Accueil | Plume d'ours"><Home /></Page>} />
            <Route path="/development" element={<Page title="Projets de Développement"><DevelopmentPage /></Page>} />
            <Route path="/gallery" element={<Page title="Galerie Photos | Maxime Bory"><PhotoGallery /></Page>} />
            <Route path="/modelization" element={<Page title="Modélisation 3D"><ModelizationPage /></Page>} />
            <Route path="/about" element={<Page title="À Propos"><About /></Page>} />
            <Route path="/contact" element={<Page title="Me Contacter"><Contact /></Page>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;