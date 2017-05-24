import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

export default class SmallGraphs extends React.Component {

 
render() {


  return (
   	              <div className="preetyprint">
                  <Sparklines data={[5, 10, 5, 20,5, 10, 5, 20]} width={140} height={80}>
                    <SparklinesLine color="#56b45d" />
                    <SparklinesSpots />
                  </Sparklines>
                  </div>

    );
  }
}
