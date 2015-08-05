var tokenDep = new Tracker.Dependency();
var userDataDep = new Tracker.Dependency();

getUserToken = function() {
  tokenDep.depend();
  return Meteor.cookie.get('user_token');
};

getUserData = function() {
  userDataDep.depend();
  return JSON.parse(Meteor.cookie.get('user_data') || '');
};

saveUserData = function(hash, data) {
  Meteor.cookie.set('user_token', hash, 31536000);
  Meteor.cookie.set('user_data', JSON.stringify(data), 31536000);
  tokenDep.changed();
  userDataDep.changed();
};

logout = function() {
  saveUserData('', '');
}

Template.registerHelper('isLoggedIn', function() {
  return !!getUserToken();
});

Template.registerHelper('user', function() {
  return getUserData();
});
