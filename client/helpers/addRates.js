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

    const bankId1 = $('#bankSelect1').val().trim();
    const bankId2 = $('#bankSelect2').val().trim();
    const bankId3 = $('#bankSelect3').val().trim();
    const bankId4 = $('#bankSelect4').val().trim();
    const bankId5 = $('#bankSelect5').val().trim();
    const bankId6 = $('#bankSelect6').val().trim();

    const rate1 = parseFloat($('#buyingRateInput1').val().trim(), 10);
    const rate2 = parseFloat($('#buyingRateInput2').val().trim(), 10);
    const rate3 = parseFloat($('#buyingRateInput3').val().trim(), 10);
    const rate4 = parseFloat($('#buyingRateInput4').val().trim(), 10);
    const rate5 = parseFloat($('#buyingRateInput5').val().trim(), 10);
    const rate6 = parseFloat($('#buyingRateInput6').val().trim(), 10);

    const currency = {
      [currencyAbbrev]: {
        [bankId1]:rate1,
        [bankId2]:rate2,
        [bankId3]:rate3,
        [bankId4]:rate4,
        [bankId5]:rate5,
        [bankId6]:rate6,
      }
    };
    console.log(currency[currencyAbbrev]);
    Meteor.call('Rates.insert', currency);

  }
});

Template.addRates.helpers({
  banks(){
    return Banks.find();
  }
});
