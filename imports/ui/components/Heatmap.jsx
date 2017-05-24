import React from "react";
import classNames from 'classnames';
import ReactDOM from "react-dom";


export default class Heatmap extends React.Component {

    drawHeatmap(color1,color2,color3,color4,color5,x1,y1,x2,y2,data){

    var colOrigDomain = [10, 20, 25, 32, 40];
    var colorDomain = [10, 20, 25, 32, 40];
      var heatColors = d3.scale.linear()
                .domain(colorDomain)
                .range([color1,color2,color3,color4,color5]);

      //var c = d3.rgb(heatColors(1));
      
      //console.log(c);
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
            } else if (heatmap["L01"] === 85 || isNaN(heatmap["L01"][y][x])) {

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


    console.log(image)

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
      d3.xml("office.svg").mimeType("image/svg+xml").get(function(error, xml) {
        if (error) throw error;
        
el.appendChild(xml.documentElement);

    });



      this.drawHeatmap('#F4FFF5', '#DCE5DD', '#E7F1E8', '#3D403D', '#7A7F7B',50,4,228,250,this.props.data);

   
    	}
 	render() {
		
		return (
				<div ref="svgmap" className="chart" width={300} height={400}>
  				<canvas id="canv1" ref="canvas1" width={5} height={2}/>
  				<canvas id="canv2" ref="canvas2" width={300} height={400}/>

				</div>
			
	
		);
	}

}	