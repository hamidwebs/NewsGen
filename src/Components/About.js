import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className='container'>
                <h2 className={`my-4 text-${this.props.mode === 'dark' ? 'light' : 'dark'}`}>About Us</h2>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className={`accordion-button bg-${this.props.mode} text-${this.props.mode === 'dark' ? 'light' : 'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Features
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className={`accordion-body bg-${this.props.mode} text-${this.props.mode === 'dark' ? 'light' : 'dark'}`}>
                                <b>1. Responsive Design</b> : A news website should be optimized for various devices, including desktops, tablets, and smartphones, ensuring an optimal viewing experience for users.
                                <br />
                                <b>2. Local News Coverage</b> : Dedicated sections or filters for local news stories cater to regional audiences and provide relevant information about events in their area.
                                <br />
                                <b>3. Navigation Menus</b> : Clear and intuitive navigation menus help users explore different sections of the website such as news categories (e.g., world, politics, business, sports, entertainment), opinion pieces, multimedia content, and more.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className={`accordion-button collapsed bg-${this.props.mode} text-${this.props.mode === 'dark' ? 'light' : 'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                About
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className={`accordion-body bg-${this.props.mode} text-${this.props.mode === 'dark' ? 'light' : 'dark'}`}>
                                <b>Welcome to Our News Section</b> : Stay informed and engaged with the latest happenings from around the globe in our meticulously curated news section. Whether you're seeking to catch up on current events, dive into in-depth analyses, or explore intriguing stories shaping our world, we've got you covered.
                                <br />
                                <b>Explore Diverse Topics </b> : From politics to technology, entertainment to environment, business to health, our news platform offers a comprehensive range of topics to cater to every interest and curiosity. Delve into the stories that matter to you, presented with clarity and depth.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className={`accordion-button collapsed bg-${this.props.mode} text-${this.props.mode === 'dark' ? 'light' : 'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Contact Us
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className={`accordion-body bg-${this.props.mode} text-${this.props.mode === 'dark' ? 'light' : 'dark'}`}>
                                We're here to assist you with any questions, feedback, or concerns you might have. Feel free to reach out to us via email at <code>itmughal2023@gmail.com</code>. We strive to respond to all inquiries promptly and provide the best possible support to our users.Whether you have suggestions for improving the app, want to report a bug, or simply want to share your thoughts, your input is invaluable to us. We appreciate your interest in our news app and look forward to hearing from you!Thank you for choosing NewsGen for your news updates.

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
