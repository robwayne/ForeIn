import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

Template.cards.onCreated(function(){
  Meteor.subscribe('rates');
  Meteor.subscribe('banks')

})

Template.cards.helpers({
  getSortedBankData(bankId){
	  return Banks.find({_id:bankId});
  },

  bankRates(){
    return Rates.find({currency:"USD"}, {sort:{selling_rate:1}}).fetch();
  }
});
