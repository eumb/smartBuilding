import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import ReactDOM from "react-dom";
import {WorkSpace} from '../../collections/collections.js';
import { createContainer } from 'meteor/react-meteor-data';
import WSNodeValues from '../components/WSNodeValues.jsx';
import {Dev_5CCF7FA43A8B} from '../../collections/collections.js';
import {Dev_5CCF7FF0AA4F} from '../../collections/collections.js';
import {Dev_5CCF7FF0B17A} from '../../collections/collections.js';
import {Dev_5CCF7FF0B704} from '../../collections/collections.js';
import {Dev_5CCF7FEFB40E} from '../../collections/collections.js';
import {Dev_5CCF7FEFBE72} from '../../collections/collections.js';
import {Exterior} from '../../collections/collections.js';

class WSNodeInfo extends React.Component {

//5CCF7FF0AA4F
//5CCF7FF0B17A
//5CCF7FF0B704
//5CCF7FEFB40E
//5CCF7FEFBE72

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
  nodeValues5CCF7FF0B17A(sensorval) {
    return this.props.Dev_5CCF7FF0B17A.map((sensorvalue) => (
      <WSNodeValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }
  nodeValues5CCF7FF0B704(sensorval) {
    return this.props.Dev_5CCF7FF0B704.map((sensorvalue) => (
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
        
         
<div>
          <div className="row">


              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="x_panel ">
                  
                    <div className="x_content">


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

                    </div>          
                </div>
              </div> 



              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="x_panel ">
                  
                    <div className="x_content">


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

                    </div>          
                </div>
              </div> 




              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="x_panel ">
                  
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
                        <table className="table table-hover">
                         <tbody>
                    
                          {this.nodeValues5CCF7FF0B17A('temp')}
                          {this.nodeValues5CCF7FF0B17A('humid')}
                          {this.nodeValues5CCF7FF0B17A('noise')}
                          {this.nodeValues5CCF7FF0B17A('light')} 


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
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="x_panel ">
                    
                      <div className="x_content">


                      <table className="" style={widthtable}>
                       <tbody>
                        <tr>
                       
                          <th>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <p className="">Node 5CCF7FF0B704</p>
                            </div>
                         
                          </th>
                        </tr>
                        <tr>
                        <td>
                          <table className="table table-hover">
                           <tbody>
                      
                            {this.nodeValues5CCF7FF0B704('temp')}
                            {this.nodeValues5CCF7FF0B704('humid')}
                            {this.nodeValues5CCF7FF0B704('noise')}
                            {this.nodeValues5CCF7FF0B704('light')} 


                          </tbody>
                          </table>
                        </td>
                        </tr>
                       </tbody>
                      </table>

                      </div>          
                  </div>
                </div> 



                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="x_panel ">
                    
                      <div className="x_content">


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

                      </div>          
                  </div>
                </div> 


                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="x_panel ">
                    
                      <div className="x_content">


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

                      </div>          
                  </div>
                </div> 
            </div>  

            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12">
                  <div className="x_panel ">
                    
                      <div className="x_content">


                      <table className="" style={widthtable}>
                       <tbody>
                        <tr>
                       
                          <th>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <p className="">Exterior Node</p>
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
{/*                            {this.nodeValuesext('uv')}
*/}                             {this.nodeValuesext('co2')} 


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


WSNodeInfo.propTypes = {
  ws: PropTypes.array.isRequired,
  Dev_5CCF7FA43A8B: PropTypes.array.isRequired,
  Dev_5CCF7FF0AA4F: PropTypes.array.isRequired,
  Dev_5CCF7FF0B17A: PropTypes.array.isRequired,
  Dev_5CCF7FF0B704: PropTypes.array.isRequired,
  Dev_5CCF7FEFB40E: PropTypes.array.isRequired,
  Dev_5CCF7FEFBE72: PropTypes.array.isRequired,
  ext: PropTypes.array.isRequired,
 
};


export default createContainer(() => {
  Meteor.subscribe('WS');
  Meteor.subscribe('EXT');
  Meteor.subscribe('5CCF7FA43A8B');
  Meteor.subscribe('5CCF7FF0AA4F');
  Meteor.subscribe('5CCF7FF0B17A');
  Meteor.subscribe('5CCF7FF0B704');
  Meteor.subscribe('5CCF7FEFB40E');
  Meteor.subscribe('5CCF7FEFBE72');

  return { 
   ws : WorkSpace.find({}).fetch(),
   ext : Exterior.find({}).fetch(),
   Dev_5CCF7FA43A8B: Dev_5CCF7FA43A8B.find({}).fetch(),
   Dev_5CCF7FF0AA4F: Dev_5CCF7FF0AA4F.find({}).fetch(),
   Dev_5CCF7FF0B17A: Dev_5CCF7FF0B17A.find({}).fetch(),
   Dev_5CCF7FF0B704: Dev_5CCF7FF0B704.find({}).fetch(),
   Dev_5CCF7FEFB40E: Dev_5CCF7FEFB40E.find({}).fetch(),
   Dev_5CCF7FEFBE72: Dev_5CCF7FEFBE72.find({}).fetch(),
  };
}, WSNodeInfo);

//5CCF7FF0AA4F
//5CCF7FF0B17A
//5CCF7FF0B704
//5CCF7FEFB40E
//5CCF7FEFBE72