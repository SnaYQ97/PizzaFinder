import { makeStyles } from 'tss-react/mui';

const styles = ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 'theme.spacing(1)',
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
  },
  option: {
    display: 'flex',
    flexDirection: 'column',
    margin: '5px 10px',
  },
  optionName: {
    fontWeight: ''
  },
  optionDescription: {

  },
  errorBox: {
    minHeight: '15px',
    marginTop: '5px',
    display: 'flex',
    gap: 4,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontSize: '12px',
    color: 'red'

  },
  errorIcon: {
    fontSize: '12px',
    fill: 'red',
  },

});

export default makeStyles()(styles);
