import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

const mailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const Form = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const blurHandler = () => {
    if (!email.match(mailRegex)) {
      setEmailError(true);
      return;
    }

    if (email.match(mailRegex)) {
      setEmailError(false);
    }
  };
  const formSubmit = (event) => {
    event.preventDefault();
    console.log('form submitted');
    if (!email.match(mailRegex)) {
      setEmailError(true);
      return;
    }
    console.log(email);
    setEmailError(false);
    setEmail('');
  };
  console.log(emailError);
  return (
    <form
      onSubmit={formSubmit}
      className="flex flex-col gap-6 md:flex-row md:gap-[29px]"
    >
      <div className="md:w-[480px]">
        <Input
          id="email"
          type="email"
          name="email"
          value={email}
          label="example@gmail.com"
          onChange={emailChangeHandler}
          onBlur={blurHandler}
          error={emailError}
          errorMessage={emailError ? 'Error, please check your email' : ''}
        />
      </div>
      <div className="md:w-[200px]">
        <Button btnType="primary" type="submit">
          Get Started For Free
        </Button>
      </div>
    </form>
  );
};

export default Form;
