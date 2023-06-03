import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients = [new Ingredient('Tomato', 20), new Ingredient('Apple', 10)];


  constructor() { }

  ngOnInit() {
  }
}
