import React from 'react';
import profile from '../assets/img/profile.png';

export default function AboutMe() {
    return (
        <div className="flex items-start justify-center">
            <img src={profile} alt="Profile" className="max-w-[50%] max-h-[600px] mr-6 self-center" />
            <div className='space-y-10'>
                <p>My name is Barron Peterson. Born in January 1999. I have several hobbies including blacksmithing, gaming, DM'ing for DnD, and creating video games!</p>
                <p>I developed a passion for software development when I took a entry coding class in highschool. Life then happened and I wasn't able to do software development for a couple of years.</p>
                <p>I have since obtained a certificate from KU's fullstack software development course. I have gained extensive knowledge in HTML, CSS, Node, Javascript, and React,  Furthermore, I am pursuing furthered education in software development.</p>
                <p>I have worked in a variety of different positions and job titles. These range from an inventory management leadership roll at DBSchenker which is a world wide Logistics company to a Network Engineer at Proper Technologies Solutions a small Wichita, KS local third party I.T. Consulting firm. </p>
            </div>
        </div>
    );
}
