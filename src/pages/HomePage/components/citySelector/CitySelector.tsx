import useStyles from './CitySelector.styles.ts';
import { Autocomplete, AutocompleteValue, Tooltip } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { SyntheticEvent, useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import data from 'polskie-miejscowosci';
import { LocationOnOutlined, HelpOutline, Clear, Info } from '@mui/icons-material';
import FmbBad from '../../../../assets/icons/fmbBad.svg';
import { CityOptionType,  Location } from '../../../../types/location';
import cx from 'classnames';

const content = {
  tooltip: {
    text: {
      default: 'Kliknij ikonę lokalizacji, aby automatycznie odczytać swoją lokalizację lub wprowadź ją ręcznie',
      withInputValue: 'Kliknij ikonę X, aby wyczyścić wartość',
    }
  }
};

const cities = (data as Location[]).filter(
  (location: Location) => location.Type === 'city'
).map((location: Location):CityOptionType => ({
  value: location.Id,
  label: location.Name,
  subLabel: location.Province,
  latitude: location.Latitude,
  longitude: location.Longitude,
}));

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Średni promień Ziemi w kilometrach
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}

interface Props {
    city: CityOptionType | null;
    setCity: (city: CityOptionType | null) => void;
    selectCityError: string | null;
    setSelectCityError: (error: string | null) => void;
}

const CitySelector = (props: Props) => {
  const { classes } = useStyles();
  const { city, setCity, selectCityError, setSelectCityError } = props;

  const handleChangeValue = (
    event: SyntheticEvent,
    newValue: AutocompleteValue<unknown, false, false, false>
  ) => {
    if (typeof newValue === 'object') {
      setCity(newValue as CityOptionType);
      setHelperText(null);
      setSelectCityError(null);
    } else if (typeof newValue === 'string') {
      setHelperText(null);
      setSelectCityError('Invalid value');
    }
  };

  const [helperText, setHelperText]= useState<string | null>(null);

  const handleGetLocation = () => {
    let isChecking = false;
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        isChecking = true;
        if (position) {
          const userLatitude = position.coords.latitude;
          const userLongitude = position.coords.longitude;

          let closestCity: CityOptionType | null = null;
          let closestDistance = Infinity;

          cities.forEach((city: CityOptionType) => {
            const distance = calculateDistance(
              userLatitude,
              userLongitude,
              city.latitude,
              city.longitude
            );
            if (distance < closestDistance) {
              closestCity = city;
              closestDistance = distance;
            }
          });

          if (closestCity) {
            // 3 - TODO: dynamic available delivery distance
            if (closestDistance < 3)
            {
              setHelperText(null);
              return setCity(closestCity);
            }
            else {
              setHelperText('Widocznie jesteś poza zasięgiem dojazdu');
              return   setCity(null);
            }
          }
        }else {
          setHelperText('Nie udało się uzyskać twojej lokalizacji');
          return setCity(null);
        }
      });
      if (!isChecking) {
        setCity(null);
        setHelperText('Nie udało się uzyskać twojej lokalizacji');
      }
    } else {
      setCity(null);
      setHelperText('Nie udało się uzyskać twojej lokalizacji');
    }
  };

  return (
    <div className={classes.container}>
      <Autocomplete
        id="citySelector"
        value={city}
        selectOnFocus
        autoHighlight
        clearIcon
        options={cities.sort((a, b) =>a.subLabel.localeCompare(b.subLabel))}
        groupBy={(option) => option.subLabel}
        onChange={handleChangeValue}
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
            error={!!selectCityError}
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
                    <LocationOnOutlined
                      className={classes.leftAdornment}
                      onClick={handleGetLocation}/>
                  </InputAdornment>
                  {params.InputProps.startAdornment}
                </>
              ),
              endAdornment: (
                <>
                  <InputAdornment position="end">
                    <div className={classes.rightAdornmentIconsContainer}>
                      {params.inputProps.value && (

                        <Clear
                          className={classes.clearIcon}
                          onClick={() => setCity(null)} // Reset the value
                        />
                      )}
                      <Tooltip
                        title={ params.inputProps.value
                          ? content.tooltip.text.withInputValue
                          : content.tooltip.text.default
                        }
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <HelpOutline className={classes.rightAdornment}/>
                      </Tooltip>
                    </div>
                  </InputAdornment>
                  {params.InputProps.startAdornment}
                </>
              ),
            }}
          />
        )}
      />
      {selectCityError && !helperText &&
          (<small className={cx(classes.messageBox, classes.errorBox)}>
            <FmbBad className={classes.errorIcon}/>
            {selectCityError}
          </small>)
      }
      {!selectCityError && helperText
        ? (<small className={cx(classes.messageBox, classes.infoBox)}>
          <Info className={classes.infoIcon}/>
          {helperText}
        </small>)
        :(<small className={classes.messageBox} />)
      }
    </div>
  );
};

export default CitySelector;
