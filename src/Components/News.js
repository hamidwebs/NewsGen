import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        category: 'general'
    }
    static propTypes = {
        category: PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount() {
        this.props.setProgress(0);
        let url = `https://gnews.io/api/v4/search?q=${this.props.category}&lang=en&country=us&apikey=41a005b2ed0ea1f6b380e10628cbb6ec`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        this.props.setProgress(60);
        let information = await data.json();
        this.setState({
            loading: false,
            articles: information.articles,
            totalResults: information.totalResults
        })
        this.props.setProgress(100);
    }
    render() {
        document.title = `News Gen | ${this.props.docTitle === 'General' ? 'Home' : this.props.docTitle} - Get Latest News Free!`
        return (
            <div className='container'>
                <h1 className={`my-3 text-center text-${this.props.mode === 'dark' ? 'light' : 'dark'}`} style={{ margin: "40px 0px" }}>NewsGen - Top {`${this.props.docTitle}`} Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!(this.state.loading) && this.state.articles.map((e) => {
                        return e.title !== '[Removed]' || e.title === '' ? (<div className="col-lg-4 col-md-6 my-3" key={e.url}>
                            <NewsItem mode={this.props.mode} title={e.title ? e.title.slice(0, 20) + ' ...' : ''} description={e.description ? e.description.slice(0, 100) + '...' : 'Click to See Details.'} srcOfNewsImg={e.image} newsUrl={e.url} publishedDate={e.publishedAt} source={e.source.name} />
                        </div>) : ''
                    })}
                </div>
            </div>
        )
    }
}

export default News