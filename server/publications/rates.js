import { Meteor } from 'meteor/meteor';

Meteor.publish('rates', function(){
  return Rates.find();
})
