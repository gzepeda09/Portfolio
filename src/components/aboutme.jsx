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

          <div className="col-span-2 text-left ml-3 md:mt-5 sm:ml-5 ">
            <h2 className=" text-md md:text-3xl  font-bold text-white ">
              About Me
            </h2>
          </div>

            <div className="row-span-2 ml-3 md:mt-3  text-left">
            <p className="text-white  text-xs md:text-2xl md:w-96">
                    I am 25 years old and was born and raised in California. 
                    I attended CSU, Bakersfield where I earned a B.S. in Computer Science. 
                    I am now attending San Jose State where I am pursuing my M.S. in Software Engineer.
                    My goal is to become a Software Engineering where I can develop software that can be used for real world problems.
            </p>
            </div>
         
        </div>
        
      </Scroll>
      

  ); 
}; 

export default AboutMe;
