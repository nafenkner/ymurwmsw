import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebService } from './web.service'; 
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { AuthModule } from '@auth0/auth0-angular';
import { NavbarComponent } from './navbar/nav.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeDetailsComponent } from './recipes-details/recipe-details.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FilterPipe } from './filter.pipe';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

import { AboutComponent } from './about/about.component';
import { DeleteComponent } from './delete/delete.component';

var routes: any = [
  { path: 'add-recipe', component: AddRecipeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'add', component: AddRecipeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'edit-recipe', component: EditRecipeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'recipes/:id', component: RecipeDetailsComponent }, 
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' }, 
];

@NgModule({
  declarations: [FilterPipe, AboutComponent, AppComponent, DeleteComponent, HomeComponent, RecipesComponent,  LoginComponent,
    RegisterComponent,AddRecipeComponent, NavbarComponent, EditRecipeComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes), AuthModule.forRoot( { domain:'dev-oli8w2m3a6xl4rcp.us.auth0.com', clientId: '1K96bJQZabBBdKwxNsU2vuxK93EngJpj' }) ], 
  providers: [WebService],
  bootstrap: [AppComponent],
})
export class AppModule {}
