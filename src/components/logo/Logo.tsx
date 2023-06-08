import pizzaLogo from '../../assets/images/PizzaFinderLogo.png';
import { Link } from 'react-router-dom';
import useStyles from './Logo.styles';

const Logo = () => {
  const { classes } = useStyles();
  return (
    <Link to='/'>
      <img src={pizzaLogo} className={classes.logo} alt="PizzaFinder logo"/>
    </Link>);
};
export default Logo;
