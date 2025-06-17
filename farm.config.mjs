import { defineConfig } from '@farmfe/core';

export default defineConfig({
  compilation: {
    partialBundling: {
      targetConcurrentRequests: 1,
    }
  },
});
