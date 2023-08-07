import dotenv from 'dotenv';
import app from '@infrastructure/config/app';

dotenv.config();


async function bootstrap() {

  if (!process.env.PORT) {
    throw new Error('port must be specified');
  }


 app.listen(process.env['PORT'], () => {
  console.log('listening on port ' + process.env['PORT']);
 });
}

bootstrap();
