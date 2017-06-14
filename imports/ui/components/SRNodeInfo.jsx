import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import ReactDOM from "react-dom";
import {ServerRoom} from '../../collections/collections.js';
import { createContainer } from 'meteor/react-meteor-data';
import SRNodeValues from '../components/SRNodeValues.jsx';
import {Dev_5CCF7FF0B17A} from '../../collections/collections.js';
import {Dev_5CCF7FF0B544} from '../../collections/collections.js';
import {Dev_5CCF7FF0B704} from '../../collections/collections.js';
import {Dev_5CCF7FD5CB47} from '../../collections/collections.js';

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
Dev_5CCF7FF0B704(sensorval) {
    
    return this.props.Dev_5CCF7FF0B704.map((sensorvalue) => (
      <SRNodeValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }
Dev_5CCF7FD5CB47(sensorval) {
    
    return this.props.Dev_5CCF7FD5CB47.map((sensorvalue) => (
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
       <div> 
           <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="x_panel_small">
                  
                    <div className="">
                      <table className="" style={widthtable}>
                     <tbody>
                      <tr>
                     
                        <th>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p className="">Server Area - Node 5CCF7FF0B17A</p>
                          </div>
                        
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.Dev_5CCF7FF0B17A('temp')}
                          {this.Dev_5CCF7FF0B17A('humid')}
                          {this.Dev_5CCF7FF0B17A('noise')}
                     

                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
                    <p className="updated">{this.Dev_5CCF7FF0B17A('updated')}</p>
                         </div>          
                </div>
              </div> 
                        <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="x_panel_small">
                  
                    <div className="">
                      <table className="" style={widthtable}>
                     <tbody>
                      <tr>
                     
                        <th>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p className="">Server Area - Node 5CCF7FF0B544</p>
                          </div>
                      
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.Dev_5CCF7FF0B544('temp')}
                          {this.Dev_5CCF7FF0B544('humid')}
                          {this.Dev_5CCF7FF0B544('dust')}
                
                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
                   <p className="updated"> {this.Dev_5CCF7FF0B544('updated')}</p>
                         </div>          
                </div>
              </div> 

                        <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="x_panel_small">
                  
                    <div className="">
                      <table className="" style={widthtable}>
                     <tbody>
                      <tr>
                     
                        <th>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p className="">Server Area - Node 5CCF7FF0B704</p>
                          </div>
                      
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.Dev_5CCF7FF0B704('temp')}
                          {this.Dev_5CCF7FF0B704('humid')}
                          {this.Dev_5CCF7FF0B704('noise')}
                
                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
                        <p className="updated">   {this.Dev_5CCF7FF0B704('updated')}</p>
                         </div>          
                </div>
              </div> 


                       
          </div> 

          <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="x_panel_small">
                  
                    <div className="">
                      <table className="" style={widthtable}>
                     <tbody>
                      <tr>
                     
                        <th>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p className="">User Area - Node 5CCF7FD5CB47</p>
                          </div>
                        
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.Dev_5CCF7FD5CB47('temp')}
                          {this.Dev_5CCF7FD5CB47('humid')}
                          {this.Dev_5CCF7FD5CB47('noise')}
                     

                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
                       <p className="updated"> {this.Dev_5CCF7FD5CB47('updated')}</p>
                         </div>          
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
  Dev_5CCF7FD5CB47: PropTypes.array.isRequired,
   Dev_5CCF7FF0B704: PropTypes.array.isRequired,
};


export default createContainer(() => {
  Meteor.subscribe('SR');
  Meteor.subscribe('5CCF7FF0B17A');
  Meteor.subscribe('5CCF7FF0B544');
   Meteor.subscribe('5CCF7FD5CB47');
    Meteor.subscribe('5CCF7FF0B704');

  return { 
   sr : ServerRoom.find({}).fetch(),
   Dev_5CCF7FF0B17A: Dev_5CCF7FF0B17A.find({}).fetch(),
   Dev_5CCF7FF0B544: Dev_5CCF7FF0B544.find({}).fetch(),
   Dev_5CCF7FD5CB47: Dev_5CCF7FD5CB47.find({}).fetch(),
   Dev_5CCF7FF0B704: Dev_5CCF7FF0B704.find({}).fetch(),

  };
}, SRNodeInfo);