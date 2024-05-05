import React, { useState, useRef } from 'react'
import Feedback from './Feedback';
import emailjs from '@emailjs/browser';

export default function Contact(props) {
    const form = useRef();
    const [isSubmit, setIsSubmit] = useState(false)
    const [detail, setDetails] = useState({ from_name: '', lname: '', user_email: '', message: '' })
    const { mode } = props;
    const showFeedback = async (e) => {
        e.preventDefault();
        setIsSubmit(true);
        await emailjs.sendForm('service_636t68d', 'template_gd7ktrl', form.current, {
            publicKey: 'PxS4WrnZQyi4rtcbH'
        })
    }
    const onChange = (e) => {
        setDetails({ ...detail, [e.target.name]: e.target.value });
    }
    return (
        <div className='container mt-5'>
            <h1 className={`mb-4 ${mode === 'dark' ? 'text-light' : 'text-dark'}`}>Contact Us</h1>
            <form ref={form} className="row g-3" onSubmit={showFeedback}>
                <div className={`mb-3`}>
                    <label htmlFor="enterFirstName" className={`form-label text-${mode === 'dark' ? 'light' : 'dark'}`}><b>First Name</b></label>
                    <input type="text" className={`form-control text-${mode === 'dark' ? 'light' : 'dark'} bg-${mode}`} id="enterFirstName" placeholder="Enter First Name" required onChange={onChange} name='from_name' value={detail.from_name} />
                </div>
                <div className="mb-3">
                    <label htmlFor="enterLastName" className={`form-label text-${mode === 'dark' ? 'light' : 'dark'}`}><b>Last Name</b></label>
                    <input type="text" className={`form-control bg-${mode} text-${mode === 'dark' ? 'light' : 'dark'}`} id="enterLastName" placeholder="Enter Last Name" required onChange={onChange} name='lname' value={detail.lname} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputEmail" className={`form-label text-${mode === 'dark' ? 'light' : 'dark'}`}><b>Email</b></label>
                    <input type="email" className={`form-control bg-${mode} text-${mode === 'dark' ? 'light' : 'dark'}`} id="inputEmail" placeholder="mail@someone.com" required onChange={onChange} name='user_email' value={detail.email} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <label htmlFor={`feedback`} className={`form-label text-${mode === 'dark' ? 'light' : 'dark'}`}><b>Your Feedback</b></label>
                <textarea className={`form-control text-${mode === 'dark' ? 'light' : 'dark'} bg-${mode}`} id="feedback" rows="10" placeholder='Enter Your Feedback' required onChange={onChange} name='message' value={detail.message} />
                <div className="col-12">
                    <button type="submit" className={`btn btn-${mode === 'light' ? 'outline-' : ''}primary`}>Send Feedback</button>
                </div>
            </form>
            <Feedback isSubmit={isSubmit} details={detail} mode={mode} />
        </div>
    )
}