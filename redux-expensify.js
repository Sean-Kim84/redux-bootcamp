import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Add Expense
const addExpense = (
  { 
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
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
      return [
        ...state, 
        action.expense
      ];
    case 'REMOVE_EXPENSE':
        return state.filter(({ id }) => {
          return id !== action.id
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

store.dispatch((removeExpense({id: expenseOne.expense.id})))

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

