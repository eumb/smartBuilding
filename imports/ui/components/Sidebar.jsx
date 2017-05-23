import React from "react";
import {Link} from "react-router-dom";
import classNames from 'classnames';

export default class Sidebar extends React.Component {
  render() {
    return(


   <div id="sidebar-menu" className="active-sm main_menu_side hidden-print main_menu">
              <div className="menu_section">
            
                <ul className="nav side-menu">
                    <li><Link to='/' ><i className="fa fa-home"></i> Dashboard </Link></li>
                    
                    <li><a><i className="fa fa-edit"></i> Senzor Areas <span className="fa fa-chevron-down"></span></a>
                      <ul className="nav child_menu">
                       
                        <li><a href="form_advanced.html">Office area</a></li>
                        <li><a href="form_validation.html">Lab user area</a></li>
                        <li><a href="form_wizards.html">Server room</a></li>
                      </ul>
                    </li>
                    
                    <li><a><i className="fa fa-desktop"></i> Power measurements  <span className="fa fa-chevron-down"></span></a>
                      <ul className="nav child_menu">
                        <li><a href="general_elements.html">AC Current</a></li>
                        <li><a href="media_gallery.html">DC Current</a></li>
                      </ul>
                    </li>
                    
                    <li><Link to='/administration'><i className="fa fa-table"></i> Administration </Link></li>

            
                </ul>
              </div>
              
            </div>

    );
  }
}


