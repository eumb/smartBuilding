import React from "react";
import classNames from 'classnames';
import ReactDOM from "react-dom";


export default class Heatmap extends React.Component {

	
  	drawMap(props){
  		var svg = d3.select("svg")
                .append("g");
/*      var scaling=d3.scale.linear()
            .domain([0,1200])
            .range([0,900]);
*/
      var roomLimit=[400,600]

  	  

      var XstartTopLeft=10;
  	  var YstartTopLeft=10;
  	   	var MapWith=800;
  	   	var MapHeight=300;
  	   	var yOffset=50;
  	   	var xOffset=210;
  	   	var firstOfficeOffset=20;
  	   	var firstOfficeLimt=200;
  	   	svg.append("rect")
  	   		.attr("x",XstartTopLeft)
  	   		.attr("y",YstartTopLeft)
  	   		.attr("width",MapWith)
  			.attr("height", MapHeight)
  	   		.attr("stroke-width",3)
  	   		.style("fill","#F7F7F7")
  	   		.style("opacity",1)
  			.attr("stroke", "gray");

  		svg.selectAll("line")
  	   		.data(roomLimit)
  	   		.enter()
  	   		.append("line")
  	   		.attr("y1",YstartTopLeft)
  			.attr("y2",MapHeight/2)
  			.attr("x1",function(d){
  				return d;
  			})
  			.attr("x2",function(d){
  				return d;
  			})
  			.attr("stroke-width",3)
  			.attr("stroke", "gray");

  		svg.append("line")
  	   		.attr("y1",YstartTopLeft)
  			.attr("y2",MapHeight/2+firstOfficeOffset)
  			.attr("x1",firstOfficeLimt)
  			.attr("x2",firstOfficeLimt)
  			.attr("stroke-width",3)
  			.attr("stroke", "gray");

  	

  		svg.append("line")
  			.attr("y1",MapHeight/2+firstOfficeOffset)
  			.attr("y2",MapHeight/2+firstOfficeOffset)
  			.attr("x1",XstartTopLeft)
  			.attr("x2",firstOfficeLimt)
  			.attr("stroke-width",3)
  			.attr("stroke", "gray");

  		svg.append("line")
  			.attr("y1",MapHeight/2)
  			.attr("y2",MapHeight/2)
  			.attr("x1",firstOfficeLimt)
  			.attr("x2",MapWith+XstartTopLeft)
  			.attr("stroke-width",3)
  			.attr("stroke", "gray");

  		svg.append("line")
  			.attr("y1",MapHeight/2+yOffset)
  			.attr("y2",MapHeight/2+yOffset)
  			.attr("x1",XstartTopLeft)
  			.attr("x2",XstartTopLeft+xOffset)
  			.attr("stroke-width",3)
  			.attr("stroke", "gray");

  		svg.append("line")
  			.attr("y1",MapHeight/2+yOffset)
  			.attr("y2",MapHeight+YstartTopLeft)
  			.attr("x1",XstartTopLeft+xOffset)
  			.attr("x2",XstartTopLeft+xOffset)
  			.attr("stroke-width",3)
  			.attr("stroke", "gray");

  		svg.append("line")
  			.attr("y1",MapHeight/2+yOffset)
  			.attr("y2",MapHeight/2+yOffset)
  			.attr("x1",XstartTopLeft+xOffset)
  			.attr("x2",XstartTopLeft+xOffset+40)
  			.attr("stroke-width",3)
  			.attr("stroke", "gray");	


		svg.append("line")
  			.attr("y1",MapHeight/2+yOffset)
  			.attr("y2",MapHeight/2+20)
  			.attr("x1",XstartTopLeft+xOffset+40)
  			.attr("x2",XstartTopLeft+xOffset+40)
  			.attr("stroke-width",3)
  			.attr("stroke", "gray");

  		svg.append("line")
  			.attr("y1",MapHeight/2+20)
  			.attr("y2",MapHeight/2+20)
  			.attr("x1",XstartTopLeft+xOffset+40)
  			.attr("x2",XstartTopLeft+xOffset+240)
  			.attr("stroke-width",3)
  			.attr("stroke", "gray");

  		svg.append("line")
  			.attr("y1",MapHeight/2+20)
  			.attr("y2",MapHeight+YstartTopLeft)
  			.attr("x1",XstartTopLeft+xOffset+240)
  			.attr("x2",XstartTopLeft+xOffset+240)
  			.attr("stroke-width",3)
  			.attr("stroke", "gray");

  		svg.append("line")
  			.attr("y1",MapHeight/2+20)
  			.attr("y2",MapHeight+YstartTopLeft)
  			.attr("x1",XstartTopLeft+xOffset+270)
  			.attr("x2",XstartTopLeft+xOffset+270)
  			.attr("stroke-width",3)
  			.attr("stroke", "gray");

  		svg.append("line")
  			.attr("y1",MapHeight/2+20)
  			.attr("y2",MapHeight/2+20)
  			.attr("x1",XstartTopLeft+xOffset+270)
  			.attr("x2",MapWith+XstartTopLeft)
  			.attr("stroke-width",3)
  			.attr("stroke", "gray");		
 

  	


  	}

    drawHeatmap(){

    var colOrigDomain = [10, 20, 25, 32, 40];
    var colorDomain = [10, 20, 25, 32, 60];
      var heatColors = d3.scale.linear()
                .domain(colorDomain)
                .range(['#00ccff', '#ccff00', '#fffc00', '#ff6c00', '#ff0000']);

      //var c = d3.rgb(heatColors(1));
      
      //console.log(c);
      var width=100;
      var height=100;
      heatmap={

        "L01":[[21.6, 25, 27.1, 25.6, 25.3],
        [24.4, 24.8, 24.9, 25.6, 22.4]]
       }
      //console.log(heatmap)
      dx = heatmap["L01"][0].length;
      dy = heatmap["L01"].length;
      //console.log(`dx: ${dx}`);
      //console.log(`dy: ${dy}`);

      //x = d3.scale.linear().domain([0, dx]).range([0, width]),
      //y = d3.scale.linear().domain([0, dy]).range([height, 0]);
      //console.log(`x: ${x}`);
      //console.log(`y: ${y}`);
      var context = this.refs.canvas1.getContext('2d'); 
      	
   /*   context.fillStyle = "red";
	  context.fillRect(10, 10, 50, 50);

	var imgData = context.getImageData(10, 10, 50, 50);
    //console.log(`imgdatas ${imgData}`);
    console.log(imgData)
    context.putImageData(imgData, 10, 70);


      var testmap=[23.6, 25, 27.1, 25.6, 25.3];
      imagetest=context.createImageData(50, 40);
      */

      //console.log(imagetest);

     
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

	this.draw(this.refs.canvas1, 202,12,197,136)
	



}    
	
	componentDidMount() {		
  		
      var el = ReactDOM.findDOMNode(this) // This is de div we are rendering
 				var svg = d3.select(el)
          .append("svg")
  				.attr("width",900)
  				.attr("height", 350);

      this.drawMap();
      this.drawHeatmap();

   

}

 	draw(can1, x, y, w, h) {
                 var can = this.refs.canvas2;
                 var ctx = this.refs.canvas2.getContext('2d');
                 ctx.drawImage(can1, x, y, w, h);
            }	  		
   

	
  	componentWillUpdate() {  		
    		 this.drawHeatmap();
        this.drawMap();
    	}
    	

	
  
	render() {
		
		return (
				<div className="chart">
				<canvas id="canv1" ref="canvas1" width={5} height={2}/>
				<canvas id="canv2" ref="canvas2" width={800} height={300}/>
				</div>
			
	
		);
	}

}	