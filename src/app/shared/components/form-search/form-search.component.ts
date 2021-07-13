import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
}) 
export class FormSearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSearch(value:string) {
    //to do
    if (value && value.length > 3) {
      console.log("buscar",value);
      this.router.navigate(['/character-list'], {
        queryParams: { q: value },
      });
    }
  }
}
