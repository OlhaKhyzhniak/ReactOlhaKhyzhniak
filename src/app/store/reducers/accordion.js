import {
    TOGGLE_ACCORDION
} from '../constants/accordion';

const initStates = {
    isOpen: false
 };

 export const accordionReducer = (state = initStates, action) => {
      switch(action.type) {
          case TOGGLE_ACCORDION: {
              return { ...state, isOpen: !state.isOpen };
          }
          default: return state;
      }
}