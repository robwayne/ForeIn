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
  action(){
    BlazeLayout.render('addBanks');
  }
});


FlowRouter.route('/rates', {
  action(){
    BlazeLayout.render('addRates');
  }
});

FlowRouter.route('/currency', {
  action(){
    BlazeLayout.render('selectCurrency');
  }
})
