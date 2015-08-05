Template.header.onRendered(function() {
  this.autorun(function() {
    getUserToken();
    Tracker.afterFlush(function() {
      $('.dropdown-button').dropdown({ constrain_width: false });
      $('.button-collapse').sideNav({ closeOnClick: true });
    });
  });
});

Template.header.helpers({
  isIosWebapp: function() {
    return /iPad|iPhone|iPod/.test(navigator.platform) && window.navigator.standalone;
  }
})

Template.header.events({
  'click .logout-btn': function() {
    logout();
  }
})
