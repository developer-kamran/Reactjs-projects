import React, { useState } from 'react';
import FormUserDetail from './FormUserDetail';
import FormPersonalDetail from './FormPersonalDetail';
import Confirm from './Confirm';
import Success from './Success';

const UserForm = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    occupation: '',
    city: '',
    bio: '',
  });
  const nextStep = () => {
    if (
      step === 1 &&
      values.firstName &&
      values.lastName &&
      values.email &&
      values.password
    ) {
      setStep(step + 1);
    }
    if (step === 2 && values.occupation && values.city) {
      setStep(step + 1);
    }
    if (step === 3) {
      setStep(step + 1);
    }
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  if (step === 1) {
    return (
      <FormUserDetail
        values={values}
        setValues={setValues}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    );
  }
  if (step === 2) {
    return (
      <FormPersonalDetail
        values={values}
        setValues={setValues}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    );
  }
  if (step === 3) {
    return (
      <Confirm
        values={values}
        setValues={setValues}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    );
  }
  if (step === 4) {
    return <Success values={values} />;
  }
};

export default UserForm;
