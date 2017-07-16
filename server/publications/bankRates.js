import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

Meteor.publish("bankRates", function(){
	const userCurrency = Session.get("userCurrency");
	return Rates.find({currency:userCurrency}, {sort:{selling_rate:-1}});
});
