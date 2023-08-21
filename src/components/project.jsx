import React from 'react'
import githubLogo from '../assets/img/Githublogo.png'

export default function Projects({name, description, image, github, deployed}){
    return(
        <div className =''>
            <div className ='mx-10 my-4'>
                <a href={deployed} ><img src = {image}/></a>
            </div>
            <div class='flex ml-10'>
                <div>
                    <a href={github}><div className='text-teal-500'>{name}</div></a>
                    <p>{description}</p>
                </div>
                <div>
                    <a href={github}><img src={githubLogo} className ="max-w-[100px]" alt="" /></a>
                </div>
            </div>
        </div>
    )
}