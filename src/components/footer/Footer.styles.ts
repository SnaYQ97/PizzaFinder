import { makeStyles } from 'tss-react/mui';

const styles =({
  footerSection: {
    paddingTop: '24px',
    margin: '48px 24px 0',
  },
  socialsBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  socials: {
    display: 'flex',
    gap: '12px',
  },
  linksContainer: {
    display: 'flex',
    flexGrow: '1',
    flexWrap: 'wrap',
    margin: '24px 0 48px',
    gap: '24px',
    alignItems: 'space-between',
  },
  linkBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  title: {
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '14px',
    letterSpacing: '0.03em',
    color: '#FF5500',
  },
  subtitle: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '1.25',
    letterSpacing: '0.03em',
    maxWidth: '250px',
    color: '#F7F7F7',
    margin: 'unset',
  },
  mailLink: {

  },
  titleFoot: {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '1.25',
    letterSpacing: '0.01em',
    color: '#DEDEDE',
    textAlign: 'center',
  },
  icon: {
    color: '#FFF',
  },
  footerRights: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '12px',
  },
});

export default makeStyles()(styles);
