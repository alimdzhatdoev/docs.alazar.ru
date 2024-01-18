import React from "react";
import OrderLine from "./OrderLine";
import OrderDetails from "./OrderDetails/OrderDetails";

const OrderSection = ({docs}) => {
    return (
        <>
            {docs.map((doc, index) => 
                <OrderLine doc={doc} key={doc.docNum} />
            )}
            {/* <OrderDetails /> */}
        </>
    )
}

export default OrderSection;