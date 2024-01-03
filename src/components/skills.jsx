import skill from '../data/skills.js';
import Scroll from './scrollsection.jsx';
import SkillsInfo  from './skillsinfo.jsx';

const Skills = () => {
	return (
		<>
		<Scroll sectionID='project'>
		<h1 className=" text-5xl md:text-7xl text-center pb-16" > Skills </h1>
		<div className="flex flex-col md:flex-row items-center justify-center">
			<div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-96 ">
			{skill.map(skill =>(

				<SkillsInfo
					name={skill.name}
					stack={skill.stack}
				/>

			))}
			</div>
		</div>
		</Scroll>
		</>
	)
}

export default Skills