import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CholeBature from "../assets/cholebhature.jpg";
import { BsArrowLeft } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import "./HomePage.css";
import {
  useGetFoodItemsQuery,
  useGetFoodItemsByCategoryQuery,
} from "../service/foodData";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);

  const { data, error, isLoading } = useGetFoodItemsQuery();
  const {
    data: dataByCategory,
    error: errorByCategory,
    isLoading: isLoadingByCategory,
  } = useGetFoodItemsByCategoryQuery();

  const mealData = useSelector((state) => state.appData.mealData);
  const breakfastData = useSelector((state) => state.appData.breakfastData);

  const handelGoBack = () => {
    navigate("/");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handelDropdown = () => {
    setShowDropdown(!showDropdown); //toggling
  };

  useEffect(() => {
    dispatch({
      //action obj
      type: "BREAKFAST_DATA", //2 keys
      payload: data?.results,
    });
  }, [data]); //dispatched data

  useEffect(() => {
    dispatch({
      type: "MEAL_DATA",
      payload: dataByCategory?.results,
    });
  }, [dataByCategory]);

  const handelDetailsFood = (name) => {
    dispatch({
      type: "DETAILS_PAGE",
      payload: name == "Meals" ? data?.results : dataByCategory?.results,
    });
    navigate(`/details/${name}`); //data to details page
  };

  return (
    <div className="homeMain">
      <div
        className="firstChild backgroundImageContainer"
        style={{ backgroundImage: `url(${CholeBature})` }}
      >
        <div className="firstIcons">
          <div onClick={handelGoBack}>
            <BsArrowLeft />
          </div>
          <div style={{ position: "relative" }} >
            <RxHamburgerMenu onClick={handelDropdown} />
            {showDropdown && (
              <div
                style={{
                  color: "black",
                  background: "white",
                  fontSize: "20px",
                  display: "flex",
                  flexDirection: "column",
                  height: "80px",
                  position: "absolute",
                  top: "50px",
                  right: "10px",
                }}
              >
                <div
                  style={{
                    height: "40px",
                    width: "70px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="DropdownOption"
                  onClick={handleCartClick}
                >
                  Cart
                </div>
                <div
                  style={{
                    height: "40px",
                    width: "70px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="DropdownOption"
                  onClick={()=>{navigate('/')}}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="homeTitle">
          <div>Different</div>
          <div>Kind of Food</div>
        </div>
      </div>

      <div className="secondChild">
        <div className="categoryTitle">
          <div>Breakfast Category</div>
          <div className="vegDashLine">
            <hr />
          </div>
          <div
            className="seeMore"
            onClick={() => handelDetailsFood("Breakfast")}
          >
            See more{">>"}
          </div>
        </div>
        <div>
          {isLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "200px",
                alignItems: "center",
              }}
            >
              <SkeletonTheme baseColor="#434145" highlightColor="#a1a1a1">
                <p>
                  <Skeleton height={100} width={350} />
                  <Skeleton height={20} width={350} />
                  <Skeleton height={20} width={350} />
                  <Skeleton height={30} width={350} />
                </p>
              </SkeletonTheme>
            </div>
          ) : (
            <Card foodData={breakfastData} />
          )}
        </div>
      </div>
      <div className="thirdChild">
        <div className="categoryTitle">
          <div>Meals Category</div>
          <div className="nonvegDashLine">
            <hr />
          </div>
          <div className="seeMore" onClick={() => handelDetailsFood("Meals")}>
            See more{">>"}
          </div>
        </div>
        <div>
          {isLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: "200px",
                alignItems: "center",
              }}
            >
              <SkeletonTheme baseColor="#434145" highlightColor="#a1a1a1">
                <p>
                  <Skeleton height={100} width={350} />
                  <Skeleton height={20} width={350} />
                  <Skeleton height={20} width={350} />
                  <Skeleton height={30} width={350} />
                </p>
              </SkeletonTheme>
            </div>
          ) : (
            <Card foodData={mealData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
