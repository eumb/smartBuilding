import React from 'react';
import classNames from 'classnames';
import Heatmaps from '../components/Heatmaps.jsx';
import TitleDataSR from '../components/TitleDataSR.jsx';
import SRNodeInfo from '../components/SRNodeInfo.jsx';


export default class SR extends React.Component {
  


  render() {


    
    return (

 

<div>
       
        <TitleDataSR />
           <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="dashboard_graph">
                    <div className="row">
                      <div className="align_right">
                        <h3>Server Area <small>Realtime data</small> </h3>
                                  
                      </div>  
                      <div className="divider"></div>
                      
                    </div>
              		<SRNodeInfo />
              </div>
            </div>
        </div>
     
        
</div>

    );
  }
}
