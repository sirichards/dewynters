import React, { Component } from 'react';

import LandingItem from './LandingItem';

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            activeSlide: 0,
            images: [
                {
                    image1: 'http://placehold.it/960x1080?text=Image+1',
                    image2: 'http://placehold.it/960x1080?text=Image+1'
                }, 
                {
                    image1: 'http://placehold.it/1920x540?text=Image+2', 
                    image2: 'http://placehold.it/1920x540?text=Image+2'
                },
                {
                    image1: 'http://placehold.it/960x1080?text=Image+3',
                    image2: 'http://placehold.it/960x1080?text=Image+3'
                },
                {
                    image1: 'http://placehold.it/1920x540?text=Image+4',
                    image2: 'http://placehold.it/1920x540?text=Image+4'
                }
            ]
        }
    }
    componentDidMount() {
        setInterval( () => {

            var index = this.state.activeSlide+1;
            (index > this.state.images.length -1) ? index = 0 : index;
            this.setState({activeSlide: index})
            
        }, 1500);
    }
    render() {

        const landingItems = this.state.images.map((image, i) => {
            var type = i % 2 ? 'horizontal' : 'vertical' 
            return <LandingItem 
                key={i}
                image1={image.image1} 
                image2={image.image2} 
                index={i} 
                activeSlide={this.state.activeSlide}
                imageLength={this.state.images.length}
                type={type}
                />
        })

        return (
            <div className="landing" id="landing">

                {landingItems}

            </div>
        );
    }
}

export default Landing;