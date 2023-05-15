import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeComponent } from './recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { FavouritesComponent } from './favourites/favourites.component';
import {HttpClientModule} from '@angular/common/http';
import { FavouriteViewComponent } from './favourite-view/favourite-view.component';
import { FilterPipe } from './pipe/filter.pipe'


@NgModule({
  declarations: [
    RecipeComponent,
    AllRecipesComponent,
    ViewRecipeComponent,
    FavouritesComponent,
    FavouriteViewComponent,
    
    FilterPipe
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    HttpClientModule,
   
  ]
})
export class RecipeModule { }
