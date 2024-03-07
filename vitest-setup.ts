import '@testing-library/jest-dom/vitest';
import { afterAll, afterEach, beforeAll } from 'vitest';

import { server } from './mocks/server';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  // cleanup は vite.config.ts の test.globals を true にした場合は不要
  // cleanup();
});

afterAll(() => {
  server.close();
});
