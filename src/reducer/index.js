import { combineReducers } from "redux";
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE":
      return [
        ...state,
        {
          id: action.id,
          text: action.payload,
          completed: false
        }
      ];
    case "DELETE":
      state.splice(action.payload, 1);
      return [...state];
    case "TOGGLE":
      state[action.indx].completed=!action.payload.completed
      return [...state];
    default:
      return state;
  }
};
const reducer = combineReducers({
  todo: todoReducer
});
export default reducer;
