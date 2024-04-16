import React, { Component } from 'react'
import './NewsItem.css';

export class NewsItem extends Component {
    render() {
        let { title, description, srcOfNewsImg, newsUrl, publishedDate, source } = this.props;
        return (
            <div className={`card-group`}>
                <div className={`card bg-${this.props.mode}`}>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {source}
                </span>
                    <img src={srcOfNewsImg ? srcOfNewsImg : 'https://media.gettyimages.com/id/1311148884/vector/abstract-globe-background.jpg?s=612x612&w=gi&k=20&c=G5uPfn2VTF3aXCr76pn1T7oWE-aHVQ0rAYMl_MK2OvM='} className="card-img-top" alt="..." />
                    <div className={`card-body text-${this.props.mode === 'dark' ? 'light' : 'dark'} bg-${this.props.mode}`}>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} className={`btn btn-sm btn-${this.props.mode === 'light' ? "outline-" : ''}primary`} target='_blank' rel="noreferrer">Read More</a>
                    </div>
                    <div className={`card-footer bg-${this.props.mode}`}>
                        <small className={`text-${this.props.mode === 'dark' ? 'light' : 'dark'}`}>Updated on <b>{new Date(publishedDate).toUTCString().slice(0, (new Date(publishedDate).toUTCString().length - 3))}</b></small>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem