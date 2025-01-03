import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebService } from './web.service'; 
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BusinessesComponent } from './businesses.component';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RecipeDetailsComponent } from './recipies-details/recipe-details.component';
import { RecipiesComponent } from './recipies/recipies.component';

var routes: any = [
  { 
    path: '',  
    component: HomeComponent 
  }, 
  { 
    path: 'businesses',  
    component: BusinessesComponent 
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }, 
  { path: 'recipies', component: RecipiesComponent },
  { path: 'recipies/:id', component: RecipeDetailsComponent },  
];

@NgModule({
  declarations: [AppComponent, BusinessesComponent, HomeComponent, NavbarComponent, RecipiesComponent,
    RecipeDetailsComponent,LoginComponent, RegisterComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes) ], 
  providers: [WebService],
  bootstrap: [AppComponent],
})
export class AppModule {}
