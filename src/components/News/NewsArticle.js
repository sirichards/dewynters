import React, { Component } from 'react';
import client from '../../services/Client';

class NewsArticle extends Component {
    constructor() {
        super()
        this.state = {article: null};
    }
    componentDidMount() {
        const { match } = this.props
        if (match && match.params.slug) {
            client.getEntries({content_type: 'news', 'fields.slug': match.params.slug}).then((response) => {
                this.setState({article: response.items[0]})
            });
        }
    }
    render() {
        if (!this.state.article) {
            return "Loading...";
        }
        return (
            <div className="col-12 col-md-6">
                <h2>{this.state.article.fields.title}</h2>
                <p>{this.state.article.fields.body}</p>
            </div>
        )
    }
}

export default NewsArticle;