/*** Generic Validations
 * Taken from https://html5hive.org/reactjs-form-validation-tutorial/
 * ***/

export const isEmailValid = value =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  );

export const isPhoneValid = value => /^0[0-9]{9,11}$/.test(value);

export const isPasswordValid = value => /^.{6,}$/.test(value);
