var storedToken = new StoredVar('storedToken');
var storedUserData = new StoredVar('storedUserData');

getUserToken = function() {
  return storedToken.get();
};

getUserData = function() {
  return JSON.parse(storedUserData.get() || '');
};

saveUserData = function(hash, data) {
  storedToken.set(hash);
  storedUserData.set(JSON.stringify(data));
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
