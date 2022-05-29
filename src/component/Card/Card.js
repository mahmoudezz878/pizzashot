import { useEffect } from "react";
import CardInfo from "./CardInfo";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/actions";

const Card = ({ filter }) => {
  const products = useSelector((state) => state.Counter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log({products})

  function filterProducts(foodList) {
    switch (filter) {
      case "all":
        return foodList;
      case "popular":
        return foodList.filter((item) => item.category.name === filter);
      case "pizza":
        return foodList.filter((item) => item.category.name === filter);
      case "burger":
        return foodList.filter((item) => item.category.name === filter);
      case "crepe":
        return foodList.filter((item) => item.category.name === filter);
      case "drinks":
        return foodList.filter((item) => item.category.name === filter);
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
