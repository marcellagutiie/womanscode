// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Common Layout
// import Layout from "./component/common/App";
 
import DarkMainDemo from './dark/MainDemo';

// Element Layout
import Service from "./elements/Service";
import ServiceDetails from "./elements/ServiceDetails";
import About from "./elements/About";
import Contact from "./elements/Contact";
import PortfolioDetails from "./elements/PortfolioDetails";
import error404 from "./elements/error404";


// Blocks Layout
import Counters from "./blocks/Counters";
import Testimonial from "./blocks/Testimonial";
import Portfolio from "./blocks/Portfolio";
import Brand from "./blocks/Brand";
import ContactForm from "./blocks/ContactForm";

import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={DarkMainDemo}/>

                    {/* Element Layot */}
                    <Route exact path={`${process.env.PUBLIC_URL}/service`} component={Service}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/service-details`} component={ServiceDetails}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} component={PortfolioDetails}/>


                    {/* Blocks Elements  */}
                    <Route exact path={`${process.env.PUBLIC_URL}/counters`} component={Counters}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/testimonial`} component={Testimonial}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio`} component={Portfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/clint-logo`} component={Brand}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/contact-form`} component={ContactForm}/>


                    
                    <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                    <Route component={error404}/>

                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();