import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent {
  name: string = 'lemonade';
  ingredint1: string = 'lemonade';
  ingredint2: string = 'water';
  ingredint3: string = 'sugar';
}
