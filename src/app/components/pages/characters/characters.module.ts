import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { RouterModule } from '@angular/router';
import { CharacterComponent } from './character.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    CharacterDetailsComponent,
    CharacterListComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule
  ],
  exports: [
    CharacterDetailsComponent,
    CharacterListComponent,
    CharacterComponent
  ]
})
export class CharactersModule { }
