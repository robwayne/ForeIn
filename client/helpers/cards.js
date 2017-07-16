import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

Template.cards.onCreated(function(){
  Meteor.subscribe('rates');
  Meteor.subscribe('banks')

})

Template.cards.helpers({
  getSortedBankData(bankId){
	   return Banks.findOne({_id:bankId});
  },

  bankRates(){
    return Rates.find({currency:"USD"}, {sort:{buying_rate:1}}).fetch();
  }
});
