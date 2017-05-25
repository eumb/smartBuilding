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

}