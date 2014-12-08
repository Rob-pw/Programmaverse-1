Challenges = new Meteor.Collection('challenges');

Challenges.allow({
  insert: function() {
    return true;
  },
  remove: function() {
    return true;
  }
});