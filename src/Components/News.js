import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'us',
        pageSize: 9,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=a82466a51f4c4de692d2ad225e6b71ba&page=1&pageSize=${this.props.pageSize}&category=${this.props.category}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let information = await data.json();
        this.setState({
            loading: false,
            articles: information.articles,
            totalResults: information.totalResults
        })
    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=a82466a51f4c4de692d2ad225e6b71ba&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let information = await data.json();
        this.setState({
            loading: false,
            articles: information.articles,
            page: this.state.page - 1
        })
    }
    handleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=a82466a51f4c4de692d2ad225e6b71ba&page=${this.state.page + 1}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
            this.setState({
                loading: true
            })
            let data = await fetch(url);
            let information = await data.json();
            this.setState({
                loading: false,
                articles: information.articles,
                page: this.state.page + 1
            })
        }
    }
    render() {
        return (
            <div className='container'>
                <h1 className={`my-3 text-center text-${this.props.mode === 'dark' ? 'light' : 'dark'}`} style={{margin: "40px 0px"}}>NewsGen - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!(this.state.loading) && this.state.articles.map((e) => {
                        return e.title !== '[Removed]' || e.title === '' ? (<div className="col-lg-4 col-md-6 my-3" key={e.url}>
                            <NewsItem mode={this.props.mode} title={e.title ? e.title.slice(0, 20) + ' ...' : ''} description={e.description ? e.description.slice(0, 100) + '...' : 'Click to See Details.'} srcOfNewsImg={e.urlToImage} newsUrl={e.url} publishedDate={e.publishedAt} author={e.author ? e.author : 'Unknown'} source={e.source.name} />
                        </div>) : ''
                    })}
                </div>
                <div className="container d-flex justify-content-between my-3">
                    <button type="button" className={`btn btn-dark ${this.state.page <= 1 ? 'disabled ' : ''}`} onClick={this.handlePrevClick}>&laquo; Previous</button>
                    <button type="button" className={`btn btn-dark ${this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize) ? 'disabled ' : ''}`} onClick={this.handleNextClick}>Next &raquo;</button>
                </div>
            </div>
        )
    }
}

export default News