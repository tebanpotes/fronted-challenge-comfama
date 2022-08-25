import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class DatapiService {

  constructor(private _http: HttpClient) { }


  searchAnime(letter:string){
    return this._http.get<any>(`${ConfigService.settings.apiUrl}/search-anime`,{
      params:{
        letter: letter
      }
    })
  }

  getAnimes(){
    return this._http.get<any>(`${ConfigService.settings.apiUrl}/get-animes`);
  }

  exploreAnimes(page:number){

    return this._http.get<any>(`${ConfigService.settings.apiUrl}/explore-animes`, {
      params:{
        page:page
      }
    });
  }
  

}
