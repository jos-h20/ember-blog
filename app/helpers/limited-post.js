import Ember from 'ember';

export function limitedPost(params) {
  var count = 0;
  var postArray = [];
  for(var i = 0; i < 6; i++){
    count = count + 1;
    postArray.push(params[0].content[i]);
  }
  console.log(postArray.slice(0,6));
  return postArray.slice(0,6);
  // if(params.length < 5){
  //   console.log('yo');
  // }
}

export default Ember.Helper.helper(limitedPost);
