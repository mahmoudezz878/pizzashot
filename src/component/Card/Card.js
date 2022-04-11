import React from "react";
import CardInfo from "./CardInfo";
import { useSelector } from "react-redux";

const Card = ({ filter }) => {
  const products = useSelector((state) => state.Counter);
  const foodList = useSelector((state) => state.foodList);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, []);

  function filterProducts(foodList) {
    switch (filter) {
      case "all":
        return foodList;
      case "popular":
        return foodList.filter((item) => item.category === filter);
      case "pizza":
        return foodList.filter((item) => item.category === filter);
      case "burger":
        return foodList.filter((item) => item.category === filter);
      case "crepe":
        return foodList.filter((item) => item.category === filter);
      case "drinks":
        return foodList.filter((item) => item.category === filter);
      default:
        return foodList;
    }
  }

  return (
    <div className="cardInfo">
      {filterProducts(products).map((product) => (
        <CardInfo product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Card;
