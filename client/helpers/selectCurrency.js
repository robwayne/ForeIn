import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

Template.selectCurrency.events({
  'click .convert-btn'(event, template){
    const userCurrency = $('#desiredCurrency').val().trim();
    Session.set("userCurrency", userCurrency);
    FlowRouter.go('/');


  }
})
