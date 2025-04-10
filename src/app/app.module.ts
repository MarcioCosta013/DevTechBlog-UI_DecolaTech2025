import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; //mesclagem: add

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { QuizzComponent } from './components/quizz/quizz.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { ContentComponent } from './pages/content/content.component';
import { ContribuaFormComponent } from './components/contribua-form/contribua-form.component';
import { ContribuaPageComponent } from './pages/contribua-page/contribua-page.component';
import { HomeComponent } from './pages/home/home.component';
import { QuizzpageComponent } from './pages/quizzpage/quizzpage.component';
import { ListuteisComponent } from './pages/listuteis/listuteis.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContribuidorService } from './service/contribuidor.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,
    ContentComponent,
    QuizzComponent,
    QuizzpageComponent,
    FooterComponent,
    ContribuaFormComponent,
    ContribuaPageComponent,
    ListuteisComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ContribuidorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
