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
    <div>
      
        
        <section className="bg-white text-center py-20 md:py-40 lg:px-8">
          <img src="path-to-your-image" alt="Your name" className="mx-auto w-32 h-32 rounded-full xl:w-48 xl:h-48"/>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Your Name
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            Your about me text...
          </p>
        </section>
    

    </div>
  );
};

export default AboutMe;
