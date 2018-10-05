import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from 'ui/home';
import Restaurants from 'ui/restaurants';

ReactDOM.render((
    <BrowserRouter>
        <div>
        <Route path="/" component={Home} />
        <Route path="/restaurants" component={Restaurants} />
        </div>
    </BrowserRouter>
), document.getElementById('root'));