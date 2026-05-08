import './MenuPage.css';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import { menuItems } from '../../constants/index.js';
import Navbar from '../components/Navbar.jsx';

const CATEGORIES = [
  'All',
  'Appetizers',
  'Kebabs',
  'Mains',
  'Curries',
  'Rice',
  'Breads',
  'Salads',
  'Desserts',
  'Drinks',
];

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
          {item.price ? <span className="menu-card-price">{item.price}</span> : null}
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
  const categoryOrder = CATEGORIES.filter((cat) => cat !== 'All');
  const groupedForAll = categoryOrder
    .map((cat) => ({
      category: cat,
      items: menuItems.filter((item) => item.category === cat),
    }))
    .filter((group) => group.items.length > 0);

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
      {activeCategory === 'All' ? (
        <div className="space-y-14">
          {groupedForAll.map((group) => (
            <section key={group.category}>
              <h2 className="text-3xl md:text-4xl font-modern-negra text-white mb-6 ml-3 md:ml-6">
                {group.category}
              </h2>
              <div className="menu-grid">
                {group.items.map((item, i) => (
                  <MenuCard key={item.id} item={item} index={i} />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="menu-grid">
          {filtered.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </div>
      )}

      <p className="menu-page-footer-note">
        All items are prepared fresh daily — availability may vary.
      </p>
    </div>
  );
};

export default MenuPage;
