if (Meteor.isClient) {
  Template.hello.events({
    'click button': function () {
      Meteor.subscribe('deadly');
    }
  });
}

if (Meteor.isServer) {
  Meteor.publish('deadly', function () {
    return Meteor.users.find({_id: {$in: null}});
  });
}
