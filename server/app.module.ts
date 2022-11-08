import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { AppServerModule } from '../src/main.server';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'dist/axiom-components'),
      serveRoot: '/components',
    }),
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/axiom-web/browser'),
    }),
  ]
})
export class AppModule { }
