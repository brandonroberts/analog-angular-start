import 'zone.js/node';
import '@angular/platform-server/init';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { renderApplication } from '@angular/platform-server';
import { provideServerContext } from '@analogjs/router/server';
import { ServerRequest } from '@analogjs/router/tokens';
import { defineEventHandler } from 'vinxi/http';

import { config } from './app/app.config.server';
import App from './app/app-root.analog';

if (import.meta.env.PROD) {
  enableProdMode();
}

export function bootstrap() {
  return bootstrapApplication(App, config);
}

export default defineEventHandler(async(event) => {
  const html = await renderApplication(bootstrap, {
    document,
    url: event.node.req.originalUrl,
    platformProviders: [provideServerContext({ req: event.node.req as ServerRequest, res: event.node.res })],
  });

  return html;
});
