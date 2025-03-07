import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

const App = () => {
  const [items, setItems] = useState([]);
  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };
  const handleDeleteItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const handleToggleItems = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const handleClearList = () => {
    const confirmed = window.confirm("are you sure?");
    if (confirmed) setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItems}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
