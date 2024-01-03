import React from 'react'


const SkillsInfo = ({name, stack}) => {
	return (
		<>
			<div>
				<div>
				<h1 className=" underline font-bold text-2xl md:text-5xl text-center" > {name} </h1>
				</div>

			{stack.map(item => (
				<div className="pt-2 md:pt-10">
				<p className="text-xl hover:text-3xl inline-block px-2 py-1 font-semibold border-2 border-white  rounded-md"> {item} </p>


				</div>
				))}
			</div>



		</>
	)
}

export default SkillsInfo