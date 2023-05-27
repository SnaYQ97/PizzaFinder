import React, {useState} from 'react';

import useStyles from './HomePage.styles.ts';
import pizzaLogo from '../../assets/images/pizza.png';
import miniImage from '../../assets/images/mini.png';
import tomato1Image from '../../assets/images/tomato1.png';
import tomato2Image from '../../assets/images/tomato2.png';
import bazilImage from '../../assets/images/bazil.png';
import {Button} from "../button";
import {CustomTextField} from "../searchBar";
import {IconButton, InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Message1 from "../messag/Message";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const HomePage = () => {
  const {classes} = useStyles();


  return (
      <>
        <img src={miniImage} alt="Miniature" className={classes.miniImage}/>
        <div className={classes.pizzaFinder}>PIZZA FINDER</div>

        <a href="https://react.dev" target="_blank">
          <img src={pizzaLogo} className="logo react" alt="React logo"/>
        </a>
        <img src={tomato1Image} alt="Miniature" className={classes.tomato1}/>
        <img src={tomato2Image} alt="Miniature" className={classes.tomato2}/>
        <img src={bazilImage} alt="Miniature" className={classes.weed}/>
        <div className={classes.container}>
          <div className={classes.title}>Odkryj najlepsze pizzowe smaki w Twoim mieście!</div>

          <Button> Znajdź pizze</Button>

          <div className={classes.subtitle}>Odkryj idealną pizzę w Twojej okolicy</div>
          <div className={classes.subtitle2}>Z Pizza Finder możesz eksplorować różnorodne menu z lokalnych pizzerii.
            Niech Twoje kubki smakowe przeżyją prawdziwą ucztę!
          </div>
          <div className={classes.title3}>Znajdź swoją pizzę!</div>
          <div className={classes.title2}>Menu wielu pizzerri w jednym miejscu</div>
          <div className={classes.subtitle3}>Wpisz nazwę swojego miasta i przejdź do naszego Findera, który pomoże Ci
            znaleźć Twoją ulubioną pizzę w okolicy.
          </div>
          <div className={classes.subtitle4}>Wybierz Miasto</div>
          <CustomTextField
              defaultValue="Warszawa"
              variant="outlined"
              InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon className={classes.WhiteSearchIcon}/>
                    </InputAdornment>
                ),
              }}
          />
          <div className={classes.subtitle5}>Znajdź nas:
          </div>
          <FacebookIcon className={classes.FacebookIcon}/>
          <InstagramIcon className={classes.InstagramIcon}/>
        </div>
        <div className={classes.container2}>

          <div className={classes.title4}>Firma</div>
          <p style={{position: 'absolute', left: '9px', color: 'white'}}>O nas </p>
          <p style={{position: 'absolute', top: '130px', left: '9px', color: 'white'}}>Polityka prywatności </p>
          <p style={{position: 'absolute', top: '170px', left: '9px', color: 'white'}}>Reklamujcie się z nami</p>

        </div>


        <Message1><img src='src/assets/images/message.png' alt="Miniature"/></Message1>

      </>
  );
};

export default HomePage;
