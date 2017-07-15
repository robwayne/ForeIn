import { Meteor } from 'meteor/meteor';

Meteor.publish("banks", function(){
  return Banks.find();
});
