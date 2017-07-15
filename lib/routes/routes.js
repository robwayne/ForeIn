FlowRouter.route(['/', '/home'], {
  action(){
    BlazeLayout.render('layout', {main:'home'});
  }
})
