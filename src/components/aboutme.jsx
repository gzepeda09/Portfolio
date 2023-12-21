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
import React, { useEffect, useState } from 'react';

const AboutMe = () => {
  const [isInView, setIsInView] = useState(false);

  const checkScroll = () => {
    const hero = document.getElementById('hero');
    const rect = hero.getBoundingClientRect();
    const isInView = rect.bottom <= 0;
    setIsInView(isInView);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  useEffect(() => {
    if (isInView) {
      // Load more data here
    }
  }, [isInView]);

  return (
    <div className={`transform transition-transform duration-500 ease-in-out ${isInView ? 'translate-x-10' : 'translate-x-full'}`}>
      <section className=" text-center py-20 sm:py-60 md:py-40 xl:py-60 ">
        <div className="grid grid-rows-3 grid-flow-col">
          <div className="row-span-3">
            <img src="./public/assets/grad.jpg" alt="Your name" className="lg:py-40 xl:py-20  border-solid border-4 border-y-0 border-black "/>
          </div>

          <div className="col-span-2 text-left mt-5">
            <h2 className=" text-7xl font-bold text-white ">
              About Me
            </h2>
          </div>

            <div className="row-span-2 mt-3 text-left text-7x1">
            <p className="text-white  "> Hello </p>
            </div>
   
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
