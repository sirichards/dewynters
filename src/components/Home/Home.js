import React, { Component } from 'react';
import client from '../../services/Client';
import Landing from './Landing';
import ServiceItem from './ServiceItem';
import Contact from './Contact';

import OwlCarousel from 'react-owl-carousel';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            services: [],
            options: {
                autoWidth: true,
            }
        }
    }
    componentDidMount() {
        client.getEntries({content_type: 'service'}).then((response) => {
            this.setState({services: response.items})
        })
    }
    scrollHorizontal(e) {
        const scrollEl = document.querySelector('.home-scroll');

        var direction = e.deltaY > 0 ? 'up' : 'down';
        // var scroll = parseInt(scrollEl.style.right);

        if (direction == 'up') {
            // scroll < 0 ? scroll -= 3: scroll = 0;
            // scrollEl.style.right = scroll+'%';
           
            this.refs.slide.next()
        } else {
            this.refs.slide.prev()
            // scroll < 100 ? scroll += 3: scroll = 100;
            // scrollEl.style.right = scroll+'%';
        }

        // const scrollPx = 50;
        // e.deltaY < 0 ? scrollEl.style.left -= 50+'px' : scrollEl.style.left += 50+'px';

        return false;
    }
    render() {

        const services = this.state.services.map( (service, i) => {
            return <ServiceItem service={service} key={i} />
        })

        return (
            // onWheel={this.scrollHorizontal} 
            <div className="home-wrapper">
                <OwlCarousel
                    className="home-slide"
                    ref="slide"
                    onWheel={this.scrollHorizontal.bind(this)} 
                    {...this.state.options}
                >
                {/* <div className="home-wrapper__scroll"> */}
                    <Landing />
                    {services}
                    {services}
                    {services}
                    {services}
                    {services}
                    {services}
                    <Contact />
                {/* </div> */}
                </OwlCarousel>
            </div>
        );
    }
}

export default Home;