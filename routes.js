Router.route('/', {
  name: 'home',
  layoutTemplate: 'layout'
});

Router.route('/lista/:place', {
  name: 'list',
  layoutTemplate: 'layout'
});

Router.route('/mis-ramos', {
  name: 'myClasses',
  layoutTemplate: 'layout'
});
