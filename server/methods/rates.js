import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'Rates.insert'(currency){
    Rates.insert(currency);
  }
});
