import { Component, OnInit } from '@angular/core';
import { Animal } from '../../modules/animals';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {

  animalsArray = [
    new Animal ("cat", "black", 20),
    new Animal ("dog", "gold", 17),
    new Animal ("mouse", "grey", 5),
    new Animal ("chicken", "yellow", 3),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
console.log("hej")