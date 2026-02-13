import { Header } from './components/layout/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Donate } from './pages/Donate';

function App() {
  return (
    <Router basename="/ong-template">\n      <div className="flex flex-col min-h-screen font-sans text-brand-dark bg-brand-surface selection:bg-brand-accent/20 selection:text-brand-dark">
      <Header />
      <div className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
