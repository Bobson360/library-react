import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Admin from './ui/Admin'
import NotFind from './ui/NotFind'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/admin" component={Admin} />
            <Route path='/*' component={NotFind} />
        </Switch>
    </ BrowserRouter> 
,document.getElementById('root'))
registerServiceWorker()
