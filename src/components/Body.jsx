import React, { useEffect, useState } from "react";
import { SWIGGY_API_URL, restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const filterData = (searchText, restaurants) => {
  restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase()?.includes(searchText.toLowerCase())
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function getRestaurants() {
      try {
        const data = await fetch(SWIGGY_API_URL);
        if (!data.ok) {
          throw new Error("Failed to fetch data from the API");
        }

        async function checkJsonData(jsonData) {
          for (let i = 0; i < jsonData?.data?.cards.length; i++) {
            // initialize checkData for Swiggy Restaurant data
            let checkData =
              json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants;

            // if checkData is not undefined then return it
            if (checkData !== undefined) {
              return checkData;
            }
          }
        }

        const json = await data.json();

        const jsonData = await checkJsonData(json);

        setFilteredRestaurants(jsonData);
        setAllRestaurants(jsonData);

        console.log(filteredRestaurants);
      } catch (error) {
        console.error(error);
      }
    }
    getRestaurants();
  }, []);

  if (!allRestaurants) return null;
  return (
    <>
      <div className=" flex justify-center items-center mt-4">
        <input
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none w-[40%] focus:border-blue-500"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className=" px-4 py-2 bg-blue-500 text-white rounded-r-lg focus:outline-none hover:bg-blue-600"
          onClick={() => {
            const data = filterData(searchText, restaurantList);

            setAllRestaurants(data);
          }}>
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {filteredRestaurants?.length ? (
        <Shimmer />
      ) : (
        <div className=" w-auto flex flex-wrap justify-center mt-8">
          {filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant.data.id} {...restaurant?.info} />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
