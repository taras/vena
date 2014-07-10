import Ember from 'ember';

var Router = Ember.Router.extend({
  location: VenaENV.locationType
});

Router.map(function() {
  this.resource('dataset', function() {
    this.route('edit');
  });
});

export default Router;
