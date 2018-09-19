import React from "react";
import classNames from 'classnames';
import ReactDOM from "react-dom";


export default class Heatmap extends React.Component {

    drawHeatmap(color1,color2,color3,color4,color5,x1,y1,x2,y2,data,type){

    if(type==="temp"){
      var colOrigDomain = [20, 27, 29, 31, 35];
      var colorDomain = [20, 27, 29, 31, 35];
    }if (type==="humid"){
      var colOrigDomain = [30, 40, 45, 47, 50];
      var colorDomain = [30, 40, 45, 47, 50];
    }if(type==="light"){
      var colOrigDomain = [100,500,2500,5500,11000];
      var colorDomain = [100,500,2500,5500,11000];
    }if(type==="noise"){
      var colOrigDomain = [40, 50, 60, 80, 90];
      var colorDomain = [40, 50, 60, 80, 90];
    }
  
      var heatColors = d3.scale.linear()
                .domain(colorDomain)
                .range([color1,color2,color3,color4,color5]);

      //var c = d3.rgb(heatColors(1));
      
      //console.log(data);
      var width=100;
      var height=100;
      heatmap=data;
      //console.log(heatmap)
      dx = heatmap["L01"][0].length;
      dy = heatmap["L01"].length;
      var context = this.refs.canvas1.getContext('2d'); 
      image = context.createImageData(dx, dy);
      for (var y = 0, p = -1; y < dy; ++y) {

        for (var x = 0; x < dx; ++x) {
            //console.log(heatmap["L01"][x][y]);
            if (heatmap["L01"][y][x] === -100) {
                var c = d3.rgb(heatColors(255));
                var a = 0;
            } else if (heatmap["L01"] === 65536 || isNaN(heatmap["L01"][y][x])) {

                var c = d3.rgb(0);
                var a = 100;
            } else {
                var c = d3.rgb(heatColors(heatmap["L01"][y][x]));
                var a = 255;
                //console.log(`c: ${c}`)
            }
            image.data[++p] = c.r;	
            image.data[++p] = c.g;
            image.data[++p] = c.b;
            image.data[++p] = a;
            
        }
      }


    //console.log(image)

	context.putImageData(image, 0,0);

	this.draw(this.refs.canvas1, x1,y1,x2,y2)
	
}

  draw(can1, x, y, w, h) {
                 var can = this.refs.canvas2;
                 var ctx = this.refs.canvas2.getContext('2d');
                 ctx.drawImage(can1, x, y, w, h);
            }       
   
 	componentDidMount() {  		
      var el = ReactDOM.findDOMNode(this.refs.svgmap) // This is the div we are rendering
      d3.xml("garage.svg").mimeType("image/svg+xml").get(function(error, xml) {
        if (error) throw error;
        
el.appendChild(xml.documentElement);

    });



}


  componentDidUpdate(){



      if(this.props.type==="humid"){

     /* this.drawHeatmap('#f1eef6', '#bdc9e1', '#74a9cf', '#2b8cbe', '#045a8d',500,0,150,0,this.props.mr1,this.props.type);

      this.drawHeatmap('#f1eef6', '#bdc9e1', '#74a9cf', '#2b8cbe', '#045a8d',330,0,150,0,this.props.mr2,this.props.type);*/

      
      this.drawHeatmap('#f1eef6', '#bdc9e1', '#74a9cf', '#2b8cbe', '#045a8d',588,110,20,140,this.props.ext,this.props.type);

      this.drawHeatmap('#f1eef6', '#bdc9e1', '#74a9cf', '#2b8cbe', '#045a8d',14,4,818,340,this.props.data,this.props.type);
      }  
      if(this.props.type==="temp"){

/*      this.drawHeatmap('#ffffd4', '#fed98e', '#fe9929', '#d95f0e', '#993404',12,140,45,30,this.props.mr1,this.props.type);

      this.drawHeatmap('#ffffd4', '#fed98e', '#fe9929', '#d95f0e', '#993404',12,12,70,30,this.props.mr2,this.props.type);
*/


      this.drawHeatmap('#ffffd4', '#fed98e', '#fe9929', '#d95f0e', '#993404',588,110,20,140,this.props.ext,this.props.type);

      this.drawHeatmap('#ffffd4', '#fed98e', '#fe9929', '#d95f0e', '#993404',14,4,818,340,this.props.data,this.props.type);
      } 
       if(this.props.type==="noise"){

    /*  this.drawHeatmap('#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',300,12,43,30,this.props.mr1,this.props.type);

      this.drawHeatmap('#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',330,12,68,30,this.props.mr2,this.props.type);*/



     this.drawHeatmap('#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',588,110,20,140,this.props.ext,this.props.type);

      this.drawHeatmap('#f2f0f7', '#cbc9e2', '#9e9ac8', '#756bb1', '#54278f',14,4,814,340,this.props.data,this.props.type);
      }
        if(this.props.type==="light"){
/*
       this.drawHeatmap('#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',300,12,43,30,this.props.mr1,this.props.type);

      this.drawHeatmap('#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',330,12,68,30,this.props.mr2,this.props.type);*/



      this.drawHeatmap('#ffffcc', '#c2e699', '#78c679', '#31a354', '#006837',588,110,20,140,this.props.ext,this.props.type);

      this.drawHeatmap('#ffffcc', '#c2e699', '#78c679', '#31a354', '#006837',14,4,814,340,this.props.data,this.props.type);
      }
  }


