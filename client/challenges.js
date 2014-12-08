if (Meteor.isClient) {
  Template.challenges.helpers({
    challenges: function() { 
      return Challenges.find({})
    }
  });

  Template.challenges.events({
    'click span': function() {
      // I'm about to reach there.
    }
  })
}