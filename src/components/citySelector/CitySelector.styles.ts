import { makeStyles } from 'tss-react/mui';

const styles = ({
  container: {
    marginBottom: 'theme.spacing(1)',
    display: 'flex',
    fontFamily: '\'Inter\', sans-serif',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textField: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '18px',
    borderRadius: 'theme.spacing(0, 2, 2, 0)',
    borderColor: 'white',
  },
  inputText: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '18px',
    borderRadius: 'theme.spacing(0, 2, 2, 0)',
  },

  leftAdornment: {
    color: '#FFFFFF',
    marginRight: 'theme.spacing(1)',
    borderColor: 'white',
  },
  rightAdornment: {
    color: '#FFFFFF',
    marginLeft: 'theme.spacing(1)',
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
    color: 'white',
  },
  notchedOutline: {
    borderColor: 'white',
  }
});

export default makeStyles()(styles);
