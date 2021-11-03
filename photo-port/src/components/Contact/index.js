import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const ContactForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {   
            const isValid = validateEmail(e.target.value);

            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } if (!errorMessage) {
                setFormState({...formState, [e.target.name]: e.target.value });
            }
        };
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
                    <input type='text' name='name' defaultValue={name} onBlur={handleChange} />
                </div>
                {/* email input */}
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' defaultValue={email} onBlur={handleChange} />
                </div>
                {/* message text area */}
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5' defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button type='submit'>Submit</button>
            </form>
        </section>
    );
};

export default ContactForm;