import React, { useState } from "react";
import MyInput from "../../UI/input/MyInput";
import classes from "./MyСontragentForm.module.css";
import MyButton from "../../UI/button/MyButton";

const MyСontragentForm = ({ createСontragent }) => {
    const [contragent, setContragent] = useState({
        id: "",
        name: '',
        firmName: '',
    });

    function addNewСontragent(e) {
        e.preventDefault();
        const newСontragent = { ...contragent, id: Date.now() };

        if (!newСontragent.name || !newСontragent.firmName) {
            alert("Заполните все поля!");
            return;
        }
        
        createСontragent(newСontragent);
        setContragent({
            name: '',
            firmName: '',
        });
    }

    return (
        <>
            <h1>Добавить Контрагента</h1>
            <form className={classes.myForm}>
                <MyInput
                    style={{'width': '100%'}}
                    type="text"
                    placeholder="ФИО"
                    value={contragent.name}
                    onChange={(e) => setContragent({ ...contragent, name: e.target.value })}
                />
                <MyInput
                    style={{'width': '100%'}}
                    type="text"
                    placeholder="Наименование организации"
                    value={contragent.firmName}
                    onChange={(e) => setContragent({ ...contragent, firmName: e.target.value })}
                />

                <MyButton style={{'width': '100%'}} onClick={addNewСontragent}>Добавить</MyButton>
            </form>
        </>
    )
}

export default MyСontragentForm;