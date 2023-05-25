import { Button as MuiButton } from '@mui/material';
import { ReactNode } from 'react';
import useStyles from './Button.styles.ts';

interface Props {
  variant?: 'contained';
  onClick?: () => void;
  children?: ReactNode;
}

const Button = (props: Props) => {
  const { classes } = useStyles();
  const { variant, onClick, children } = props;
  return (
    <MuiButton
      className={classes.root}
      onClick={onClick}
      variant={variant}>
      {children}
    </MuiButton>
  );
};

export default Button;


/*
* Inline Documentation
*
* Create {componentName}.style.ts
* and import there as useStyles
* use styles is return of makeStyles, and makeStyles is exported as default so we
* can storage styles in other file.
*
* to use those styles as classes
* u have to create const { classes } = useStyles()
*
* Then you can assign your class form styles to className using:
*   <div className={classes.myDiv}>
*
* More and examples:
* https://www.npmjs.com/package/tss-react
* */
