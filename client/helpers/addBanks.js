import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';


Template.addBanks.onCreated(function(){
  Meteor.subscribe("images");
});

Template.addBanks.events({
  'change #bankImageUpload'(event, template){
    event.preventDefault();
    const bankName = $('#bankNameInput').val().trim();
    const bankAbbrev = $('#bankAbbrevInput').val().trim();

    let bankLogoUrl = '';

    FS.Utility.eachFile(event, function(file){
      Images.insert(file, function(err, fileObj){
        if(err){
          console.log(err);
        } else {
          bankLogoUrl = "/cfs/files/images/"+fileObj._id;
          const bank = {
            name:bankName,
            abbreviation: bankAbbrev,
            logo_url: bankLogoUrl
          }
          Meteor.call('Banks.insert', bank);
        }
      });
    });

  },

});
