import { Module } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { FilmesController } from './filmes.controller';
import { HttpModule } from '@nestjs/axios';
import { ExternalapiService } from 'src/externalapi/externalapi.service';

@Module({
  controllers: [FilmesController],
  imports:[HttpModule],
  providers: [FilmesService, ExternalapiService],
})
export class FilmesModule {}
