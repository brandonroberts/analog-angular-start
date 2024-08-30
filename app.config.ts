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
      name: "client",
      type: "spa",
      handler: "./index.html",
      base: "/",
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