import React from "react";
import { Link } from "react-router-dom";
import CardUp from "./CardUp";
export const DisplayLeft = (variable) => {
return (
<>
    <div className="md:mx-auto md:container px-4">

        <div className="pb-32 pt-16">
            <div className="mx-auto">
                <div className="flex flex-wrap flex-row-reverse items-center">
                    <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                        <div className="py-2 text-color">
                            <h1 className="text-2xl lg:text-6xl tracking-tighter md:leading-snug f-f-l font-black">
                                {variable.title}</h1>
                            <h2 className="text-lg lg:text-3xl leading-7 md:leading-10 f-f-r py-8">{
                                variable.text
                                }
                            </h2>
                            <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                                <h3 className="f-f-r text-lg lg:text-2xl font-semibold underline text-indigo-700">
                                    {variable.description}</h3>
                                
                            </div>
                        </div>
                    </div>
                    <div className="z-0 lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
						{CardUp(
							{
							title: variable.textTitle,
                            classImg: "absolute w-full h-full inset-0 object-cover object-center rounded-md",
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
</>
);
}