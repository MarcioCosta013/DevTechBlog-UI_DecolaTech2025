import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { QuizzpageComponent } from './pages/quizzpage/quizzpage.component';
import { ContribuaPageComponent } from './pages/contribua-page/contribua-page.component';


const routes: Routes = [
  {
    path:'', 
    component:HomeComponent
  },
  {
    path:'content/:id',
    component:ContentComponent
  },
  {
    //mesclando: add
    path:'quizz', 
    component:QuizzpageComponent 
  },
  {
    path:'contribua',
    component:ContribuaPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
