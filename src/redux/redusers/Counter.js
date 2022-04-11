import data from "../../Data.json";
const initialState = data;

const Counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementState = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, qty: item.qty + 1 };
        } else {
          return item;
        }
      });
      return incrementState;
    case "DECREMENT":
      const decrementState = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, qty: item.qty - 1 };
        } else {
          return item;
        }
      });
      return decrementState;
    case "DELETE":
      const deleteProduct = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, qty: 0 };
        } else {
          return item;
        }
      });
      return deleteProduct
      case "FETCH_ALL":
      return action.payload
    default:
      return state;
  }
};

export default Counter;
