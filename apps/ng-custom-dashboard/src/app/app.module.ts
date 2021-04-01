import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GridsterModule } from 'angular-gridster2';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MaterialModule } from './material/material.module';
import { CardTwoComponent } from './card-two/card-two.component';
import { CdkDashboardComponent } from './cdk-dashboard/cdk-dashboard.component';
import { GridsterDashboardComponent } from './gridster-dashboard/gridster-dashboard.component';
import { ItemOneComponent } from './gridster-dashboard/item-one/item-one.component';
import { ItemTwoComponent } from './gridster-dashboard/item-two/item-two.component';
import { FixGridsterDashboardComponent } from './fix-gridster-dashboard/fix-gridster-dashboard.component';
import { ComponentContainerDirective } from './fix-gridster-dashboard/component-container.directive';
import { FixItemOneComponent } from './fix-gridster-dashboard/item-one/item-one.component';
import { FixItemTwoComponent } from './fix-gridster-dashboard/item-two/item-two.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardTwoComponent,
    CdkDashboardComponent,
    GridsterDashboardComponent,
    ItemOneComponent,
    ItemTwoComponent,
    FixGridsterDashboardComponent,
    ComponentContainerDirective,
    FixItemOneComponent,
    FixItemTwoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    GridsterModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [CardComponent],
})
export class AppModule {}
