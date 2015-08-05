var api_endpoint = 'http://uai.lopezjullian.com/api/';
var app_id = '1';
var app_secret = process.env.APP_SECRET;

Meteor.methods({
  api: function(method, params) {
    check(method, String);
    check(params, Object);

    params.app_id = app_id;
    params.app_secret = app_secret;

    return HTTP.get(api_endpoint + method, { params: params }).data;
  }
});
