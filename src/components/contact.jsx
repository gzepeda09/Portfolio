import React from 'react'
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
	const [state, handleSubmit] = useForm("xwkgppqp");
	if (state.succeeded) {
	    return <p>Thanks for joining!</p>;
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
					    className="text-black text-lg font-semibold "
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
					    className="w-96 text-black font-bold text-lg md:text-xl"
					  />
					  <ValidationError 
					    prefix="Message" 
					    field="message"
					    errors={state.errors}
					  />
				  </div>

				  <div className="mt-5">
					  <button type="submit" disabled={state.submitting} className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
					    Submit
					  </button>
				  </div>
				
				</form>
			</div>
		
		</>
	)
}

export default Contact