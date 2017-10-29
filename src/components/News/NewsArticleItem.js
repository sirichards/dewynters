import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NewsArticleItem extends Component {
    render() {
        const {article} = this.props
        return (
            <div className="col-12 col-md-6">
                <Link to={`news/${article.fields.slug}`}>
                    <div className="member-details">
                        <h2>{article.fields.title}</h2>
                    </div>
                </Link>
            </div>
        )
    }
}

export default NewsArticleItem;