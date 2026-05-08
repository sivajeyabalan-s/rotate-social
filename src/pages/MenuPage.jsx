import './MenuPage.css';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import { menuItems } from '../../constants/index.js';
import Navbar from '../components/Navbar.jsx';

const CATEGORIES = ['All', 'Signature', 'Seasonal', 'Artisanal', 'Mocktail'];

const MenuCard = ({ item, index }) => {
  const cardRef = useRef();

  useGSAP(() => {
    gsap.fromTo(cardRef.current, {
      opacity: 0,
      y: 60,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: index * 0.1,
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 88%',
      },
    });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      y: -10,
      scale: 1.02,
      duration: 0.35,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      duration: 0.35,
      ease: 'power2.inOut',
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="menu-card"
    >
      <div className="menu-card-img">
        <div className="noisy" />
        <img src={item.image} alt={item.name} />
        <div className="menu-card-img-overlay" />
        <span className="menu-card-badge">{item.category}</span>
      </div>

      <div className="menu-card-body">
        <div className="flex justify-between items-start gap-2">
          <h3 className="menu-card-name">{item.name}</h3>
          <span className="menu-card-price">{item.price}</span>
        </div>
        <p className="menu-card-desc">{item.description}</p>
        <div className="menu-card-divider" />
        <p className="menu-card-craft">Crafted with intention</p>
      </div>
    </div>
  );
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const headingRef = useRef();
  const filterRef = useRef();

  const filtered = activeCategory === 'All'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  useGSAP(() => {
    const split = SplitText.create(headingRef.current, { type: 'chars' });
    split.chars.forEach((c) => c.classList.add('text-gradient'));

    gsap.from(split.chars, {
      yPercent: 110,
      opacity: 0,
      duration: 1.2,
      ease: 'expo.out',
      stagger: 0.04,
    });

    gsap.from(filterRef.current.children, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.08,
      delay: 0.6,
    });
  }, []);

  return (
    <div className="menu-page">

      <Navbar />

      {/* Hero text */}
      <div className="menu-page-hero">
        <p className="menu-page-eyebrow">Crafted with intention. Guided by tradition.</p>
        <div className="overflow-hidden">
          <h1 ref={headingRef} className="menu-page-title font-modern-negra">
            OUR MENU
          </h1>
        </div>
      </div>

      {/* Category filters */}
      <div ref={filterRef} className="menu-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`menu-filter-btn ${activeCategory === cat ? 'menu-filter-btn--active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="menu-grid">
        {filtered.map((item, i) => (
          <MenuCard key={item.id} item={item} index={i} />
        ))}
      </div>

      <p className="menu-page-footer-note">
        All items are prepared fresh daily — availability may vary.
      </p>
    </div>
  );
};

export default MenuPage;
