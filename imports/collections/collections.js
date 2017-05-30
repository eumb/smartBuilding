import { Mongo } from 'meteor/mongo';

export const Beers = new Meteor.Collection("Beers");
export const ServerRoom = new Meteor.Collection("SR");
 
Meteor.methods({
	"insertBeer": function(numBeers, date) {
		numBeers = parseInt(numBeers);		
 
		check(numBeers, Number);
		check(date, Date);
 
		return Beers.insert({beers: numBeers, date: date});
	},
 
	"removeBeer": function(id) {		
		check(id, String);		
		return Beers.remove(id);
	}
})


if (Meteor.isServer) {

 Meteor.publish('SR', function eventsPublication() {
      console.log("subscribed to server room data");
      return ServerRoom.find({}	,{ sort: { _id: -1 },limit:1});
   });

 Meteor.publish('SRaverage',function averagePublication(){
    self = this;
    console.log("subscribed to average server room data");

    tempAvg = ServerRoom.aggregate([
      { $match: 
      		{ 
      		    
      		    temp:{$exists: true},
      		    created_at:{$exists:true}
      		    /*,
      			created_at : { $gte : new Date("2017-05-27T21:00:00Z") }*/ 
      		    
      		}
      },
      //{$sort : {"created_at" : -1}},
      {
	       $group: {
	      _id: {
	         
	             $dayOfYear: "$created_at"
	         
	         },
	      	averageDayTemperature: {
	        $avg: "$temp"
	      }
	    	
	      }
  	  }
    ]);

    console.log(tempAvg)
    _(tempAvg).each(function(tempAvg) {
      self.added("SRaverage", Random.id(), {
      	day:tempAvg._id,
      	temp:tempAvg.averageDayTemperature
      });
  });
    self.ready()
 });


}