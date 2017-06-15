import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import ReactDOM from "react-dom";
import {WorkSpace} from '../../collections/collections.js';
import { createContainer } from 'meteor/react-meteor-data';
import WSNodeValues from '../components/WSNodeValues.jsx';
import {Dev_5CCF7FA43A8B} from '../../collections/collections.js';
import {Dev_5CCF7FEFB40E} from '../../collections/collections.js';
import {Dev_5CCF7FEFBE72} from '../../collections/collections.js';
import {Dev_5CCF7FF0AA4F} from '../../collections/collections.js';
import {Dev_5CCF7FEFBAD3} from '../../collections/collections.js';
import {Dev_5CCF7FEFB0C0} from '../../collections/collections.js';

import {Dev_5CCF7FEFBE9E} from '../../collections/collections.js';
import {Dev_5CCF7FA43AB8} from '../../collections/collections.js';


import {Exterior} from '../../collections/collections.js';

class WSNodeInfo extends React.Component {

nodeValues5CCF7FEFBE9E(sensorval) {
    return this.props.Dev_5CCF7FEFBE9E.map((sensorvalue) => (
      <WSNodeValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }
nodeValues5CCF7FA43AB8(sensorval) {
    return this.props.Dev_5CCF7FA43AB8.map((sensorvalue) => (
      <WSNodeValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }




nodeValues5CCF7FA43A8B(sensorval) {
    return this.props.Dev_5CCF7FA43A8B.map((sensorvalue) => (
      <WSNodeValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }
nodeValues5CCF7FF0AA4F(sensorval) {
    return this.props.Dev_5CCF7FF0AA4F.map((sensorvalue) => (
      <WSNodeValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }
  nodeValues5CCF7FEFBAD3(sensorval) {
    return this.props.Dev_5CCF7FEFBAD3.map((sensorvalue) => (
      <WSNodeValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }
  nodeValues5CCF7FEFB0C0(sensorval) {
    return this.props.Dev_5CCF7FEFB0C0.map((sensorvalue) => (
      <WSNodeValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }
  nodeValues5CCF7FEFB40E(sensorval) {
    return this.props.Dev_5CCF7FEFB40E.map((sensorvalue) => (
      <WSNodeValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }
  nodeValues5CCF7FEFBE72(sensorval) {
    return this.props.Dev_5CCF7FEFBE72.map((sensorvalue) => (
      <WSNodeValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }

  nodeValuesext(sensorval) {
    return this.props.ext.map((sensorvalue) => (
      <WSNodeValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }



render() {

  var widthth = {
      width:'100%'
    };
  var widthtable={
    width:'100%'
  }
    return (
        
         
<div className="ws_nodeInfo">
          <div className="row">


              <div className="col-md-4 col-sm-4 col-xs-12 bg">
                <div className="x_panel_small ">
                  
                    <div className="">


                    <table className="" style={widthtable}>
                     <tbody>
                      <tr>
                     
                        <th>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p className="">Node 5CCF7FA43A8B</p>
                          </div>
                       
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.nodeValues5CCF7FA43A8B('temp')}
                          {this.nodeValues5CCF7FA43A8B('humid')}
                          {this.nodeValues5CCF7FA43A8B('noise')}
                          {this.nodeValues5CCF7FA43A8B('light')} 
                          {this.nodeValues5CCF7FA43A8B('co2')}
                      </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
   <p className="updated">  {this.nodeValues5CCF7FA43A8B('updated')} </p>
                    </div>          
                </div>
              </div> 



              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="x_panel_small ">
                  
                    <div className="">


                    <table className="" style={widthtable}>
                     <tbody>
                      <tr>
                     
                        <th>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p className="">Node 5CCF7FF0AA4F</p>
                          </div>
                       
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.nodeValues5CCF7FF0AA4F('temp')}
                          {this.nodeValues5CCF7FF0AA4F('humid')}
                          {this.nodeValues5CCF7FF0AA4F('noise')}
                          {this.nodeValues5CCF7FF0AA4F('light')} 
                       </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
        <p className="updated">  {this.nodeValues5CCF7FF0AA4F('updated')} </p>
                    </div>          
                </div>
              </div> 




              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="x_panel_small ">
                  
                    <div className="">


                    <table className="" style={widthtable}>
                     <tbody>
                      <tr>
                     
                        <th>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p className="">Node 5CCF7FEFBAD3</p>
                          </div>
                       
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.nodeValues5CCF7FEFBAD3('temp')}
                          {this.nodeValues5CCF7FEFBAD3('humid')}
                          {this.nodeValues5CCF7FEFBAD3('noise')}
                          {this.nodeValues5CCF7FEFBAD3('light')} 
                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                    </table>
  <p className="updated"> {this.nodeValues5CCF7FEFBAD3('updated')} </p>
                    </div>          
                </div>
              </div> 


              </div>


              <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="x_panel_small ">
                    
                      <div className="">


                      <table className="" style={widthtable}>
                       <tbody>
                        <tr>
                       
                          <th>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <p className="">Node 5CCF7FEFB0C0</p>
                            </div>
                         
                          </th>
                        </tr>
                        <tr>
                        <td>
                          <table className="table table-hover">
                           <tbody>
                            {this.nodeValues5CCF7FEFB0C0('temp')}
                            {this.nodeValues5CCF7FEFB0C0('humid')}
                            {this.nodeValues5CCF7FEFB0C0('noise')}
                            {this.nodeValues5CCF7FEFB0C0('light')}
                         </tbody>
                          </table>
                        </td>
                        </tr>
                       </tbody>
                      </table>
      <p className="updated"> {this.nodeValues5CCF7FEFB0C0('updated')} </p>
                      </div>          
                  </div>
                </div> 



                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="x_panel_small ">
                    
                      <div className="">


                      <table className="" style={widthtable}>
                       <tbody>
                        <tr>
                       
                          <th>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <p className="">Node 5CCF7FEFB40E</p>
                            </div>
                         
                          </th>
                        </tr>
                        <tr>
                        <td>
                          <table className="table table-hover">
                           <tbody>
                            {this.nodeValues5CCF7FEFB40E('temp')}
                            {this.nodeValues5CCF7FEFB40E('humid')}
                            {this.nodeValues5CCF7FEFB40E('light')}
                            {this.nodeValues5CCF7FEFB40E('dust')}
                          </tbody>
                          </table>
                        </td>
                        </tr>
                       </tbody>
                      </table>
   <p className="updated">{this.nodeValues5CCF7FEFB40E('updated')} </p>
                      </div>          
                  </div>
                </div> 


                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="x_panel_small ">
                    
                      <div className="">


                      <table className="" style={widthtable}>
                       <tbody>
                        <tr>
                       
                          <th>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <p className="">Node 5CCF7FEFBE72</p>
                            </div>
                         
                          </th>
                        </tr>
                        <tr>
                        <td>
                          <table className="table table-hover">
                           <tbody>
                            {this.nodeValues5CCF7FEFBE72('temp')}
                            {this.nodeValues5CCF7FEFBE72('humid')}
                            {this.nodeValues5CCF7FEFBE72('noise')}
                            {this.nodeValues5CCF7FEFBE72('light')}
                          </tbody>
                          </table>
                        </td>
                        </tr>
                       </tbody>
                      </table>
 <p className="updated">{this.nodeValues5CCF7FEFBE72('updated')}</p>
                      </div>          
                  </div>
                </div> 
            </div>  




            <div className="row">
                
             <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="x_panel_small">
                    
                      <div className="">


                      <table className="" style={widthtable}>
                       <tbody>
                        <tr>
                       
                          <th>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <p className="">Meeting Room 1 - Node 5CCF7FEFBE9E </p>
                            </div>
                         
                          </th>
                        </tr>
                        <tr>
                        <td>
                          <table className="table table-hover">
                           <tbody>
                            {this.nodeValues5CCF7FEFBE9E('temp')}
                            {this.nodeValues5CCF7FEFBE9E('humid')}
                            {this.nodeValues5CCF7FEFBE9E('pres')} 
                          </tbody>
                          </table>
                        </td>
                        </tr>
                       </tbody>
                      </table>
<p className="updated">{this.nodeValues5CCF7FA43AB8('updated')} </p>
                      </div>          
                  </div>
                </div> 


                     <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="x_panel_small ">
                    
                      <div className="">


                      <table className="" style={widthtable}>
                       <tbody>
                        <tr>
                       
                          <th>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <p className="">Meeting Room 2 - Node 5CCF7FA43AB8 </p>
                            </div>
                         
                          </th>
                        </tr>
                        <tr>
                        <td>
                          <table className="table table-hover">
                           <tbody>
                            {this.nodeValues5CCF7FA43AB8('temp')}
                            {this.nodeValues5CCF7FA43AB8('humid')}
                            {this.nodeValues5CCF7FA43AB8('pres')} 
                          </tbody>
                          </table>
                        </td>
                        </tr>
                       </tbody>
                      </table>
                       <p className="updated"> {this.nodeValues5CCF7FA43AB8('updated')} </p>
                      </div>          
                  </div>
                </div> 

                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="x_panel_small ">
                    
                      <div className="">


                      <table className="" style={widthtable}>
                       <tbody>
                        <tr>
                       
                          <th>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <p className="">Exterior - Node 5CCF7FF0A971</p>
                            </div>
                         
                          </th>
                        </tr>
                        <tr>
                        <td>
                          <table className="table table-hover">
                           <tbody>
                            {this.nodeValuesext('temp')}
                            {this.nodeValuesext('humid')}
                            {this.nodeValuesext('light')} 
                            {this.nodeValuesext('uv')}
                           {this.nodeValuesext('co2')} 
                          </tbody>
                          </table>
                        </td>
                        </tr>
                       </tbody>
                      </table>
                          <p className="updated">{this.nodeValuesext('updated')} </p> 
                      </div>          
                  </div>
                </div> 
            </div> 

    </div>
  
    );
  }

} 


WSNodeInfo.propTypes = {
  ws: PropTypes.array.isRequired,
  Dev_5CCF7FA43A8B: PropTypes.array.isRequired,
  Dev_5CCF7FF0AA4F: PropTypes.array.isRequired,
  Dev_5CCF7FEFBAD3: PropTypes.array.isRequired,
  Dev_5CCF7FEFB0C0: PropTypes.array.isRequired,
  Dev_5CCF7FEFB40E: PropTypes.array.isRequired,
  Dev_5CCF7FEFBE72: PropTypes.array.isRequired,
  Dev_5CCF7FEFBE9E: PropTypes.array.isRequired,
  Dev_5CCF7FA43AB8: PropTypes.array.isRequired,
  ext: PropTypes.array.isRequired,
 
};


export default createContainer(() => {
  Meteor.subscribe('WS');
  Meteor.subscribe('EXT');
  Meteor.subscribe('5CCF7FA43A8B');
  Meteor.subscribe('5CCF7FF0AA4F');
  Meteor.subscribe('5CCF7FEFBAD3');
  Meteor.subscribe('5CCF7FEFB0C0');
  Meteor.subscribe('5CCF7FEFB40E');
  Meteor.subscribe('5CCF7FEFBE72');
  Meteor.subscribe('5CCF7FEFBE9E');
  Meteor.subscribe('5CCF7FA43AB8');

  return { 
   ws : WorkSpace.find({}).fetch(),
   ext : Exterior.find({},{limit:1}).fetch(),
   Dev_5CCF7FA43A8B: Dev_5CCF7FA43A8B.find({},{limit:1}).fetch(),
   Dev_5CCF7FF0AA4F: Dev_5CCF7FF0AA4F.find({},{limit:1}).fetch(),
   Dev_5CCF7FEFBAD3: Dev_5CCF7FEFBAD3.find({},{limit:1}).fetch(),
   Dev_5CCF7FEFB0C0: Dev_5CCF7FEFB0C0.find({},{limit:1}).fetch(),
   Dev_5CCF7FEFB40E: Dev_5CCF7FEFB40E.find({},{limit:1}).fetch(),
   Dev_5CCF7FEFBE72: Dev_5CCF7FEFBE72.find({},{limit:1}).fetch(),
   Dev_5CCF7FEFBE9E: Dev_5CCF7FEFBE9E.find({},{limit:1}).fetch(),
   Dev_5CCF7FA43AB8: Dev_5CCF7FA43AB8.find({},{limit:1}).fetch(),
  };
}, WSNodeInfo);

//5CCF7FF0AA4F
//5CCF7FEFBAD3
//5CCF7FEFB0C0
//5CCF7FEFB40E
//5CCF7FEFBE72