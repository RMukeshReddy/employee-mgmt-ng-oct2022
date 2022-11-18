import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function passwordStrengthValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    // hasUpperCase, hasLowerCase, hasNumeric is of type<boolean>
    const hasUpperCase = /[A-Z]+/.test(value); // it checks whether the value has upper case letter or not
    const hasLowerCase = /[a-z]+/.test(value); // it checks whether the value has lower case letter or not
    const hasNumeric = /[0-9]+/.test(value); // it checks whether the value has numeric value or not
    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;
    return !passwordValid ? {passwordStrength:true}: null;
  }
}
