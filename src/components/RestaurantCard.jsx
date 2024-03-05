import { IMG_URL } from "../constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  costForTwo,
  avgRating,
  locality,
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
        <h4 className="text-gray-600">{areaName}</h4>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <h4 className="ml-1">
              <i className="fa-solid fa-star text-yellow-500"></i>
              {avgRating}
            </h4>
          </div>
          <h4 className="text-gray-600">{costForTwo}</h4>
          <h4 className="text-gray-600">{locality}</h4>
        </div>
      </div>
    </div>
  );
};

export const vegRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <Box>
        <label className="absolute bg-[#1F8A70] text-white p-[0.2rem] ml-8 mr-5  rounded-sm px-3">
          VEG
        </label>
        <RestaurantCard {...props} />
      </Box>
    );
  };
};

export default RestaurantCard;
