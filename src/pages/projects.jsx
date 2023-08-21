import React from "react"
import Projects from "../components/project"

import socialApi from '../assets/img/socialApi.png'
import readMeGen from'../assets/img/readMeGen.png'

export default function Project(){
    const projectsData =[
        {
            name:"Social network Api",
            description:"This is a backend for a social network in which you can add friend, make a post, and react/comment on a post",
            image: socialApi,
            github:"https://github.com/UtuRaiden/social-network-API",
            deployed:''
        },
        {
            name:'Read Me Generator',
            description:"This is a simple inquirer app that takes data from questions you answer and creates a professional README file.",
            image: readMeGen,
            github:"https://github.com/UtuRaiden/read-me-generator",
            deployed:''
        }
    ]

    const projectItem = projectsData.map((projectsData) => (
        <Projects
        key={projectsData.name}
        name={projectsData.name}
        description={projectsData.description}
        image={projectsData.image}
        github={projectsData.github}
        deployed={projectsData.deployed} 
        />
    ))
    
    return (
        <div>
            <h1 className='ml-10'>Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ml-10">
                {projectItem}
            </div>
        </div>
    );
}