import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import ReactDOM from "react-dom";

import { createContainer } from 'meteor/react-meteor-data';
import ACValues from '../components/ACValues.jsx';
import {MASURA_TGV_ID1} from '../../collections/collections.js';
import {TGD_BOROURI_ID52} from '../../collections/collections.js';
import {SOSIRE_TR4_ID56} from '../../collections/collections.js';
import {SOSIRE_TR3_ID55} from '../../collections/collections.js';
import {SOSIRE_TR2_ID54} from '../../collections/collections.js';
import {SOSIRE_TR1_ID53} from '../../collections/collections.js';
import {HVAC_CLIME_WIFI_ID73} from '../../collections/collections.js';
import {HVAC_CLIME_WIPRO_ID72} from '../../collections/collections.js';

class ACPower extends React.Component {
// Meteor.Collection("MASURA_TGV_ID1"); // { "_id" : ObjectId("59382093e95f2f2008a45d5a"), "Voltage_effective_L1" : 234.04, "Voltage_effective_L2" : 234.64, "Voltage_effective_L3" : 233.15, "Current_effective_L1" : 701.55, 
//"Current_effective_L2" : 726.48, "Current_effective_L3" : 685.7, "Active_Power_Sum_L1_L3" : 494108.7, "Reactive_power_fundamental_Sum_L1_L3" : 3971.04, 
//"Consumed_Active_Energy_Sum_L1_L3" : 400776672, "Reactive_Energy_Sum_L1_L3" : 2391923, "created_at" : ISODate("2017-06-07T15:49:39.232Z") }



// Meteor.Collection("TGD_BOROURI_ID52") //{ "_id" : ObjectId("5938206be95f2f2008a45cea"), "Voltage_effective_L1" : 234.78, "Voltage_effective_L2" : 235.13, 
//"Voltage_effective_L3" : 233.3, "Current_effective_L1" : 299.06, "Current_effective_L2" : 308.02, "Current_effective_L3" : 287.18, "Active_Power_Sum_L1_L3" : 203025.98, 
//"Reactive_power_fundamental_Sum_L1_L3" : 45724.18, "Consumed_Active_Energy_Sum_L1_L3" : 1624076800, "Reactive_Energy_Sum_L1_L3" : -37404824, "created_at" : ISODate("2017-06-07T15:48:59.459Z") }


MASURA_TGV_ID1(sensorval) {
    return this.props.MASURA_TGV_ID1.map((sensorvalue) => (
      <ACValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }

TGD_BOROURI_ID52(sensorval) {
    return this.props.TGD_BOROURI_ID52.map((sensorvalue) => (
      <ACValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }

  
  SOSIRE_TR4_ID56(sensorval) {
    return this.props.SOSIRE_TR4_ID56.map((sensorvalue) => (
      <ACValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }

SOSIRE_TR3_ID55(sensorval) {
    return this.props.SOSIRE_TR3_ID55.map((sensorvalue) => (
      <ACValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }

SOSIRE_TR2_ID54(sensorval) {
    return this.props.SOSIRE_TR2_ID54.map((sensorvalue) => (
      <ACValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }

SOSIRE_TR1_ID53(sensorval) {
    return this.props.SOSIRE_TR1_ID53.map((sensorvalue) => (
      <ACValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }
HVAC_CLIME_WIFI_ID73(sensorval) {
    return this.props.HVAC_CLIME_WIFI_ID73.map((sensorvalue) => (
      <ACValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }

HVAC_CLIME_WIPRO_ID72(sensorval) {
    return this.props.HVAC_CLIME_WIPRO_ID72.map((sensorvalue) => (
      <ACValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }






render() {

  var widthth = {
      width:'37%'
    };
  var widthtable={
    width:'100%'
  }
    return (
        
        <div>



         <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="x_panel">
                  
                    <div className="">
                      <table className="" style={widthtable}>
                     <tbody>
                      <tr>
                     
                        <th>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p className="power_title">SOSIRE TR4</p>
                          </div>
                        
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.SOSIRE_TR4_ID56('Voltage_effective_L1')}
                          {this.SOSIRE_TR4_ID56('Voltage_effective_L2')}
                          {this.SOSIRE_TR4_ID56('Voltage_effective_L3')}
                          {this.SOSIRE_TR4_ID56('Current_effective_L1')}
                          {this.SOSIRE_TR4_ID56('Current_effective_L2')}
                          {this.SOSIRE_TR4_ID56('Current_effective_L3')}
                          {this.SOSIRE_TR4_ID56('Active_Power_Sum_L1_L3')}
                          {this.SOSIRE_TR4_ID56('Reactive_power_fundamental_Sum_L1_L3')}
                          {this.SOSIRE_TR4_ID56('Consumed_Active_Energy_Sum_L1_L3')}
                          {this.SOSIRE_TR4_ID56('Reactive_Energy_Sum_L1_L3')}

                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
                         </div>          
                </div>
              </div> 
                        <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="x_panel">
                  
                    <div className="">
                      <table className="" style={widthtable}>
                     <tbody>
                      <tr>
                     
                        <th>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p className="power_title">SOSIRE TR3</p>
                          </div>
                      
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.SOSIRE_TR3_ID55('Voltage_effective_L1')}
                          {this.SOSIRE_TR3_ID55('Voltage_effective_L2')}
                          {this.SOSIRE_TR3_ID55('Voltage_effective_L3')}
                          {this.SOSIRE_TR3_ID55('Current_effective_L1')}
                          {this.SOSIRE_TR3_ID55('Current_effective_L2')}
                          {this.SOSIRE_TR3_ID55('Current_effective_L3')}
                          {this.SOSIRE_TR3_ID55('Active_Power_Sum_L1_L3')}
                          {this.SOSIRE_TR3_ID55('Reactive_power_fundamental_Sum_L1_L3')}
                          {this.SOSIRE_TR3_ID55('Consumed_Active_Energy_Sum_L1_L3')}
                          {this.SOSIRE_TR3_ID55('Reactive_Energy_Sum_L1_L3')}  

                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
                         </div>          
                </div>
              </div> 
                              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="x_panel">
                  
                    <div className="">
                      <table className="" style={widthtable}>
                     <tbody>
                      <tr>
                     
                        <th>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p className="power_title">SOSIRE TR2</p>
                          </div>
                      
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.SOSIRE_TR2_ID54('Voltage_effective_L1')}
                          {this.SOSIRE_TR2_ID54('Voltage_effective_L2')}
                          {this.SOSIRE_TR2_ID54('Voltage_effective_L3')}
                          {this.SOSIRE_TR2_ID54('Current_effective_L1')}
                          {this.SOSIRE_TR2_ID54('Current_effective_L2')}
                          {this.SOSIRE_TR2_ID54('Current_effective_L3')}
                          {this.SOSIRE_TR2_ID54('Active_Power_Sum_L1_L3')}
                          {this.SOSIRE_TR2_ID54('Reactive_power_fundamental_Sum_L1_L3')}
                          {this.SOSIRE_TR2_ID54('Consumed_Active_Energy_Sum_L1_L3')}
                          {this.SOSIRE_TR2_ID54('Reactive_Energy_Sum_L1_L3')}  

                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
                         </div>          
                </div>
              </div> 

                            <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="x_panel">
                  
                    <div className="">
                      <table className="" style={widthtable}>
                     <tbody>
                      <tr>
                     
                        <th>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p className="power_title">SOSIRE TR1</p>
                          </div>
                      
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.SOSIRE_TR1_ID53('Voltage_effective_L1')}
                          {this.SOSIRE_TR1_ID53('Voltage_effective_L2')}
                          {this.SOSIRE_TR1_ID53('Voltage_effective_L3')}
                          {this.SOSIRE_TR1_ID53('Current_effective_L1')}
                          {this.SOSIRE_TR1_ID53('Current_effective_L2')}
                          {this.SOSIRE_TR1_ID53('Current_effective_L3')}
                          {this.SOSIRE_TR1_ID53('Active_Power_Sum_L1_L3')}
                          {this.SOSIRE_TR1_ID53('Reactive_power_fundamental_Sum_L1_L3')}
                          {this.SOSIRE_TR1_ID53('Consumed_Active_Energy_Sum_L1_L3')}
                          {this.SOSIRE_TR1_ID53('Reactive_Energy_Sum_L1_L3')}  

                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
                         </div>          
                </div>
              </div> 
                       
          </div> 

            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="x_panel">
                  
                    <div className="">
                      <table className="" style={widthtable}>
                     <tbody>
                      <tr>
                     
                        <th>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p className="power_title">MASURA TGV </p>
                          </div>
                        
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.MASURA_TGV_ID1('Voltage_effective_L1')}
                          {this.MASURA_TGV_ID1('Voltage_effective_L2')}
                          {this.MASURA_TGV_ID1('Voltage_effective_L3')}
                          {this.MASURA_TGV_ID1('Current_effective_L1')}
                          {this.MASURA_TGV_ID1('Current_effective_L2')}
                          {this.MASURA_TGV_ID1('Current_effective_L3')}
                          {this.MASURA_TGV_ID1('Active_Power_Sum_L1_L3')}
                          {this.MASURA_TGV_ID1('Reactive_power_fundamental_Sum_L1_L3')}
                          {this.MASURA_TGV_ID1('Consumed_Active_Energy_Sum_L1_L3')}
                          {this.MASURA_TGV_ID1('Reactive_Energy_Sum_L1_L3')}

                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
                         </div>          
                </div>
              </div> 
                        <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="x_panel">
                  
                    <div className="">
                      <table className="" style={widthtable}>
                     <tbody>
                      <tr>
                     
                        <th>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p className="power_title">TGD BIROURI</p>
                          </div>
                      
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.TGD_BOROURI_ID52('Voltage_effective_L1')}
                          {this.TGD_BOROURI_ID52('Voltage_effective_L2')}
                          {this.TGD_BOROURI_ID52('Voltage_effective_L3')}
                          {this.TGD_BOROURI_ID52('Current_effective_L1')}
                          {this.TGD_BOROURI_ID52('Current_effective_L2')}
                          {this.TGD_BOROURI_ID52('Current_effective_L3')}
                          {this.TGD_BOROURI_ID52('Active_Power_Sum_L1_L3')}
                          {this.TGD_BOROURI_ID52('Reactive_power_fundamental_Sum_L1_L3')}
                          {this.TGD_BOROURI_ID52('Consumed_Active_Energy_Sum_L1_L3')}
                          {this.TGD_BOROURI_ID52('Reactive_Energy_Sum_L1_L3')}  

                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
                         </div>          
                </div>
              </div> 

                       
          </div> 
      




            


              <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="x_panel">
                  
                    <div className="">
                      <table className="" style={widthtable}>
                     <tbody>
                      <tr>
                     
                        <th>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p className="power_title">HVAC AirConditioning Wireless</p>
                          </div>
                        
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.HVAC_CLIME_WIFI_ID73('Voltage_effective_L1')}
                          {this.HVAC_CLIME_WIFI_ID73('Voltage_effective_L2')}
                          {this.HVAC_CLIME_WIFI_ID73('Voltage_effective_L3')}
                          {this.HVAC_CLIME_WIFI_ID73('Current_effective_L1')}
                          {this.HVAC_CLIME_WIFI_ID73('Current_effective_L2')}
                          {this.HVAC_CLIME_WIFI_ID73('Current_effective_L3')}
                          {this.HVAC_CLIME_WIFI_ID73('Active_Power_Sum_L1_L3')}
                          {this.HVAC_CLIME_WIFI_ID73('Reactive_power_fundamental_Sum_L1_L3')}
                          {this.HVAC_CLIME_WIFI_ID73('Consumed_Active_Energy_Sum_L1_L3')}
                          {this.HVAC_CLIME_WIFI_ID73('Reactive_Energy_Sum_L1_L3')}

                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
                         </div>          
                </div>
              </div> 
                        <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="x_panel">
                  
                    <div className="">
                      <table className="" style={widthtable}>
                     <tbody>
                      <tr>
                     
                        <th>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p className="power_title">HVAC AirConditioning Fixed Networks</p>
                          </div>
                      
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.HVAC_CLIME_WIPRO_ID72('Voltage_effective_L1')}
                          {this.HVAC_CLIME_WIPRO_ID72('Voltage_effective_L2')}
                          {this.HVAC_CLIME_WIPRO_ID72('Voltage_effective_L3')}
                          {this.HVAC_CLIME_WIPRO_ID72('Current_effective_L1')}
                          {this.HVAC_CLIME_WIPRO_ID72('Current_effective_L2')}
                          {this.HVAC_CLIME_WIPRO_ID72('Current_effective_L3')}
                          {this.HVAC_CLIME_WIPRO_ID72('Active_Power_Sum_L1_L3')}
                          {this.HVAC_CLIME_WIPRO_ID72('Reactive_power_fundamental_Sum_L1_L3')}
                          {this.HVAC_CLIME_WIPRO_ID72('Consumed_Active_Energy_Sum_L1_L3')}
                          {this.HVAC_CLIME_WIPRO_ID72('Reactive_Energy_Sum_L1_L3')}  

                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
                         </div>          
                </div>
              </div> 

                       
          </div> 




      </div>
  
    );
  }

} 






ACPower.propTypes = {
  
  MASURA_TGV_ID1: PropTypes.array.isRequired,
  TGD_BOROURI_ID52: PropTypes.array.isRequired,
   SOSIRE_TR4_ID56: PropTypes.array.isRequired,
   SOSIRE_TR3_ID55: PropTypes.array.isRequired,
   SOSIRE_TR2_ID54: PropTypes.array.isRequired,
   SOSIRE_TR1_ID53: PropTypes.array.isRequired,
   HVAC_CLIME_WIFI_ID73: PropTypes.array.isRequired,
   HVAC_CLIME_WIPRO_ID72: PropTypes.array.isRequired,
   
 
};


export default createContainer(() => {
 
  Meteor.subscribe('MASURA_TGV_ID1');
  Meteor.subscribe('TGD_BOROURI_ID52');
  Meteor.subscribe('SOSIRE_TR4_ID56');
  Meteor.subscribe('SOSIRE_TR3_ID55');
  Meteor.subscribe('SOSIRE_TR2_ID54');
  Meteor.subscribe('SOSIRE_TR1_ID53');
  Meteor.subscribe('HVAC_CLIME_WIFI_ID73');
  Meteor.subscribe('HVAC_CLIME_WIPRO_ID72');

  return { 
 
    MASURA_TGV_ID1: MASURA_TGV_ID1.find({},{limit:1}).fetch(),
    TGD_BOROURI_ID52: TGD_BOROURI_ID52.find({}).fetch(),
    SOSIRE_TR4_ID56: SOSIRE_TR4_ID56.find({}).fetch(),
    SOSIRE_TR3_ID55: SOSIRE_TR3_ID55.find({}).fetch(),
    SOSIRE_TR2_ID54: SOSIRE_TR2_ID54.find({}).fetch(),
    SOSIRE_TR1_ID53: SOSIRE_TR1_ID53.find({}).fetch(),
    HVAC_CLIME_WIFI_ID73: HVAC_CLIME_WIFI_ID73.find({},{limit:1}).fetch(),
    HVAC_CLIME_WIPRO_ID72: HVAC_CLIME_WIPRO_ID72.find({},{limit:1}).fetch(),
  };
}, ACPower);