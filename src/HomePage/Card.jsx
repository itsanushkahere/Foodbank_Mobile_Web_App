import React, { useEffect } from "react";
import "./Card.css";
import { Ellipsis } from "../utils/ellipsis";
import { useDispatch,useSelector } from "react-redux";

function Card({ foodData }) {
  const dispatch = useDispatch();
  const itemListAdded = useSelector((state) => state.appData.itemsAdded);
  const handelAdd = (result) => {
    console.log("result", result);
    dispatch({
      type:"ITEMS_ADDED",
      payload:[...itemListAdded,result],
    }
    )
  };
  const handelCross=(id)=>{
    const updatedList=itemListAdded.filter(result=>result.id!==id)
    dispatch({
      type:"ITEMS_ADDED",
      payload:updatedList,
    })
  }
  return (
    <div className="FoodCategory">
      {foodData &&
        foodData?.map((result, index) => (
          <div>
            <img
              src={result.thumbnail_url}
              alt="burgerimage"
              className="cardImg"
            />
            <div>{Ellipsis(result.name, 15)}</div>
            <div>₹{result.price.total}</div>
            {itemListAdded.some(obj => obj.id === result.id)?
                  (<div className="removeButton" onClick={()=>{handelCross(result.id)}}>
                   Remove
                  </div>):(<div className="addButton" onClick={() => handelAdd(result)}>
                    Add Cart
                  </div>)}
          </div>
        ))}
    </div>
  );
}

export default Card;
