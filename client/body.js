Template.body.events({
  'click a[href="logout"]' : function(e, t) {
    e.preventDefault();
    Meteor.logout();
    Session.set('isLoggedIn', false);
    Session.set('currentView', 'home');
    return false;
  },
  'click a[href="challenges"]' : function(e, t) {
    e.preventDefault();
    Session.set('currentView', 'challenges');
    return false;
  },
  'click a[href="home"]' : function(e, t) {
    e.preventDefault();
    Session.set('currentView', 'home');
    return false;
  }
});

Template.body.helpers({
  hasAccount: function(){
    return Session.get("hasAccount");
  },
  isLoggedIn: function(){
    return Session.get("isLoggedIn");
  },
  view: function() {
    return Session.get('currentView');
  }
})

