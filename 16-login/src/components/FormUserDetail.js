import React from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FormUserDetail = ({ nextStep, values, setValues }) => {
  const { firstName, lastName, email, password } = values;
  return (
    <Container maxWidth='sm' sx={{ marginTop: '2rem' }}>
      <TextField
        required='true'
        type='text'
        fullWidth='true'
        margin='normal'
        color='secondary'
        label='first name'
        placeholder='i.e.John '
        value={firstName}
        onChange={(e) => setValues({ ...values, firstName: e.target.value })}
      />
      <TextField
        required='true'
        type='text'
        fullWidth='true'
        margin='normal'
        color='secondary'
        label='last name'
        placeholder='i.e.Doe'
        value={lastName}
        onChange={(e) => setValues({ ...values, lastName: e.target.value })}
      />
      <TextField
        required='true'
        type='email'
        fullWidth='true'
        margin='normal'
        color='secondary'
        label='email'
        placeholder='i.e.johndoe@gmail.com'
        value={email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
      <TextField
        required='true'
        type='password'
        fullWidth='true'
        margin='normal'
        color='secondary'
        label='password'
        placeholder='********'
        value={password}
        onChange={(e) => setValues({ ...values, password: e.target.value })}
      />

      <Button
        variant='contained'
        color='secondary'
        sx={{ marginTop: '0.75rem' }}
        onClick={() => {
          nextStep();
        }}
      >
        Continue
      </Button>
    </Container>
  );
};

export default FormUserDetail;
