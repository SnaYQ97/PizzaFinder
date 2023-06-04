import useStyles from './HomePage.styles.ts';
import tomato from '../../assets/images/Tomato.png';
import bazil from '../../assets/images/Bazil.png';
import { Button } from '../button';
import { CustomTextField } from '../searchBar';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import DecoArrow from '../../assets/icons/DecoArrow.svg';

const HomePage = () => {
  const { classes } = useStyles();
  console.log(classes);
  return (
    <>
      SOME TEXT
      <img src={tomato} alt="Miniature"/>
      <img src={tomato} alt="Miniature"/>
      <img src={bazil} alt="Miniature"/>

      {/* Hero section 100vh  390x844 */}
      <section>
        <div>
          <div>
            Odkryj najlepsze pizzowe smaki w Twoim mieście!
          </div>
          <Button>Znajdź pizze</Button>
          <div>
            Odkryj idealną pizzę w Twojej okolicy
          </div>
          <DecoArrow />
        </div>
      </section>
      {/* Second Section 100vh 844 + 844 */}
      <section>
        {/* Typography Header + SubHeader 2lvl */}
        <div>
          <div>
            Menu wielu pizzerri w jednym miejscu
          </div>
          <div>
            Z Pizza Finder możesz eksplorować różnorodne menu z
            lokalnych pizzerii. Niech Twoje kubki smakowe przeżyją
            prawdziwą ucztę!
          </div>
        </div>
        {/* Text with Location Field */}
        <div>
          {/* Typography Header + SubHeader 3lvl */}
          <div>
            <div>Znajdź swoją pizzę!</div>
            <div>
              Wpisz nazwę swojego miasta i przejdź do
              naszego Findera, który pomoże Ci znaleźć
              Twoją ulubioną pizzę w okolicy.
            </div>
          </div>
          <div>Wybierz Miasto</div>
          {/*
            TODO: Move it as reusable component Label + Field
            https://github.com/SnaYQ97/PizzaFinder/issues/10
           */}
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
        <div>
          {/* Typography Header + SubHeader 3lvl */}
          <div>
            <div>Znadź swoją pizzę</div>
            <div>
              Wpisz nazwę swojego miasta i przejdź do
              naszego Findera, który pomoże Ci
              znaleźć Twoją ulubioną pizzę w okolicy.
            </div>
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
