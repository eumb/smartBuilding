import React from 'react';
import classNames from 'classnames';
import TitleData from '../components/TitleData.jsx';
import DCPower from '../components/DCPower.jsx';


export default class SR extends React.Component {
  


  render() {


    
    return (

 

<div>
       
        <TitleData />
           <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="dashboard_graph">
                    <div className="row">
                      <div className="align_right">
                        <h3>Continous Currents <small> Realtime data measurements</small> </h3>
                                  
                      </div>  
                      <div className="divider"></div>
                      
                    </div>
              		<DCPower />
              </div>
            </div>
        </div>
     
        
</div>

    );
  }
}
