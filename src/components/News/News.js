import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import client from '../../services/Client';
import NewsArticleItem from './NewsArticleItem';
import NewsArticle from './NewsArticle';

class News extends Component {
    constructor() {
        super()
        this.state = {articles: []}
    }
    componentDidMount() {
        client.getEntries({content_type: 'news'}).then((response) => {
            this.setState({articles: response.items})
        })
    }
    render() {
        const { match } = this.props
        const newsArticles = this.state.articles.map( (article, i) => {
            return <NewsArticleItem article={article} match={match} key={i} />
        })
        return (
            <div className="container">
                <div className="row">
                    {newsArticles}
                </div>
            </div>
        )
    }

}

export default News;