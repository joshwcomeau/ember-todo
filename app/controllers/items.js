import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleItem(itemId) {
      console.log('toggleItem', itemId)
      this.get('store').findRecord('item', itemId).then(function(item) {
        console.log({item})
        item.set('isCompleted', true);
      });
    }
  }

});
