Meteor.publish('clubs', function() {
  return Events.find();
});


Meteor.publish('club', function(_id) {
   check(_id, String);
  return Events.find(_id);
});
