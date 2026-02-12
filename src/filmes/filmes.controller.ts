import { Controller, Get, Param } from '@nestjs/common';
import { FilmesService } from './filmes.service';

@Controller('')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Get('city/:idCity')
  findAll(@Param('idCity') idCity: number) {
    return this.filmesService.findAllByCity(idCity);
  }

  @Get('city/:idCity/movie/:idMovie')
  findOne(@Param('idCity') idCity: number, @Param('idMovie') idMovie: number) {
    return this.filmesService.findOne(idCity, idMovie);
  }
}
