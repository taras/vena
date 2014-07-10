import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      name: 'My Dataset',
      data: [ { date: new Date(), value: 4}, {date: new Date(), value: 2} ]
    };
  }
});