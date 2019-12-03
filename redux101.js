import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        count: state.count -1
      }
    case 'RESET': 
      return {
        count: 0
      }
    default :
      return state
    }
  // if(action.type === 'INCREMENT'){
  //   return {
  //     count: state.count + 1
  //   };
  // } else {
  //   return state
  // }
  console.log('running');
  return state;
}); 

console.log(store.getState());

/* Action - than an object that gets sent to store */
// I'd like to increment the count
store.dispatch({
  type: 'INCREMENT',
});

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'RESET'
})

console.log(store.getState()); // getState 로 state를 가져올 수있다.



// I'd like to reset the count to zero
