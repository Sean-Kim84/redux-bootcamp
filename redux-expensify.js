import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Add Expense
const addExpense = ({ 
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: { // 이게 action.expense
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const setTextFilter = (text='') => ({
  type: 'SET_TEXT_FILTER',
  text
})

// Remove Expense
// Edit Expense
// Set text filter
// Sort by Date 
// Sort by By Amount
// Set start date
// set end date

// Expense Reducer
const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_EXPENSE': 
      // return state.concat(action.expense)
      return [ // concat 과 같은 의미
        ...state, 
        action.expense
      ];
    case 'REMOVE_EXPENSE':
        return state.filter(({ id }) => { // 여기서 state는 expense를 가르킨다
          return id !== action.id
        })
    case 'EDIT_EXPENSE': 
        return state.map((expense) => { // action의 expense 객체를 그대로 넣었다
          if(expense.id ===  action.id) {
            return { // 객체 비구조화할당
              ...expense,
              ...action.updates
            }
          } else {
            return expense
          }
        })
    
    default: 
      return state;
  }
};

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endData: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch(action.type) {

    case 'SET_TEXT_FILTER':
    return {
      ...state,
      text: action.text
    }
    default: 
    return state;
  }
}
// Store creation

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
);


store.subscribe(() => {
  console.log(store.getState());
});



const expenseOne = store.dispatch(addExpense({
  description: 'Rent',
  amount: 100
}));

const expenseTwo = store.dispatch(addExpense({
  description: 'Oil',
  amount: 300
}))

store.dispatch((removeExpense({id: expenseOne.expense.id})));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('rent'));

console.log(expenseOne);

const demoState = {
  expenses: [{
    id: 'seasdfsd',
    description: 'Journey Rent',
    note: 'This was the final payment that address',
    amount: 500.55,
    createdAt: 0
  }],

  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endData: undefined
  }
};

const user = {
  name: "Sean",
  age: 24
};

console.log({ // transform-object-rest-spread
  ...user,
  age: 27, // overwrite 
  location: "Repubic of Korea"
})

