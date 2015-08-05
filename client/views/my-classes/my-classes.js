Template.myClasses.onRendered(function() {
  api.refreshCall('me');
})

Template.myClasses.helpers({
  me: function() {
    return api.call('me', 'user');
  }
});

Template.myClasses.events({
  'click .course-row': function(event, template) {
    var self = this;

    if (!confirm('¿Quieres eliminar ' + this.name + ' de tus ramos?')) return;

    api.nonReactive('user/courses/remove', { id: this.id }, function(error, result) {
      if (error) {
        Materialize.toast('Ocurrió un error al elimar el ramo', 4000);
      } else {
        Materialize.toast(self.name + ' se eliminó de tus ramos', 4000);
      }
      api.refreshCall('me');
    });
  }
})
