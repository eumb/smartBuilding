import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import ReactDOM from "react-dom";
import {ServerRoom} from '../../collections/collections.js';
import { createContainer } from 'meteor/react-meteor-data';
import SRNodeValues from '../components/SRNodeValues.jsx';
import {Dev_5CCF7FF0B17A} from '../../collections/collections.js';
import {Dev_5CCF7FF0B544} from '../../collections/collections.js';

class SRNodeInfo extends React.Component {



Dev_5CCF7FF0B17A(sensorval) {

    return this.props.Dev_5CCF7FF0B17A.map((sensorvalue) => (
      <SRNodeValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }
Dev_5CCF7FF0B544(sensorval) {
    
    return this.props.Dev_5CCF7FF0B544.map((sensorvalue) => (
      <SRNodeValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
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
        
           <div className="row">
              <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="x_panel">
                  
                    <div className="x_content">
                      <table className="" style={widthtable}>
                     <tbody>
                      <tr>
                     
                        <th>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p className="">Node 5CCF7FF0B17A</p>
                          </div>
                        
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="tile_info">
                         <tbody>
                          {this.Dev_5CCF7FF0B17A('temp')}
                          {this.Dev_5CCF7FF0B17A('humid')}
                          {this.Dev_5CCF7FF0B17A('noise')}
                          {this.Dev_5CCF7FF0B17A('device')}

                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
                         </div>          
                </div>
              </div> 
                        <div className="col-md-2 col-sm-6 col-xs-12">
                <div className="x_panel">
                  
                    <div className="x_content">
                      <table className="" style={widthtable}>
                     <tbody>
                      <tr>
                     
                        <th>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p className="">Node 5CCF7FF0B544</p>
                          </div>
                      
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="tile_info">
                         <tbody>
                          {this.Dev_5CCF7FF0B544('temp')}
                          {this.Dev_5CCF7FF0B544('humid')}
                          {this.Dev_5CCF7FF0B544('noise')}
                          {this.Dev_5CCF7FF0B544('device')}

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
      
  
    );
  }

} 


SRNodeInfo.propTypes = {
  sr: PropTypes.array.isRequired,
  Dev_5CCF7FF0B17A: PropTypes.array.isRequired,
  Dev_5CCF7FF0B544: PropTypes.array.isRequired,
 
};


export default createContainer(() => {
  Meteor.subscribe('SR');
  Meteor.subscribe('5CCF7FF0B17A');
  Meteor.subscribe('5CCF7FF0B544');

  return { 
   sr : ServerRoom.find({}).fetch(),
   Dev_5CCF7FF0B17A: Dev_5CCF7FF0B17A.find({}).fetch(),
   Dev_5CCF7FF0B544: Dev_5CCF7FF0B544.find({}).fetch(),


  };
}, SRNodeInfo);