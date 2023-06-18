import useStyles from './CitySelector.styles.ts';
import { Autocomplete, AutocompleteValue } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { SyntheticEvent, useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import data from 'polskie-miejscowosci';
import { LocationOnOutlined, HelpOutline } from '@mui/icons-material';
import FmbBad from '../../assets/icons/fmbBad.svg';

interface Location extends CityOptionType{
  Commune: string
  District: string
  Id: string
  Latitude: number
  Longitude: number
  Name: string
  Province: string
  Type: 'village' | 'city'
}

interface CityOptionType {
  value: string
  label: string
  subLabel: string
}

const cities = (data as Location[]).filter(
  (location: Location) => location.Type === 'city'
).map((location: Location):CityOptionType => ({
  value: location.Id,
  label: location.Name,
  subLabel: location.Province,
}));

const CitySelector = () => {
  const { classes } = useStyles();
  const [value, setValue] = useState< CityOptionType | null>(null);
  const [error, setError] = useState< string | null>(null);

  const handleChangeValue = (
    event: SyntheticEvent,
    newValue: AutocompleteValue<unknown, false, false, false>
  ) =>  {
    if (typeof newValue === 'object') {
      setValue(newValue as CityOptionType);
      setError(null);
    }
    else if (typeof newValue === 'string') {
      setError('Invalid value');
    }
  };

  return (
    <div className={classes.container}>
      <Autocomplete
        id="citySelector"
        value={value ? value.label : null}
        selectOnFocus
        freeSolo
        autoSelect
        autoHighlight
        options={cities}
        onChange={(event, newValue) => handleChangeValue(event, newValue)}
        renderOption={
          (props, option: CityOptionType) =>
            <li {...props}
              className={classes.option}
              key={`${option.label}-${option.subLabel}`}
            >
              <span className={classes.optionName}>{option.label}</span>
              <small className={classes.optionDescription}>
                {option.subLabel}
              </small>
            </li>
        }
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              style: {
                border: '1px solid #F7F7F7',
                color: '#F7F7F7',
                paddingRight: '12px',
              },
              placeholder: 'Warszawa',
              startAdornment: (
                <>
                  <InputAdornment position="start">
                    <LocationOnOutlined className={classes.leftAdornment}/>
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
          />
        )}
      />
      <small className={classes.errorBox}>
        {error &&  <>
          <FmbBad className={classes.errorIcon}/>
          {error}
        </>}

      </small>
    </div>
  );
};

export default CitySelector;
