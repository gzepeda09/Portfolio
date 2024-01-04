import React from 'react'
import {useState, useEffect} from 'react';


const NavScroll = ({sectionID, changeActive}) => {
	const [isInView, setIsInView] = useState(false);

	const checkScroll = () => {
	    const section = document.getElementById(sectionID);

	    const rect = section.getBoundingClientRect();
	    const isInView = rect.bottom > 0 && rect.top < 2;
	    // console.log(isInView);
	    setIsInView(isInView);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [checkScroll, sectionID]);

  useEffect(() => {
    if (isInView) {
     changeActive({value: true});
    } else {
    	changeActive({ value: false});
    }
  }, [isInView]);
	return (
		<>


		</>
	)
}

export default NavScroll