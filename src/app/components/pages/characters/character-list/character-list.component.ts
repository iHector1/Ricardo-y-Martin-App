import { Component, OnInit } from '@angular/core';
import { filter, take } from 'rxjs/operators';
import { Character } from '@app/shared/interface/characters.interface';
import { CharacterService } from '@app/shared/services/character.service';
type RequestInfo = {
  next: string;
};
@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
    info: RequestInfo = {
    next: " ",
  };
  private pageNum = 1;
  private query: string="";
  private hideScrollHeigth = 200;
  private showScrollHeigth = 500;


  constructor(private characterService:CharacterService) { }

  ngOnInit(): void {
    this.getDataFromService();
  }
  private getDataFromService():void {
    this.characterService.searchCharacters(this.query, this.pageNum).pipe(
      take(1)
    ).subscribe((res: any) => { 
      console.log("Response->", res);
      const { info, results } = res;
      this.characters = [...this.characters, ...results];
      this.info = info;
    })
  }
}
