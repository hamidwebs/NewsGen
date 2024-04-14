import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }
    async componentDidMount() {
        let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a82466a51f4c4de692d2ad225e6b71ba&page=1';
        let data = await fetch(url);
        let information = await data.json();
        this.setState({
            articles: information.articles
        })
    }
    handlePrevClick = async () => {
        this.setState({
            page: this.state.page - 1
        })
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a82466a51f4c4de692d2ad225e6b71ba&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let information = await data.json();
        this.setState({
            articles: information.articles
        })
    }
    handleNextClick = async () => {
        this.setState({
            page: this.state.page + 1
        })
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a82466a51f4c4de692d2ad225e6b71ba&page=${this.state.page + 1}`;
        let data = await fetch(url);
        let information = await data.json();
        this.setState({
            articles: information.articles
        })
    }
    render() {
        return (
            <div className='container'>
                <h2 className='my-3'>NewsGen - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((e) => {
                        return e.title !== '[Removed]' ? (<div className="col-md-4 my-3" key={e.url}>
                            <NewsItem title={e.title ? e.title.slice(0, 20) + '...' : ''} description={e.description ? e.description.slice(0, 50) + '...' : ''} srcOfNewsImg={e.urlToImage} newsUrl={e.url} />
                        </div>) : ''
                    })}
                </div>
                <div className="container d-flex justify-content-between my-3">
                    <button type="button" className={`btn btn-dark ${this.state.page <= 1 ? 'disabled ' : ''}`} onClick={this.handlePrevClick}>&laquo; Previous</button>
                    <button type="button" className={`btn btn-dark ${this.state.page > 1 ? 'disabled ' : ''}`} onClick={this.handleNextClick}>Next &raquo;</button>
                </div>
            </div>
        )
    }
}

export default News