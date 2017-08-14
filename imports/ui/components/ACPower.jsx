import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import ReactDOM from "react-dom";

import { createContainer } from 'meteor/react-meteor-data';
import ACValues from '../components/ACValues.jsx';
import {MASURA_TGV_ID1} from '../../collections/collections.js';
import {TGD_BIROURI_ID52} from '../../collections/collections.js';
import {SOSIRE_TR4_ID56} from '../../collections/collections.js';
import {SOSIRE_TR3_ID55} from '../../collections/collections.js';
import {SOSIRE_TR2_ID54} from '../../collections/collections.js';
import {SOSIRE_TR1_ID53} from '../../collections/collections.js';
import {HVAC_CLIME_WIFI_ID73} from '../../collections/collections.js';
import {HVAC_CLIME_WIPRO_ID72} from '../../collections/collections.js';

import {MN_ZONA_1_ID2} from '../../collections/collections.js';
import {MN_ZONA_2_ID3} from '../../collections/collections.js';
import {MN_ZONA_3_ID6} from '../../collections/collections.js';
import {FN_VITALI_ID7} from '../../collections/collections.js';
import {FN_NORMALI_ID8} from '../../collections/collections.js';

import {BIROURI_TD_ZONA_E_ID68} from '../../collections/collections.js';
import {BIROURI_TD_ZONA_F_ID69} from '../../collections/collections.js';
import {BIROURI_TD_ZONA_G_ID70} from '../../collections/collections.js';
import {BIROURI_TD_ZONA_H_ID71} from '../../collections/collections.js';
import {Iluminat_C_labs_ID80} from '../../collections/collections.js';
import {Iluminat_D_labs_ID81} from '../../collections/collections.js';


