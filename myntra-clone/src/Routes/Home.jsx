import React from "react";
import Item from "../components/Item";
import { useSelector } from "react-redux";
//import items from "../data/items";

const Home = () => {
  const items = useSelector((store) => store.items);

  return (
    <main>
      <div className="items-container">
        {items.map((items) => (
          <Item key={items.id} item={items} />
        ))}
      </div>
    </main>
  );
};

export default Home;
