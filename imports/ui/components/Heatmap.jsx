import React from "react";
import classNames from 'classnames';
import ReactDOM from "react-dom";


export default class Heatmap extends React.Component {

	
  	drawMap(props){
  		var svg = d3.select("#svgmap")
                .append("g");
/*      var scaling=d3.scale.linear()
            .domain([0,1200])
            .range([0,900]);
*/
      var roomLimit=[2,4,6];
      var XstartTopLeft=10;
      var YstartTopLeft=10;
      var MapWith=800;
      var MapHeight=300;
      var yOffset=50;
      var xOffset=210;
   
      svg.selectAll("line")
          .data(roomLimit)
          .enter()
          .append("line")
          .attr("y1",YstartTopLeft)
        .attr("y2",MapHeight)
        .attr("x1",function(d){
          return d*100;
        })
        .attr("x2",function(d){
          return d*100;
        })
        .attr("stroke-width",3)
        .attr("stroke", "gray");

       svg.append("rect")
             .attr("x", XstartTopLeft)
             .attr("y", YstartTopLeft)
             .attr("width", MapWith-10)
             .attr("height", MapHeight-10)
             .attr("fill","none")
             .attr("stroke-width",3)
             .attr("stroke", "gray");


  	  

      /*var XstartTopLeft=10;
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
  			.attr("stroke", "gray");		*/
 

  	
    

  	}

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

	this.draw(this.refs.canvas1, x1,y1,x2,y2)
	
}

  draw(can1, x, y, w, h) {
                 var can = this.refs.canvas2;
                 var ctx = this.refs.canvas2.getContext('2d');
                 ctx.drawImage(can1, x, y, w, h);
            }       
   


  	componentDidMount() {  		
          var el = ReactDOM.findDOMNode(this.refs.svgmap) // This is the div we are rendering
        var svg = d3.select(el)
          .append("svg")
          .attr("id","svgmap")
          .attr("width",900)
          .attr("height", 350);

      console.log(el);
      console.log(this);
      this.drawMap();
      heatmap={

        "L01":[[21.6, 25, 27.1, 25.6, 25.3],
        [20.4, 24.8, 24.9, 25.6, 22.4]]
       }

        noise={

        "L01":[[29, 28, 21, 33, 25.3],
        [29, 24, 24, 26, 24]]
       }

      this.drawHeatmap('#00ccff', '#ccff00', '#fffc00', '#ff6c00', '#ff0000',12,12,186,286,heatmap);//temp
      this.drawHeatmap('#D1EDF9', '#76BCE6', '#22519B', '#4387C5', '#22519B',202,12,196,286,heatmap);//humid
      this.drawHeatmap('#A1D890', '#70B45A', '#224C00', '#70B45A', '#114800',402,12,196,286,heatmap);//light
      this.drawHeatmap('#A0BCBF', '#6B7E7F', '#D5FBFF', '#C0E2E5', '#C0E2E5',602,12,196,286,noise);//noise
   
    	}
    	

	
  
	render() {
		
		return (
				<div ref="svgmap" className="chart">
  				<canvas id="canv1" ref="canvas1" width={5} height={2}/>
  				<canvas id="canv2" ref="canvas2" width={800} height={300}/>

				</div>
			
	
		);
	}

}	