import React, { useState, useMemo } from "react";

const UseMemohookEx = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multiCountMemo = useMemo(function multiCount() {
    console.log("multicount call");
    return count * 5;
  },[count]);
  return (
    <>
      <div>UseMemohookEx</div>
      <h3>Count is : {count}</h3>
      <h3>Item is : {item}</h3>
      <h3>{multiCountMemo}</h3>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setItem(item * 10)}>Update Item</button>
    </>
  );
};

export default UseMemohookEx;
