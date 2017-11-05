import React, { Component } from 'react';

class LandingItem extends Component {
    constructor() {
        super()
    }
    setClasses() {

        var classNames = "landing__item";
        
        if (this.props.index === this.props.activeSlide) {
            classNames = classNames + " landing__item landing__item--active";
        }

        if (this.props.index === this.props.activeSlide - 1 || (this.props.index == this.props.imageLength && this.props.activeSlide == 0)) {
            classNames = classNames + " landing__item--activeLast";
        }

        classNames = classNames + " landing__item--" + this.props.type;
        
        return classNames;

    }
    render() {
        return (
            <div className={this.setClasses()}>
                <img src={this.props.image1} alt="" />
                <img src={this.props.image2} alt="" />
            </div>
        );
    }
}

export default LandingItem;