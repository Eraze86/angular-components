import { Component, OnInit } from '@angular/core';
import { Animal } from '../../modules/animals';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {

  animalsArray = [
    new Animal ("Cat", "Black", 20, true),
    new Animal ("Dog", "Gold", 17, false),
    new Animal ("Mouse", "Grey", 5, false),
    new Animal ("Chicken", "Yellow", 3, true),
  ]
  
  constructor() { }

  ngOnInit(): void {
  }
 

}
