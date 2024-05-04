import React from 'react'

export default function About(props) {
    return (
        <div className='container'>
            <h2 className={`my-4 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className={`accordion-button bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Features
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className={`accordion-body bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
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
                        <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            About
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className={`accordion-body bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                            <b>Welcome to Our News Section</b> : Stay informed and engaged with the latest happenings from around the globe in our meticulously curated news section. Whether you're seeking to catch up on current events, dive into in-depth analyses, or explore intriguing stories shaping our world, we've got you covered.
                            <br />
                            <b>Explore Diverse Topics </b> : From politics to technology, entertainment to environment, business to health, our news platform offers a comprehensive range of topics to cater to every interest and curiosity. Delve into the stories that matter to you, presented with clarity and depth.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}