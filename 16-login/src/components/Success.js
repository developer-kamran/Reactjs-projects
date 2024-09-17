import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Success = ({ values }) => {
  return (
    <Container sx={{ marginTop: '4rem' }}>
      <Typography
        variant='h4'
        color='secondary'
        sx={{ flexGrow: 1, textAlign: 'center' }}
      >
        Thank You {values.firstName} {values.lastName} For Submission.
      </Typography>
      <Typography
        variant='h6'
        color='primary'
        sx={{ marginTop: '0.5rem', textAlign: 'center' }}
      >
        You will get an email to your email address i.e.({values.email}) for
        further instructions.
      </Typography>
    </Container>
  );
};

export default Success;
