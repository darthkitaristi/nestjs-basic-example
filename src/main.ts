import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist :true, //para que solo se puedarecibirun payload definido en eldto niun campos mas
    forbidNonWhitelisted:true, //votaun error cuando envia otras propiedadesajenas al dto
  })); // para que valga el validation

  await app.listen(3000);
}
bootstrap();
