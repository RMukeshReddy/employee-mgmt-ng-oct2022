import { passwordStrengthValidator } from 'src/app/shared/utils/password-strength-validator';

describe('PasswordStrengthValidator', () => {
  it('should create an instance', () => {
    expect(passwordStrengthValidator()).toBeTruthy();
  });
});
