Template.list.onRendered(function() {
  var place = Router.current().params.place;
  api.refreshCall('list' + place);
})

Template.list.helpers({
  items: function() {
    var place = Router.current().params.place;
    return api.call('list' + place, 'events/' + place);
  }
});

Template.list.events({
  'click .list-item': function(event, template) {
    if (!this.name) return;
    if (confirm('¿Quieres agregar ' + this.name + ' a tus ramos?')) {
      api.nonReactive('user/courses/add', { name: this.name, section: this.section || undefined }, function(error, result) {
        console.log(error, result);
      });
    }
  }
})
