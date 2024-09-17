import React from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FormPersonalDetail = ({ values, setValues, nextStep, prevStep }) => {
  const { bio, city, occupation } = values;
  return (
    <Container maxWidth='sm' sx={{ marginTop: '2rem' }}>
      <TextField
        type='text'
        fullWidth='true'
        margin='normal'
        color='secondary'
        label='Bio'
        placeholder='~Hi There...'
        value={bio}
        onChange={(e) => setValues({ ...values, bio: e.target.value })}
      />
      <TextField
        required='true'
        type='text'
        fullWidth='true'
        margin='normal'
        color='secondary'
        label='city'
        placeholder='i.e.New York City'
        value={city}
        onChange={(e) => setValues({ ...values, city: e.target.value })}
      />
      <TextField
        required='true'
        type='text'
        fullWidth='true'
        margin='normal'
        color='secondary'
        label='occupation'
        placeholder='i.e.Engineer'
        value={occupation}
        onChange={(e) => setValues({ ...values, occupation: e.target.value })}
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
        Continue
      </Button>
    </Container>
  );
};

export default FormPersonalDetail;
