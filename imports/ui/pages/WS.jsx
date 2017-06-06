import React from 'react';
import classNames from 'classnames';
import Heatmaps from '../components/Heatmaps.jsx';
import TitleData from '../components/TitleData.jsx';
import WSNodeInfo from '../components/WSNodeInfo.jsx';


export default class WS extends React.Component {
  


  render() {


    
    return (

 

<div>
       
        <TitleData />
        <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="dashboard_graph">
                    <div className="row">
                      <div className="align_right">
                        <h3>WorkSpace <small>Realtime data</small> </h3>
                                  
                      </div>  
                      <div className="divider"></div>
                      
                    </div>
              		<WSNodeInfo />
              </div>
            </div>
        </div>

        
     
        
</div>

    );
  }
}
