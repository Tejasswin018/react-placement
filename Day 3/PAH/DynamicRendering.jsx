import React, { useState } from 'react';

const DynamicRendering = () => {
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(true);

  const handleToggleClass = () => {
    setCount((prev) => prev + 1);

    if (count % 4 === 0) {
      setShow((prevShow) => !prevShow);
    }
  };

  return (
    <>
      <p className={show ? 'Kaioken' : 'SuperSaiyan'}>Hello, World!</p>
      <button onClick={handleToggleClass}>Toggle Class</button>
    </>
  );
};

export default DynamicRendering;
