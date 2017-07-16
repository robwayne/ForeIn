import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'Rates.insert'(bankRates){
    Rates.insert(bankRates);
  }
});
