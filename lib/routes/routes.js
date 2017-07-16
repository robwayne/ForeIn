FlowRouter.route(['/', '/home'], {
  action(){
    BlazeLayout.render('layout', {main:'cards'});
  }
});


FlowRouter.route(['/', '/cards'], {
  action(){
    BlazeLayout.render('layout', {main:'cards'});
  }
});

FlowRouter.route('/add/banks', {
  action(){
    BlazeLayout.render('addBanks');
  }
});


FlowRouter.route('/add/rates', {
  action(){
    BlazeLayout.render('addRates');
  }
});

FlowRouter.route('/splash', {
  action(){
    BlazeLayout.render('layout', {main:'selectCurrency'});
  }
});

FlowRouter.route('/card', {
  action(){
    BlazeLayout.render('layout', {main:'card'});
  }
});
