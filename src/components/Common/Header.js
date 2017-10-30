import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor() {
        super()
        this.state = {active: false}
    }
    toggleNav() {
        this.setState({ active : !this.state.active })
    }
    render() {
        return (
            <header className="header">

                <button onClick={this.toggleNav.bind(this) } className="header__nav-toggle">Nav</button>
                
                <div className="header__right">
                    <Link to="/contact">Contact Us</Link>
                </div>

                <nav className={`header__nav ${this.state.active ? 'active' : ''}`}>
		            <ul>
			            <li><Link to="/" onClick={ this.toggleNav.bind(this) }>Home</Link></li>
			            <li><Link to="/team" onClick={ this.toggleNav.bind(this) }>Team</Link></li>
			            <li><Link to="/clients" onClick={ this.toggleNav.bind(this) }>Clients</Link></li>
			            <li><Link to="/news" onClick={ this.toggleNav.bind(this) }>News</Link></li>
			            <li><Link to="/careers" onClick={ this.toggleNav.bind(this) }>Careers</Link></li>
		            </ul>
		        </nav>

            </header>
        )
    }

}

export default Header;