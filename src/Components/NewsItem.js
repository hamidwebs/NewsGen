import React from 'react'
import './NewsItem.css';

export default function NewsItem(props) {
    return (
        <div className={`card-group`}>
            <div className={`card bg-${props.mode}`}>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {props.source}
                </span>
                <img src={props.srcOfNewsImg ? props.srcOfNewsImg : 'https://media.gettyimages.com/id/1311148884/vector/abstract-globe-background.jpg?s=612x612&w=gi&k=20&c=G5uPfn2VTF3aXCr76pn1T7oWE-aHVQ0rAYMl_MK2OvM='} className="card-img-top" alt="..." />
                <div className={`card-body text-${props.mode === 'dark' ? 'light' : 'dark'} bg-${props.mode}`}>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.newsUrl} className={`btn btn-sm btn-${props.mode === 'light' ? "outline-" : ''}primary`} target='_blank' rel="noreferrer">Read More</a>
                </div>
                <div className={`card-footer bg-${props.mode}`}>
                    <small className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Updated on <b>{new Date(props.publishedDate).toUTCString().slice(0, (new Date(props.publishedDate).toUTCString().length - 3))}</b></small>
                </div>
            </div>
        </div>
    )
}