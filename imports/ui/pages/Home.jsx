import React from 'react';
import classNames from 'classnames';
import Heatmap from '../components/Heatmap.jsx';
import TitleData from '../components/TitleData.jsx';

export default class Home extends React.Component {
  render() {
    return (

<div>
       
        <TitleData />

           <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="dashboard_graph">

                <div className="row x_title">
                  <div className="col-md-6">
                    <h3> Electromotor   <small>Floor plan overview</small></h3>
                  </div>
                  <div className="col-md-6">
             
                  </div>
                </div>

                <div className="col-md-9 col-sm-9 col-xs-12">
                 
                  <Heatmap />

                </div>
                 <div className="col-md-3">
             
                  </div>
                <div className="clearfix"></div>
              </div>
            </div>

          </div>
 


</div>

    );
  }
}
