import Settings from '../Settings';

test('testing whether users settings can be chosen', () => {
  const mySettings = new Settings();
  mySettings.getUsers('theme', 'light');
  expect(mySettings.users.get('theme')).toBe('light');
});

test('testing whether users settings can be rechosen', () => {
  const mySettings = new Settings();
  mySettings.getUsers('theme', 'light');
  mySettings.getUsers('theme', 'gray');
  expect(mySettings.users.get('theme')).toBe('gray');
});

test('testing whether unexisted setting can be chosen as users', () => {
  const mySettings = new Settings();
  expect(() => {
    mySettings.getUsers('mode', 'god');
  }).toThrow('Такой настройки нет!');
});

test('testing whether unexisted value of setting can be chosen as users', () => {
  const mySettings = new Settings();
  expect(() => {
    mySettings.getUsers('theme', 'purple');
  }).toThrow('Такой возможности нет!');
});

test('testing whether users settings can be active', () => {
  const mySettings = new Settings();
  mySettings.getUsers('music', 'chillout');
  mySettings.defineActive('users');
  expect(mySettings.active.get('music')).toBe('chillout');
});

test('testing whether defaults settings can be active', () => {
  const mySettings = new Settings();
  mySettings.getUsers('music', 'chillout');
  mySettings.defineActive('defaults');
  expect(mySettings.active.get('music')).toBe('trance');
});

test('testing whether unexisted set of setting can be chosen as active', () => {
  const mySettings = new Settings();
  expect(() => {
    mySettings.defineActive('sisters');
  }).toThrow('Такого набора настроек не существует!');
});
