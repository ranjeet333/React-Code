import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './home';
import Calculator from './calculator';

const Main = ()=>
(
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/calculator" component={Calculator}/> 
    </Switch>
);

export default Main;