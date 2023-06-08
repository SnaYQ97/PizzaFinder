import useStyles from './CitySelector.styles.ts';
import { Autocomplete, createFilterOptions, } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import { LocationOn, HelpOutline } from '@mui/icons-material';

const filter = createFilterOptions<CityOptionType>();

const CitySelector = () => {
  const { classes } = useStyles();
  const [value, setValue] = React.useState<CityOptionType | null>(null);

  return (
    <div className={classes.container}>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            setValue({
              title: newValue,
            });
          } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
            setValue({
              title: newValue.inputValue,
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          const { inputValue } = params;
          // Suggest the creation of a new value
          const isExisting = options.some((option) => inputValue === option.title);
          if (inputValue !== '' && !isExisting) {
            filtered.push({
              inputValue,
              title: `Add "${inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={top100Citys}
        getOptionLabel={(option) => {
        // Value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.title;
        }}
        renderOption={(props, option) => <li {...props}>{option.title}</li>}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              style: {
                border: '1px solid #F7F7F7',
                color: '#F7F7F7',
                // białe obramowanie
              },
              placeholder: 'Warszawa',
              startAdornment: (
                <>
                  <InputAdornment position="start">
                    <LocationOn className={classes.leftAdornment}/>
                  </InputAdornment>
                  {params.InputProps.startAdornment}
                </>
              ),
              endAdornment: (
                <>
                  <InputAdornment position="end">
                    <HelpOutline className={classes.rightAdornment}/>
                  </InputAdornment>
                  {params.InputProps.startAdornment}
                </>
              )
            }}
            InputLabelProps={{
              style: {
                color: '#F7F7F7', // biały kolor etykiety
              },
            }}
          />
        )}
      />
    </div>
  );
};

interface CityOptionType {
  inputValue?: string;
  title: string;
  year?: number;
}

// Top 100 Citys as rated by IMDb users. http://www.imdb.com/chart/top

const top100Citys: readonly CityOptionType[] = [

  { title: 'Kraków', },
  { title: 'Warszawa', },
  { title: 'Gdańsk', },
  { title: 'Wrocław', },
  { title: 'Poznań', },
  { title: 'Łódź', },
  { title: 'Szczecin', },
  { title: 'Katowice', },
  { title: 'Gdynia', },
  { title: 'Bydgoszcz', },
  { title: 'Lublin', },
  { title: 'Białystok', },
  { title: 'Toruń', },
  { title: 'Częstochowa', },
  { title: 'Kielce', },
  { title: 'Gliwice', },
  { title: 'Zielona Góra', },
  { title: 'Rzeszów', },
  { title: 'Olsztyn', },
  { title: 'Opole', },
  { title: 'Tarnów', },
  { title: 'Bielsko-Biała', },
  { title: 'Koszalin', },
  { title: 'Kalisz', },
  { title: 'Legnica', },
  { title: 'Grudziądz', },
  { title: 'Słupsk', },
  { title: 'Jaworzno', },
  { title: 'Jastrzębie-Zdrój', },
  { title: 'Nowy Sącz', },
  { title: 'Konin', },
  { title: 'Płock', },
  { title: 'Wałbrzych', },
  { title: 'Kędzierzyn-Koźle', },
  { title: 'Siedlce', },
  { title: 'Lubin', },
  { title: 'Gniezno', },
  { title: 'Piotrków Trybunalski', },
  { title: 'Suwałki', },
  { title: 'Ostrowiec Świętokrzyski', },
  { title: 'Tychy', },
  { title: 'Wejherowo', },
  { title: 'Mysłowice', },
  { title: 'Pruszków', },
  { title: 'Ostrołęka', },
  { title: 'Siemianowice Śląskie', },
  { title: 'Stargard', },
  { title: 'Głogów', },
  { title: 'Pabianice', },
  { title: 'Chełm', },
  { title: 'Gorzów Wielkopolski', },
  { title: 'Elbląg', },
  { title: 'Lębork', },
  { title: 'Zamość', },
  { title: 'Leszno', },
  { title: 'Świdnica', },
  { title: 'Ełk', },
  { title: 'Tomaszów Mazowiecki', },
  { title: 'Przemyśl', },
  { title: 'Starogard Gdański', },
  { title: 'Rumia', },
  { title: 'Zabrze', },
  { title: 'Kędzierzyn-Koźle', },
  { title: 'Koszalin', },
  { title: 'Kalisz', },
  { title: 'Legnica', },
  { title: 'Grudziądz', },
  { title: 'Słupsk', },
  { title: 'Jaworzno', },
  { title: 'Jastrzębie-Zdrój', },
  { title: 'Nowy Sącz', },
  { title: 'Konin', },
  { title: 'Płock', },
  { title: 'Wałbrzych', },
  { title: 'Kędzierzyn-Koźle', },
  { title: 'Siedlce', },
  { title: 'Lubin', },
  { title: 'Gniezno', },
  { title: 'Piotrków Trybunalski', },
  { title: 'Suwałki', },
  { title: 'Ostrowiec Świętokrzyski', },
  { title: 'Tychy', },
  { title: 'Wejherowo', },
  { title: 'Mysłowice', },
  { title: 'Pruszków', },
  { title: 'Ostrołęka', },
  { title: 'Siemianowice Śląskie', },
  { title: 'Stargard', },
  { title: 'Głogów', },
  { title: 'Pabianice', },
  { title: 'Chełm', },
  { title: 'Gorzów Wielkopolski', },
  { title: 'Elbląg', },
  { title: 'Lębork', },
  { title: 'Zamość', },
  { title: 'Leszno', },
  { title: 'Świdnica', },
  { title: 'Ełk', },
  { title: 'Tomaszów Mazowiecki', },
  { title: 'Przemyśl', },
  { title: 'Starogard Gdański', },
  { title: 'Rumia', },
  { title: 'Zabrze', },
  { title: 'Kędzierzyn-Koźle', },
  { title: 'Koszalin', },
  { title: 'Kalisz', },
  { title: 'Legnica', },
  { title: 'Grudziądz', },
  { title: 'Słupsk', },
  { title: 'Jaworzno', },
  { title: 'Jastrzębie-Zdrój', },
  { title: 'Nowy Sącz', },
  { title: 'Konin', },
  { title: 'Płock', },
  { title: 'Wałbrzych', },
  { title: 'Kędzierzyn-Koźle', },
  { title: 'Siedlce', },
  { title: 'Lubin', },
  { title: 'Gniezno', },
  { title: 'Piotrków Trybunalski', },
  { title: 'Suwałki', },
  { title: 'Ostrowiec Świętokrzyski', },
  { title: 'Tychy', },
  { title: 'Wejherowo', },
  { title: 'Mysłowice', },
  { title: 'Pruszków', },
  { title: 'Ostrołęka', },
  { title: 'Siemianowice Śląskie', },
  { title: 'Stargard', },
  { title: 'Głogów', },
  { title: 'Pabianice', },
  { title: 'Chełm', },
  { title: 'Gorzów Wielkopolski', },
  { title: 'Elbląg', },
  { title: 'Lębork', },
  { title: 'Zamość', },
  { title: 'Leszno', },
  { title: 'Świdnica', },
  { title: 'Ełk', },
  { title: 'Tomaszów Mazowiecki', },
  { title: 'Przemyśl', },
  { title: 'Starogard Gdański', },
  { title: 'Rumia', },
  { title: 'Zabrze', },
  { title: 'Kędzierzyn-Koźle', },
  { title: 'Koszalin', },
  { title: 'Kalisz', },
  { title: 'Legnica', },
  { title: 'Grudziądz', },
  { title: 'Słupsk', },
  { title: 'Jaworzno', },
  { title: 'Jastrzębie-Zdrój', },
  { title: 'Nowy Sącz', },
  { title: 'Konin', },
  { title: 'Płock', },
  { title: 'Wałbrzych', }
];
export default CitySelector;
