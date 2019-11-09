import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

// items will come from backend
const intialState = {
  items: [
    { id: uuid(), name: 'Eggs' },
    { id: uuid(), name: 'Milk' },
    { id: uuid(), name: 'Steak' },
    { id: uuid(), name: 'Water' }
  ]
}

export default function(state = intialState, action) {
  switch(action.type) {

    case GET_ITEMS:
      return {
        ...state
      };

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };

    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };

    default:
      return state;

  } // Closes switch
} // Closes export function
