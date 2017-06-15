import React from 'react';
import {BrowserRouter as Router, Route, Switch, browserHistory ,IndexRoute } from 'react-router-dom'
import classNames from 'classnames';




import About from '../pages/About.jsx';
import NotFound from '../pages/NotFound.jsx';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Home from '../pages/Home.jsx';

import WS from '../pages/WS.jsx';
import SR from '../pages/SR.jsx';
import AC from '../pages/AC.jsx';
import DC from '../pages/DC.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
     
        <Router>
              <div id="main_body" className="nav-md">
                <div className="container body">
                  <div className="main_container">
                {/*     <Header />*/}
                       <div className="col-md-3 left_col">
                          <div className="left_col scroll-view">
                            <div className="navbar nav_title">
                                {/*<a href="index.html" className="site_title"><i className="fa fa-building-o"></i> <span>Smart Campus</span></a>*/}
                                
                                 <img className="logo" src="logo.png" alt="logo" ></img>
                            </div>
                            <div className="divider inverted"></div> 
                            <div className="clearfix"></div>
                       
               

                          <br />

                      <Sidebar />


                          </div>
                      </div>
                      <div className="right_col" role="main">
                
                 
                    
                     <Switch>
                      <Route exact path='/' component={Home} />
                      <Route path = '/about' component={About} />
               {/*       <Route path = '/administration' component={Administration} />*/}
                      <Route path = '/wsnodeinfo' component={WS} />
                      <Route path = '/srnodeinfo' component={SR} />
                      <Route path = '/accurrent' component={AC} />
                      <Route path = '/dccurrent' component={DC} />
                      <Route component={NotFound} />
                    </Switch>


                   
                  </div>
                   <Footer />
                  </div>
                </div>
              </div>

        </Router>
      
  

    );
  }
}




   {/*<Switch>
              <Route exact path='/' component={Home} />
              <Route path = '/about' component={About} />
              <Route component={NotFound} />
            </Switch>*/}