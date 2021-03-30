import React from 'react';
import {
    DisplayLeft
} from '../cta/DisplayLeft';
import {
    DisplayRigth
} from "../cta/DisplayRigth";
import foto1 from "../img/IMG_1022.JPG";
import foto2 from "../img/zeeburg.jpg";
import foto3 from "../img/acampada.jpg";
import foto4 from "../img/Ayuntamiento_brujas.jpg";
import foto5 from "../img/autobang.PNG";
import foto6 from "../img/german1.JPG";
export const Journey = () => {
    return (
        <div className="z-0"> 
            
            <div className="md:w-1/2 text-center  lg:w-2/3 w-full xl:pr-20 w-full sm:pl-6 md:pr-6">
						<div className="py-2 text-color">
						<h1 className="text-2xl    lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black"> Road trip Europe </h1>
						<h2 className="text-lg lg:text-3xl lg:leading-9 md:leading-10 f-f-r py-4 md:py-8">
                        Three years ago we took a trip to Europe for a month. It was a very good experience that I would like to repeat. I think traveling brings new perspectives. Although it may seem that Europeans are very similar or think that we are very different "Germans". Looks are deceiving...
						</h2>
					</div>
			</div>
            {DisplayRigth({
                title: "La Belgique",
                text: "After we jump France 'whose place I want to forget'. We arrive to Belgium. We really like it. First we stayed at Camping Grimbergen. Fun fact: It's a famous beer, and we stayed next to the factory!",
                src:  "https://camping-grimbergen.webs.com/",
                description: "Camping Site" ,
                img: foto3,
                alt: "Beer",
                tag1: "beer",
                tag2: "Grimbergen",
                tag3: "Nature"
            })
        };

        {
            DisplayLeft({
                title: "Bruges",
                text: "Although the Bruges region was already populated in Roman times, the city’s name appears for the first time in the 9th century, probably derived from the Old Germanic word ‘brugj’, which means ‘mooring’.",
                src:  "https://www.visitbruges.be/en",
                description: "Bruges official site" ,
                img: foto4,
                alt: "Major place",
                tag1: "History",
                tag2: "UNESCO",
                tag3: "Monument"
            })
        };
        {DisplayRigth({
                title: "I amsterdam!",
                text: "Look this impresive city known as Amsterdam. We stayed for four days in our route for Europe three years ago.",
                src:  "https://www.iamsterdam.com/en",
                description: "Visit!" ,
                img: foto1,
                alt: "I am Amsterdam!",
                tag1: "pic",
                tag2: "happy",
                tag3: "iconic"
            })
        };

        {
            DisplayLeft({
                title: "Camping",
                text: " We stayed at camping zeeburg. It's an amazing place full of happy people",
                src: "https://www.campingzeeburg.com/",
                description: "Campsite's web",
                img: foto2,
                alt: "Zeeburg campsite",
                tag1: "Beutiful",
                tag2: "mosquitos everywhere",
                tag3: "peace"
            })
        };
        {DisplayRigth({
                title: "Deutschland",
                text: "The best place if you want to drive as fast as you can.",
                src:  "https://en.wikipedia.org/wiki/Autobahn",
                description: "Wikipedia" ,
                img: foto5,
                alt: "Road",
                tag1: "fiuuu",
                tag2: "210 km/h",
                tag3: "Hard beating"
            })
        };

        {
            DisplayLeft({
                title: "Walking through",
                text: " We see this forest next to the camp and I thougth, 'I'll look in google maps and search some place for an excursion. 'Well I saw a lake and after we walk like 12 km the lake it was closed. This fact almost cost me a divorce.",
                src: "https://en.wikipedia.org/wiki/Black_Forest",
                description: "Black Forest",
                img: foto6,
                alt: "through the woods",
                tag1: "Awersome",
                tag2: "Minifrogs",
                tag3: "Love"
            })
        };

        </div>
    )
}