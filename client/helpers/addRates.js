import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.addRates.onCreated(function(){
  Meteor.subscribe('banks');
  Meteor.subscribe('rates');
});

Template.addRates.events({
  'submit form'(event, template){
    event.preventDefault();
    const currencyAbbrev = $('#currencyAbbrevInput').val().trim();
    const bankId = $('#bankSelect').val().trim();

    const sellingRate = parseFloat($('#sellingRateInput').val().trim(), 10);
    const buyingRate = parseFloat($('#buyingRateInput').val().trim(), 10);

    const bankRates = {
      'bank_id':bankId,
      'currency': currencyAbbrev,
      'selling_rate':sellingRate,
      'buying_rate':buyingRate
    };

    console.log(bankRates);
    Meteor.call('Rates.insert', bankRates);

  }
});

Template.addRates.helpers({
  banks(){
    return Banks.find();
  }
});
