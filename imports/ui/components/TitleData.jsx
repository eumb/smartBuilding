 
import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import  { Sparklines } from 'react-sparklines';
import SmallGraphs from '../components/SmallGraphs.jsx';


export default class TitleData extends React.Component {


render() {


  return (
       
       <div className="row tile_count">
            <div className="row tile_count">
              <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
               <div className="col-md-6 col-sm-6 col-xs-6">
              <span className="count_top"><i className="fa fa-user"></i> Temperature (C)</span>
              <div className="count">25</div>
              <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>
                   </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <div  className=" count_top spaklines">  <SmallGraphs /></div> 
                 </div>
            </div>
         
            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                 <div className="col-md-6 col-sm-6 col-xs-6">
                    <span className="count_top"><i className="fa fa-clock-o"></i> Humidity (%)</span>
                    <div className="count">54 </div>
                    <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>3% </i> Decreasing</span>
                 </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <div  className=" count_top spaklines">  <SmallGraphs /></div> 
                 </div>
              
              
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
            <div className="col-md-6 col-sm-6 col-xs-6">
              <span className="count_top"><i className="fa fa-user"></i> Light (lmn)</span>
              <div className="count green">2,500</div>
              <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>
           </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <div  className=" count_top spaklines">  <SmallGraphs /></div> 
                 </div>
            </div>

          <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
            <div className="col-md-6 col-sm-6 col-xs-6">
              <span className="count_top"><i className="fa fa-user"></i> Noise level (dB) </span>
              <div className="count">25</div>
              <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>
              </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <div  className=" count_top spaklines">  <SmallGraphs /></div> 
                 </div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
               <div className="col-md-6 col-sm-6 col-xs-6">
              <span className="count_top"><i className="fa fa-user"></i> CO2 level</span>
              <div className="count">23</div>
              <span className="count_bottom"><i className="red"><i className="fa fa-sort-desc"></i>12% </i> From last Week</span>
            </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <div  className=" count_top spaklines">  <SmallGraphs /></div> 
                 </div>
            </div>

             <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <div className="col-md-6 col-sm-6 col-xs-6">
              <span className="count_top"><i className="fa fa-user"></i> Dust level  (ppm) </span>
              <div className="count">100</div>
              <div className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</div>
               </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                    <div  className=" count spaklines">  <SmallGraphs /></div> 
                 </div>
            </div>
    

          </div>
          </div>

    );
  }
}

 