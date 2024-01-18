import React, { useState, useRef, useEffect } from "react";
import MyInput from "../../UI/input/MyInput";
import classes from "./MyForm.module.css";
import MyButton from "../../UI/button/MyButton";
import ContragentsList from "../../modal/ContragentsList";

const MyForm = ({ createDoc, docs, contragents, filter, setFilter, setOrderDetailsVisible }) => {
    function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();

        // Добавляем ведущий ноль, если месяц или день меньше 10
        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;

        return `${year}-${month}-${day}`;
    }

    const [doc, setDoc] = useState({
        id: "",
        docNum: getNextDocNum(),
        date: getCurrentDate(),
        contragent: '',
        item: '',
        price: '',
    });

    const [isContragentsListVisible, setIsContragentsListVisible] = useState(false);

    const modalShowBlocksRef = useRef();

    function getNextDocNum() {
        const lastDoc = docs[docs.length - 1];
        if (lastDoc) {
            const lastDocNum = lastDoc.docNum.split("-")[1];
            const nextDocNum = +lastDocNum + 1;
            return `A-${nextDocNum}`;
        } else {
            return "A-1";
        }
    }

    function addNewDoc(e) {
        e.preventDefault();
        const newDocNum = getNextDocNum();
        const newDoc = { ...doc, id: Date.now(), docNum: newDocNum, price: formatPrice(doc.price) };

        if (!newDoc.docNum || !newDoc.date || !doc.contragent || !doc.item || !doc.price) {
            alert("Заполните все поля!");
            return;
        }

        createDoc(newDoc);
        setDoc({
            date: getCurrentDate(),
            contragent: '',
            item: '',
            price: '',
        });
        setFilter({ ...filter, query: '' });
    }

    function formatPrice(price) {
        return Number(price).toLocaleString('ru-RU');
    }

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const handleDocumentClick = (e) => {
        if (modalShowBlocksRef.current && modalShowBlocksRef.current.contains(e.target)) {
            setIsContragentsListVisible(true);
        } else {
            setIsContragentsListVisible(false);
        }
    };

    function addContr(addContr) {
        const newData = { ...doc, contragent: addContr };
        setDoc(newData);
    }

    return (
        <>
            <h1>Добавить заказ</h1>
            <form className={classes.myForm}>
                <div className={classes.inputBlock}>
                    <MyInput
                        type="text"
                        placeholder="№ договора"
                        value={getNextDocNum()}
                        disabled
                    />
                    <MyInput
                        type="date"
                        placeholder="Дата"
                        value={doc.date}
                        onChange={(e) => setDoc({ ...doc, date: e.target.value })}
                    />
                    <div className={classes.modalShowBlocks} ref={modalShowBlocksRef}>
                        <MyInput
                            type="text"
                            placeholder="Контрагент"
                            value={doc.contragent}
                            onChange={(e) => {
                                setDoc({ ...doc, contragent: e.target.value });
                                setFilter({ ...filter, query: e.target.value });
                            }
                            }
                            onClick={() => {
                                setIsContragentsListVisible(!isContragentsListVisible);
                            }}
                        />
                        {isContragentsListVisible &&
                            <ContragentsList
                                addContr={addContr}
                                contragents={contragents}
                                setOrderDetailsVisible={setOrderDetailsVisible}
                            />}
                    </div>
                    <MyInput
                        type="text"
                        placeholder="Статья"
                        value={doc.item}
                        onChange={(e) => setDoc({ ...doc, item: e.target.value })}
                    />
                    <MyInput
                        type="number"
                        placeholder="Стоимость"
                        value={doc.price}
                        onChange={(e) => setDoc({ ...doc, price: e.target.value })}
                    />
                </div>

                <MyButton onClick={addNewDoc}>Добавить</MyButton>
            </form>
        </>
    )
}

export default MyForm;