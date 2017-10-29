// create-react-app, https://github.com/facebookincubator/create-react-app/
// scss, https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc
// bootstrap / reactstrap, https://reactstrap.github.io/)

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Css, import main.css (includes boostrap)
// Using scss for now, for larger projects consider using css modules
import './stylesheets/main.css';

ReactDOM.render(	
<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
