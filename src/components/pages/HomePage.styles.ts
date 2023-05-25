import { makeStyles } from 'tss-react/mui';

const styles = {
  link: {
    fontWeight: 500,
    color: '#646cff',
    textDecoration: 'inherit',
    '&:hover': {
      color: '#535bf2',
    }
  },
  logo: {
    fontSize: '20px',
  }
};

export default makeStyles()(styles);

/*
* Inline Documentation
*
* examples and usage:
* https://www.npmjs.com/package/tss-react
* */
