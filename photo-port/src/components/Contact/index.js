import React, { useState } from 'react';

const ContactForm = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    };

    const handleChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value });
    };
    
    console.log(formState);

    // JSX
    return(
        <section>
            <h1>Contact</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                {/* name input */}
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' defaultValue={name} onChange={handleChange} />
                </div>
                {/* email input */}
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' defaultValue={email} onChange={handleChange} />
                </div>
                {/* message text area */}
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5' defaultValue={message} onChange={handleChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    );
};

export default ContactForm;