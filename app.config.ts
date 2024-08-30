import angular from '@analogjs/vite-plugin-angular';
import { createApp } from "vinxi";
import { serverFunctions } from '@vinxi/server-functions/plugin';

export default createApp({
  routers: [
    {
      name: "public",
      type: "static",
      dir: "./public",
    },
    {
      name: "ssr",
      type: "http",
      handler: "./src/main.server.ts",
      plugins: () => [
        angular({
          experimental: {
            supportAnalogFormat: true
          }
        }),
      ],
    },
    {
      name: "client",
      type: "client",
      handler: "./src/main.ts",
      base: "/_base",
      plugins: () => [
        angular({
          transformFilter(code) {
            return !code.includes('createServerReference');
          },
          experimental: {
            supportAnalogFormat: true
          }
        }),
        serverFunctions.client()
      ],
    },
    serverFunctions.router()
  ],
});