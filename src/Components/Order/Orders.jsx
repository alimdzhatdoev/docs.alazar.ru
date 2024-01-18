import React from "react";
import OrderLineNames from "./OrderLineNames";
import OrderSection from "./OrderSection";

const Orders = ({docs}) => {
    return (
        <>
            <div className="orders">
                <h2>Заказы</h2>
                <OrderLineNames />
                <OrderSection docs={docs}/>
            </div>
        </>
    )
}

export default Orders;