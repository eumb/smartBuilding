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

            </nav>
          </div>
        </div>
    
    </header>


   
  

    );
  }
}
