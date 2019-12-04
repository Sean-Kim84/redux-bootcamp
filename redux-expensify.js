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
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMMOUNT'
});

const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

const setEndDate = (endDate) => ({
  type: 'SET_END_DATE ',
  endDate
});

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
    case 'SORT_BY_DATE': 
    return {
      ...state,
      sortBy: 'amount'
    }
    case 'SORT_BY_AMMOUNT': 
    return {
      ...state,
      sortBy: 'date'
    }
    case 'SET_START_DATE': 
    return {
      ...state,
      startDate: action.startDate
    };
    case 'SET_END_DATE': 
    return {
      ...state,
      endDate: action.EndDate
    }

    default: 
    return state;
  }
}

// timestamp(milliseconds)



const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate} ) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch =  typeof endDate !== 'number' ||  expense.createdAt <= endDate;

    const textDateMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    // figure out if expenses.description as the text variable string inside of it
    // includes
    // convert both strings to lower case


    return startDateMatch && endDateMatch && textDateMatch;
  });
}

// Store creation
const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});


const expenseOne = store.dispatch(addExpense({
  description: 'Rent',
  amount: 100,
  createdAt: 1000
}));

const expenseTwo = store.dispatch(addExpense({
  description: 'Oil',
  amount: 300,
  createdAt: -1000
})) 

// store.dispatch((removeExpense({ id: expenseOne.expense.id })));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('RENT'));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// console.log(expenseOne);

// store.dispatch(setStartDate(125)); // startDate 125
// store.dispatch(setStartDate()); // startDate undefined
// store.dispatch(setEndDate(999));  // startDate 1250



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

// console.log({ // transform-object-rest-spread
//   ...user,
//   age: 27, // overwrite 
//   location: "Repubic of Korea"
// })

