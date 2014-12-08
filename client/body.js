Template.body.events({
  'click #logout' : function(e, t) {
    e.preventDefault();
    Meteor.logout();
    Session.set('isLoggedIn', false);
    return false;
  }
});

Template.body.helpers({
  hasAccount: function(){
    return Session.get("hasAccount");
  },
  isLoggedIn: function(){
    return Session.get("isLoggedIn");
  }
})

