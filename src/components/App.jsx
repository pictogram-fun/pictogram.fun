import React from 'react';
import {
    // TODO
    // BrowserRouter as Router,
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import '../styles/index.sass';

import Home from './Home.jsx';
import About from './About.jsx';

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>home!</div>,
        main: () => <Home/>
    },
    {
        path: '/about',
        sidebar: () => <div>about!</div>,
        main: () => <About/>
    }
];

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div style={{display: 'flex'}}>
                    {/*<div id="side-bar">*/}
                        {/*<ul>*/}
                            {/*<li><Link to="/">Home</Link></li>*/}
                            {/*<li><Link to="/about">About</Link></li>*/}
                        {/*</ul>*/}

                        {/*{routes.map((route, index) => (*/}
                            {/*<Route*/}
                                {/*key={index}*/}
                                {/*path={route.path}*/}
                                {/*exact={route.exact}*/}
                                {/*component={route.sidebar}*/}
                            {/*/>*/}
                        {/*))}*/}
                    {/*</div>*/}

                    <div id="content-area">
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))}
                    </div>
                </div>
            </Router>
        );
    }
}
