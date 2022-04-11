import * as api from "../../api";

// import * as api from "../../api";
// export const addCard = (product) => {
//   return {
//     type: "ADD_CARD",
//     payload: product,
//   };
// };

export const increment = (product) => {
  return {
    type: "INCREMENT",
    payload: product,
  };
};

export const decrement = (product) => {
  return {
    type: "DECREMENT",
    payload: product,
  };
};

export const deleteProduct = (product) => {
  return {
    type: "DELETE",
    payload: product,
  };
};

// export const addOrders = (newOrder) => async (dispatch) => {
//   try {
//     await api.addOrders(newOrder);
//     const response = await api.getPosts();
//     dispatch({ type: "ADD_ORDER", payload: response.data.data });
//   } catch (err) {
//     console.log(err);
//   }
// };


export const getProducts = () => async (dispatch) => {
  try {
    const response = await api.getProducts();

    console.log({ response });

    dispatch({ type: "FETCH_ALL", payload: response.data.data });
  } catch (err) {
    console.log(err);
  }
};


