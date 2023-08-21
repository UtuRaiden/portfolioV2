import { useState } from 'react'

export default function ContactPage() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleInputChange = (e) => {
        const { target } = e
        const inputType = target.name
        const inputValue = target.value

        if (inputType === 'name') {
            setName(inputValue)
        } else if (inputType === 'email') {
            setEmail(inputValue)
        } else {
            setMessage(inputValue)
        }
    }

    function handleFormSubmit(e) {
        
    }

    return (
        <main>
            <h1>Contact Me</h1>
            <div>
                <p>Feel free to contact me at
                    <a href="mailto:barronpeterson56@gmail.com"> barronpeterson56@gmail.com </a>
                     or use the following form:
                </p>
            </div>
            <section>
                <form onSubmit={handleFormSubmit}>
                    <div className='flex justify-center'>
                        <input
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Name"
                        />
                    </div>
                    <div >
                        <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Email"
                        />
                    </div>
                    <div>
                        <textarea
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Enter your message..."
                        />
                    </div>
                    <div >
                        <button
                        type="button"
                        onClick={handleFormSubmit}
                        onChange={handleInputChange}
                        >
                        Send
                        </button>
                    </div>
                </form>
            </section>
        </main>
    )
}