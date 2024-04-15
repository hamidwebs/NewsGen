import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

export class Navbar extends Component {
    render() {
        return (
            <nav className={`navbar navbar-expand-lg bg-${this.props.mode} navbar-${this.props.mode}`}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">NewsGen</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                        <div className="form-check form-switch" style={{
                            marginTop: '0.5rem'
                        }}>
                            <input className="form-check-input" type="checkbox" role="switch" id="darkMode" onClick={this.props.toggleMode}/>
                            <label className={`form-check-label text-${this.props.mode === 'dark' ? 'light' : 'dark' }`} htmlFor="darkMode">{`${this.props.mode === 'light' ? 'Enable Dark Mode' : 'Disable Dark Mode'}`}</label>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
