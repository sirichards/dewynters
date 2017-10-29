import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './Common/Header';
import Home from './Home/Home';
import News from './News/News';
import NewsArticle from './News/NewsArticle';
import Team from './Team/Team';
// import Clients from './Clients/Clients';
// import Careers from './Careers/Careers';
// import Contact from './Contact/Contact';
import NotFound from './NotFound/NotFound';

const App = () => {
    return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/team" component={Team} />
				{/* <Route path="/clients" component={Clients} /> */}
				<Route exact path="/news" component={News} />
				<Route path="/news/:slug" component={NewsArticle} />
				{/* <Route path="/careers" component={Careers} />
				<Route path="/contact" component={Contact} />  */}
				<Route path="*" component={NotFound} />
			</Switch>
		</div>
    );
}

export default App;