import React, { useState, useMemo } from "react";
import Orders from './Components/Order/Orders';
import MyForm from './Components/form/orderForm/MyForm';
import './style/App.css';
import MyСontragentForm from "./Components/form/contragentForm/MyСontragentForm";
import OrderDetails from "./Components/Order/OrderDetails/OrderDetails";

function App() {
  const [docs, setDocs] = useState([
    {
      id: 1,
      docNum: "A-1",
      date: "2024-01-14",
      contragent: "ИП Джатдоев",
      item: "Создание сайта",
      price: '1 000 000',
    },
    {
      id: 2,
      docNum: "A-2",
      date: "2024-01-15",
      contragent: "ИП Уртенов",
      item: "Создание сайта",
      price: '2 000 000',
    },
    {
      id: 3,
      docNum: "A-3",
      date: "2024-01-16",
      contragent: "ИП Чагарова",
      item: "Создание сайта",
      price: '3 000 000',
    },
  ])

  const [contragents, setContrarents] = useState([
    {
      id: 1,
      name: 'Джатдоев Алим Сеит-Алиевич',
      firmName: 'ИП Джатдоев',
    },
    {
      id: 2,
      name: 'Уртенов Азамат Заурович',
      firmName: 'ИП Уртенов',
    },
    {
      id: 3,
      name: 'Моя Карьера',
      firmName: 'АНО "Моя Карьера"',
    },
  ]);

  const [filter, setFilter] = useState({ query: '' });

  const [isOrderDetailsVisible, setOrderDetailsVisible] = useState(false);

  const createDoc = (newDoc) => {
    setDocs([...docs, newDoc]);
  }

  const changeOrderDetailsVisible = (switchData) => {
    setOrderDetailsVisible(switchData);
  }

  const createСontragent = (newСontragent) => {
    setContrarents([...contragents, newСontragent]);
  }

  const sortedContragents = useMemo(() => {
    return contragents.filter((contragent) => contragent.firmName.toLowerCase().includes(filter.query.toLowerCase()))
  }, [contragents, filter.query]);

  return (
    <div className="main">
      <MyForm
        filter={filter}
        setFilter={setFilter}
        createDoc={createDoc}
        docs={docs}
        contragents={sortedContragents}
        setOrderDetailsVisible={setOrderDetailsVisible}
      />
      <Orders docs={docs} />

      {isOrderDetailsVisible && <OrderDetails createСontragent={createСontragent} changeOrderDetailsVisible={changeOrderDetailsVisible} title="Добавить Контрагента" />}
    </div>
  );
}

export default App;
