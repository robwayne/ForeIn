import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

Meteor.startup(function(){
  FlowRouter.route('/splash');
});
