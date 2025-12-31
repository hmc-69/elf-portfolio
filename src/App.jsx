import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Snowfall from './components/Snowfall';

function App() {
  return (
    <main className="relative bg-midnight-pine text-snow-drift min-h-screen selection:bg-tech-gold selection:text-midnight-pine">
      <Snowfall />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className="py-6 text-center text-glacial-mist font-mono text-sm bg-midnight-pine border-t border-white/5 relative z-10">
        <p> Made with 🍪 and Code at North Pole Station 4.</p>
      </footer>
    </main>
  );
}

export default App;
