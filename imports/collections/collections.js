import { Mongo } from 'meteor/mongo';

export const Beers = new Meteor.Collection("Beers");
export const ServerRoom = new Meteor.Collection("SR");
export const WorkSpace = new Meteor.Collection("WS");

export const Dev_5CCF7FA43A8B = new Meteor.Collection("5CCF7FA43A8B");
export const Dev_5CCF7FF0B17A = new Meteor.Collection("5CCF7FF0B17A");
export const Dev_5CCF7FF0B544 = new Meteor.Collection("5CCF7FF0B544");
export const PSC3_1 = new Meteor.Collection("PSC3_1");  //{ "_id" : ObjectId("59381ff0e95f2f2008a45b68"), "USys" : 53.4, "PSys" : 71267, "ILoad" : 1334.6, "IBatt" : 4.2, "IRect" : 1345.1, "created_at" : ISODate("2017-06-07T15:46:56.388Z") }
export const PSC3_2 = new Meteor.Collection("PSC3_2");// { "_id" : ObjectId("59381ff0e95f2f2008a45b68"), "USys" : 53.4, "PSys" : 71267, "ILoad" : 1334.6, "IBatt" : 4.2, "IRect" : 1345.1, "created_at" : ISODate("2017-06-07T15:46:56.388Z") }
export const MASURA_TGV_ID1 = new Meteor.Collection("MASURA_TGV_ID1"); // { "_id" : ObjectId("59382093e95f2f2008a45d5a"), "Voltage_effective_L1" : 234.04, "Voltage_effective_L2" : 234.64, "Voltage_effective_L3" : 233.15, "Current_effective_L1" : 701.55, "Current_effective_L2" : 726.48, "Current_effective_L3" : 685.7, "Active_Power_Sum_L1_L3" : 494108.7, "Reactive_power_fundamental_Sum_L1_L3" : 3971.04, "Consumed_Active_Energy_Sum_L1_L3" : 400776672, "Reactive_Energy_Sum_L1_L3" : 2391923, "created_at" : ISODate("2017-06-07T15:49:39.232Z") }
export const TGD_BOROURI_ID52 = new Meteor.Collection("TGD_BOROURI_ID52"); //{ "_id" : ObjectId("5938206be95f2f2008a45cea"), "Voltage_effective_L1" : 234.78, "Voltage_effective_L2" : 235.13, "Voltage_effective_L3" : 233.3, "Current_effective_L1" : 299.06, "Current_effective_L2" : 308.02, "Current_effective_L3" : 287.18, "Active_Power_Sum_L1_L3" : 203025.98, "Reactive_power_fundamental_Sum_L1_L3" : 45724.18, "Consumed_Active_Energy_Sum_L1_L3" : 1624076800, "Reactive_Energy_Sum_L1_L3" : -37404824, "created_at" : ISODate("2017-06-07T15:48:59.459Z") }
export const SOSIRE_TR4_ID56 = new Meteor.Collection("SOSIRE_TR4_ID56"); //{ "_id" : ObjectId("593920ffe95f2f2008a777b3"), "Voltage_effective_L1" : 232.49, "Voltage_effective_L2" : 234.25, "Voltage_effective_L3" : 234.45, "Current_effective_L1" : 538.02, "Current_effective_L2" : 539.88, "Current_effective_L3" : 538.03, "Active_Power_Sum_L1_L3" : 352216.94, "Reactive_power_fundamental_Sum_L1_L3" : 116571.63, "Consumed_Active_Energy_Sum_L1_L3" : 759121920, "Reactive_Energy_Sum_L1_L3" : 243534528, "created_at" : ISODate("2017-06-08T10:03:43.623Z") }
export const SOSIRE_TR3_ID55 = new Meteor.Collection("SOSIRE_TR3_ID55"); //{ "_id" : ObjectId("59392195e95f2f2008a77983"), "Voltage_effective_L1" : 233.25, "Voltage_effective_L2" : 235.24, "Voltage_effective_L3" : 235.34, "Current_effective_L1" : 333.85, "Current_effective_L2" : 332.33, "Current_effective_L3" : 341.46, "Active_Power_Sum_L1_L3" : 233403.31, "Reactive_power_fundamental_Sum_L1_L3" : 8333.17, "Consumed_Active_Energy_Sum_L1_L3" : 833882240, "Reactive_Energy_Sum_L1_L3" : -52829176, "created_at" : ISODate("2017-06-08T10:06:13.569Z") }
export const SOSIRE_TR2_ID54 = new Meteor.Collection("SOSIRE_TR2_ID54"); //{ "_id" : ObjectId("593921a9e95f2f2008a779bf"), "Voltage_effective_L1" : 232.16, "Voltage_effective_L2" : 234.42, "Voltage_effective_L3" : 234.18, "Current_effective_L1" : 733.59, "Current_effective_L2" : 735.75, "Current_effective_L3" : 708.25, "Active_Power_Sum_L1_L3" : 508304.6, "Reactive_power_fundamental_Sum_L1_L3" : 11301.56, "Consumed_Active_Energy_Sum_L1_L3" : 955319680, "Reactive_Energy_Sum_L1_L3" : -4638386, "created_at" : ISODate("2017-06-08T10:06:33.549Z") }
export const SOSIRE_TR1_ID53 = new Meteor.Collection("SOSIRE_TR1_ID53"); //{ "_id" : ObjectId("593921bde95f2f2008a779fb"), "Voltage_effective_L1" : 233.28, "Voltage_effective_L2" : 235.36, "Voltage_effective_L3" : 235.39, "Current_effective_L1" : 51.3, "Current_effective_L2" : 36.81, "Current_effective_L3" : 52.29, "Active_Power_Sum_L1_L3" : 32478.14, "Reactive_power_fundamental_Sum_L1_L3" : 4470.37, "Consumed_Active_Energy_Sum_L1_L3" : 65616816, "Reactive_Energy_Sum_L1_L3" : 4215049.5, "created_at" : ISODate("2017-06-08T10:06:53.607Z") }
export const HVAC_CLIME_WIFI_ID73 = new Meteor.Collection("HVAC_CLIME_WIFI_ID73");//{ "_id" : ObjectId("5939246fe95f2f2008a78271"), "Voltage_effective_L1" : 227.48, "Voltage_effective_L2" : 229.18, "Voltage_effective_L3" : 227.93, "Current_effective_L1" : 78.07, "Current_effective_L2" : 78.09, "Current_effective_L3" : 78.21, "Active_Power_Sum_L1_L3" : 50705.9, "Reactive_power_fundamental_Sum_L1_L3" : -1520.03, "Consumed_Active_Energy_Sum_L1_L3" : 94677416, "Reactive_Energy_Sum_L1_L3" : -6902814.5, "created_at" : ISODate("2017-06-08T10:18:23.695Z") }
export const HVAC_CLIME_WIPRO_ID72 =new Meteor.Collection("HVAC_CLIME_WIPRO_ID72"); //{ "_id" : ObjectId("59392573e95f2f2008a78593"), "Voltage_effective_L1" : 226.78, "Voltage_effective_L2" : 228.73, "Voltage_effective_L3" : 227.8, "Current_effective_L1" : 48.99, "Current_effective_L2" : 49.11, "Current_effective_L3" : 49.45, "Active_Power_Sum_L1_L3" : 31997.23, "Reactive_power_fundamental_Sum_L1_L3" : -1187.17, "Consumed_Active_Energy_Sum_L1_L3" : 67128472, "Reactive_Energy_Sum_L1_L3" : -3952733.5, "created_at" : ISODate("2017-06-08T10:22:43.688Z") }
  

