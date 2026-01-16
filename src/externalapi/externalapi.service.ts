import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { DayOfWeek, MovieApiData, SessionPayload } from './externalapi.interface';
import { AxiosError } from 'axios';

@Injectable()
export class ExternalapiService {
    constructor(private readonly httpService: HttpService) { }

    private readonly v0BaseUrl: string = "https://api-content.ingresso.com/v0/";
    private readonly v1BaseUrl: string = "https://api.ingresso.com";

    async getAllMovies(idCity: number): Promise<MovieApiData[]> {
        const response = await firstValueFrom(this.httpService.get<MovieApiData[]>(this.v0BaseUrl.concat(`carousel/${idCity}/partnership/home?carousels=em-cartaz`)).pipe(
            catchError((error: AxiosError) => {
                throw "Erro ao se comunicar com a api externa";
            })
        ));
        const data = response.data;
        return data;
    }

    async getSessionsId(idCity: number, idMovie: number){
    const diaDaSemana: DayOfWeek[] = await this.findAllSessionsByCityAndEvent(idCity, idMovie);
    const todas_sessoes: SessionPayload[] = [];
    for (const dia of diaDaSemana) {
      for (const theater of dia.theaters) {
        for (const room of theater.rooms) {
          for (const session of room.sessions) {
            if (session.enabled) {
              const novaSessao: SessionPayload = {
                id: session.id,
                defaultSector: session.defaultSector
              }
              todas_sessoes.push(novaSessao);
              // const response = await firstValueFrom(this.session_service.getPrice(session.id, session.defaultSector));
              // for (const price of response.default) {
              //   if ("Inteira" === price.groupName || ["1", "2258", "3356"].includes(price.id)) {
              //     session_payload.precoInteira = price.price;
              //   }
              //   if ("Meia" === price.groupName || ["2", "2259", "3355"].includes(price.id)) {
              //     session_payload.precoMeia = price.price;
              //   }
              // }

              // if (session_payload.precoInteira !== 0) {
              //   todas_sessoes.push(session_payload);
              // }
            }
          }
        }
      }
    }
    return todas_sessoes;
  }

  async findAllSessionsByCityAndEvent(idCity: number, idEvent: number) {
    let response = await firstValueFrom(this.httpService.get<DayOfWeek[]>(`https://api-content.ingresso.com/v0/sessions/city/${idCity}/event/${idEvent}/partnership/home`).pipe(
      catchError((error: AxiosError) => {
        throw "não foi possivel se conectar com à api";
      })
    ));
    const data = response.data;
    return data;
  }
}
