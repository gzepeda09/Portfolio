// import React, {useState, useEffect} from 'react';

// const Scroll = ({ sectionID, children }) => {
//   const [isInView, setIsInView] = useState(false);

//   const checkScroll = () => {
//     const section = document.getElementById(sectionID);

//     const rect = section.getBoundingClientRect();
//     const isInView = rect.bottom < 0;
//     // console.log(isInView);
//     setIsInView(isInView);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', checkScroll);
//     return () => window.removeEventListener('scroll', checkScroll);
//   }, [checkScroll, sectionID]);

//   useEffect(() => {
//     if (isInView) {
//       // Load more data or perform actions when the section is in view
//     }
//   }, [isInView]);


//   console.log(children);

//     return (
//     <section className="text-center px-8 md:py-4 xl:py-60">
//       <div className={`transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>

//         {children}
//       </div>
//     </section>
//     );
// };

// export default Scroll;

import React, { useState, useEffect, useRef } from 'react';

const Scroll = ({ sectionID, children }) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const checkScroll = (entries) => {
    entries.forEach((entry) => {
      setIsInView(entry.isIntersecting);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(checkScroll, { threshold: 0 });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [sectionID]);

  useEffect(() => {
    if (isInView) {
      // Load more data or perform actions when the section is in view
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="text-center px-8 md:py-4 xl:py-60">
      <div className={`transition-opacity duration-2000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </section>
  );
};

export default Scroll;
