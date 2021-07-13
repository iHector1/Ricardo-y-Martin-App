import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from '@environment/environment';
import { Character } from '@shared/interface/characters.interface';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) {
    
   }
  searchCharacters(query = " ", page = 1) {
    const filter = `${environment.baseUrlAPI}/?name=${query}&page=${page}`;
    return this.http.get<Character[]>(filter);
  }
  getDetails(id: number) {
    const filter = `${environment.baseUrlAPI}/${id}`;
    return this.http.get<Character>(filter);
  }
}
