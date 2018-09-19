import React from 'react';
import classNames from 'classnames';

export default class Footer extends React.Component {
  render() {
    return (


		<footer className="footer_fixed">
          <div className="pull-left">
            <div className="powered">
                 {/*   <span className="title">Smartbuilding </span>
                     <span className="by">by </span>*/}
                  <h5>Powered by Nokia © 2018</h5>
              
            </div>
          </div>  
          <div className="pull-right">
            <div>
                 {/*   <span className="title">Smartbuilding </span>
                     <span className="by">by </span>*/}
                  <span className="nokia_logo">NOKIA</span>
              
            </div>
        </div>
          <div className="clearfix"></div>
        </footer>  
  

    );
  }
}
