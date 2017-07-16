Template.slideoutMenu.onCreated(function(){
  Meteor.subscribe('banks');
});

Template.slideoutMenu.helpers({
  banks(){
    return Banks.find();
  }
})
