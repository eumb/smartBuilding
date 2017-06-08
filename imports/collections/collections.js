import { Mongo } from 'meteor/mongo';

export const Beers = new Meteor.Collection("Beers");
export const ServerRoom = new Meteor.Collection("SR");
export const WorkSpace = new Meteor.Collection("WS");

export const Dev_5CCF7FA43A8B = new Meteor.Collection("5CCF7FA43A8B");
export const Dev_5CCF7FF0B17A = new Meteor.Collection("5CCF7FF0B17A");
export const Dev_5CCF7FF0B544 = new Meteor.Collection("5CCF7FF0B544");
export const PSC3_1 = new Meteor.Collection("PSC3_1");  //{ "_id" : ObjectId("59381ff0e95f2f2008a45b68"), "USys" : 53.4, "PSys" : 71267, "ILoad" : 1334.6, "IBatt" : 4.2, "IRect" : 1345.1, "created_at" : ISODate("2017-06-07T15:46:56.388Z") }
export const PSC3_2 = new Meteor.Collection("PSC3_2");// { "_id" : ObjectId("59381ff0e95f2f2008a45b68"), "USys" : 53.4, "PSys" : 71267, "ILoad" : 1334.6, "IBatt" : 4.2, "IRect" : 1345.1, "created_at" : ISODate("2017-06-07T15:46:56.388Z") }
export const MASURA_TGV_ID1 =new Meteor.Collection("MASURA_TGV_ID1"); // { "_id" : ObjectId("59382093e95f2f2008a45d5a"), "Voltage_effective_L1" : 234.04, "Voltage_effective_L2" : 234.64, "Voltage_effective_L3" : 233.15, "Current_effective_L1" : 701.55, "Current_effective_L2" : 726.48, "Current_effective_L3" : 685.7, "Active_Power_Sum_L1_L3" : 494108.7, "Reactive_power_fundamental_Sum_L1_L3" : 3971.04, "Consumed_Active_Energy_Sum_L1_L3" : 400776672, "Reactive_Energy_Sum_L1_L3" : 2391923, "created_at" : ISODate("2017-06-07T15:49:39.232Z") }
export const TGD_BOROURI_ID52 = new Meteor.Collection("TGD_BOROURI_ID52") //{ "_id" : ObjectId("5938206be95f2f2008a45cea"), "Voltage_effective_L1" : 234.78, "Voltage_effective_L2" : 235.13, "Voltage_effective_L3" : 233.3, "Current_effective_L1" : 299.06, "Current_effective_L2" : 308.02, "Current_effective_L3" : 287.18, "Active_Power_Sum_L1_L3" : 203025.98, "Reactive_power_fundamental_Sum_L1_L3" : 45724.18, "Consumed_Active_Energy_Sum_L1_L3" : 1624076800, "Reactive_Energy_Sum_L1_L3" : -37404824, "created_at" : ISODate("2017-06-07T15:48:59.459Z") }



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
	},
  SRgetDistinct: function() {
    return Meteor.wrapAsync(callback => {
      ServerRoom.rawCollection().distinct('project', callback);
    })();
  }
})


if (Meteor.isServer) {


  Meteor.publish('PSC3_1', function eventsPublication() {
      console.log("subscribed to PSC3_1 data");
      return PSC3_1.find({} ,{ sort: { created_at: -1 },limit:20});
  });
  Meteor.publish('PSC3_2', function eventsPublication() {
      console.log("subscribed to PSC3_2 data");
      return PSC3_2.find({} ,{ sort: { created_at: -1 },limit:20});
  });

  Meteor.publish('TGD_BOROURI_ID52', function eventsPublication() {
      console.log("subscribed to TGD_BOROURI_ID52 data");
      return TGD_BOROURI_ID52.find({} ,{ sort: { created_at: -1 },limit:1});
  });

 Meteor.publish('MASURA_TGV_ID1', function eventsPublication() {
      console.log("subscribed to MASURA_TGV_ID1");
      return MASURA_TGV_ID1.find({} ,{ sort: { created_at: -1 },limit:10});
   });

  

  Meteor.publish('5CCF7FA43A8B', function eventsPublication() {
      console.log("subscribed to 5CCF7FA43A8B data");
      return Dev_5CCF7FA43A8B.find({} ,{ sort: { created_at: -1 },limit:1});
   });
   Meteor.publish('5CCF7FF0B17A', function eventsPublication() {
      console.log("subscribed to 5CCF7FF0B17A data");
      return Dev_5CCF7FF0B17A.find({} ,{ sort: { created_at: -1 },limit:1});
   });
 Meteor.publish('5CCF7FF0B544', function eventsPublication() {
      console.log("subscribed to 5CCF7FF0B544 data");
      return Dev_5CCF7FF0B544.find({} ,{ sort: { created_at: -1 },limit:1});
   });



  Meteor.publish('WS', function eventsPublication() {
      console.log("subscribed to server room data");
      return WorkSpace.find({} ,{ sort: { created_at: -1 },limit:1});
   });


 Meteor.publish('SR', function eventsPublication() {
      console.log("subscribed to server room data");
      return ServerRoom.find({}	,{ sort: { _id: -1 },limit:1});
   });

 Meteor.publish('SRHumidAverage',function averagePublication(){
    self = this;
    console.log("subscribed to average humidity server room:");

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
      self.added("SRHumidAverage", Random.id(), {
      	day:sensorAvg._id,
      	averagevalue:sensorAvg.averageDayValue
      });
  });
    self.ready()
 });



 Meteor.publish('SRTempAverage',function averagePublication(){
    self = this;
    console.log("subscribed to average temperature server room:");

    sensorAvg = ServerRoom.aggregate([
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

          averageDayValue: {
          $avg: "$temp"
        }
        
        }
      }
    ]);

    console.log(sensorAvg)
    _(sensorAvg).each(function(sensorAvg) {
      self.added("SRTempAverage", Random.id(), {
        day:sensorAvg._id,
        averagevalue:sensorAvg.averageDayValue
      });
  });
    self.ready()
 });



  Meteor.publish('SRNoiseAverage',function averagePublication(){
    self = this;
    console.log("subscribed to noise average server room:");

    sensorAvg = ServerRoom.aggregate([
      { $match: 
          { 
              
              noise:{$exists: true},
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
          $avg: "$noise"
        }
        
        }
      }
    ]);

    console.log(sensorAvg)
    _(sensorAvg).each(function(sensorAvg) {
      self.added("SRNoiseAverage", Random.id(), {
        day:sensorAvg._id,
        averagevalue:sensorAvg.averageDayValue
      });
  });
    self.ready()
 });


  


}