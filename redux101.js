import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch(action.type){
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      }
    case 'DECREMENT':
      const decrementBy = typeof action.decrement === 'number' ? action.decrement : 1;
      return {
        count: state.count -  decrementBy, 
      }
    case 'SET': 
      return {
        count: action.count
      }
    case 'RESET': 
      return {
        count: 0
      }
    default :
      return state
    }
}); 

const unsubscribe = store.subscribe(() => { // 모든 액션들을 모아서 순차적으로 처리해준다
  console.log(store.getState());
})


/* Action - than an object that gets sent to store */
// I'd like to increment the count
store.dispatch({ // 위의 action 객체의 argument 로 간다
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch({
  type: 'DECREMENT',
  decrement: 10
});

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type:  'RESET'
})

store.dispatch({
  type: 'SET',
  count: 101
})

unsubscribe();