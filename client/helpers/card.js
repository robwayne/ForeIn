

Template.card.onCreated(function(){
  Meteor.subscribe('banks');
  Meteor.subscribe('rates');
});

Template.card.events({
  'click .site-btn'(event, template){
    event.preventDefault();
    window.location.href = 'https://www.jncb.com/Support/Help-Resources/Foreign-Exchange-Services';
  }
})

Template.card.helpers({
  ncbBank(){
    const ncb = Banks.findOne({abbreviation:'NCB'});
    return Rates.find({bank_id:ncb._id}, {currency:"USD"});
  },

  getSortedBankData(id){
    return Banks.find({_id:id});
  }
});
