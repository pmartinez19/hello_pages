import React from "react";
import { Link } from "react-router-dom";
import CardUp from "./CardUp";

export const DisplayRigth = (variable) => {
return (
<div className="z-0 md:mx-auto md:container px-4">
	<div className="z-0 pt-10 md:pt-10">
		<div className="z-0 container mx-auto">
			<div className="z-0 flex flex-wrap items-center pb-12">		
				<div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
						<div className="py-2 text-color">
						<h1 className="text-2xl    lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black"> {variable.title} </h1>
						<h2 className="text-lg lg:text-3xl lg:leading-9 md:leading-10 f-f-r py-4 md:py-8">
							{variable.text}
						</h2>
						
						<div className="flex items-center cursor-pointer pb-4 md:pb-0">
							<a href= {variable.src} target = "_blank" className="f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700" >
								{variable.description}
							</a>
							
						</div>
					</div>
				</div>
				<div className="z-0 lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
						{CardUp(
							{
							title: variable.textTitle,
							alt : variable.alt,
							src : variable.img,
							text: variable.text,
							tag1: "#" + variable.tag1,
							tag2: "#" + variable.tag2,
							tag3: "#" + variable.tag3
							
							}
						)}
				</div>
			</div>
		</div>
	</div>
	
</div>
);
}


