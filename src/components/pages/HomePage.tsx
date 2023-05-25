import { ReactComponent as ViteLogo } from '../../assets/icons/vite.svg';
import { ReactComponent as ReactLogo } from '../../assets/icons/react.svg';
import { Button } from '../button';
import React, { useState } from 'react';
import useStyles from './HomePage.styles.ts';

const HomePage = () => {
  const { classes } = useStyles();
  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <div>
        <a href="https://vitejs.dev" className={classes.link} target="_blank" rel="noreferrer">
          <ViteLogo className={classes.logo}/>
        </a>
        <a href="https://react.dev" className={classes.link}  target="_blank" rel="noreferrer">
          <ReactLogo className={classes.logo}/>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button
          onClick={() => setCount((count) => count + 1)}
          variant={'contained'}
        >
            count is {count}
        </Button>
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
