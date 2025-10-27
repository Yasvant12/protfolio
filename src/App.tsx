import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-custom text-white overflow-x-hidden">
      {/* Background with static pattern */}
      <div className="fixed inset-0 bg-gradient-custom z-[-2]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(139,92,246,0.15)_0%,transparent_50%),radial-gradient(circle_at_85%_75%,rgba(59,130,246,0.12)_0%,transparent_50%),radial-gradient(circle_at_45%_10%,rgba(236,72,153,0.08)_0%,transparent_50%),radial-gradient(circle_at_75%_40%,rgba(16,185,129,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[length:40px_40px] opacity-50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_40%,rgba(139,92,246,0.04)_50%,transparent_60%),linear-gradient(150deg,transparent_40%,rgba(59,130,246,0.04)_50%,transparent_60%)] bg-[length:100px_100px,120px_120px]"></div>
      </div>

      <Header scrolled={scrolled} />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
