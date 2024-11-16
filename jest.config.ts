import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  // Данная настрокай сообщает Jest что мы работаем с TypeScript;
  preset: 'ts-jest',

  // Данная настрока сообщает о тестовом окружении;
  testEnvironment: 'node',

  // Данная настрока дает больше информации в консоли;
  verbose: true,
};

export default config;
