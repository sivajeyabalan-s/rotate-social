import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Cocktails from './components/Cocktails.jsx'
import About from './components/About.jsx'
import Art from './components/Art.jsx'
import Menu from './components/Menu.jsx'
import Contact from './components/Contact.jsx'
import MenuPage from './pages/MenuPage.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

gsap.registerPlugin(ScrollTrigger, SplitText);

const Home = () => (
  <main>
    <Navbar />
    <Hero />
    <Cocktails />
    <About />
    <Art />
    <Menu />
    <Contact />
  </main>
);

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<MenuPage />} />
    </Routes>
  </BrowserRouter>
);

export default App
