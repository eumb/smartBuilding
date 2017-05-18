import React from 'react';
import classNames from 'classnames';
import Heatmap from '../components/Heatmap.jsx';

export default class Home extends React.Component {
  render() {
    return (

<div className="right_col" role="main">
       
         <div className="row tile_count">
         		<div className="row tile_count">
            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span className="count_top"><i className="fa fa-user"></i> Temperature</span>
              <div className="count">24</div>
              <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>4 C</i> Increasing</span>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span className="count_top"><i className="fa fa-clock-o"></i> Humidity</span>
              <div className="count">54%</div>
              <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>3% </i> Decreasing</span>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span className="count_top"><i className="fa fa-user"></i> Light</span>
              <div className="count green">2,500</div>
              <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span className="count_top"><i className="fa fa-user"></i> CO2 level</span>
              <div className="count">23%</div>
              <span className="count_bottom"><i className="red"><i className="fa fa-sort-desc"></i>12% </i> From last Week</span>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span className="count_top"><i className="fa fa-user"></i> Dust level</span>
              <div className="count">2,315</div>
              <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <span className="count_top"><i className="fa fa-user"></i> Noise level</span>
              <div className="count">25 dB</div>
              <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>
            </div>
          </div>
          </div>

           <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="dashboard_graph">

                <div className="row x_title">
                  <div className="col-md-6">
                    <h3> Electromotor   <small>Heatmap overview</small></h3>
                  </div>
                  <div className="col-md-6">
                 {/*   <div id="reportrange" className="pull-right" >
                      <i className="glyphicon glyphicon-calendar fa fa-calendar"></i>
                      <span>December 30, 2014 - January 28, 2015</span> <b className="caret"></b>
                    </div>*/}
                  </div>
                </div>

                <div className="col-md-9 col-sm-9 col-xs-12">
                 
                  <Heatmap />


                </div>
               <div className="col-md-3 col-sm-3 col-xs-12 bg-white">
                  <div className="x_title">
                    <h2>Recorded values</h2>
                    <div className="clearfix"></div>
                  </div>

                  <div className="col-md-12 col-sm-12 col-xs-6">
                    <div>
                      <p>Humidity</p>
                      <div className="">
                        <div className="progress progress_sm" >
                          <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="80"></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p>Air quality</p>
                      <div className="">
                        <div className="progress progress_sm" >
                          <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="60"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 col-xs-6">
                    <div>
                      <p>CO2</p>
                      <div className="">
                        <div className="progress progress_sm" >
                          <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="40"></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p>Light</p>
                      <div className="">
                        <div className="progress progress_sm" >
                          <div className="progress-bar bg-green" role="progressbar" data-transitiongoal="50"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="clearfix"></div>
              </div>
            </div>

          </div>
          <br />


           <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="x_panel fixed_height_320">
                  <div className="x_title">
                    <h2>Profile Settings <small>Sessions</small></h2>
                    <ul className="nav navbar-right panel_toolbox">
                      <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                        <ul className="dropdown-menu" role="menu">
                          <li><a href="#">Settings 1</a>
                          </li>
                          <li><a href="#">Settings 2</a>
                          </li>
                        </ul>
                      </li>
                      <li><a className="close-link"><i className="fa fa-close"></i></a>
                      </li>
                    </ul>
                    <div className="clearfix"></div>
                  </div>
                  <div className="x_content">
                    <div className="dashboard-widget-content">
                      <ul className="quick-list">
                        <li><i className="fa fa-line-chart"></i><a href="#">Achievements</a></li>
                        <li><i className="fa fa-thumbs-up"></i><a href="#">Favorites</a></li>
                        <li><i className="fa fa-calendar-o"></i><a href="#">Activities</a></li>
                        <li><i className="fa fa-cog"></i><a href="#">Settings</a></li>
                        <li><i className="fa fa-area-chart"></i><a href="#">Logout</a></li>
                      </ul>

                      <div className="sidebar-widget">
                        <h4>Profile Completion</h4>
                        <canvas width="150" height="80" id="foo" className="" ></canvas>
                        <div className="goal-wrapper">
                          <span id="gauge-text" className="gauge-value pull-left">0</span>
                          <span className="gauge-value pull-left">%</span>
                          <span id="goal-text" className="goal-value pull-right">100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


  


</div>

    );
  }
}
