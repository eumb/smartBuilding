import React,{ Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import classNames from 'classnames';
import Heatmap from '../components/Heatmap.jsx';
import {Dev_5CCF7FA43A8B} from '../../collections/collections.js';
import {Dev_5CCF7FEFB40E} from '../../collections/collections.js';
import {Dev_5CCF7FEFBE72} from '../../collections/collections.js';
import {Dev_5CCF7FF0AA4F} from '../../collections/collections.js';
import {Dev_5CCF7FEFBAD3} from '../../collections/collections.js';
import {Dev_5CCF7FEFB0C0} from '../../collections/collections.js';
import {Dev_5CCF7FF0A971} from '../../collections/collections.js';
import {Dev_5CCF7FEFBE9E} from '../../collections/collections.js';
import {Dev_5CCF7FA43AB8} from '../../collections/collections.js';



class Heatmaps extends React.Component {
 
  heatMap(){
 
    tempMap1=[]
    tempMap2=[]
    tempMap3=[]
    tempMap4=[]
    tempMap5=[]
    tempMap6=[]
    tempMap7=[]
    h1=_.pluck(this.props.Dev_5CCF7FA43A8B, "temp");
    tempMap1.push(h1)
    tempMap1.forEach(function(e) {
      dev1_value = e.toString()*1;

    });
    
    h2=_.pluck(this.props.Dev_5CCF7FEFB40E, "temp");
    tempMap2.push(h2)
    tempMap2.forEach(function(e) {
      dev2_value = e.toString()*1;

    });
    
    h3=_.pluck(this.props.Dev_5CCF7FEFBE72, "temp");
    tempMap3.push(h3)
    tempMap3.forEach(function(e) {
      dev3_value = e.toString()*1;

    });
    
    h4=_.pluck(this.props.Dev_5CCF7FF0AA4F, "temp");
    tempMap4.push(h4)
     tempMap4.forEach(function(e) {
      dev4_value = e.toString()*1;

    });
    
    h5=_.pluck(this.props.Dev_5CCF7FEFBAD3, "temp");
    tempMap5.push(h5)
     tempMap5.forEach(function(e) {
      dev5_value = e.toString()*1;

    });
    
    h6=_.pluck(this.props.Dev_5CCF7FEFB0C0, "temp");
    tempMap6.push(h6)
     tempMap6.forEach(function(e) {
      dev6_value = e.toString()*1;

    });
    h7=_.pluck(this.props.Dev_5CCF7FF0A971, "temp");
    tempMap7.push(h7)
     tempMap7.forEach(function(e) {
      dev7_value = e.toString()*1;

    });

    return heatmap={
     "L01":[
          
          [dev3_value, dev2_value,  dev1_value],
          [dev6_value, dev5_value, dev4_value]
        ]
    }

  }






  humidityMap(){
 
    tempMap1=[]
    tempMap2=[]
    tempMap3=[]
    tempMap4=[]
    tempMap5=[]
    tempMap6=[]
    h1=_.pluck(this.props.Dev_5CCF7FA43A8B, "humid");
    tempMap1.push(h1)
    tempMap1.forEach(function(e) {
      dev1_value = e.toString()*1;

    });
    
    h2=_.pluck(this.props.Dev_5CCF7FEFB40E, "humid");
    tempMap2.push(h2)
    tempMap2.forEach(function(e) {
      dev2_value = e.toString()*1;

    });
    
    h3=_.pluck(this.props.Dev_5CCF7FEFBE72, "humid");
    tempMap3.push(h3)
    tempMap3.forEach(function(e) {
      dev3_value = e.toString()*1;

    });
    
    h4=_.pluck(this.props.Dev_5CCF7FF0AA4F, "humid");
    tempMap4.push(h4)
     tempMap4.forEach(function(e) {
      dev4_value = e.toString()*1;

    });
    
    h5=_.pluck(this.props.Dev_5CCF7FEFBAD3, "humid");
    tempMap5.push(h5)
     tempMap5.forEach(function(e) {
      dev5_value = e.toString()*1;

    });
    
    h6=_.pluck(this.props.Dev_5CCF7FEFB0C0, "humid");
    tempMap6.push(h6)
     tempMap6.forEach(function(e) {
      dev6_value = e.toString()*1;

    });

    return humid={
     "L01":[
       [dev3_value, dev2_value,  dev1_value],
          [dev6_value, dev5_value, dev4_value]
        ]
    }

  }


  noiseMap(){
 
    tempMap1=[]
    tempMap2=[]
    tempMap3=[]
    tempMap4=[]
    tempMap5=[]
    tempMap6=[]
    h1=_.pluck(this.props.Dev_5CCF7FA43A8B, "noise_p");
    tempMap1.push(h1)
    tempMap1.forEach(function(e) {
      dev1_value = e.toString()*1;

    });
    
    h2=_.pluck(this.props.Dev_5CCF7FEFB40E, "noise_p");
    tempMap2.push(h2)
    tempMap2.forEach(function(e) {
      dev2_value = e.toString()*1;

    });
    
    h3=_.pluck(this.props.Dev_5CCF7FEFBE72, "noise_p");
    tempMap3.push(h3)
    tempMap3.forEach(function(e) {
      dev3_value = e.toString()*1;

    });
    
    h4=_.pluck(this.props.Dev_5CCF7FF0AA4F, "noise_p");
    tempMap4.push(h4)
     tempMap4.forEach(function(e) {
      dev4_value = e.toString()*1;

    });
    
    h5=_.pluck(this.props.Dev_5CCF7FEFBAD3, "noise_p");
    tempMap5.push(h5)
     tempMap5.forEach(function(e) {
      dev5_value = e.toString()*1;

    });
    
    h6=_.pluck(this.props.Dev_5CCF7FEFB0C0, "noise_p");
    tempMap6.push(h6)
     tempMap6.forEach(function(e) {
      dev6_value = e.toString()*1;

    });

    return noise={
     "L01":[
      [dev3_value, 55,  dev1_value],
          [dev6_value, dev5_value, dev4_value]
        ]
    }

  }


    lightMap(){
 
    tempMap1=[]
    tempMap2=[]
    tempMap3=[]
    tempMap4=[]
    tempMap5=[]
    tempMap6=[]
    h1=_.pluck(this.props.Dev_5CCF7FA43A8B, "light");
    tempMap1.push(h1)
    tempMap1.forEach(function(e) {
      dev1_value = e.toString()*1;

    });
    
    h2=_.pluck(this.props.Dev_5CCF7FEFB40E, "light");
    tempMap2.push(h2)
    tempMap2.forEach(function(e) {
      dev2_value = e.toString()*1;

    });
    
    h3=_.pluck(this.props.Dev_5CCF7FEFBE72, "light");
    tempMap3.push(h3)
    tempMap3.forEach(function(e) {
      dev3_value = e.toString()*1;

    });
    
    h4=_.pluck(this.props.Dev_5CCF7FF0AA4F, "light");
    tempMap4.push(h4)
     tempMap4.forEach(function(e) {
      dev4_value = e.toString()*1;

    });
    
    h5=_.pluck(this.props.Dev_5CCF7FEFBAD3, "light");
    tempMap5.push(h5)
     tempMap5.forEach(function(e) {
      dev5_value = e.toString()*1;

    });
    
    h6=_.pluck(this.props.Dev_5CCF7FEFB0C0, "light");
    tempMap6.push(h6)
     tempMap6.forEach(function(e) {
      dev6_value = e.toString()*1;

    });

    light={
     "L01":[
     [dev3_value, dev2_value,  dev1_value],
          [dev6_value, dev5_value, dev4_value]
        ]
    } 
    //console.log(light)
    return light;

  }

   heatMapExtTemp(){
 

    tempMap7=[]
  
    h7=_.pluck(this.props.Dev_5CCF7FF0A971, "temp");
    tempMap7.push(h7)
     tempMap7.forEach(function(e) {
      dev7_value = e.toString()*1;

    });

     heatmap={
     "L01":[
          
          [dev7_value,dev7_value, dev7_value],
          [dev7_value,dev7_value, dev7_value]
        ]
    }
    //console.log(heatmap)
    return heatmap;
  }
     heatMapExtHumid(){
 

    tempMap7=[]
  
    h7=_.pluck(this.props.Dev_5CCF7FF0A971, "humid");
    tempMap7.push(h7)
     tempMap7.forEach(function(e) {
      dev7_value = e.toString()*1;

    });

    return humid={
     "L01":[
          
          [dev7_value,dev7_value, dev7_value],
          [dev7_value,dev7_value, dev7_value]
        ]
    }

  }
     heatMapNP(){
 

   
  

    return map={
     "L01":[
          
          [255000,255000, 255000],
          [255000,255000, 255000]
        ]
    }

  }
     heatMapExtLight(){
 

    tempMap7=[]
  
    h7=_.pluck(this.props.Dev_5CCF7FF0A971, "light");
    tempMap7.push(h7)
     tempMap7.forEach(function(e) {
      dev7_value = e.toString()*1;

    });

    return light={
     "L01":[
          
          [dev7_value,dev7_value, dev7_value],
          [dev7_value,dev7_value, dev7_value]
        ]
    }

  }


  heatMapMR1Temp(){
 

    tempMap=[]
  
    h=_.pluck(this.props.Dev_5CCF7FA43A8B, "temp");
    tempMap.push(h)
     tempMap.forEach(function(e) {
      dev_value = e.toString()*1;

    });

    return light={
     "L01":[
          
          [dev_value,dev_value, dev_value],
          [dev_value,dev_value, dev_value]
        ]
    }

  }
   heatMapMR1Humid(){
 

    tempMap=[]
  
    h=_.pluck(this.props.Dev_5CCF7FA43A8B, "humid");
    tempMap.push(h)
     tempMap.forEach(function(e) {
      dev_value = e.toString()*1;

    });

    return light={
     "L01":[
          
          [dev_value,dev_value, dev_value],
          [dev_value,dev_value, dev_value]
        ]
    }

  }


   heatMapMR2Temp(){
 

    tempMap=[]
  
    h=_.pluck(this.props.Dev_5CCF7FEFBE9E, "temp");
    tempMap.push(h)
     tempMap.forEach(function(e) {
      dev_value = e.toString()*1;

    });

    return light={
     "L01":[
          
          [dev_value,dev_value, dev_value],
          [dev_value,dev_value, dev_value]
        ]
    }

  }
   heatMapMR2Humid(){
 

    tempMap=[]
  
    h=_.pluck(this.props.Dev_5CCF7FEFBE9E, "humid");
    tempMap.push(h)
     tempMap.forEach(function(e) {
      dev_value = e.toString()*1;

    });

    return light={
     "L01":[
          
          [dev_value,dev_value, dev_value],
          [dev_value,dev_value, dev_value]
        ]
    }

  }


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




      





    return (

 

<div>
       
      
     <br />

           <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="dashboard_graph">

              {/*    <div className="row x_title">
                    <div className="col-md-6">
                      <h3> "Office F" <small>floor plan heatmap</small></h3>
                    </div>
                    <div className="col-md-6">
               
                    </div>
                  </div>*/}

                  <div className="col-md-3 col-sm-4 col-xs-12 bg-white">
                    <div className="row">
                      <div className="align_right">
                        <h2>Temperature <small>"Office F" heatmap</small> </h2>
                                  
                      </div>  
                      <div className="divider"></div>
                      
                    </div>
                   {/*   <div className="col-md-3 col-sm-4 col-xs-12">
                      
                        <NodeInfo />
                  
                      </div>*/}
                      <div className="col-md-12 col-sm-4 col-xs-12">
                        <Heatmap data={this.heatMap()} ext={this.heatMapExtTemp()} mr1={this.heatMapMR1Temp()} mr2={this.heatMapMR2Temp()} type={"temp"}/>

                      </div>
                  <div className="row">
                    <div className='my-legend'>
                  {/*  <div className='legend-title'>Temperature mapping</div>*/}
                      <div className='legend-scale'>
                        <ul className='legend-labels'>
                          <li><span style={firsttemp}></span>20 °C</li>
                          <li><span style={secondtemp}></span>27 °C</li>
                          <li><span style={thirdtemp}></span>29 °C</li>
                          <li><span style={fourthtemp}></span>31 °C</li>
                          <li><span style={fifthtemp}></span>35 °C</li>
                        </ul>
                      </div>
                      
                      </div>
                  </div>
                  </div>
                 <div className="col-md-3 col-sm-4 col-xs-12">
                     <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="align_right">
                        <h2>Humidity  <small>"Office F" heatmap</small></h2>
                                  
                      </div>  
                      <div className="divider"></div>
                      
                    </div>
                 {/*     <div className="col-md-3 col-sm-4 col-xs-12">
                      
                        <NodeInfo />
                  
                      </div>*/}
                      <div className="col-md-12 col-sm-4 col-xs-12">
                        <Heatmap data={this.humidityMap()} ext={this.heatMapExtHumid()} mr1={this.heatMapMR1Humid()} mr2={this.heatMapMR2Humid()} type={"humid"}/>
                      </div>
                          <div className="row">
                    <div className='my-legend'>
                  {/*  <div className='legend-title'>Temperature mapping</div>*/}
                      <div className='legend-scale'>
                        <ul className='legend-labels'>
                          <li><span style={firsthumid}></span>35 %</li>
                          <li><span style={secondhumid}></span>40 %</li>
                          <li><span style={thirdhumid}></span>45 %</li>
                          <li><span style={fourthhumid}></span>50 %</li>
                          <li><span style={fifthhumid}></span>55 %</li>
                        </ul>
                      </div>
                      
                      </div>
                  </div>

                  </div>
                   <div className="col-md-3 col-sm-4 col-xs-12">
                     <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="align_right">
                        <h2>Natural Light  <small>"Office F" heatmap</small></h2>
                                  
                      </div>  
                      <div className="divider"></div>
                      
                    </div>
                {/*      <div className="col-md-3 col-sm-4 col-xs-12">
                      
                        <NodeInfo />
                  
                      </div>*/}
                      <div className="col-md-12 col-sm-4 col-xs-12">
                        <Heatmap data={this.lightMap()} ext={this.heatMapExtLight()} mr1={this.heatMapNP()} mr2={this.heatMapNP()} type={"light"}/>
                      </div>

                                 <div className="row">
                    <div className='my-legend'>
                  {/*  <div className='legend-title'>Temperature mapping</div>*/}
                      <div className='legend-scale'>
                        <ul className='legend-labels'>
                          <li><span style={fifthlight}></span>100 lx</li>
                          <li><span style={fourthlight}></span>500 lx</li>
                          <li><span style={thirdlight}></span>2500 lx</li>
                          <li><span style={secondlight}></span>5500 lx</li>
                          <li><span style={firstlight}></span>11000 lx</li>
                          
                          
                          
                          
                        </ul>
                      </div>
                      
                      </div>
                  </div>


                  </div>
                   <div className="col-md-3 col-sm-4 col-xs-12">
                     <div className="col-md-12 col-sm-12 col-xs-12">
                          <div className="align_right">
                            <h2>Noise    <small>"Office F" heatmap</small></h2>
                                      
                          </div>  
                          <div className="divider"></div>
                          
                        </div>
                       {/*   <div className="col-md-3 col-sm-4 col-xs-12">
                          
                            <NodeInfo />
                      
                          </div>*/}
                          <div className="col-md-12 col-sm-4 col-xs-12">
                            <Heatmap data={this.noiseMap()} ext={this.heatMapNP()} mr1={this.heatMapNP()} mr2={this.heatMapNP()} type={"noise"}/>
                          </div>

                                                     <div className="row">
                    <div className='my-legend'>
                  {/*  <div className='legend-title'>Temperature mapping</div>*/}
                      <div className='legend-scale'>
                        <ul className='legend-labels'>
                          <li><span style={firstnoise}></span>40 dB</li>
                          <li><span style={secondnoise}></span>50 dB</li>
                          <li><span style={thirdnoise}></span>60 dB</li>
                          <li><span style={fourthnoise}></span>80 dB</li>
                          <li><span style={fifthnoise}></span>90 dB</li>
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

       

</div>

    );
  }
}


