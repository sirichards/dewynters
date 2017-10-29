import React, { Component } from 'react';
import client from '../../services/Client';
import NewsArticleItem from './NewsArticleItem';

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

        const newsArticles = this.state.articles.map( (article, i) => {
            return <NewsArticleItem article={article} key={i} />
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