import { Meteor } from 'meteor/meteor';
import { Slideout } from 'meteor/patrickleet:slideout'

Template.navigation.events({
  'click #menu-xs-button'(){
    if(slideoutInstance.isOpen()) {
      slideoutInstance.close();
    }
    else{
      slideoutInstance.open();
    }
  }
});
