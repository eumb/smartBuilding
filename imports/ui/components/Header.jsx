import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import LoginButtons from './LoginButtons.jsx';

export default class Header extends React.Component {
  render() {
    return (

 <header className="Header">

        <div className="top_nav">
          <div className="nav_menu">
            <nav className="" role="navigation">
              <div className="nav toggle">
                <a id="menu_toggle"><i className="fa fa-bars"></i></a>
              </div>

              <ul className="nav navbar-nav navbar-right">
                <li className="">

                <div>
                 {/*   <span className="title">Smartbuilding </span>
                     <span className="by">by </span>*/}
                  <span className="nokia_logo">NOKIA</span>
              
                </div>
                
                 {/* <a href="javascript:;" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <small>Administration  </small>
                    <i className=" fa fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-usermenu pull-right">
                    <li><a href="javascript:;"> Profile</a></li>
                    <li>
                      <a href="javascript:;">
                        <span className="badge bg-red pull-right">50%</span>
                        <span>Settings</span>
                      </a>
                    </li>
                    <li><a href="javascript:;">Help</a></li>
                    <li><a href="login.html"><i className="fa fa-sign-out pull-right"></i> Log Out</a></li>
                  </ul>*/}
                </li>

            
              </ul>
            </nav>
          </div>
        </div>
    
    </header>


   
  

    );
  }
}