class ACPower extends React.Component {
// Meteor.Collection("MASURA_TGV_ID1"); // { "_id" : ObjectId("59382093e95f2f2008a45d5a"), "Voltage_effective_L1" : 234.04, "Voltage_effective_L2" : 234.64, "Voltage_effective_L3" : 233.15, "Current_effective_L1" : 701.55, 
//"Current_effective_L2" : 726.48, "Current_effective_L3" : 685.7, "Active_Power_Sum_L1_L3" : 494108.7, "Reactive_power_fundamental_Sum_L1_L3" : 3971.04, 
//"Consumed_Active_Energy_Sum_L1_L3" : 400776672, "Reactive_Energy_Sum_L1_L3" : 2391923, "created_at" : ISODate("2017-06-07T15:49:39.232Z") }



// Meteor.Collection("TGD_BIROURI_ID52") //{ "_id" : ObjectId("5938206be95f2f2008a45cea"), "Voltage_effective_L1" : 234.78, "Voltage_effective_L2" : 235.13, 
//"Voltage_effective_L3" : 233.3, "Current_effective_L1" : 299.06, "Current_effective_L2" : 308.02, "Current_effective_L3" : 287.18, "Active_Power_Sum_L1_L3" : 203025.98, 
//"Reactive_power_fundamental_Sum_L1_L3" : 45724.18, "Consumed_Active_Energy_Sum_L1_L3" : 1624076800, "Reactive_Energy_Sum_L1_L3" : -37404824, "created_at" : ISODate("2017-06-07T15:48:59.459Z") }


MASURA_TGV_ID1(sensorval) {
    return this.props.MASURA_TGV_ID1.map((sensorvalue) => (
      <ACValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }


BIROURI_TD_ZONA_E_ID68(sensorval) {
    return this.props.BIROURI_TD_ZONA_E_ID68.map((sensorvalue) => (
      <ACValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }

  BIROURI_TD_ZONA_F_ID69(sensorval) {
    return this.props.BIROURI_TD_ZONA_F_ID69.map((sensorvalue) => (
      <ACValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }


  BIROURI_TD_ZONA_G_ID70(sensorval) {
    return this.props.BIROURI_TD_ZONA_G_ID70.map((sensorvalue) => (
      <ACValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }


  BIROURI_TD_ZONA_H_ID71(sensorval) {
    return this.props.BIROURI_TD_ZONA_H_ID71.map((sensorvalue) => (
      <ACValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }


  Iluminat_C_labs_ID80(sensorval) {
    return this.props.Iluminat_C_labs_ID80.map((sensorvalue) => (
      <ACValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }

    Iluminat_D_labs_ID81(sensorval) {
    return this.props.Iluminat_D_labs_ID81.map((sensorvalue) => (
      <ACValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }




TGD_BIROURI_ID52(sensorval) {
    return this.props.TGD_BIROURI_ID52.map((sensorvalue) => (
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



MN_ZONA_1_ID2(sensorval) {
    return this.props.MN_ZONA_1_ID2.map((sensorvalue) => (
      <ACValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }

MN_ZONA_2_ID3(sensorval) {
    return this.props.MN_ZONA_2_ID3.map((sensorvalue) => (
      <ACValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }

MN_ZONA_3_ID6(sensorval) {
    return this.props.MN_ZONA_3_ID6.map((sensorvalue) => (
      <ACValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }

FN_VITALI_ID7(sensorval) {
    return this.props.FN_VITALI_ID7.map((sensorvalue) => (
      <ACValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }

FN_NORMALI_ID8(sensorval) {
    return this.props.FN_NORMALI_ID8.map((sensorvalue) => (
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
        
        <div className="ws_nodeInfo">



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
                              <p className="updated_currents">  {this.SOSIRE_TR4_ID56('updated')} </p>
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
                               <p className="updated_currents">  {this.SOSIRE_TR3_ID55('updated')} </p>
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
                    <p className="updated_currents">  {this.SOSIRE_TR2_ID54('updated')} </p>
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
                            <p className="updated_currents">  {this.SOSIRE_TR1_ID53('updated')} </p>
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
                       <p className="updated_currents">  {this.MASURA_TGV_ID1('updated')} </p>
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
                          {this.TGD_BIROURI_ID52('Voltage_effective_L1')}
                          {this.TGD_BIROURI_ID52('Voltage_effective_L2')}
                          {this.TGD_BIROURI_ID52('Voltage_effective_L3')}
                          {this.TGD_BIROURI_ID52('Current_effective_L1')}
                          {this.TGD_BIROURI_ID52('Current_effective_L2')}
                          {this.TGD_BIROURI_ID52('Current_effective_L3')}
                          {this.TGD_BIROURI_ID52('Active_Power_Sum_L1_L3')}
                          {this.TGD_BIROURI_ID52('Reactive_power_fundamental_Sum_L1_L3')}
                          {this.TGD_BIROURI_ID52('Consumed_Active_Energy_Sum_L1_L3')}
                          {this.TGD_BIROURI_ID52('Reactive_Energy_Sum_L1_L3')}  

                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
                       <p className="updated_currents">  {this.TGD_BIROURI_ID52('updated')} </p>
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
                           <p className="updated_currents">  {this.HVAC_CLIME_WIFI_ID73('updated')} </p>
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
                       <p className="updated_currents">  {this.HVAC_CLIME_WIPRO_ID72('updated')} </p>
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
                            <p className="power_title">Fixed Networks Platform</p>
                          </div>
                        
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.FN_VITALI_ID7('Voltage_effective_L1')}
                          {this.FN_VITALI_ID7('Voltage_effective_L2')}
                          {this.FN_VITALI_ID7('Voltage_effective_L3')}
                          {this.FN_VITALI_ID7('Current_effective_L1')}
                          {this.FN_VITALI_ID7('Current_effective_L2')}
                          {this.FN_VITALI_ID7('Current_effective_L3')}
                          {this.FN_VITALI_ID7('Active_Power_Sum_L1_L3')}
                          {this.FN_VITALI_ID7('Reactive_power_fundamental_Sum_L1_L3')}
                          {this.FN_VITALI_ID7('Consumed_Active_Energy_Sum_L1_L3')}
                          {this.FN_VITALI_ID7('Reactive_Energy_Sum_L1_L3')}

                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
                    <p className="updated_currents">  {this.FN_VITALI_ID7('updated')} </p>
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
                            <p className="power_title">Fixed Networks Office</p>
                          </div>
                      
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.FN_NORMALI_ID8('Voltage_effective_L1')}
                          {this.FN_NORMALI_ID8('Voltage_effective_L2')}
                          {this.FN_NORMALI_ID8('Voltage_effective_L3')}
                          {this.FN_NORMALI_ID8('Current_effective_L1')}
                          {this.FN_NORMALI_ID8('Current_effective_L2')}
                          {this.FN_NORMALI_ID8('Current_effective_L3')}
                          {this.FN_NORMALI_ID8('Active_Power_Sum_L1_L3')}
                          {this.FN_NORMALI_ID8('Reactive_power_fundamental_Sum_L1_L3')}
                          {this.FN_NORMALI_ID8('Consumed_Active_Energy_Sum_L1_L3')}
                          {this.FN_NORMALI_ID8('Reactive_Energy_Sum_L1_L3')}  

                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
                              <p className="updated_currents">  {this.FN_NORMALI_ID8('updated')} </p>
                         </div>          
                </div>
              </div> 

                       
          </div> 









           <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="x_panel">
                  
                    <div className="">
                      <table className="" style={widthtable}>
                     <tbody>
                      <tr>
                     
                        <th>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p className="power_title">Mobile Network Zone 1</p>
                          </div>
                        
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.MN_ZONA_1_ID2('Voltage_effective_L1')}
                          {this.MN_ZONA_1_ID2('Voltage_effective_L2')}
                          {this.MN_ZONA_1_ID2('Voltage_effective_L3')}
                          {this.MN_ZONA_1_ID2('Current_effective_L1')}
                          {this.MN_ZONA_1_ID2('Current_effective_L2')}
                          {this.MN_ZONA_1_ID2('Current_effective_L3')}
                          {this.MN_ZONA_1_ID2('Active_Power_Sum_L1_L3')}
                          {this.MN_ZONA_1_ID2('Reactive_power_fundamental_Sum_L1_L3')}
                          {this.MN_ZONA_1_ID2('Consumed_Active_Energy_Sum_L1_L3')}
                          {this.MN_ZONA_1_ID2('Reactive_Energy_Sum_L1_L3')}

                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
                          <p className="updated_currents">  {this.MN_ZONA_1_ID2('updated')} </p>
                         </div>          
                </div>
              </div> 
                        <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="x_panel">
                  
                    <div className="">
                      <table className="" style={widthtable}>
                     <tbody>
                      <tr>
                     
                        <th>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p className="power_title">Mobile Network Zone 2</p>
                          </div>
                      
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.MN_ZONA_2_ID3('Voltage_effective_L1')}
                          {this.MN_ZONA_2_ID3('Voltage_effective_L2')}
                          {this.MN_ZONA_2_ID3('Voltage_effective_L3')}
                          {this.MN_ZONA_2_ID3('Current_effective_L1')}
                          {this.MN_ZONA_2_ID3('Current_effective_L2')}
                          {this.MN_ZONA_2_ID3('Current_effective_L3')}
                          {this.MN_ZONA_2_ID3('Active_Power_Sum_L1_L3')}
                          {this.MN_ZONA_2_ID3('Reactive_power_fundamental_Sum_L1_L3')}
                          {this.MN_ZONA_2_ID3('Consumed_Active_Energy_Sum_L1_L3')}
                          {this.MN_ZONA_2_ID3('Reactive_Energy_Sum_L1_L3')}  

                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
                            <p className="updated_currents">  {this.MN_ZONA_2_ID3('updated')} </p>
                         </div>          
                </div>
              </div> 
                              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="x_panel">
                  
                    <div className="">
                      <table className="" style={widthtable}>
                     <tbody>
                      <tr>
                     
                        <th>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p className="power_title">Mobile Network Zone 3</p>
                          </div>
                      
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.MN_ZONA_3_ID6('Voltage_effective_L1')}
                          {this.MN_ZONA_3_ID6('Voltage_effective_L2')}
                          {this.MN_ZONA_3_ID6('Voltage_effective_L3')}
                          {this.MN_ZONA_3_ID6('Current_effective_L1')}
                          {this.MN_ZONA_3_ID6('Current_effective_L2')}
                          {this.MN_ZONA_3_ID6('Current_effective_L3')}
                          {this.MN_ZONA_3_ID6('Active_Power_Sum_L1_L3')}
                          {this.MN_ZONA_3_ID6('Reactive_power_fundamental_Sum_L1_L3')}
                          {this.MN_ZONA_3_ID6('Consumed_Active_Energy_Sum_L1_L3')}
                          {this.MN_ZONA_3_ID6('Reactive_Energy_Sum_L1_L3')}  

                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
                          <p className="updated_currents">  {this.MN_ZONA_3_ID6('updated')} </p>
                         </div>          
                </div>
              </div> 

                                   
          </div> 




              <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="x_panel">
                  
                    <div className="">
                      <table className="" style={widthtable}>
                     <tbody>
                      <tr>
                     
                        <th>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p className="power_title">BIROURI_TD_ZONA_E_ID68</p>
                          </div>
                        
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.BIROURI_TD_ZONA_E_ID68('Voltage_effective_L1')}
                          {this.BIROURI_TD_ZONA_E_ID68('Voltage_effective_L2')}
                          {this.BIROURI_TD_ZONA_E_ID68('Voltage_effective_L3')}
                          {this.BIROURI_TD_ZONA_E_ID68('Current_effective_L1')}
                          {this.BIROURI_TD_ZONA_E_ID68('Current_effective_L2')}
                          {this.BIROURI_TD_ZONA_E_ID68('Current_effective_L3')}
                          {this.BIROURI_TD_ZONA_E_ID68('Active_Power_Sum_L1_L3')}
                          {this.BIROURI_TD_ZONA_E_ID68('Reactive_power_fundamental_Sum_L1_L3')}
                          {this.BIROURI_TD_ZONA_E_ID68('Consumed_Active_Energy_Sum_L1_L3')}
                          {this.BIROURI_TD_ZONA_E_ID68('Reactive_Energy_Sum_L1_L3')}

                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
                          <p className="updated_currents">  {this.BIROURI_TD_ZONA_E_ID68('updated')} </p>
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
                            <p className="power_title">BIROURI_TD_ZONA_F_ID69</p>
                          </div>
                      
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.BIROURI_TD_ZONA_F_ID69('Voltage_effective_L1')}
                          {this.BIROURI_TD_ZONA_F_ID69('Voltage_effective_L2')}
                          {this.BIROURI_TD_ZONA_F_ID69('Voltage_effective_L3')}
                          {this.BIROURI_TD_ZONA_F_ID69('Current_effective_L1')}
                          {this.BIROURI_TD_ZONA_F_ID69('Current_effective_L2')}
                          {this.BIROURI_TD_ZONA_F_ID69('Current_effective_L3')}
                          {this.BIROURI_TD_ZONA_F_ID69('Active_Power_Sum_L1_L3')}
                          {this.BIROURI_TD_ZONA_F_ID69('Reactive_power_fundamental_Sum_L1_L3')}
                          {this.BIROURI_TD_ZONA_F_ID69('Consumed_Active_Energy_Sum_L1_L3')}
                          {this.BIROURI_TD_ZONA_F_ID69('Reactive_Energy_Sum_L1_L3')}  

                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
                            <p className="updated_currents">  {this.BIROURI_TD_ZONA_F_ID69('updated')} </p>
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
                            <p className="power_title">BIROURI_TD_ZONA_G_ID70</p>
                          </div>
                      
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.BIROURI_TD_ZONA_G_ID70('Voltage_effective_L1')}
                          {this.BIROURI_TD_ZONA_G_ID70('Voltage_effective_L2')}
                          {this.BIROURI_TD_ZONA_G_ID70('Voltage_effective_L3')}
                          {this.BIROURI_TD_ZONA_G_ID70('Current_effective_L1')}
                          {this.BIROURI_TD_ZONA_G_ID70('Current_effective_L2')}
                          {this.BIROURI_TD_ZONA_G_ID70('Current_effective_L3')}
                          {this.BIROURI_TD_ZONA_G_ID70('Active_Power_Sum_L1_L3')}
                          {this.BIROURI_TD_ZONA_G_ID70('Reactive_power_fundamental_Sum_L1_L3')}
                          {this.BIROURI_TD_ZONA_G_ID70('Consumed_Active_Energy_Sum_L1_L3')}
                          {this.BIROURI_TD_ZONA_G_ID70('Reactive_Energy_Sum_L1_L3')}  

                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
                          <p className="updated_currents">  {this.BIROURI_TD_ZONA_G_ID70('updated')} </p>
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
                            <p className="power_title">BIROURI_TD_ZONA_H_ID71</p>
                          </div>
                      
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.BIROURI_TD_ZONA_H_ID71('Voltage_effective_L1')}
                          {this.BIROURI_TD_ZONA_H_ID71('Voltage_effective_L2')}
                          {this.BIROURI_TD_ZONA_H_ID71('Voltage_effective_L3')}
                          {this.BIROURI_TD_ZONA_H_ID71('Current_effective_L1')}
                          {this.BIROURI_TD_ZONA_H_ID71('Current_effective_L2')}
                          {this.BIROURI_TD_ZONA_H_ID71('Current_effective_L3')}
                          {this.BIROURI_TD_ZONA_H_ID71('Active_Power_Sum_L1_L3')}
                          {this.BIROURI_TD_ZONA_H_ID71('Reactive_power_fundamental_Sum_L1_L3')}
                          {this.BIROURI_TD_ZONA_H_ID71('Consumed_Active_Energy_Sum_L1_L3')}
                          {this.BIROURI_TD_ZONA_H_ID71('Reactive_Energy_Sum_L1_L3')}  

                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
                          <p className="updated_currents">  {this.BIROURI_TD_ZONA_H_ID71('updated')} </p>
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
                            <p className="power_title">Iluminat_C_labs_ID80</p>
                          </div>
                        
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.Iluminat_C_labs_ID80('Voltage_effective_L1')}
                          {this.Iluminat_C_labs_ID80('Voltage_effective_L2')}
                          {this.Iluminat_C_labs_ID80('Voltage_effective_L3')}
                          {this.Iluminat_C_labs_ID80('Current_effective_L1')}
                          {this.Iluminat_C_labs_ID80('Current_effective_L2')}
                          {this.Iluminat_C_labs_ID80('Current_effective_L3')}
                          {this.Iluminat_C_labs_ID80('Active_Power_Sum_L1_L3')}
                          {this.Iluminat_C_labs_ID80('Reactive_power_fundamental_Sum_L1_L3')}
                          {this.Iluminat_C_labs_ID80('Consumed_Active_Energy_Sum_L1_L3')}
                          {this.Iluminat_C_labs_ID80('Reactive_Energy_Sum_L1_L3')}

                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
                          <p className="updated_currents">  {this.Iluminat_C_labs_ID80('updated')} </p>
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
                            <p className="power_title">Iluminat_D_labs_ID81</p>
                          </div>
                      
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.Iluminat_D_labs_ID81('Voltage_effective_L1')}
                          {this.Iluminat_D_labs_ID81('Voltage_effective_L2')}
                          {this.Iluminat_D_labs_ID81('Voltage_effective_L3')}
                          {this.Iluminat_D_labs_ID81('Current_effective_L1')}
                          {this.Iluminat_D_labs_ID81('Current_effective_L2')}
                          {this.Iluminat_D_labs_ID81('Current_effective_L3')}
                          {this.Iluminat_D_labs_ID81('Active_Power_Sum_L1_L3')}
                          {this.Iluminat_D_labs_ID81('Reactive_power_fundamental_Sum_L1_L3')}
                          {this.Iluminat_D_labs_ID81('Consumed_Active_Energy_Sum_L1_L3')}
                          {this.Iluminat_D_labs_ID81('Reactive_Energy_Sum_L1_L3')}  

                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
                            <p className="updated_currents">  {this.Iluminat_D_labs_ID81('updated')} </p>
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
  TGD_BIROURI_ID52: PropTypes.array.isRequired,
   SOSIRE_TR4_ID56: PropTypes.array.isRequired,
   SOSIRE_TR3_ID55: PropTypes.array.isRequired,
   SOSIRE_TR2_ID54: PropTypes.array.isRequired,
   SOSIRE_TR1_ID53: PropTypes.array.isRequired,
   HVAC_CLIME_WIFI_ID73: PropTypes.array.isRequired,
   HVAC_CLIME_WIPRO_ID72: PropTypes.array.isRequired,
   MN_ZONA_3_ID6: PropTypes.array.isRequired,
   MN_ZONA_2_ID3: PropTypes.array.isRequired,
   MN_ZONA_1_ID2: PropTypes.array.isRequired,
   FN_NORMALI_ID8: PropTypes.array.isRequired,
   FN_VITALI_ID7: PropTypes.array.isRequired,
   BIROURI_TD_ZONA_E_ID68: PropTypes.array.isRequired,
   BIROURI_TD_ZONA_F_ID69: PropTypes.array.isRequired,
   BIROURI_TD_ZONA_G_ID70: PropTypes.array.isRequired,
   BIROURI_TD_ZONA_H_ID71: PropTypes.array.isRequired,
   Iluminat_C_labs_ID80: PropTypes.array.isRequired,
   Iluminat_D_labs_ID81: PropTypes.array.isRequired,


};


export default createContainer(() => {
 
  Meteor.subscribe('MASURA_TGV_ID1');
  Meteor.subscribe('TGD_BIROURI_ID52');
  Meteor.subscribe('SOSIRE_TR4_ID56');
  Meteor.subscribe('SOSIRE_TR3_ID55');
  Meteor.subscribe('SOSIRE_TR2_ID54');
  Meteor.subscribe('SOSIRE_TR1_ID53');
  Meteor.subscribe('HVAC_CLIME_WIFI_ID73');
  Meteor.subscribe('HVAC_CLIME_WIPRO_ID72');
  Meteor.subscribe('MN_ZONA_1_ID2');
  Meteor.subscribe('MN_ZONA_2_ID3');
  Meteor.subscribe('MN_ZONA_3_ID6');
  Meteor.subscribe('FN_VITALI_ID7');
  Meteor.subscribe('FN_NORMALI_ID8');
  Meteor.subscribe('BIROURI_TD_ZONA_E_ID68');
  Meteor.subscribe('BIROURI_TD_ZONA_F_ID69');
  Meteor.subscribe('BIROURI_TD_ZONA_G_ID70');
  Meteor.subscribe('BIROURI_TD_ZONA_H_ID71');
  Meteor.subscribe('Iluminat_C_labs_ID80');
  Meteor.subscribe('Iluminat_D_labs_ID81');


  return { 
 
    MASURA_TGV_ID1: MASURA_TGV_ID1.find({},{limit:1}).fetch(),
    TGD_BIROURI_ID52: TGD_BIROURI_ID52.find({}).fetch(),
    SOSIRE_TR4_ID56: SOSIRE_TR4_ID56.find({}).fetch(),
    SOSIRE_TR3_ID55: SOSIRE_TR3_ID55.find({}).fetch(),
    SOSIRE_TR2_ID54: SOSIRE_TR2_ID54.find({}).fetch(),
    SOSIRE_TR1_ID53: SOSIRE_TR1_ID53.find({}).fetch(),
    HVAC_CLIME_WIFI_ID73: HVAC_CLIME_WIFI_ID73.find({},{limit:1}).fetch(),
    HVAC_CLIME_WIPRO_ID72: HVAC_CLIME_WIPRO_ID72.find({},{limit:1}).fetch(),
    MN_ZONA_3_ID6:MN_ZONA_3_ID6.find({},{limit:1}).fetch(),
    MN_ZONA_2_ID3:MN_ZONA_2_ID3.find({},{limit:1}).fetch(),
    MN_ZONA_1_ID2:MN_ZONA_1_ID2.find({},{limit:1}).fetch(),
    FN_VITALI_ID7:MN_ZONA_2_ID3.find({},{limit:1}).fetch(),
    FN_NORMALI_ID8:MN_ZONA_1_ID2.find({},{limit:1}).fetch(),
    BIROURI_TD_ZONA_E_ID68:BIROURI_TD_ZONA_E_ID68.find({},{limit:1}).fetch(),
    BIROURI_TD_ZONA_F_ID69:BIROURI_TD_ZONA_F_ID69.find({},{limit:1}).fetch(),
    BIROURI_TD_ZONA_G_ID70:BIROURI_TD_ZONA_G_ID70.find({},{limit:1}).fetch(),
    BIROURI_TD_ZONA_H_ID71:BIROURI_TD_ZONA_H_ID71.find({},{limit:1}).fetch(),
    Iluminat_C_labs_ID80:Iluminat_C_labs_ID80.find({},{limit:1}).fetch(),
    Iluminat_D_labs_ID81:Iluminat_D_labs_ID81.find({},{limit:1}).fetch(),


  };
}, ACPower);