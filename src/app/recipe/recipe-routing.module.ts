import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { FavouriteViewComponent } from './favourite-view/favourite-view.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { RecipeComponent } from './recipe.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';

const routes: Routes = [
    // http://localhost:4200/products
  {
     path: '', component: AllRecipesComponent 
},
// view recipe
{
  path:'view-recipe/:id',component:ViewRecipeComponent
},
// favourites
{
  path:'favourite',component:FavouritesComponent

},
{
  path:'favourite/favourite-view/:id',component:FavouriteViewComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