/*Meteor.methods({
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
})*/



if (Meteor.isServer) {

    Meteor.publish('HVAC_CLIME_WIFI_ID73', function eventsPublication() {
      console.log("subscribed to HVAC_CLIME_WIFI_ID73 data");
      return HVAC_CLIME_WIFI_ID73.find({} ,{ sort: { created_at: -1 },limit:1});
  });

    Meteor.publish('HVAC_CLIME_WIPRO_ID72', function eventsPublication() {
      console.log("subscribed to HVAC_CLIME_WIPRO_ID72 data");
      return HVAC_CLIME_WIPRO_ID72.find({} ,{ sort: { created_at: -1 },limit:1});
  });
  
  Meteor.publish('SOSIRE_TR4_ID56', function eventsPublication() {
      console.log("subscribed to SOSIRE_TR4_ID56 data");
      return SOSIRE_TR4_ID56.find({} ,{ sort: { created_at: -1 },limit:1});
  });

  Meteor.publish('SOSIRE_TR3_ID55', function eventsPublication() {
      console.log("subscribed to SOSIRE_TR3_ID55 data");
      return SOSIRE_TR3_ID55.find({} ,{ sort: { created_at: -1 },limit:1});
  });

 Meteor.publish('SOSIRE_TR2_ID54', function eventsPublication() {
      console.log("subscribed to SOSIRE_TR2_ID54 data");
      return SOSIRE_TR2_ID54.find({} ,{ sort: { created_at: -1 },limit:1});
  });

 Meteor.publish('SOSIRE_TR1_ID53', function eventsPublication() {
      console.log("subscribed to SOSIRE_TR1_ID53 data");
      return SOSIRE_TR1_ID53.find({} ,{ sort: { created_at: -1 },limit:1});
  });


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
      return MASURA_TGV_ID1.find({} ,{ sort: { created_at: -1 },limit:1});
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