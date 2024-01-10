
import {useState, useEffect} from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import NavScroll from './navscroll.jsx'
import { ArrowLongRightIcon, ArrowLongLeftIcon } from '@heroicons/react/24/solid'
import useScreenSize from './screensize.jsx'




const Navbar = () => {
	const [isActive, setIsActive] = useState(true);
	const [isAActive, setIsAActive] = useState(false);
	const [isPActive, setIsPActive] = useState(false);
	const [isSActive, setIsSActive] = useState(false);
	const [isEActive, setIsEActive] = useState(false);
	const [isCActive, setIsCActive] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	const screenSize = useScreenSize();
	

	const handleActive = ({value}) => {
		setIsActive(value);
	}
	const handleAActive = ({value}) => {
		setIsAActive(value);
	}
	const handlePActive = ({value}) => {
		setIsPActive(value);
	}
	const handleSActive = ({value}) => {
		setIsSActive(value);
	}
	const handleEActive = ({value}) => {
		setIsEActive(value);
	}
	const handleCActive = ({value}) => {
		setIsEActive(value);
	}

	console.log(screenSize.width)

	useEffect(() => {
	  if (screenSize.width <= 640) {
	    setIsClicked(false);
	  } else {
	    setIsClicked(true);
	  }
	}, [screenSize]);

	return (



		<>

			<nav className="fixed  w-full  ">

			 <div className="container flex justify-center text-sm md:text-2xl pt-5">
			 	<div className={`transition-opacity duration-1000 ${isClicked ? 'opacity-100' : 'opacity-0'}`} >

					<AnchorLink href="#hero"> 
					<NavScroll sectionID='hero' changeActive={handleActive} />
						<button className={`rounded-full mx-1 md:mx-10 ${
	                isActive ? 'bg-red-950 w-24 md:w-48 text-md md:text-3xl' : 'hover:md:text-4xl'}`} > Name </button>
						
					</AnchorLink>
					<AnchorLink href="#about"> 
					<NavScroll sectionID='about' changeActive={handleAActive} />
						<button className={`rounded-full mx-1 md:mx-10 ${
	                isAActive ? 'bg-black w-28 md:w-48 text-md md:text-3xl' : 'hover:md:text-4xl'}`} > About Me </button>
						
					</AnchorLink>
					<AnchorLink href="#project"> 
					<NavScroll sectionID='project' changeActive={handlePActive} />
						<button className={`rounded-full mx-1 md:mx-10 ${
	                isPActive ? 'bg-red-950 w-24 md:w-48 text-md md:text-3xl' : 'hover:md:text-4xl'}`} > Projects </button>
						
					</AnchorLink>
					
					<AnchorLink href="#skills"> 
					<NavScroll sectionID='skills' changeActive={handleSActive} />
						<button className={`rounded-full mx-1 md:mx-10 ${
	                isSActive ? 'bg-black w-24 md:w-48 text-md md:text-3xl' : 'hover:md:text-4xl'}`} > Skills </button>
						
					</AnchorLink>

					<AnchorLink href="#experience"> 
					<NavScroll sectionID='experience' changeActive={handleEActive} />
						<button className={`rounded-full mx-1 mt-2 md:mx-10 ${
	                isEActive ? 'bg-red-950 w-24 md:w-56 text-md md:text-3xl' : 'hover:md:text-4xl'}`} > Experience </button>
						
					</AnchorLink>


					<AnchorLink href="#contact"> 
					<NavScroll sectionID='contact' changeActive={handleCActive} />
						<button className={`rounded-full mx-1 mt-2 md:mx-10 ${
	                isCActive ? 'bg-red-950 w-24 md:w-56 text-md md:text-3xl' : 'hover:md:text-4xl'}`} > Contact </button>
						
					</AnchorLink>
					</div>


					{isClicked ? (
					  <ArrowLongRightIcon
					    className="h-10 w-14 mx-5 md:h-10 md:w-20 bg-red-950 hover:bg-black hover:cursor-pointer "
					    onClick={() => setIsClicked(false)}
					  />
					) : (
					  <ArrowLongLeftIcon
					    className="h-10 w-14 mx-5 md:h-10 md:w-20 bg-red-950 hover:bg-black hover:cursor-pointer "
					    onClick={() => setIsClicked(true)}
					  />
					)}

			  </div>
			</nav>

		</>
	)
}

export default Navbar