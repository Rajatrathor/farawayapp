import React from "react";

const Stats = ({ items }) => {
  if (items.length === 0)
    return <p className="stats">Start Adding some items to your list</p>;
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <div className="stats">
      <p>
        {percentage === 100
          ? "You are ready to go ✈"
          : `you have ${numItems} items
        on your List, and already packed ${numPacked}( ${percentage}%)`}
      </p>
    </div>
  );
};

export default Stats;
