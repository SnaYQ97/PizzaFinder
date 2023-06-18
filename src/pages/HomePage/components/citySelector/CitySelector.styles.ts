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
  textFieldRoot: {

  },
  leftAdornment: {
    color: '#FFFFFF',
    marginRight: 'theme.spacing(1)',
    borderColor: 'white',
    fontSize: 19,
    cursor: 'pointer',
  },
  tooltip: {
    padding: '10px 15px',
    color: '#F7F7F7',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '1.25',
    letterSpacing: '0.01em'
  },
  helperText: {
    color: '#F7F7F7',
  },
  rightAdornmentIconsContainer: {
    marginLeft: 'theme.spacing(1)',
    display: 'flex',
    gap: 5,
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: 19,
  },
  clearIcon: {
    cursor: 'pointer',
  },
  rightAdornment: {
    padding: 'unset',
    fontSize: 19,
    color: '#FFFFFF',
    cursor: 'pointer',
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
  },
  optionDescription: {
  },
  messageBox: {
    minHeight: '15px',
    marginTop: '5px',
    display: 'flex',
    gap: 4,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontSize: '12px',

  },
  errorBox: {
    color: 'red',
    fill: 'red',
  },
  errorIcon: {
    fontSize: 'inherit'
  },
  infoBox: {
    color: 'yellow',
    fill: 'yellow',
  },
  infoIcon: {
    fontSize: 'inherit'
  },

});

export default makeStyles()(styles);
