import { Meteor } from 'meteor/meteor';

Meteor.publish("images", function(){
  return Images.find();
})
