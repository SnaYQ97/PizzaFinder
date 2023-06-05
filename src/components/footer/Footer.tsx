import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import useStyles from './Footer.styles.ts';




const Footer = () => {
  const { classes } = useStyles();

  return (
    <div>
      <img src={('src/assets/images/PizzaSmall.png')} alt="Pizza Icon"/>
      {/* Logo Component */}
      <div className={classes.subtitle}>You could use this section to narrate
          a short and crisp description for the.
      </div>
      <FacebookIcon className={classes.icon}/>
      <InstagramIcon className={classes.icon}/>

      {/* Website Map */}
      <div>
        {/* Links Header */}
        <div className={classes.title}>Firma</div>
        {/* Links */}
        <p className={classes.subtitle}>O nas</p>
        <p className={classes.subtitle}>Polityka prywatności</p>
      </div>
      <div>
        {/* Links Header */}
        <div className={classes.title}>Brands</div>
        {/* Links */}

        <p className={classes.subtitle}>Reklamujcie się z nami</p>
      </div>
      <div>
        {/* Links Header */}
        <div className={classes.title}>Kontakt</div>
        {/* Links */}
      </div>
      <div>
        <div className={classes.titleFoot}>© 2023 PizzaFinder, All rightsreserved</div>
      </div>
    </div>
  );
};

export default Footer;
