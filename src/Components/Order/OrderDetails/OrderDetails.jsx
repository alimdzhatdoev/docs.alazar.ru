import React from "react";
import classes from "./OrderDetails.module.css"
import closeIcon from "../../../refs/close.png";
import MyСontragentForm from "../../form/contragentForm/MyСontragentForm";

const OrderDetails = ({ changeOrderDetailsVisible, createСontragent }) => {

  function change() {
    changeOrderDetailsVisible(!changeOrderDetailsVisible)
  }

  return (
    <div className={classes.orderCart}>
      <div onClick={change} className={classes.closeCart}>
        <img src={closeIcon} alt="" />
      </div>
      <div className={classes.formShow}>
        <MyСontragentForm createСontragent={createСontragent} />
      </div>
    </div>
  );
}

export default OrderDetails;