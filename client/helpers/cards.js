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

Template.cards.animations({
  ".cards-list":{
    container:".cards-section",
    insert:{
      class:"fade-in",
      delay:0
    },
    remove:{
      class:"fade-out",
      delay:0
    },
    animateInitial: true,
    animateInitialStep: 200,
    animateInitialDelay: 0
  }
});
