import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{ path: 'recipe', loadChildren: () => import('./recipe/recipe.module').then(m => m.RecipeModule) },
// to redirect from http://localhost:4200/ to http://localhost:4200/recipe
{
  path:'',redirectTo:'recipe',pathMatch:'full'

},
// page-not-found
{
  path:'**',component:PageNotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
