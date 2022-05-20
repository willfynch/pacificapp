import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPage } from './pages/cart/cart.page';
import { NotfoundPage } from './pages/notfound/notfound.page';

const routes: Routes = [
  {path: '', component: CartPage},
  {path: '404', component: NotfoundPage},
  {path: '**', redirectTo: '404'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
