import github from "/Githublogo.png"
import linkedin from '/linkedin.png'

export default function Footer(){
    return(
        <div>
        <footer>
        <span>
            <a href="https://github.com/UtuRaiden"><img src={github}></img></a>
            <a href="https://www.linkedin.com/in/barron-peterson-322651272/"><img src={linkedin}></img></a>
        </span>
        </footer>
        </div>
    )
}