import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '@app/shared/interface/characters.interface';
import { CharacterService } from '@app/shared/services/character.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  character$: Observable<Character> | undefined;
  constructor(private router:ActivatedRoute,private characterService:CharacterService,private location:Location) { }

  ngOnInit(): void {
    this.router.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];
      this.character$ = this.characterService.getDetails(id);
    })
  }
  onBack(): void{
    this.location.back();
  }

}
