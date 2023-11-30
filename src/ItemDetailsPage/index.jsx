import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./ItemsDetailsPage.css";
import { useNavigate } from "react-router-dom";
import IndividualCard from "./IndividualCard";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";

function ItemDetailsPage() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const itemsDetailsData = useSelector((state) => state.appData.details);
  const itemListAdded = useSelector((state) => state.appData.itemsAdded);
  const [filterData, setFilterData] = useState(itemsDetailsData);
  const handelGoBack = () => {
    navigate(-1);
  };

  const handelSearch = (e) => {
    setSearch(e.target.value);
    const filterResult = itemsDetailsData.filter((index) => {
      return index.name.includes(e.target.value);
    });
    setFilterData(filterResult);
  };

  const redirectToCart = () => {
    navigate("../cart");
  };

  const handelDropdown = () => {
    setShowDropdown(!showDropdown); //toggling
  };

  return (
    <div className="detailMain">
      <div className="firstDetail">
        <div onClick={handelGoBack}>
          <BsArrowLeft />
        </div>
        <div>
          <RxHamburgerMenu onClick={handelDropdown} />
          {showDropdown && (
            <div className="DropDownStyling">
              <div
                className="DropDownLogout"
                onClick={() => {
                  navigate("/");
                }}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="secondDetail">
        <div className="inputInfo">
          <input
            placeholder="Search From Here"
            className="inputBox"
            value={search}
            onChange={(e) => handelSearch(e)}
          />
          <div className="magnifyingGlass">
            <CiSearch />
          </div>
        </div>
        <div
          onClick={redirectToCart}
          style={{ color: "white", fontSize: "30px", position: "relative" }}
        >
          <AiOutlineShoppingCart />
          <div
            style={{
              position: "absolute",
              top: "-7px",
              right: "-10px",
              fontSize: "18px",
              background: "white",
              color: "black",
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {itemListAdded.length}
          </div>
        </div>
      </div>
      {/* {isLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SkeletonTheme baseColor="#434145" highlightColor="#a1a1a1">
            <p>
              <Skeleton height={100} width={350} />
              <Skeleton height={100} width={350} />
              <Skeleton height={100} width={350} />
              <Skeleton height={100} width={350} />
              <Skeleton height={100} width={350} />
              <Skeleton height={100} width={350} />
              <Skeleton height={100} width={350} />
            </p>
          </SkeletonTheme>
        </div>
      ) : ( */}
      <IndividualCard individualData={filterData} />
      {/* )} */}
    </div>
  );
}

export default ItemDetailsPage;
