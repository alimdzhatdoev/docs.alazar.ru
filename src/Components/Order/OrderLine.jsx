import React from "react";
import MyButton from "../UI/button/MyButton"

const OrderLine = ({ doc }) => {
    function formatDate(inputDate) {
        const date = new Date(inputDate);

        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();

        return `${day}.${month}.${year}`;
    }

    return (
        <div className="orders_orderLine">
            <div className="inputBlock">
                <div className="orders_orderLine__element">{doc.docNum}</div>
                <div className="orders_orderLine__element">{formatDate(new Date(doc.date))}</div>
                <div className="orders_orderLine__element">{doc.contragent}</div>
                <div className="orders_orderLine__element">{doc.item}</div>
                <div className="orders_orderLine__element">{doc.price} руб.</div>
            </div>
            <MyButton>Подробнее</MyButton>
        </div>
    )
}

export default OrderLine;