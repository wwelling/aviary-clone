import { NestFactory } from '@nestjs/core';
import { get } from 'env-var';
import { WinstonModule } from 'nest-winston';
import * as os from 'os';
import { format, transports } from 'winston';
import 'winston-daily-rotate-file';
import { AppModule } from './app.module';

async function bootstrap() {
  const logLevel = get('LOG_LEVEL').default('info').asString();
  const logPath = get('LOG_PATH').default('logs').asString();

  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new transports.DailyRotateFile({
          level: logLevel,
          dirname: logPath,
          filename: `axiom-api-${os.hostname()}-%DATE%.log`,
          datePattern: 'yyyy-MM-DD',
          maxSize: '20m',
          maxFiles: '14d',
        }),
        new transports.Console({
          format: format.simple()
        }),
      ],
      level: logLevel,
      format: format.combine(
        format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
        format.align(),
        format.printf(
          (info) => `${info.level}: ${[info['timestamp']]}: ${info.message}`,
        ),
      ),
    })
  });

  app.setGlobalPrefix('api');

  await app.listen(process.env['PORT'] || 4000);
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  bootstrap().catch(err => console.error(err));
}
