import Proj from "../projects.js";
import ProjectInfo from "./projectsinfo.jsx";
import Scroll from './scrollsection.jsx';
import React from 'react'



const Projects = () => {
	return (

		<>

		<Scroll sectionID='about'>
			
		<h1 className=" text-5xl md:text-7xl text-center pb-16" > Projects </h1>
			
			
 		<div className="flex flex-col md:flex-row items-center justify-center">
         			
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		
			{Proj.map(project => (
				<ProjectInfo 
					name = {project.name} 
					stack = {project.stack} 
					imgUrl={project.imgUrl} 
					link = {project.link}
					key={project.key}
				/>
			))}
			</div>
		</div>


		</Scroll>
		</>
	)
};

export default Projects;