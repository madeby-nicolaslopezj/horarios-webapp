Template.login.events({
  'submit .login-form': function() {
    var email = $('input[name=email]').val();
    var password = $('input[name=password]').val();
    Meteor.call('api', 'login', { email: email, password: password }, function(error, response) {
      if (error) {

      } else {
        saveUserData(response.hash, response);
      }
    });
    return false;
  }
})
