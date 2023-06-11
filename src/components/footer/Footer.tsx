import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import useStyles from './Footer.styles.ts';
import { Logo } from '../logo';

const Footer = () => {
  const { classes } = useStyles();

  return (
    <section className={classes.footerSection}>
      <div className={classes.socialsBox}>
        <Logo />
        <div className={classes.subtitle}>
            Pomagamy wam znaleźć waszą ulubioną pizzę od 2023 roku.
        </div>
        <div className={classes.socials}>
          <FacebookIcon className={classes.icon}/>
          <InstagramIcon className={classes.icon}/>
        </div>
      </div>
      {/* Website Map */}
      <div className={classes.linksContainer}>
        <div className={classes.linkBox}>
          {/* Links Header */}
          <div className={classes.title}>Firma</div>
          {/* Links */}
          <p className={classes.subtitle}>O nas</p>
          <p className={classes.subtitle}>Polityka prywatności</p>
        </div>
        <div className={classes.linkBox}>
          {/* Links Header */}
          <div className={classes.title}>Brands</div>
          {/* Links */}

          <p className={classes.subtitle}>Reklamujcie się z nami</p>
        </div>
        <div className={classes.linkBox}>
          {/* Links Header */}
          <div className={classes.title}>Kontakt</div>
          {/* Links */}
        </div>
      </div>
      <div className={classes.footerRights}>
        <span className={classes.titleFoot}>
          © 2023 PizzaFinder, All rights reserved
        </span>
      </div>
    </section>
  );
};

export default Footer;
