import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import ReactDOM from "react-dom";
import {WorkSpace} from '../../collections/collections.js';
import { createContainer } from 'meteor/react-meteor-data';
import WSNodeValues from '../components/WSNodeValues.jsx';
import {Dev_5CCF7FA43A8B} from '../../collections/collections.js';

class WSNodeInfo extends React.Component {



nodeValues(sensorval) {
    return this.props.Dev_5CCF7FA43A8B.map((sensorvalue) => (
      <WSNodeValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
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
              <div className="col-md-2 col-sm-2 col-xs-12">
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
                        <table className="tile_info">
                         <tbody>
                    
                          {this.nodeValues('temp')}
                          {this.nodeValues('humid')}
                          {this.nodeValues('noise')}


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


WSNodeInfo.propTypes = {
  ws: PropTypes.array.isRequired,
  Dev_5CCF7FA43A8B: PropTypes.array.isRequired,
 
};


export default createContainer(() => {
  Meteor.subscribe('WS');
  Meteor.subscribe('5CCF7FA43A8B');


  return { 
   ws : WorkSpace.find({}).fetch(),
   Dev_5CCF7FA43A8B: Dev_5CCF7FA43A8B.find({}).fetch()



  };
}, WSNodeInfo);