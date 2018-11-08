import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipeNabila.model';
import { RecipeNabilaService } from '../recipeNabila.service';

@Component({
  selector: 'app-recipe-detailNabila',
  templateUrl: './recipe-detailNabila.component.html',
  styleUrls: ['./recipe-detailNabila.component.css']
})
export class RecipeDetailNabilaComponent implements OnInit {
  @Input() recipe:Recipe;

  constructor(private recipeNabilaService:RecipeNabilaService) { }

  ngOnInit() {
  }
  onAddShoppingList(){
    this.recipeNabilaService.addIngredientsShoppingList(this.recipe.ingredient);
  }

}
