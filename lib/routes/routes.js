FlowRouter.route(['/', '/home'], {
  action(){
    BlazeLayout.render('layout', {main:'home'});
  }
});

FlowRouter.route('/card', {
  action(){
    BlazeLayout.render('card');
  }
});

FlowRouter.route(['/', '/cards'], {
  action(){
    BlazeLayout.render('layout', {main:'cards'});
  }
});

FlowRouter.route('/add', {
  // subscriptions(){
  //   Meteor.subscribe("images");
  // },
  action(){
    BlazeLayout.render('addBanks');
  }
})
