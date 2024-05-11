import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('True Phone Number', () => {
  expect(isPhoneNumber('619-619-6199')).toBe(true);
});

test('True Phone Number', () => {
  expect(isPhoneNumber('858-858-8588')).toBe(true);
});

test('False Phone Number', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

test('False Phone Number', () => {
  expect(isPhoneNumber('hel-loo-oooo')).toBe(false);
});


test('True Email', () => {
  expect(isEmail('jtdo@ucsd.edu')).toBe(true);
});

test('True Email', () => {
  expect(isEmail('ilovecoding@gmail.com')).toBe(true);
});

test('False Email', () => {
  expect(isEmail('.com')).toBe(false);
});

test('False Email', () => {
  expect(isEmail('.net')).toBe(false);
});

test('True Strong Password', () => {
  expect(isStrongPassword('ExclamationMark!!123@@')).toBe(true);
});

test('True Strong Password', () => {
  expect(isStrongPassword('Extreme1yHardPassworddd167!!')).toBe(true);
});

test('False Strong Password', () => {
  expect(isStrongPassword('000')).toBe(false);
});

test('False Strong Password', () => {
  expect(isStrongPassword('weakpassword')).toBe(false);
});

test('True Date', () => {
  expect(isDate('05/06/2024')).toBe(true);
});

test('True Date', () => {
  expect(isDate('05/07/2024')).toBe(true);
});

test('False Date', () => {
  expect(isDate('AB/CD/EFGH')).toBe(false);
});

test('False Date', () => {
  expect(isDate('!!/!!/!!!!')).toBe(false);
});

test('True Hex Color', () => {
  expect(isHexColor('FFFFFF')).toBe(true);
});

test('True Hex Color', () => {
  expect(isHexColor('AAAAAA')).toBe(true);
});

test('False Hex Color', () => {
  expect(isHexColor('!!!!!!')).toBe(false);
});

test('False Hex Color', () => {
  expect(isHexColor('01!!!!')).toBe(false);
});
