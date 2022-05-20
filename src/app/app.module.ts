import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartPage } from './pages/cart/cart.page';
import { MenuComponent } from './components/menu/menu.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataService } from 'src/shared/services/data.service';
import { NotfoundPage } from './pages/notfound/notfound.page';
import { MathService } from 'src/shared/services/math.service';

@NgModule({
  declarations: [
    AppComponent,
    CartPage,
    MenuComponent,
    CardComponent,
    FooterComponent,
    NotfoundPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
    MathService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
