/*** Generic Validation
 * Taken from https://html5hive.org/reactjs-form-validation-tutorial/
 * ***/

export function isEmailValid(value) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value);
}

export function isPhoneValid(value) {
  var re = /^08[0-9]{9,10}$/;
  return re.test(value);
}

/*** Specific Validation ***/

export function isUserInvalid(user) {
  return !user.name ||
    !isEmailValid(user.email) ||
    !isPhoneValid(user.phone)
}
