import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import {styled} from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    background: 'linear-gradient(180deg, #0D1D3E 0%, #071632 100%);',
    borderRadius: '4px',
    position: 'absolute',

    top: '365px',
    left: '-246px',
    right: '-250px',

    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
    '& input': {
      paddingLeft: '12px',
      paddingRight: '32px',
    },
    '& .MuiInputBase-input': {
      color: 'white',
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiInputBase-root': {
      color: 'white',
    },
    '& .defaultValue': {
      color: 'white',

    },

  },
});

export default CustomTextField;
