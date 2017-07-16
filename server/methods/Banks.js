import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'Banks.insert'(bank){
    Banks.insert(bank);
  }
})
