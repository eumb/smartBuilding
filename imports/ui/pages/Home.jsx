import React from 'react';
import classNames from 'classnames';
import Heatmaps from '../components/Heatmaps.jsx';
import TitleDataMR from '../components/TitleDataMR.jsx';
import TitleDataWS from '../components/TitleDataWS.jsx';

import Power from '../components/Power.jsx';

export default class Home extends React.Component {
  


  render() {


    
    return (

 

<div>
       
      <TitleDataMR />
        <div className="divider"></div>
        <TitleDataWS />		
          <Heatmaps />

        <Power />
        
</div>

    );
  }
}
