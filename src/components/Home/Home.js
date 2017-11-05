import React, { Component } from 'react';
import client from '../../services/Client';
import Landing from './Landing';
import ServiceItem from './ServiceItem';
import Contact from './Contact';

//https://github.com/florinn/react-owl-carousel2/blob/master/example/index.jsx
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

        if (direction == 'up') {
            this.refs.slide.next()
        } else {
            this.refs.slide.prev()
        }

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