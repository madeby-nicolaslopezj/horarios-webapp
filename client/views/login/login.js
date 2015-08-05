Template.login.events({
  'submit .login-form': function() {
    var email = $('input[name=email]').val();
    var password = $('input[name=password]').val();
    api.nonReactive('login', { email: email, password: password }, function(error, response) {
      if (error) {
        console.log(error);
        Materialize.toast('Error al intentar entrar', 4000);
      } else {
        saveUserData(response.hash, response);
      }
    });
    return false;
  }
})
