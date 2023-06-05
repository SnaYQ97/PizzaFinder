import useStyles from './HomePage.styles.ts';
import tomato from '../../assets/images/Tomato.png';
import pizzaHero from '../../assets/images/PizzaHero.png';
import { Button } from '../button';
import { CustomTextField } from '../searchBar';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import DecoArrow from '../../assets/icons/DecoArrow.svg';
import cx from 'classnames';
const HomePage = () => {
  const { classes } = useStyles();
  console.log(classes);
  return (
    <>
      {/* Hero section 100vh  390x844 */}
      <section className={cx(classes.section, classes.heroSection)}>
        <div className={classes.heroContainer}>
          <div className={classes.heroImagesBox}>
            <img
              src={tomato}
              className={cx(
                classes.heroDecoTomato,
                classes.heroDecoTomatoLeft
              )}
              alt="Miniature"
            />
            <img
              src={pizzaHero}
              className={classes.heroDecoPizza}
              alt="Pizza"
            />
            <img
              src={tomato}
              className={cx(
                classes.heroDecoTomato,
                classes.heroDecoTomatoRight
              )}
              alt="Miniature"/>
          </div>
          <div className={cx(classes.textBox, classes.heroTextBox)}>
            <div className={classes.headerHero}>
              Pizza Finder
            </div>
            <div className={classes.subheaderHero}>
              Znajdź swoją pizzę
            </div>
          </div>
        </div>
        <div className={cx(classes.flexColumnCentered, classes.ctaContainer)}>
          <div className={classes.ctaHeader}>
            Odkryj najlepsze pizzowe smaki w Twoim mieście!
          </div>
          <div className={classes.ctaButtonBox}>
            <div className={classes.ctaButtonDeco}></div>
            <Button>Znajdź pizze</Button>
            <div className={classes.ctaButtonDeco}></div>
          </div>
          <div className={classes.ctaSubheader}>
            Odkryj idealną pizzę w Twojej okolicy
          </div>
          <DecoArrow className={classes.ctaSubheaderDeco} />
        </div>
      </section>
      {/* Second Section 100vh 844 + 844 */}
      <section className={cx(classes.section, classes.mainSection)}>
        {/* Typography Header + SubHeader 2lvl */}
        <div className={cx(classes.textBox, classes.mainTextBox)}>
          <div className={classes.mainSectionHeader}>
            Menu wielu pizzerri w jednym miejscu
          </div>
          <div className={classes.mainSectionSubheader}>
            Z Pizza Finder możesz eksplorować różnorodne menu z
            lokalnych pizzerii. Niech Twoje kubki smakowe przeżyją
            prawdziwą ucztę!
          </div>
        </div>
        {/* Text with Location Field */}
        <div className={classes.flexColumnCentered}>
          {/* Typography Header + SubHeader 3lvl */}
          <div className={cx(classes.textBox, classes.locationBox)}>
            <div className={classes.header3}>Znajdź swoją pizzę!</div>
            <div className={classes.subheader3}>
              Wpisz nazwę swojego miasta i przejdź do
              naszego Findera, który pomoże Ci znaleźć
              Twoją ulubioną pizzę w okolicy.
            </div>
          </div>
          {/*
            TODO: Move it as reusable component Label + Field
            https://github.com/SnaYQ97/PizzaFinder/issues/7
           */}
          <div className={classes.locationLabel}>Wybierz Miasto</div>
          <CustomTextField
            defaultValue="Warszawa"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon/>
                </InputAdornment>
              ),
            }}
          />
        </div>
        {/* Text with Location Field + Contact Button */}
        <div className={cx(classes.section, classes.contactContainer)}>
          {/* Typography Header + SubHeader 3lvl */}
          <div className={classes.header3}>Wspópracjuj z nami!</div>
          <div className={classes.subheader3}>
              Wpisz nazwę swojego miasta i przejdź do naszego Findera, który
              pomoże Ci znaleźć Twoją ulubioną pizzę w okolicy.
          </div>
          <Button>Kontakt</Button>
        </div>
      </section>
      {/*
            Logo + Motto + Socials
            TODO: Create Reusable Footer Component
            https://github.com/SnaYQ97/PizzaFinder/issues/6
      */}
      <section>
        <div>
          {/* Logo Component */}
          <div>Motto</div>
          <FacebookIcon/>
          <InstagramIcon/>
        </div>
        {/* Website Map */}
        <div>
          {/* Links Header */}
          <div>Firma</div>
          {/* Links */}
          <p>O nas </p>
          <p>Polityka prywatności </p>
        </div>
        <div>
          {/* Links Header */}
          <div>Współpraca</div>
          {/* Links */}
          <p>O nas </p>
          <p>Polityka prywatności </p>
        </div>
        <div>
          {/* Links Header */}
          <div>Kontakt</div>
          {/* Links */}
          <p>O nas </p>
          <p>Polityka prywatności </p>
        </div>
      </section>
      {/*
            Chat Button
            TODO: Create Chat Button
            https://github.com/SnaYQ97/PizzaFinder/issues/9
      */}
    </>
  );
};

export default HomePage;
