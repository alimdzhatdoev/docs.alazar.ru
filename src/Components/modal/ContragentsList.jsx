import React from "react";
import classes from "./ContragentsList.module.css"
import MyButton from "../UI/button/MyButton";

const ContragentsList = ({ addContr, contragents, setOrderDetailsVisible }) => {
    function addContrData(contragentName) {
        addContr(contragentName);
    }

    function showContrList(e) {
        e.preventDefault();
        setOrderDetailsVisible(true);
    }

    function displayLastFiveContragents(contragents) {
        return contragents.slice(-5);
    }

    let lastFiveContragents = displayLastFiveContragents(contragents);

    return (
        <>
            <div className={classes.modal}>
                <div className={classes.modal_list}>
                    {lastFiveContragents.reverse().map((contragent, index) =>
                        <div
                            onClick={() => addContrData(contragent.firmName)}
                            key={index}
                            className={classes.modal_list__item}>{contragent.firmName}
                        </div>
                    )}
                </div>
                <MyButton style={{'width': '100%'}} className="order-details-toggle" onClick={showContrList}>
                    Добавить Контрагента
                </MyButton>
            </div>
        </>
    )
}

export default ContragentsList;