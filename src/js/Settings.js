export default class Settings {
  constructor() {
    this.defaults = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.users = new Map();
    this.active = this.defaults;
  }

  defineActive(option) {
    if (option === 'defaults') {
      this.active = this.defaults;
    } else if (option === 'users') {
      this.active = this.users;
    } else {
      throw new Error('Такого набора настроек не существует!');
    }
  }

  getUsers(setting, value) {
    if (Settings[`${setting}`]) {
      if (Settings[`${setting}`].has(`${value}`)) {
        this.users.set(`${setting}`, `${value}`);
      } else {
        throw new Error('Такой возможности нет!');
      }
    } else {
      throw new Error('Такой настройки нет!');
    }
  }
}

Settings.theme = new Set([
  'dark',
  'light',
  'gray',
]);

Settings.music = new Set([
  'trance',
  'pop',
  'rock',
  'chillout',
  'off',
]);

Settings.difficulty = new Set([
  'easy',
  'normal',
  'hard',
  'nightmare',
]);
