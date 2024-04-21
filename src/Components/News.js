import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default function News(props) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    let updateNews = async () => {
        props.setProgress(0);
        let url = `https://gnews.io/api/v4/search?q=${props.category}&lang=en&country=us&apikey=${props.apiKey}`;
        setLoading(true);
        props.setProgress(20);
        let data = await fetch(url);
        props.setProgress(50);
        let information = await data.json();
        props.setProgress(75);
        setArticles(information.articles)
        setLoading(false);
        props.setProgress(100);
    }
    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, [])
    document.title = `News Gen | ${props.docTitle === 'General' ? 'Home' : props.docTitle} - Get Latest News Free!`
    return (
        <div className='container'>
            <h1 className={`my-3 text-center text-${props.mode === 'dark' ? 'light' : 'dark'}`} style={{ margin: "40px 0px" }}>NewsGen - Top {`${props.docTitle}`} Headlines</h1>
            {loading && <Spinner />}
            <div className="row">
                {!(loading) && articles.map((e) => {
                    return e.title !== '[Removed]' || e.title === '' ? (<div className="col-lg-4 col-md-6 my-3" key={e.url}>
                        <NewsItem mode={props.mode} title={e.title ? e.title.slice(0, 20) + ' ...' : ''} description={e.description ? e.description.slice(0, 100) + '...' : 'Click to See Details.'} srcOfNewsImg={e.image} newsUrl={e.url} publishedDate={e.publishedAt} source={e.source.name} />
                    </div>) : ''
                })}
            </div>
        </div>
    )
}