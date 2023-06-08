import { makeStyles } from 'tss-react/mui';

const extraSmallMargin = 4;
const smallMargin = 6;
const calcMarginUnits = (unitType: number, amp: number) => {
  const margin = unitType * amp;
  return `${margin}px`;
};

const styles = {
  section: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },
  heroSection: {
    marginBottom: calcMarginUnits(smallMargin, 12),
  },
  heroContainer: {
    marginTop: calcMarginUnits(extraSmallMargin, 8),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroImagesBox: {
    display: 'flex',
    position: 'relative' as const,
    zIndex: 1,
  },
  heroDecoTomato: {
    position: 'absolute' as const,
    height: 71,
    width: 71,
  },
  heroDecoTomatoLeft: {
    transform: 'rotateY(174deg)',
    left: '-15px',
    top: '-9px',
  },
  heroDecoTomatoRight: {
    transform: 'rotate(6deg)',
    right: '-9px',
    bottom: '-18px',
  },
  heroDecoPizza: {
    height: 354,
    width: 354,
  },
  textBox: {
    display: 'flex',
    flexDirection: 'column' as const,
    textAlign: 'center' as const,
    color: '#F7F7F7',
  },
  heroTextBox: {
    position: 'absolute' as const,
    zIndex: 2,
  },
  headerHero: {
    fontSize: 48,
    fontWeight: 900,
    lineHeight: 1.25,
  },
  subheaderHero: {
    fontSize: 24,
    fontWeight: 500,
    lineHeight: 1.25,
  },
  ctaContainer: {
    paddingTop: calcMarginUnits(smallMargin, 8),
    letterSpacing: '0.03em',
    textAlign: 'center' as const,
    color: '#F7F7F7',
    gap: calcMarginUnits(extraSmallMargin, 4),
  },
  ctaHeader: {
    fontSize: 36,
    fontWeight: 600,
    lineHeight: 1.25,
  },
  ctaButtonBox: {
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'center',
    gap: '24px',
  },
  ctaButtonDeco: {
    backgroundColor: '#E24A00',
    width: 24,
    height: 3,
  },
  ctaSubheader: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 1.25,
    letterSpacing: '0.03em',
  },
  ctaSubheaderDeco: {
    width: 54,
    height: 21,
  },
  mainSection: {
  },
  mainTextBox: {
    gap: calcMarginUnits(extraSmallMargin, 4),
    marginBottom: calcMarginUnits(smallMargin, 16),
  },
  mainSectionHeader: {
    fontSize: 36,
    fontWeight: 600,
    lineHeight: 1.25,
    letterSpacing: '0.03em',
  },
  mainSectionSubheader: {
    fontSize: 18,
    lineHeight: 1.25,
    letterSpacing: '0.03em',
  },
  flexColumnCentered: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },
  locationBox: {
    gap: calcMarginUnits(extraSmallMargin, 4),
    marginBottom: calcMarginUnits(smallMargin, 4),
  },
  contactContainer:{
    gap: calcMarginUnits(extraSmallMargin, 4),
    color: '#F7F7F7',
    textAlign: 'center' as const,
  },
  header3: {
    fontSize: 30,
    lineHeight: 1.25,
    letterSpacing: '0.03em',
    fontWeight: 600,
    marginTop: '40px',
  },
  subheader3: {
    fontSize: 15,
    lineHeight: 1.25,
    letterSpacing: '0.03em',
    marginTop: '20px',
    color: '#F7F7F7',
  },

};
export default makeStyles()(styles);

/*
* Inline Documentation
*
* examples and usage:
* https://www.npmjs.com/package/tss-react
* */
