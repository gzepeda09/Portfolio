

const Hero = () => {
  return (
    <section id='hero' className=" py-20 md:py-40 sm:py-60">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-12 md:space-y-20">
        <h1 className="text-4xl font-bold text-center md:text-5xl">
         Geno Zepeda
        </h1>
        <p className="text-lg text-center md:text-xl">
          B.S. Computer Science
         
        </p>
        <p> 
           M.S. Software Engineering (in progress)
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#project"
            className="px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700"
          >
            See My Projects
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 "
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;