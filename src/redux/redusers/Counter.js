import data from "../../Data.json";
const initialState = [];

const Counter = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      console.log('insideReducer', action.payload)
      return action.payload.map( (item) => {
        return {...item, qty: 0}
      } );
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
      return deleteProduct;
    default:
      return state;
  }
};

export default Counter;
