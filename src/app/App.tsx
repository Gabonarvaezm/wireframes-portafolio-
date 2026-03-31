import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Value } from './components/Value';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Learning } from './components/Learning';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Value />
        <Projects />
        <Experience />
        <Skills />
        <Testimonials />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