  componentWillUpdate(){

      if(this.props.type==="humid"){

/*      this.drawHeatmap('#f1eef6', '#bdc9e1', '#74a9cf', '#2b8cbe', '#045a8d',500,0,150,0,this.props.mr1,this.props.type);

      this.drawHeatmap('#f1eef6', '#bdc9e1', '#74a9cf', '#2b8cbe', '#045a8d',330,0,150,0,this.props.mr2,this.props.type);*/



      this.drawHeatmap('#f1eef6', '#bdc9e1', '#74a9cf', '#2b8cbe', '#045a8d',588,110,20,140,this.props.ext,this.props.type);

      this.drawHeatmap('#f1eef6', '#bdc9e1', '#74a9cf', '#2b8cbe', '#045a8d',14,4,818,340,this.props.data,this.props.type);
      }  if(this.props.type==="temp"){

      /*  this.drawHeatmap('#ffffd4', '#fed98e', '#fe9929', '#d95f0e', '#993404',300,12,45,30,this.props.mr1,this.props.type);

      this.drawHeatmap('#ffffd4', '#fed98e', '#fe9929', '#d95f0e', '#993404',330,12,70,30,this.props.mr2,this.props.type);
*/
      this.drawHeatmap('#ffffd4', '#fed98e', '#fe9929', '#d95f0e', '#993404',588,110,20,140,this.props.ext,this.props.type);
      this.drawHeatmap('#ffffd4', '#fed98e', '#fe9929', '#d95f0e', '#993404',14,4,818,340,this.props.data,this.props.type);
      }  if(this.props.type==="noise"){
/*
      this.drawHeatmap('#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',300,12,43,30,this.props.mr1,this.props.type);

      this.drawHeatmap('#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',330,12,68,30,this.props.mr2,this.props.type);
*/
     this.drawHeatmap('#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',588,110,20,140,this.props.ext,this.props.type);

      this.drawHeatmap('#f2f0f7', '#cbc9e2', '#9e9ac8', '#756bb1', '#54278f',14,4,814,340,this.props.data,this.props.type);
      }  if(this.props.type==="light"){


/*       this.drawHeatmap('#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',300,12,43,30,this.props.mr1,this.props.type);
      this.drawHeatmap('#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff',330,12,68,30,this.props.mr2,this.props.type);
*/

        this.drawHeatmap('#ffffcc', '#c2e699', '#78c679', '#31a354', '#006837',588,110,20,140,this.props.ext,this.props.type);

      this.drawHeatmap('#ffffcc', '#c2e699', '#78c679', '#31a354', '#006837',14,4,814,340,this.props.data,this.props.type);
      }
  }


 	render() {
		
		return (
				<div ref="svgmap" className="chart" >
  				<canvas id="canv1" ref="canvas1" width={5} height={2}/>
  				<canvas id="canv2" ref="canvas2" width={600} height={500}/>

				</div>
			
	
		);
	}

}	