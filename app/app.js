import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from 'ui/home';
import Users from 'ui/users';

ReactDOM.render((
    <BrowserRouter>
        <div>
        <Route path="/" component={Home} />
        <Route path="/users" component={Users} />
        </div>
    </BrowserRouter>
), document.getElementById('root'));