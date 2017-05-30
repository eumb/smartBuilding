import { Mongo } from 'meteor/mongo';

export const Beers = new Meteor.Collection("Beers");
export const ServerRoom = new Meteor.Collection("SR");
export const MASURA_TGV_ID1 =new Meteor.Collection("MASURA_TGV_ID1");
 
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



 Meteor.publish('MASURA_TGV_ID1', function eventsPublication() {
      console.log("subscribed to MASURA_TGV_ID1");
      return MASURA_TGV_ID1.find({}	,{ sort: { created_at: -1 },limit:1});
   });

 Meteor.publish('SR', function eventsPublication() {
      console.log("subscribed to server room data");
      return ServerRoom.find({}	,{ sort: { _id: -1 },limit:1});
   });

 Meteor.publish('SRaverage',function averagePublication(type){
    self = this;
    console.log("subscribed to average server room:" + type);

    sensorAvg = ServerRoom.aggregate([
      { $match: 
      		{ 
      		    
      		    humid:{$exists: true},
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

	      	averageDayValue: {
	        $avg: "$humid"
	      }
	    	
	      }
  	  }
    ]);

    console.log(sensorAvg)
    _(sensorAvg).each(function(sensorAvg) {
      self.added("SRaverage", Random.id(), {
      	day:sensorAvg._id,
      	averagevalue:sensorAvg.averageDayValue
      });
  });
    self.ready()
 });


}