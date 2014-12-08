Template.dashboard.helpers({
  email: function() {
    var user = Meteor.user();
    return user.emails[0]['address'];
  }
})