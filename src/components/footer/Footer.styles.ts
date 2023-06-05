import { makeStyles } from 'tss-react/mui';

const styles =({
  title: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '14px',
    letterSpacing: '0.01em',
    color: '#FF5500',
  },
  subtitle: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '14px',
    letterSpacing: '0.01em',
    color: '#F7F7F7',
  },
  titleFoot: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '12px',
    letterSpacing: '0.01em',
    color: '#DEDEDE',
  },
  icon: {
    color: '#FFF',
  },
});

export default makeStyles()(styles);
