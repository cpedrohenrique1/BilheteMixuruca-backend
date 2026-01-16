import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmesModule } from './filmes/filmes.module';
import { ExternalapiModule } from './externalapi/externalapi.module';

@Module({
  imports: [FilmesModule, ExternalapiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