Heatmaps.propTypes = {

  Dev_5CCF7FA43A8B: PropTypes.array.isRequired,
  Dev_5CCF7FEFB40E: PropTypes.array.isRequired,
  Dev_5CCF7FEFBE72: PropTypes.array.isRequired,
  Dev_5CCF7FF0AA4F: PropTypes.array.isRequired,
  Dev_5CCF7FEFBAD3: PropTypes.array.isRequired,
  Dev_5CCF7FEFB0C0: PropTypes.array.isRequired,
  Dev_5CCF7FF0A971: PropTypes.array.isRequired,
  Dev_5CCF7FEFBE9E: PropTypes.array.isRequired,
  Dev_5CCF7FA43AB8: PropTypes.array.isRequired,
};


export default createContainer(() => {

  Meteor.subscribe('5CCF7FA43A8B');
  Meteor.subscribe('5CCF7FEFB40E');
  Meteor.subscribe('5CCF7FEFBE72');
  Meteor.subscribe('5CCF7FF0AA4F');
  Meteor.subscribe('5CCF7FEFBAD3');
  Meteor.subscribe('5CCF7FEFB0C0');
  Meteor.subscribe('5CCF7FF0A971');
  Meteor.subscribe('5CCF7FEFBE9E');
  Meteor.subscribe('5CCF7FA43AB8');


  return { 
   Dev_5CCF7FA43A8B: Dev_5CCF7FA43A8B.find({}).fetch(),
   Dev_5CCF7FEFB40E: Dev_5CCF7FEFB40E.find({}).fetch(),
   Dev_5CCF7FEFBE72: Dev_5CCF7FEFBE72.find({}).fetch(),
   Dev_5CCF7FF0AA4F: Dev_5CCF7FF0AA4F.find({}).fetch(),
   Dev_5CCF7FEFBAD3: Dev_5CCF7FEFBAD3.find({}).fetch(),
   Dev_5CCF7FEFB0C0: Dev_5CCF7FEFB0C0.find({}).fetch(),
   Dev_5CCF7FF0A971: Dev_5CCF7FF0A971.find({}).fetch(),
   Dev_5CCF7FEFBE9E: Dev_5CCF7FEFBE9E.find({}).fetch(),
   Dev_5CCF7FA43AB8: Dev_5CCF7FA43AB8.find({}).fetch(),
  };
}, Heatmaps);

//5CCF7FF0AA4F
//5CCF7FF0B17A
//5CCF7FF0B704
//5CCF7FEFB40E
//5CCF7FEFBE72