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
    currency = Session.get('userCurrency');
    console.log(currency);
    if(currency === undefined) currency = "USD";
    console.log(currency);
    return Rates.find({currency:currency}, {sort:{selling_rate:1}}).fetch();
  },

  getCurrency(){
    return Session.get("userCurrency");
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
