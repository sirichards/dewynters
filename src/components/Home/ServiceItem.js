import React, { Component } from 'react';

var VisibilitySensor = require('react-visibility-sensor');

class ServiceItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
    }
    onChange(isVisible) {
        if (isVisible) {
            this.setState({ active: true })
        }
    }
    render() {
        return (
            <VisibilitySensor onChange={ this.onChange.bind(this) } >
                <div className={`service ${this.state.active ? 'active' : ''}`}>
                    <img src={this.props.service.fields.image.fields.file.url} alt="" />
                    <div className="service__content">
                        <h2>{this.props.service.fields.title}</h2>
                        <p>{this.props.service.fields.body}</p>
                    </div>
                </div>
            </VisibilitySensor>
        )
    }
}

export default ServiceItem;