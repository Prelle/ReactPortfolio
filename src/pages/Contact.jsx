import { useState } from 'react';

export default function ContactForm() {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const validateName = (val) => {
        if (!val.length) {
            setErrorMessage('Name is required');
        } else {
            setErrorMessage('');
        }
    }

    const updateName = (e) => {
        setStatusMessage('');

        const val = e.target.value;

        setFormState({...formState, name: val});

        validateName(val);
    }

    const updateEmail = (e) => {
        setStatusMessage('');

        const val = e.target.value;

        setFormState({...formState, email: val});

        if (!val.length) {
            setErrorMessage('Email is required');
        } else if (!val.includes('@')) {
            setErrorMessage('Email must include an @ symbol');
        } else {
            setErrorMessage('');
            validateName(formState.name);
        }
    }

    const updateMessage = (e) => {
        setStatusMessage('');

        const val = e.target.value;

        setFormState({...formState, message: val});
    }

    const submitForm = (e) => {
        e.preventDefault();

        setStatusMessage('');

        if (!formState.name || !formState.email) {
            setErrorMessage('Name and email are required');
            return;
        }

        if (!formState.message.length) {            
            setErrorMessage('Please provide a message.');
            return;
        }

        setErrorMessage('');

        console.log(formState);
        setStatusMessage('Your message has been sent. Thank you!');

        setFormState({name: '', email: '', message: ''});
    }

    return (
        <div>
            <h2>Contact Me</h2>
            <form>
                <label htmlFor="name">Name:</label><br/>
                <input
                    value={formState.name}
                    name="name"
                    id="name"
                    onChange={updateName}
                    onBlur={updateName}
                    type="text"
                    placeholder="Your Name"
                /><br/>
                <label htmlFor="email">Email address:</label><br/>
                <input
                    value={formState.email}                    
                    name="email"
                    id="email"                    
                    onChange={updateEmail}
                    onBlur={updateEmail}
                    type="text"
                    placeholder="your@email.com" /><br/>
                <label htmlFor="message">Message:</label><br/>
                <textarea
                    value={formState.message}
                    name="message"
                    id="message"
                    onChange={updateMessage}
                    rows={10} /><br/>
                <p className="error">{errorMessage}</p>
                <p>{statusMessage}</p>
                <button type="submit" className="btn btn-success" onClick={submitForm}>Submit</button>
            </form>
        </div>
    )
}