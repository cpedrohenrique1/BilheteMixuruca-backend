import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ExternalapiService } from 'src/externalapi/externalapi.service';
import { Sessions } from './filmes.interface';
import { ImageType, MovieApiData } from 'src/externalapi/externalapi.interface';

@Injectable()
export class FilmesService {
  constructor(
    private readonly externalApiService: ExternalapiService
  ) { }

  async findAllByCity(idCity: number) {
    try {
      const response: MovieApiData[] = await this.externalApiService.findAllMoviesByCity(idCity);
      const data: Sessions[] = response.map((session): Sessions => ({
        id: session.id,
        events: session.events.map(movie => ({
          id: movie.id,
          title: movie.title,
          originalTitle: movie.originalTitle,
          contentRating: movie.contentRating,
          duration: movie.duration,
          synopsis: movie.synopsis,
          images: movie.images.map(image => ({
            url: image.url,
            type: image.type as ImageType
          })),
          trailers: movie.trailers.map(trailer => ({
            url: trailer.url,
            embeddedUrl: trailer.embeddedUrl
          }))
        }))
      }))
      return data[0].events;
    } catch (error: unknown) {
      if (typeof error === 'string') {
        throw new InternalServerErrorException(error);
      }
      throw new InternalServerErrorException("Erro ao se comunicar com a api externa");
    }
  }

  async findOne(idCity: number, idMovie: number) {
    
  }
}
