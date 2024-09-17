import React from 'react';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

const FormPersonalDetail = ({ values, setValues, nextStep, prevStep }) => {
  const { firstName, lastName, email, password, bio, city, occupation } =
    values;
  return (
    <Container maxWidth='sm' sx={{ marginTop: '2rem' }}>
      <TextField
        type='text'
        fullWidth='true'
        margin='normal'
        label='First Name'
        value={firstName}
        disabled='true'
      />
      <TextField
        required='true'
        type='text'
        fullWidth='true'
        margin='normal'
        label='Last Name'
        value={lastName}
        disabled='true'
      />
      <TextField
        required='true'
        type='email'
        fullWidth='true'
        margin='normal'
        label='Email Address'
        value={email}
        disabled='true'
      />
      <TextField
        required='true'
        type='password'
        fullWidth='true'
        margin='normal'
        label='Password'
        value={password}
        disabled='true'
      />
      {bio && (
        <TextField
          type='text'
          fullWidth='true'
          margin='normal'
          label='Bio'
          value={bio}
          disabled='true'
        />
      )}

      <TextField
        required='true'
        type='text'
        fullWidth='true'
        margin='normal'
        label='City'
        value={city}
        disabled='true'
      />
      <TextField
        required={true}
        type='text'
        fullWidth='true'
        margin='normal'
        label='Occupation'
        value={occupation}
        disabled='true'
      />
      <Button
        variant='contained'
        color='secondary'
        sx={{ marginTop: '1rem' }}
        onClick={() => {
          prevStep();
        }}
      >
        Go Back
      </Button>
      <Button
        variant='contained'
        color='secondary'
        sx={{ marginTop: '1rem', marginInline: '1rem' }}
        onClick={() => {
          nextStep();
        }}
      >
        Confirm & Continue
      </Button>
    </Container>
  );
};

export default FormPersonalDetail;
