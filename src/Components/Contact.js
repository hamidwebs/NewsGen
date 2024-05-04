import React, { useState } from 'react'
import Feedback from './Feedback';

export default function Contact(props) {
    const [isSubmit, setIsSubmit] = useState(false)
    const showFeedback = (e) => {
        e.preventDefault();
        setIsSubmit(true);
    }
    const [detail, setDetails] = useState({fname:'', lname:'', email:'', feedback:''})
    const { mode } = props;
    const onChange = (e) => {
        setDetails({...detail, [e.target.name]: e.target.value});
    }
    return (
        <div className='container mt-5'>
            <h1 className={`mb-4 ${mode === 'dark' ? 'text-light' : 'text-dark'}`}>Contact Us</h1>
            <form className="row g-3" onSubmit={showFeedback}>
                <div className={`mb-3`}>
                    <label htmlFor="enterFirstName" className={`form-label text-${mode === 'dark' ? 'light' : 'dark'}`}><b>First Name</b></label>
                    <input type="text" className={`form-control text-${mode === 'dark' ? 'light' : 'dark'} bg-${mode}`} id="enterFirstName" placeholder="Enter First Name" required onChange={onChange} name='fname' value={detail.fname} />
                </div>
                <div className="mb-3">
                    <label htmlFor="enterLastName" className={`form-label text-${mode === 'dark' ? 'light' : 'dark'}`}><b>Last Name</b></label>
                    <input type="text" className={`form-control bg-${mode} text-${mode === 'dark' ? 'light' : 'dark'}`} id="enterLastName" placeholder="Enter Last Name" required onChange={onChange} name='lname' value={detail.lname} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputEmail" className={`form-label text-${mode === 'dark' ? 'light' : 'dark'}`}><b>Email</b></label>
                    <input type="email" className={`form-control bg-${mode} text-${mode === 'dark' ? 'light' : 'dark'}`} id="inputEmail" placeholder="mail@someone.com" required onChange={onChange} name='email' value={detail.email} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <label htmlFor={`feedback`} className={`form-label text-${mode === 'dark' ? 'light' : 'dark'}`}><b>Your Feedback</b></label>
                <textarea className={`form-control text-${mode === 'dark' ? 'light' : 'dark'} bg-${mode}`} id="feedback" rows="10" placeholder='Enter Your Feedback' required onChange={onChange} name='feedback' value={detail.feedback} />
                <div className="col-12">
                    <button type="submit" className={`btn btn-${mode === 'light' ? 'outline-' : ''}primary`}>Send Feedback</button>
                </div>
            </form>
            <Feedback isSubmit={isSubmit} details={detail} mode={mode} />
        </div>
    )
}