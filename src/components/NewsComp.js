import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

const NewsComp = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.API}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parcedData = await data.json();
        props.setProgress(50);
        setArticles(parcedData.articles);
        setLoading(false);
        setTotalResults(parcedData.totalResults);
        setPage(page + 1);
        props.setProgress(100);
    }
    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        setPage(page + 1);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.API}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parcedData = await data.json();
        setArticles(articles.concat(parcedData.articles));
        setTotalResults(parcedData.totalResults);
    };

    return (
        <>
            <div className="container flex flex-col justify-center">
                <div className="headline text-center mb-1 mt-4">
                    <h1 className='font-bold text-4xl text-red-500'>{props.headline}</h1>
                </div>
                <div className='flex justify-center mt-4'>
                    {loading && <Spinner />}
                </div>

                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={
                        <div className='flex justify-center mt-4'>
                            {<Spinner />}
                        </div>
                    }
                >
                    <div className="grid justify-center grid-cols-1 sm:grid-cols-3 gap-4 p-8 ml-14">
                        {articles.map((e) => {
                            return <div key={e.url}><NewsItem title={e.title} description={e.description} imageUrl={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} channel={e.source.name} /></div>
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )
}
NewsComp.defaultProps = {
    country: 'in',
    pageSize: 5,
    category: 'general',
    headline: "Today's Top Headlines",
}

NewsComp.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    headline: PropTypes.string,
}

export default NewsComp