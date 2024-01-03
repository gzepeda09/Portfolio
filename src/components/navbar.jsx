import React from 'react'
import {useState, useEffect} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = () => {
	//put into seperate component
	// const [isInView, setIsInView] = useState(false);
	// const [sectionID, setSectionID] = useState('about');

	// const checkScroll = () => {
	//     const section = document.getElementById(sectionID);

	//     const rect = section.getBoundingClientRect();
	//     const isInView = rect.bottom > 0;
	//     console.log(isInView);
	//     setIsInView(isInView);
 //  };

 //  useEffect(() => {
 //    window.addEventListener('scroll', checkScroll);
 //    return () => window.removeEventListener('scroll', checkScroll);
 //  }, [checkScroll, sectionID]);

 //  useEffect(() => {
 //    if (isInView) {
 //      // Load more data or perform actions when the section is in view
 //    }
 //  }, [isInView]);



	return (



		<>

			<nav className="fixed  w-full ">

			 <div className="container mx-auto flex justify-center text-lg md:text-2xl">
				<AnchorLink href="#hero"> 
					<button className="rounded-full mx-3 md:mx-10" > Name </button>
				</AnchorLink>
				<AnchorLink href="#about"> 
					<button className="rounded-full mx-3 md:mx-10"> About Me </button>
				</AnchorLink>
				<AnchorLink href="#project"> 
					<button className="rounded-full mx-3 md:mx-10"> Projects </button>
				</AnchorLink>
				<AnchorLink href="#skills"> 
					<button className="rounded-full mx-3 md:mx-10"> Skills </button>
				</AnchorLink>

			  </div>
			</nav>

		</>
	)
}

export default Navbar