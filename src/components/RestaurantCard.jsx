import { IMG_URL } from "../constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="w-60 rounded-lg shadow-lg p-4 m-4 transition-transform transform hover:scale-105">
      <img
        src={IMG_URL + cloudinaryImageId}
        className="rounded-t-lg w-full"
        alt={name}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <h4 className="text-gray-600">{cuisines.join(", ")}</h4>
        <h4 className="text-gray-600">{area}</h4>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <h4 className="ml-1">
              <i className="fa-solid fa-star text-yellow-500"></i>
              {avgRating}
            </h4>
          </div>
          <h4 className="text-gray-600">{costForTwoString}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
