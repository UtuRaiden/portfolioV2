//import dependency's
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactPage() {
    //creates name,email,and message to be used as form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    //pulls env secrets

    const emailJsConfig = {
        serviceId: import.meta.env.VITE_SERVICE_ID,
        templateId: import.meta.env.VITE_TEMPLATE_ID,
        userId: import.meta.env.VITE_USER_ID,
      };
      //function that changes the value of whatever is being typed in
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    }
//function to send an email to my email whenever a form is submitted
    async function handleFormSubmit(e) {
        e.preventDefault();

        try {
            await emailjs.send(
                emailJsConfig.serviceId,
                emailJsConfig.templateId,
                {//contents of said email come from the form
                    from_name: name,
                    from_email: email,
                    message: message,
                },
                emailJsConfig.userId
            );

            alert('Email sent successfully!');
            //set form inputs to blank
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('An error occurred while sending the email.');
        }
    }
    return (
        <main className="flex flex-col items-center space-y-6">
            <h1>Contact Me</h1>
            <div>
                <p>
                    Feel free to contact me at{' '}
                    <a  className ='text-teal-500' href="mailto:Barron.peterson56@outlook.com">Barron.Peterson56@outlook.com</a> or use the following form:
                </p>
            </div>
            <section>
                <form onSubmit={handleFormSubmit} className="w-full max-w-md">
                    <div className="flex justify-center">
                        <input
                            value={name}
                            name="name"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div>
                        <input
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 mt-4 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div>
                        <textarea
                            value={message}
                            name="message"
                            onChange={handleInputChange}
                            placeholder="Enter your message..."
                            className="w-full px-4 py-2 mt-4 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="button"
                            onClick={handleFormSubmit}
                            className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
}
