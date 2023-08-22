import React from 'react'
import githubLogo from '../assets/img/Githublogo.png'
//This creates each individual project div with a name description image github link and deployed link (if applicable)
export default function Projects({name, description, image, github, deployed}){
    return(
        <div className =''>
            <div className ='mx-10 my-4'>
                <a href={deployed} ><img src = {image}/></a>
            </div>
            <div className='flex ml-10'>
                <div>
                    <a href={github}><div className='text-teal-500'>{name}</div></a>
                    <p>{description}</p>
                </div>
                <div>
                    <a href={github}><img src={githubLogo} className ="max-w-[100px] mr-2" alt="" /></a>
                </div>
            </div>
        </div>
    )
}