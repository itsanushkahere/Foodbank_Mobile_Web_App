import React,{useEffect,useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [price,setPrice]=useState(0);
  const itemListAdded = useSelector((state) => state.appData.itemsAdded);
  console.log("itemListAdded", itemListAdded);
  const handelCross = (id) => {
    console.log(id);
    const updatedList = itemListAdded.filter((result) => result.id !== id);
    console.log("updatedList", updatedList);
    dispatch({
      type: "ITEMS_ADDED",
      payload: updatedList,
    });
  };
  const handelGoBack = () => {
    navigate(-1);
  };
  const handelOrder = () => {
    navigate("/order");
    dispatch({
      type: "ITEMS_ADDED",
      payload: [],
    });
  };

  useEffect(()=>{
    const totalPrice = itemListAdded.reduce((sum, item) => sum + item?.price?.total, 0);
    setPrice(totalPrice);
    console.log("total price",totalPrice)
  },[itemListAdded])

  return (
    <div
      className="cartMain"
      style={{
        backgroundColor: "#100f1f",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        overflowY: "scroll",
        width: "100wh",
        padding: "20px",
        position: "relative",
      }}
    >
      <div
        className="backArrowIcon"
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          fontSize: "25px",
        }}
        onClick={handelGoBack}
      >
        <BsArrowLeft />
      </div>
      <div
        className="cartTitle"
        style={{ fontSize: "30px", marginBottom: "20px" }}
      >
        Items Added
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "90%",
        }}
      >
        {itemListAdded &&
          itemListAdded?.map((result, index) => (
            <div
              className="itemCard"
              style={{
                display: "flex",
                padding: "10px",
                border: "1px solid white",
                borderRadius: "15px",
                width: "100%",
                height: "100px",
              }}
            >
              <div className="leftChild" style={{ width: "90%" }}>
                <div>{result.name}</div>
                <div>₹{result.price.total}</div>
              </div>
              <div className="rightChild" style={{ width: "10%" }}>
                <div
                  className="crossButton"
                  onClick={() => {
                    handelCross(result.id);
                  }}
                >
                  X
                </div>
              </div>
            </div>
          ))}
      </div>
      {itemListAdded.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column",width: "90%",fontSize:"18px",marginTop:"10px"}}>
          <div>Food Price : Rs {price}</div>
          <div>GST(12%) : Rs {(price * 12) / 100}</div>
          <div>Total Price : Rs {price+((price * 12) / 100)} </div>
          <div
            onClick={handelOrder}
            style={{
              height: "48px",
              marginTop: "20px",
              fontSize: "20px",
              borderRadius: "10px",
              background: "green",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Proceed to Pay
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

// const Add=()=>{
// }named arrow func

// ()=>{
//   hanelxyz()
// }anonymous arrow function
