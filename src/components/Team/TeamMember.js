import React, { Component } from 'react';

class ServiceItem extends Component {
    render() {
        return (
            <div className="col-6 col-md-2">
                <img src={this.props.member.fields.image.fields.file.url} alt="" />
                <div className="member-details">
                    <h2>{this.props.member.fields.title}</h2>
                    <p>{this.props.member.fields.department.fields.name}</p>
                </div>
            </div>
        )
    }
}

export default ServiceItem;