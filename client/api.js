api = {};

api.calls = {};

api.cleanParams = function(params) {
  params = params || {};
  if (getUserToken()) {
    params.hash = getUserToken();
  }
  return params;
}

api.allocCall = function(identifier, method, params) {
  if (this.calls[identifier]) return this.calls[identifier];
  var space = {};
  space.method = method;
  space.params = params;
  space.value = null;
  space.dep = new Tracker.Dependency();
  space.virgin = true;

  this.calls[identifier] = space;
  return space;
};

api.refreshCall = function(identifier) {
  if (!this.calls[identifier]) return;
  var space = this.calls[identifier];
  Session.set('isLoading', true);
  ApiGet(space.method, space.params)
  .then((response) => {
    console.log(response);
    space.value = response;
    space.virgin = false;
    space.dep.changed();
    Session.set('isLoading', false);
  });
};

api.call = function(identifier, method, params) {
  params = api.cleanParams(params);
  var space = this.allocCall(identifier, method, params);
  if (space.virgin) {
    this.refreshCall(identifier);
  }
  space.dep.depend();
  return space.value;
};

api.nonReactive = function(method, params, callback) {
  params = api.cleanParams(params);
  Session.set('isLoading', true);
  ApiGet(method, params)
  .then((response) => {
    Session.set('isLoading', false);
    callback(null, response);
  });
}

Template.registerHelper('isLoading', function() {
  return Session.get('isLoading');
})
