import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // 使用 ts-jest 轉換 .ts 和 .tsx 文件
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'], // 支援的文件擴展名
  testMatch: ['**/_test/**/*.test.(ts|tsx)'], // 匹配測試文件的路徑和名稱
};

export default config;
