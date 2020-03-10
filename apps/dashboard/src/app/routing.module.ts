import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoesComponent } from './shoes/shoes.component';
import { ShoesItemComponent } from './shoes/shoes-item/shoes-item.component';
import { WildComponent } from './wild/wild.component';
import { LoginComponent } from '@ngrx-shoes/ui-login';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'wild', component: WildComponent },
  { path: 'shoes', component: ShoesComponent },
  { path: 'shoes/:id', component: ShoesItemComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
