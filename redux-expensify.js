import { createStore, combineReducers } from 'redux';

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

