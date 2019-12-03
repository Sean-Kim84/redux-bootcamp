import { createStore, combineReducers } from 'redux';

// Add Expense
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

const store = createStore(combineReducers({
  expenses: expenseReducer,
  filters: filterReducer
}));
console.log(store.getState());

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

