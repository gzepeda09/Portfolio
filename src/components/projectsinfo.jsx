import React from 'react'


const projectsinfo = ({name, stack, imgUrl, link, key}) => {
	return (
		<>



	<a href={link} target="_blank" className="border-2 hover:border-4 hover:border-orange-500 border-red-950  rounded-md overflow-hidden">
	
	<div >
		<img
		   src={imgUrl}
		   alt="portfolio" 
		   className="w-full h-36 md:h-96 object-cover cursor-pointer"
		/>
		</div>

		<div>
			
			<h3> {name} </h3>
			

			<div className="w-full p-4">

			<p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
			{stack.map(item =>(

				<span className="inline-block px-2 py-1 font-semibold border-2 border-red-950  rounded-md">
                     
					{item}
				
				</span>
			))}
			</p>


			</div>



		</div>

		</a>
		</>
	)
}

export default projectsinfo;