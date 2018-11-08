import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipeNabila.model';
import { RecipeNabilaService } from '../recipeNabila.service';

@Component({
  selector: 'app-recipe-listNabila',
  templateUrl: './recipe-listNabila.component.html',
  styleUrls: ['./recipe-listNabila.component.css']
})
export class RecipeListNabilaComponent implements OnInit {

  //@Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[];
  
  constructor( private recipeNabilaService:RecipeNabilaService) {}

  ngOnInit() {
    this.recipes=this.recipeNabilaService.getRecipes();
  }

  //onRecipeSelected(recipe:Recipe){
  // this.recipeWasSelected.emit(recipe);
  // }
}
