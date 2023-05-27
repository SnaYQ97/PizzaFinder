import {makeStyles} from 'tss-react/mui';

const styles = {
  root: {
    background: '#FF5500',
    display: 'flex',
    color: 'white',
    fontFamily: 'Inter',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12px 41px',
    gap: '8px',
    width: '198px',
    height: '48px',
    /* Shadow/xs */
    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
    borderRadius: '39px',
    /* Inside auto layout */
    flex: '1',
    order: 1,
    flexGrow: 0,
    position: 'absolute',
    top: '245px',
  }
};

export default makeStyles()(styles);

/*
* Inline Documentation
*
* examples and usage:
* https://www.npmjs.com/package/tss-react
* */
