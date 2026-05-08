'use client';

import './Menu.css';
import { menuItems } from '../../constants/index.js'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'
import gsap from 'gsap';

const Menu = () => {
 const contentRef = useRef();
 const tabsRef = useRef(null);
 const categories = [...new Set(menuItems.map((item) => item.category))];
 const [activeCategory, setActiveCategory] = useState(categories[0] || '');
 const [currentItemIndex, setCurrentItemIndex] = useState(0);
 const activeItems = menuItems.filter((item) => item.category === activeCategory);
 const totalItems = activeItems.length;
 
 useGSAP(() => {
	gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });
	gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -100 }, {
	 xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
	})
	gsap.fromTo('.details h2', { yPercent: 100, opacity: 0 }, {
	 yPercent: 0, opacity: 100, ease: 'power1.inOut'
	})
	gsap.fromTo('.details p', { yPercent: 100, opacity: 0 }, {
	 yPercent: 0, opacity: 100, ease: 'power1.inOut'
	})
 }, [activeCategory, currentItemIndex]);
 
 const goToSlide = (indexOffset) => {
	if (totalItems === 0) return;
	const newIndex = (currentItemIndex + indexOffset + totalItems) % totalItems;
	setCurrentItemIndex(newIndex);
 }
 
 const getItemAt = (indexOffset) => {
	if (totalItems === 0) return null;
	return activeItems[(currentItemIndex + indexOffset + totalItems) % totalItems]
 }
 
 const currentItem = getItemAt(0);
 const prevItem = getItemAt(-1);
 const nextItem = getItemAt(1);

 const scrollTabs = (direction) => {
	const el = tabsRef.current;
	if (!el) return;
	const amount = Math.max(220, el.clientWidth * 0.7);
	el.scrollBy({ left: direction * amount, behavior: 'smooth' });
 }
 
 return (
	<section id="menu" aria-labelledby="menu-heading">
	 <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
	 <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />
	 
	 <h2 id="menu-heading" className="sr-only">
		Menu Categories
	 </h2>
	 
	 <div className="category-tabs-wrap">
		

		<nav ref={tabsRef} className="cocktail-tabs" aria-label="Menu Category Navigation">
		 {categories.map((category) => {
			const isActive = category === activeCategory;
			
			return (
			 <button
			  key={category}
			  className={`category-tab ${isActive ? 'category-tab--active' : ''}`}
			  onClick={() => {
				 setActiveCategory(category);
				 setCurrentItemIndex(0);
			  }}
			 >
			  {category}
			 </button>
			)
		 })}
		</nav>

		
	 </div>
	 
	 <div className="content">
		<div className="arrows">
		 <button className="text-left" onClick={() => goToSlide(-1)}>
			<span>{prevItem?.name || activeCategory}</span>
			<img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
		 </button>
		 
		 <button className="text-left" onClick={() => goToSlide(1)}>
			<span>{nextItem?.name || activeCategory}</span>
			<img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
		 </button>
		</div>
		
		<div className="cocktail">
		 <img src={currentItem?.image || '/images/drinks/drink1.png'} className="object-contain"/>
		</div>
		
		<div className="recipe">
		 <div ref={contentRef} className="info">
			<p>Selected item:</p>
			<p id="title">{currentItem?.name || activeCategory}</p>
		 </div>
		 
		 <div className="details">
			<h2>{currentItem?.name || activeCategory || 'Our Menu'}</h2>
			<p>{currentItem?.description || 'Explore this category to discover our offerings.'}</p>
		 </div>
		</div>
	 </div>

		<div className="flex-center mt-16 relative z-10">
		 <Link to="/menu" className="view-menu-btn">
			<span>View Full Menu</span>
			<img src="/images/right-arrow.png" alt="" aria-hidden="true" className="w-4 h-4 opacity-80" />
		 </Link>
		</div>
	</section>
 )
}
export default Menu
