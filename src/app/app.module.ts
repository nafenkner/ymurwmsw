import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebService } from './web.service'; 
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BusinessesComponent } from './businesses.component';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { AuthModule } from '@auth0/auth0-angular';
import { NavComponent } from './navbar/nav.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
//import { RecipeDetailsComponent } from './recipies-details/recipe-details.component';
import { RecipiesComponent } from './recipes/recipes.component';
import { FilterPipe } from './filter.pipe';

var routes: any = [
  { 
    path: '',  
    component: HomeComponent 
  }, 
  // { 
  //   path: 'businesses',  
  //   component: BusinessesComponent 
  // },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'recipes', component: RecipiesComponent },
  //{ path: 'recipies/:id', component: RecipeDetailsComponent },  
];

@NgModule({
  declarations: [FilterPipe, AppComponent, HomeComponent, NavComponent, BusinessesComponent,  LoginComponent,
    RegisterComponent,],
  imports: [BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes), AuthModule.forRoot( { domain:'dev-oli8w2m3a6xl4rcp.us.auth0.com', clientId: '1K96bJQZabBBdKwxNsU2vuxK93EngJpj' }) ], 
  providers: [WebService],
  bootstrap: [AppComponent],
})
export class AppModule {}
