import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function UserOrder() {
    const navigate=useNavigate();
    const handelGoBack = () => {
        navigate("/home");
      };
  return (
    <div
      style={{
        background: "#100f1f",
        fontSize: "35px",
        color: "white",
        width: "100vw",
        height: "100vh",
        display: "flex",
        textAlign:"center",
        alignItems: "center",
        position:"relative",
        padding:"20px"
      }}
    >
      Order Placed successfully!!
      <div
        className="backArrowIcon"
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          fontSize: "25px"
        }}
        onClick={handelGoBack}
      >
        <BsArrowLeft />
      </div>
    </div>
  );
}

export default UserOrder;
