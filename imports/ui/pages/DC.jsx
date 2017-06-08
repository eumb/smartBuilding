import React from 'react';
import classNames from 'classnames';
import TitleData from '../components/TitleData.jsx';
import DCPower from '../components/DCPower.jsx';


export default class SR extends React.Component {
  


  render() {


    
    return (

 

<div>
       
      {/*  <TitleData />*/}
           <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
             
                    <div className="row">
                    <div className="page-title">
                      <div className="title_left">
                        <h3>Direct Current <small> Realtime data measurements</small> </h3>
                                  
                      </div>  
                    </div>
                      
                    </div>
              		<DCPower />
             
            </div>
        </div>
     
        
</div>

    );
  }
}
