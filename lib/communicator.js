var api_endpoint = 'http://uai.lopezjullian.com/api/';
var app_id = '1';
var app_secret = 'FdCu9Bdu63vnlARePLokCwCgU61VbnxB';

ApiGet = function(method, params) {
  check(method, String);
  check(params, Object);

  params.app_id = app_id;
  params.app_secret = app_secret;

  var query = Object.keys(params).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
  }).join('&').replace(/%20/g, '+');

  return fetch(api_endpoint + method + '?' + query, {
    method: 'get',
  }).then(function(response) {
    return response.json();
  })
}
