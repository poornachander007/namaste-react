import { CDN_URL } from "../utils/constants";

const Card = (props) => {
  const { resData } = props;
  console.log(resData.data);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData.data;

  return (
    <div className="card">
      <img
        className="card-image"
        alt="food-image"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4>{name}</h4>
      <h4>{avgRating} stars</h4>
      <p>{cuisines.join(", ")}</p>
      <h4>$ {costForTwo / 100} for two</h4>
      <h4>{deliveryTime} minuts</h4>
    </div>
  );
};

export default Card;
