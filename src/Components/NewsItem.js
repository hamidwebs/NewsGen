import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, srcOfNewsImg, newsUrl } = this.props;
        return (
            <div className="card" style={{ width: '18rem' }}>
                <img src={srcOfNewsImg ? srcOfNewsImg : 'https://media.gettyimages.com/id/1311148884/vector/abstract-globe-background.jpg?s=612x612&w=gi&k=20&c=G5uPfn2VTF3aXCr76pn1T7oWE-aHVQ0rAYMl_MK2OvM='} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} className="btn btn-sm btn-primary" target='_blank' rel="noreferrer">More Details</a>
                </div>
            </div>
        )
    }
}

export default NewsItem