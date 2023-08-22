import github from "../assets/img/Githublogo.png"
import linkedin from '../assets/img/linkedin.png'
//creates main footer used on every page
export default function Footer() {
    return (
        <footer className="flex justify-center">
            <span className="flex items-center space-x-4">
                <a href="https://github.com/UtuRaiden"><img src={github} className="max-w-[100px]" alt="GitHub Logo"></img></a>
                <a href="https://www.linkedin.com/in/barron-peterson-322651272/"><img src={linkedin} className="max-w-[140px]" alt="LinkedIn Logo"></img></a>
            </span>
        </footer>
    );
}