import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { QuizzpageComponent } from './pages/quizzpage/quizzpage.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
