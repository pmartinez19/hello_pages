import React from 'react';
import {
    DisplayLeft
} from '../cta/DisplayLeft';
import {
    DisplayRigth
} from "../cta/DisplayRigth";
import foto1 from "../img/IMG_1022.JPG";
export const City = () => {
    return (
        <div className="z-0"> {
            DisplayRigth({
                title: "I am Amsterdam!",
                text: "Look this impresive city known as Amsterdam. We stayed for four days in our route for Europe three years ago.",
                src: "https://www.iamsterdam.com/en",
                description: "Visit!",
                img: foto1,
                alt: "I am Amsterdam!"
            })
        };

        {
            DisplayLeft({
                title: "I am Amsterdam!",
                text: "Look this impresive city known as Amsterdam. We stayed for four days in our route for Europe three years ago.",
                src: "https://www.iamsterdam.com/en",
                description: "Visit!",
                img: foto1, //TODO
                alt: "I am Amsterdam!"
            })
        };

        </div>
    )
}