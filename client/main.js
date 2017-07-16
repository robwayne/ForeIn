import { Meteor } from 'meteor/meteor';
import "bootstrap";

Meteor.startup(function() {  
  GoogleMaps.load({ v: '3', key: 'AIzaSyA8_fxkTfWxVNocwhWRUsL8Hly0ggiB-Dw'});
});