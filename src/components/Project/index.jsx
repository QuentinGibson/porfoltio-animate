import React, {useState} from 'react';
import "./project.css"


function Project({name, desc, image, link, github, category}) {
    const [active, setActive] = useState(false)
    const alt = `Image of ${name}`
    return (

        <div className="project-contaier">
            <button
                className="c-grid-item card w-inline-block no-padding" 
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
            >
                <img src={image} alt={alt} className="c-grid-item__image" />
           
                {active && (
                    <div className="overlay"><div className="overlay-content"><span>{name}</span></div></div>
                )}
            </button>
        </div>
     );
}



export default Project;