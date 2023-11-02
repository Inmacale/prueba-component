import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ActionSheetComponent } from './component/action-sheet/action-sheet.component';
import { AccordionComponent } from './component/accordion/accordion.component';
import { AlertComponent } from './component/alert/alert.component';
import { BreadcrumbsComponent } from './component/breadcrumbs/breadcrumbs.component';
import { ButtonComponent } from './component/button/button.component';
import { CardComponent } from './component/card/card.component';

@NgModule({
  declarations: [AppComponent, ActionSheetComponent, AccordionComponent, AlertComponent, BreadcrumbsComponent, ButtonComponent, CardComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
