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
    api.nonReactive('user/courses/remove', { id: this.id }, function(error, result) {
      api.refreshCall('me');
    });
  }
})
