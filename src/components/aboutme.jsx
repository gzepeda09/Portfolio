// import React, { useEffect, useRef, useCallback } from 'react';

// const AboutMe = () => {
//   const observer = useRef();
//   const lastElementRef = useCallback(node => {
//     if (observer.current) observer.current.disconnect();
//     observer.current = new IntersectionObserver(entries => {
//       if (entries[0].isIntersecting) {
//         // Load more data here
//       }
//     })
//     rootMargin: '0px 0px -100% 0px'
//     if (node) observer.current.observe(node);
//   }, [])

//   return (
//     <div>
//       
//     </div>
//   );
// };

// export default AboutMe;
// import React, { useEffect, useState } from 'react';
// this Grad is for github pages deployment
// import Grad from '/home/runner/work/portfolio/portfolio/public/assets/grad.jpg';
import Scroll from './scrollsection.jsx';

//this Grad is for development
import Grad from '../../public/assets/grad.jpg';

const AboutMe = ({isinView}) => {
  // const [isInView, setIsInView] = useState(false);

  // const checkScroll = () => {
  //   const hero = document.getElementById('hero');
  //   const rect = hero.getBoundingClientRect();
  //   const isInView = rect.bottom  < 0;
  //   console.log(isInView);
  //   setIsInView(isInView);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', checkScroll);
  //   return () => window.removeEventListener('scroll', checkScroll);
  // }, []);

  // useEffect(() => {
  //   if (isInView) {
  //     // Load more data here
  //   }
  // }, [isInView]);



  return (

     <Scroll sectionID='hero' >
      
        <div className="grid grid-rows-3 grid-flow-col">
          <div className="row-span-3">
            <img src={Grad} alt="Your name" className="  border-solid border-4 border-y-0 border-black w-48  lg:w-96 md:w-64 "/>
          </div>

          <div className="col-span-2 text-left mt-5 ">
            <h2 className=" text-7x1 md:text-3xl sm:text-2x1 font-bold text-white ">
              About Me
            </h2>
          </div>

            <div className="row-span-2 mt-3 text-left text-7x1">
            <p className="text-white  ">Hello </p>
            </div>
         
        </div>
        
      </Scroll>
      

  ); 
}; 

export default AboutMe;
