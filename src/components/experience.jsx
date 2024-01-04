import React from 'react'
import exp from "../data/experience.js"
import ExperienceItem from "./experienceitem.jsx"
import Scroll from './scrollsection.jsx';


const Experience = () => {
	return (
		<>
		<Scroll sectionID="skills">
			<div className="text-5xl md:text-7xl text-center pb-16">
				<h1> Experience </h1>
			</div>
			<div className="flex flex-col md:flex-row items-center justify-center">

			        			
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				
			{exp.map(experience => (

				<ExperienceItem
					name={experience.name}
					link={experience.link}
					description={experience.description}
					date={experience.date}

				/>

			))}
				</div>
			</div>
		</Scroll>
		</>
	)
}

export default Experience