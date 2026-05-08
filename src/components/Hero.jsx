import './Hero.css';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

const Hero = () => {
 const videoRef = useRef();
 
 useGSAP(() => {
	const heroSplit = new SplitText(".title", {
	 type: "chars, words",
	});
	
	const paragraphSplit = new SplitText(".subtitle", {
	 type: "lines",
	});
	
	// Apply text-gradient class once before animating
	heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
	
	gsap.from(heroSplit.chars, {
	 yPercent: 100,
	 duration: 1.8,
	 ease: "expo.out",
	 stagger: 0.06,
	});
	
	gsap.from(paragraphSplit.lines, {
	 opacity: 0,
	 yPercent: 100,
	 duration: 1.8,
	 ease: "expo.out",
	 stagger: 0.06,
	 delay: 1,
	});
	
	gsap
	.timeline({
	 scrollTrigger: {
		trigger: "#hero",
		start: "top top",
		end: "bottom top",
		scrub: true,
	 },
	})
	.to(".right-leaf", { y: 200 }, 0)
	.to(".left-leaf", { y: -200 }, 0)
	.to(".arrow", { y: 100 }, 0);
	
 }, []);
 
 return (
	<>
	 <section id="hero" className="noisy">
		<h1 className="title">ROTATE SOCIAL</h1>
		
		<img
		 src="/images/hero-left-leaf.png"
		 alt="left-leaf"
		 className="left-leaf"
		/>
		<img
		 src="/images/hero-right-leaf.png"
		 alt="right-leaf"
		 className="right-leaf"
		/>
		
		<div className="body">
		 {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}
		 
		 <div className="content">
			<div className="space-y-5 hidden md:block">
			 <p>Crafted. Disciplined. Purposeful.</p>
			 <p className="subtitle">
				Guided by <br /> Tradition
			 </p>
			</div>
			
			<div className="view-cocktails">
			 <p className="subtitle">
				Everything we do is a blend of intention, discipline, and
				timeless craft - designed to elevate every experience.
			 </p>
			 <a href="#services">Explore Our Services</a>
			</div>
		 </div>
		</div>

		<div className="video">
		 <video
			className="hero-video"
			ref={videoRef}
			muted
			playsInline
			autoPlay
			loop
			disablePictureInPicture
			preload="auto"
			src="/videos/output.mp4"
		 />
		</div>
	 </section>
	</>
 );
};

export default Hero;
