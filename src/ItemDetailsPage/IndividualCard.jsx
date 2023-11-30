import React from "react";
import Chicken from "../assets/chicken wings.jpg";
import "./IndividualCard.css";
import { Ellipsis } from "../utils/ellipsis";
import { useDispatch,useSelector } from "react-redux";

function IndividualCard({ individualData }) {
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
    <div className="cardList">
      {individualData &&
        individualData?.map((result, index) => (
          <div>
            <div className="individualCard">
              <div>
                <img className="imgTag" src={result.thumbnail_url} />
              </div>
              <div className="listInfo">
                <div>{result.name}</div>
                <div className="descp">{Ellipsis(result.description, 80)}</div>
                <div className="priceAddBtn">
                  <div>₹{result.price.total}</div>
                  {itemListAdded.some(obj => obj.id === result.id)?
                  (<div className="removeItemBtn" onClick={()=>{handelCross(result.id)}}>
                   Remove
                  </div>):(<div className="addItemBtn" onClick={() => handelAdd(result)}>
                    Add Cart
                  </div>)}
                </div>
              </div>
            </div>
            <div className="hrTag">
              <hr />
            </div>
          </div>
        ))}
    </div>
  );
}

export default IndividualCard;
