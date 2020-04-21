import React from 'react';
import { useTimer } from '../hooks/useTimer';
import {} from '../styles/Alert';

const Alert = () => {
  const isOpen = useTimer();

  return (
    <>
      {isOpen ? (
        <div>
          <div>Hello Alert</div>
        </div>
      ) : null}
    </>
  );
};

export default Alert;
