import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} sticky-top`}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">NewsGen</Link>
                <button className="navbar-toggler" data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className={`offcanvas-header bg-${props.mode}`}>
                        <h5 className={`offcanvas-title text-${props.mode === 'dark' ? 'light' : 'dark'}`} id="offcanvasRightLabel">Please specify your choice</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{ backgroundColor: 'red' }}></button>
                    </div>
                    <div className={`offcanvas-body bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/business" className="nav-link">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/entertainment" className="nav-link">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/health" className="nav-link">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/science" className="nav-link">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/sport" className="nav-link">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/tech" className="nav-link">Technology</Link>
                            </li>
                        </ul>
                        <hr />
                        <h5 className={`offcanvas-title d-lg-none d-inline-block text-${props.mode === 'dark' ? 'light' : 'dark'}`} id="offcanvasRightLabel">Mode</h5>
                        <hr />
                        <div className="form-check form-switch" style={{
                            marginTop: '0.5rem'
                        }}>
                            <input className="form-check-input" type="checkbox" role="switch" id="darkMode" onClick={props.toggleMode} />
                            <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="darkMode">{`${props.mode === 'light' ? 'Enable Dark Mode' : 'Disable Dark Mode'}`}</label>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}