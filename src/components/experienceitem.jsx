import React from 'react'

const ExperienceItem = ({name, link, description, date}) => {
	return (
		<>
			<a href={link} target="_blank" className="border-2 hover:border-4 hover:border-orange-500 border-white rounded-md overflow-hidden">
			<div>
				<div>
					<h1 className="text-xl md:text-4xl">
						{name}
					</h1>
				</div>
				
				<div className="pt-2">
					<h3 className="text-lg md:text-xl"> 
						{date} 
					</h3>
				</div>
				
				<div className="pt-2"> 
					<p>
						{description}
					</p>
				</div>

			</div>
			</a>

		</>
	)
}

export default ExperienceItem