import React from 'react'
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
	const [state, handleSubmit] = useForm("xwkgppqp");
	if (state.succeeded) {
	    return <p className="text-2xl md:text-7xl md:mt-52">Message Sent successfully!</p>;
	}

	return (
		<>
	
			<div className="grid grid-rows-4">
				  <form onSubmit={handleSubmit}>
				  <div>
					  <label htmlFor="email" className="text-lg md:text-2xl">
					    Your Email Address
					  </label>
				   </div>
					  
				   <div className="mt-5">
					  <input
					    id="email"
					    type="email" 
					    name="email"
					    className="border-2 border-solid border-black rounded-md text-black text-md md:text-lg font-semibold "
					  />
					  <ValidationError 
					    prefix="Email" 
					    field="email"
					    errors={state.errors}
					  />
					</div>
				  	

				  <div className="mt-10">
					  <textarea
					    id="message"
					    name="message"
					    className="border-2 border-solid border-black rounded-md md:w-96 text-black font-bold text-md md:text-xl"
					  />
					  <ValidationError 
					    prefix="Message" 
					    field="message"
					    errors={state.errors}
					  />
				  </div>

				  <div className="mt-5">
					  <button type="submit" disabled={state.submitting} className="w-48 border-2 border-solid border-black rounded-md hover:bg-black">
					    Submit
					  </button>
				  </div>
				
				</form>
			</div>
		
		</>
	)
}

export default Contact