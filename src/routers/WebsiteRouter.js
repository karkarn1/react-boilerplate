import React, { Component } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import HomePage from '../components/Pages/HomePage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import AboutPage from '../components/Pages/AboutPage';
import BlogPage from '../components/Pages/BlogPage';
import ContactPage from '../components/Pages/ContactPage';

class WebsiteRouter extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <BrowserRouter>
                <div className='page'>
                    <Header />
                    <Switch>
                        <Route path='/' component={HomePage} exact />
                        <Route path='/about' component={AboutPage} exact />
                        <Route path='/blog' component={BlogPage} exact />
                        <Route path='/contact' component={ContactPage} exact />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default WebsiteRouter;
