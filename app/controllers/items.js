import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleItem(itemId) {
      this.get('store').findRecord('item', itemId).then(function(item) {
        item.set('isCompleted', !item.isCompleted);
        item.save();
      });
    }
  }

});
