import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductComponent2 } from './product2/product2.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatabindingComponent } from './databinding/databinding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TudoComponent } from './tudo/tudo.component';
import { FormsModule } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon';
import { Tudo2Component } from './tudo2/tudo2.component';
import { Tudo3Component } from './tudo3/tudo3.component';
import { Tudo4Component } from './tudo4/tudo4.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductComponent2,
    DatabindingComponent,
    EventBindingComponent,
    TudoComponent,
    Tudo2Component,
    Tudo3Component,
    Tudo4Component,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
