import * as api from "../../api";

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

export const getProducts = () => async (dispatch) => {
  try {
    const response = await api.getProducts();

    console.log(response.data);

    dispatch({ type: "FETCH_ALL", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};
