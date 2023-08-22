import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Header() {
    return (
        <div>
            <nav className='flex justify-end mb-10 mr-5'>
                <ul>
                    <Link to="/" className='mr-5 text-teal-500'>About</Link>
                    <Link to="portfolioV2/project" className='mr-5 text-teal-500'>Projects</Link>
                    <Link to="portfolioV2/contact" className='mr-5 text-teal-500'>Contact</Link>
                    <Link to="portfolioV2/resume" className='text-teal-500'>Resume</Link>
                </ul>
            </nav>
        </div>
    );
}