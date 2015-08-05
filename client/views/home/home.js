Template.home.onRendered(function() {
  api.refreshCall('activities');
})

Template.home.helpers({
  activities: function() {
    var val = api.call('activities', 'user/activities', {
      day: moment().day(),
      month: moment().month(),
      year: moment().year(),
      courses: true
    });
    return val && val.courses;
  }
})
