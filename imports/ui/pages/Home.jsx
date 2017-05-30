import React from 'react';
import classNames from 'classnames';
import Heatmap from '../components/Heatmap.jsx';
import TitleData from '../components/TitleData.jsx';
import NodeInfo from '../components/NodeInfo.jsx';
import Power from '../components/Power.jsx';
export default class Home extends React.Component {
  render() {

      var firsttemp = {
        background:'#ffffd4'
      };
      var secondtemp={
        background:'#fed98e'
      };
      var thirdtemp={
        background:'#fe9929'
      };
      var fourthtemp={
        background:'#d95f0e'
      };
      var fifthtemp={
        background:'#993404'
      };

      var firsthumid = {
        background:'#f1eef6'
      };
      var secondhumid={
        background:'#bdc9e1'
      };
      var thirdhumid={
        background:'#74a9cf'
      };
      var fourthhumid={
        background:'#2b8cbe'
      };

      var fifthhumid={
        background:'#045a8d'
      };



      var firstlight = {
        background:'#ffffcc'
      };
      var secondlight={
        background:'#c2e699'
      };
      var thirdlight={
        background:'#78c679'
      };
      var fourthlight={
        background:'#31a354'
      };
      var fifthlight={
        background:'#006837'
      };

     var firstnoise = {
        background:'#f2f0f7'
      };
      var secondnoise={
        background:'#cbc9e2'
      };
      var thirdnoise={
        background:'#9e9ac8'
      };
      var fourthnoise={
        background:'#756bb1'
      };
      var fifthnoise={
        background:'#54278f'
      };


      heatmap={

        "L01":[[20, 25, 25.1],
        [25.4, 24.8, 29]],

       }

        noise={

        "L01":[[93, 78, 81],
        [89, 94, 74]]
       }

          humidity={

        "L01":[[40, 38.5, 38],
        [39, 34, 44]]
       }

            light={

        "L01":[[1200, 1000, 1100],
        [1010, 1130, 1300]]
       }



    return (

 

<div>
       
        <TitleData />
     <br />

           <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="dashboard_graph">

              {/*    <div className="row x_title">
                    <div className="col-md-6">
                      <h3> Office <small>floor plan heatmap</small></h3>
                    </div>
                    <div className="col-md-6">
               
                    </div>
                  </div>*/}

                  <div className="col-md-3 col-sm-4 col-xs-12 bg-white">
                    <div className="row">
                      <div className="align_right">
                        <h2>Temperature <small>Office heatmap</small> </h2>
                                  
                      </div>  
                      <div className="divider"></div>
                      
                    </div>
                   {/*   <div className="col-md-3 col-sm-4 col-xs-12">
                      
                        <NodeInfo />
                  
                      </div>*/}
                      <div className="col-md-12 col-sm-4 col-xs-12">
                        <Heatmap data={heatmap} type={"temp"}/>
                      </div>
                  <div className="row">
                    <div className='my-legend'>
                  {/*  <div className='legend-title'>Temperature mapping</div>*/}
                      <div className='legend-scale'>
                        <ul className='legend-labels'>
                          <li><span style={firsttemp}></span>20 °C</li>
                          <li><span style={secondtemp}></span>22 °C</li>
                          <li><span style={thirdtemp}></span>25 °C</li>
                          <li><span style={fourthtemp}></span>27 °C</li>
                          <li><span style={fifthtemp}></span>29 °C</li>
                        </ul>
                      </div>
                      
                      </div>
                  </div>
                  </div>
                 <div className="col-md-3 col-sm-4 col-xs-12">
                     <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="align_right">
                        <h2>Humidity  <small>Office heatmap</small></h2>
                                  
                      </div>  
                      <div className="divider"></div>
                      
                    </div>
                 {/*     <div className="col-md-3 col-sm-4 col-xs-12">
                      
                        <NodeInfo />
                  
                      </div>*/}
                      <div className="col-md-12 col-sm-4 col-xs-12">
                        <Heatmap data={humidity} type={"humid"}/>
                      </div>
                          <div className="row">
                    <div className='my-legend'>
                  {/*  <div className='legend-title'>Temperature mapping</div>*/}
                      <div className='legend-scale'>
                        <ul className='legend-labels'>
                          <li><span style={firsthumid}></span>30 %</li>
                          <li><span style={secondhumid}></span>40 %</li>
                          <li><span style={thirdhumid}></span>45 %</li>
                          <li><span style={fourthhumid}></span>50 5</li>
                          <li><span style={fifthhumid}></span>55 %</li>
                        </ul>
                      </div>
                      
                      </div>
                  </div>

                  </div>
                   <div className="col-md-3 col-sm-4 col-xs-12">
                     <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="align_right">
                        <h2>Natural Light  <small>Office heatmap</small></h2>
                                  
                      </div>  
                      <div className="divider"></div>
                      
                    </div>
                {/*      <div className="col-md-3 col-sm-4 col-xs-12">
                      
                        <NodeInfo />
                  
                      </div>*/}
                      <div className="col-md-12 col-sm-4 col-xs-12">
                        <Heatmap data={light} type={"light"}/>
                      </div>

                                 <div className="row">
                    <div className='my-legend'>
                  {/*  <div className='legend-title'>Temperature mapping</div>*/}
                      <div className='legend-scale'>
                        <ul className='legend-labels'>
                          <li><span style={firstlight}></span>800 lm</li>
                          <li><span style={secondlight}></span>900 lm</li>
                          <li><span style={thirdlight}></span>1000 lm</li>
                          <li><span style={fourthlight}></span>1100 lm</li>
                          <li><span style={fifthlight}></span>1200 lm</li>
                        </ul>
                      </div>
                      
                      </div>
                  </div>


                  </div>
                   <div className="col-md-3 col-sm-4 col-xs-12">
                     <div className="col-md-12 col-sm-12 col-xs-12">
                          <div className="align_right">
                            <h2>Noise    <small>Office heatmap</small></h2>
                                      
                          </div>  
                          <div className="divider"></div>
                          
                        </div>
                       {/*   <div className="col-md-3 col-sm-4 col-xs-12">
                          
                            <NodeInfo />
                      
                          </div>*/}
                          <div className="col-md-12 col-sm-4 col-xs-12">
                            <Heatmap data={noise} type={"noise"}/>
                          </div>

                                                     <div className="row">
                    <div className='my-legend'>
                  {/*  <div className='legend-title'>Temperature mapping</div>*/}
                      <div className='legend-scale'>
                        <ul className='legend-labels'>
                          <li><span style={firstnoise}></span>70 dB</li>
                          <li><span style={secondnoise}></span>80 dB</li>
                          <li><span style={thirdnoise}></span>90 dB</li>
                          <li><span style={fourthnoise}></span>95 dB</li>
                          <li><span style={fifthnoise}></span>100 dB</li>
                        </ul>
                      </div>
                      
                      </div>
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
