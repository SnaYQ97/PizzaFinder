import {makeStyles} from 'tss-react/mui';
import {colors} from "@mui/material";

const styles = {
  container: {
    padding: '20px',
    borderRadius: '0 2px 4px',
    width: '600px',
    height: '1200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 'calc(60% - 320px/2)',
    top: '0px',
    flex: 'none',
  },
  container2: {

    padding: '20px',
    width: '500px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 'calc(11% - 320px/2)',
    top: '1050px',
    flex: 'none',
  },


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
  },

  miniImage: {
    position: 'absolute',
    top: '13px',
    left: '10px',
    width: '50px',
    height: '50px',
  },


  tomato1: {
    position: 'absolute',
    left: '50px',
    width: '80px',
    height: '80px',
    top: '300.5px',

  },
  tomato2: {
    position: 'absolute',
    left: '600px',
    width: '70px',
    height: '70px',
    top: '894.5px',
  },

  weed:{
    position: 'fixed',
    top: 'calc(8% - 128px)',
    right: '0px',
    width: '180px',
    height: '180px',
  },


  pizzaFinder: {
    position: 'absolute',
    top: '15px',
    left: 52,
    width: '320px',
    height: '50px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '42px',
    color: '#F7F7F7',
    lineHeight: '45px',
    textAlign: 'center',
    letterSpacing: '-0.02em',
  },

  title: {
    position: 'absolute',
    width: '520px',
    height: '135px',
    top: '15px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '54px',
    lineHeight: '45px',
    textAlign: 'center',
    letterSpacing: '-0.02em',
    color: '#F7F7F7',
  },
  title2: {
    position: 'absolute',
    width: '520px',
    height: '135px',
    top: '650px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '48px',
    lineHeight: '45px',
    textAlign: 'center',
    letterSpacing: '-0.02em',
    color: '#F7F7F7',
  },

  title3: {
    position: 'absolute',
    width: '520px',
    height: '135px',
    top: '360px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '48px',
    lineHeight: '45px',
    textAlign: 'center',
    letterSpacing: '-0.02em',
    color: '#F7F7F7',
  },
  title4: {
    position: 'absolute',

    left: '-220px',
    width: '520px',
    height: '135px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '45px',
    textAlign: 'center',
    letterSpacing: '-0.02em',
    color: '#FF5500',
  },
  subtitle: {
    position: 'absolute',
    width: '320px',
    height: '135px',
    top: '255px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',

    textAlign: 'center',
    letterSpacing: '-0.02em',
    color: '#F7F7F7',
  },
  subtitle2: {
    position: 'absolute',
    width: '520px',
    height: '135px',
    top: '415px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '45px',
    textAlign: 'center',
    letterSpacing: '-0.05em',

    color: '#F7F7F7',
  },
  subtitle3: {
    position: 'absolute',
    width: '520px',
    height: '135px',
    top: '750px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '45px',
    textAlign: 'center',
    color: '#F7F7F7',
    letterSpacing: '-0.05em',
  },
  subtitle4: {
    position: 'absolute',
    width: '520px',
    height: '135px',
    top: '940px',
    left: '-130px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '45px',
    textAlign: 'center',
    color: '#F7F7F7',
    letterSpacing: '-0.05em',

  },

  subtitle5: {
    position: 'absolute',
    width: '520px',
    height: '135px',
    top: '1170px',
    left: '-146px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '45px',
    textAlign: 'center',
    color: '#F7F7F7',
    letterSpacing: '-0.05em',

  },
  subtitle6: {
    position: 'absolute',
    width: '520px',
    height: '135px',
    top: '1170px',
    left: '-146px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '45px',
    textAlign: 'center',
    color: '#F7F7F7',
    letterSpacing: '-0.05em',

  },
  WhiteSearchIcon: {
    color: '#F7F7F7',
  },
  FacebookIcon: {
    color: '#FF5500',
    width: '204px',
    height: '52px',
    position: 'absolute',
    top: '1220px',
    left: '-9px',
  },
  InstagramIcon: {
    color: '#FF5500',
    width: '204px',
    height: '52px',
    position: 'absolute',
    top: '1221px',
    left: '55px',
  }

};

export default makeStyles()(styles);

/*
* Inline Documentation
*
* examples and usage:
* https://www.npmjs.com/package/tss-react
* */
