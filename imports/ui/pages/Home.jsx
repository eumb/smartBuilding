import React from 'react';
import classNames from 'classnames';
import Heatmap from '../components/Heatmap.jsx';
import TitleData from '../components/TitleData.jsx';
import NodeInfo from '../components/NodeInfo.jsx';
import Power from '../components/Power.jsx';
export default class Home extends React.Component {
  render() {

      heatmap={

        "L01":[[29.6, 25, 24.1],
        [20.4, 24.8, 29.9]],

       }

        noise={

        "L01":[[29, 28, 21],
        [29, 24, 24]]
       }

          humidity={

        "L01":[[40, 33, 18],
        [39, 34, 44]]
       }

            light={

        "L01":[[40, 33, 18],
        [39, 34, 44]]
       }



    return (

<div>
       
        <TitleData />
     <br />

           <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="dashboard_graph">

                  <div className="row x_title">
                    <div className="col-md-6">
                      <h3> Office <small>floor plan heatmap</small></h3>
                    </div>
                    <div className="col-md-6">
               
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-4 col-xs-12 bg-white">
                    <div className="row">
                      <div className="align_right">
                        <h2>Temperature </h2>
                                  
                      </div>  
                      <div className="divider"></div>
                      
                    </div>
                   {/*   <div className="col-md-3 col-sm-4 col-xs-12">
                      
                        <NodeInfo />
                  
                      </div>*/}
                      <div className="row">
                        <Heatmap data={heatmap}/>
                      </div>

                  </div>
                 <div className="col-md-3 col-sm-4 col-xs-12">
                     <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="align_right">
                        <h2>Humidity </h2>
                                  
                      </div>  
                      <div className="divider"></div>
                      
                    </div>
                 {/*     <div className="col-md-3 col-sm-4 col-xs-12">
                      
                        <NodeInfo />
                  
                      </div>*/}
                      <div className="col-md-12 col-sm-4 col-xs-12">
                        <Heatmap data={humidity}/>
                      </div>
                  </div>
                   <div className="col-md-3 col-sm-4 col-xs-12">
                     <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="align_right">
                        <h2>Light </h2>
                                  
                      </div>  
                      <div className="divider"></div>
                      
                    </div>
                {/*      <div className="col-md-3 col-sm-4 col-xs-12">
                      
                        <NodeInfo />
                  
                      </div>*/}
                      <div className="col-md-12 col-sm-4 col-xs-12">
                        <Heatmap data={light}/>
                      </div>
                  </div>
                   <div className="col-md-3 col-sm-4 col-xs-12">
                     <div className="col-md-12 col-sm-12 col-xs-12">
                          <div className="align_right">
                            <h2>Noise </h2>
                                      
                          </div>  
                          <div className="divider"></div>
                          
                        </div>
                       {/*   <div className="col-md-3 col-sm-4 col-xs-12">
                          
                            <NodeInfo />
                      
                          </div>*/}
                          <div className="col-md-12 col-sm-4 col-xs-12">
                            <Heatmap data={noise}/>
                          </div>
                    </div>
                     <div className="clearfix"></div>
          </div>
         </div>
        </div>
             <br />

        <Power />

</div>

    );
  }
}
