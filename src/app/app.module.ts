import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderNabilaComponent } from './headerNabila/headerNabila.component';
import { RecipeNabilaComponent } from './recipeNabila/recipeNabila.component';
import { ShoppingListNabilaComponent } from './shopping-listNabila/shopping-listNabila.component';
import { RecipeDetailNabilaComponent } from './recipeNabila/recipe-detailNabila/recipe-detailNabila.component';
import { RecipeListNabilaComponent } from './recipeNabila/recipe-listNabila/recipe-listNabila.component';
import { RecipeItemNabilaComponent } from './recipeNabila/recipe-listNabila/recipe-itemNabila/recipe-itemNabila.component';
import { ShoppingEditNabilaComponent } from './shopping-listNabila/shopping-editNabila/shopping-editNabila.component';
import { DropdownNabilaDirective } from './sharedNabila/dropdownNabila.directive';
import { ShoppingListNabilaService } from './shopping-listNabila/shopping-listNabila.Service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNabilaComponent,
    RecipeNabilaComponent,
    ShoppingListNabilaComponent,
    RecipeListNabilaComponent,
    RecipeDetailNabilaComponent,
    RecipeItemNabilaComponent,
    ShoppingEditNabilaComponent,
    DropdownNabilaDirective
],
  imports: [
    BrowserModule
  ],
  providers: [ShoppingListNabilaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
