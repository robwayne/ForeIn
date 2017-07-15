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
