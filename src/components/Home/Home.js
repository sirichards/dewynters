import React, { Component } from 'react';
import client from '../../services/Client';
import Landing from './Landing';
import ServiceItem from './ServiceItem';
import Contact from './Contact';

class Home extends Component {
    constructor() {
        super()
        this.state = {services: []}
    }
    componentDidMount() {
        client.getEntries({content_type: 'service'}).then((response) => {
            this.setState({services: response.items})
        })
    }
    scrollHorizontal(e) {
        const scrollEl = document.querySelector('.home-wrapper__scroll');

        var direction = e.deltaY > 0 ? 'up' : 'down';
        var scroll = parseInt(scrollEl.style.right);

        if (direction == 'up') {
            scroll < 0 ? scroll -= 3: scroll = 0;
            scrollEl.style.right = scroll+'%';
        } else {
            scroll < 100 ? scroll += 3: scroll = 100;
            scrollEl.style.right = scroll+'%';
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
            <div className="home-wrapper" onWheel={this.scrollHorizontal}>
                <div className="home-wrapper__scroll">
                    <Landing />
                    {services}
                    <Contact />
                </div>
            </div>
        );
    }
}

export default Home;