import viteLogo from '@assets/icons/vite.svg';
import reactLogo from '@assets/icons/react.svg';
import { Button } from '../button';
import React, { useState } from 'react';
const HomePage = () => {
  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)} variant={'contained'}>count is {count}</Button>
        <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
                Click on the Vite and React logos to learn more
      </p>
    </React.Fragment>
  );
};

export default HomePage;
