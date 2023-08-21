export default function Header(){
    return(
        <div>
        <nav class ='flex justify-end mb-10'>
        <ul>
            <a href='/' className ='mr-5 text-teal-500'>About</a>
            <a href='/project'className ='mr-5 text-teal-500'>Projects</a>
            <a href='contact'className ='mr-5 text-teal-500'>Contact</a>
            <a href='/resume' className ='text-teal-500'>Resume</a>
        </ul>
        </nav>
        </div>
    )
}