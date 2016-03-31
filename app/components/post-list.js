import Ember from 'ember';

export default Ember.Component.extend({
    limitedPost: Ember.computed.filter('postsArray', function(post, index, array) {
      return index < 5;
    }),
    // limitedPost: function(post) {
    //   return this.get('posts').splice(0, 2);
    //   // this.sendAction('limitedPost', post);
    // }
    postsArray: Ember.computed.sort('posts', 'sorting'),
    sorting: ['id:desc']
  });
