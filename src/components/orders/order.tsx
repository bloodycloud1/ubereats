import { useRef, useEffect } from 'react';

const Order = () => {
  const ref = useRef(null);

  useEffect(() => {
    console.log(ref);
  });

  return (
    <div>
      <div className="order" ref={ref.current}>
        img
      </div>
    </div>
  );
};

export default Order;
