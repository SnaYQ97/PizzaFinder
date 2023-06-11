import { makeStyles } from 'tss-react/mui';

const styles = {
  root: {
    backgroundColor: '#FF5500',
    fontSize: 16,
    lineHeight: 1.25,
    display: 'flex',
    fontFamily: '\'Inter\', sans-serif',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px 41px',
    borderRadius: '41px',
    fontWeight: 700,
    letterSpacing: '0.03em',
    color: '#F7F7F7',
    width: 'fit-content',
    '&:focus': {
      outline: 'unset',
    },
    '&:focus-visible': {
      outline: 'unset',
    }
  },
};

export default makeStyles()(styles);

/*
* Inline Documentation
*
* examples and usage:
* https://www.npmjs.com/package/tss-react
* */
