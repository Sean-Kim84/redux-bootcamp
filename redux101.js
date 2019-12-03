import { createStore } from 'redux';

// const add = (data) => {
//   return data.a + data.b
// }

const add = ({ a,b }, c) => {
  return a + b + c;
}
console.log(add({ a: 1, b:12 },100))

/* Destructuring */

// const incrementCount = (payload = {}) => ({
//   type: 'INCREMENT',
//   incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
//  });

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy 
})

const resetCount = () => ({
  type: 'RESET'
})

const setCount = ({count}) => ({
  type: 'SET',
  count
}) 

// const decrementCount = () => ({
//   type: 'DECREMENT'
// });

/* Reducers */
// 1. Reducers are pure functions
// 2. Never change state or Actions 


const countReducer = (state= {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      }
      case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
        return {
          count: state.count - decrementBy,
        }
        case 'SET':
          return {
            count: action.count
          }
          case 'RESET':
            return {
              count: 0
            }
            default:
              return state
  }
}


const store = createStore(countReducer)
const unsubscribe = store.subscribe(() => { // 모든 액션들을 모아서 순차적으로 처리해준다
  console.log(store.getState());
})


/* Action - than an object that gets sent to store */
// I'd like to increment the count
store.dispatch({ // 위의 action 객 체의 argument 로 간다
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch(incrementCount({incrementBy: 10}))

store.dispatch(incrementCount());

store.dispatch(decrementCount({decrementBy: 20}));

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 101 }));

store.dispatch(resetCount());

// store.dispatch(decrementCount());

// store.dispatch(decrementCount({decrementBy: 10}))

// store.dispatch({
//   type: 'DECREMENT'
// });

// store.dispatch({
//   type:  'RESET'
// })

// store.dispatch({
//   type: 'SET',
//   count: 101
// })

unsubscribe();