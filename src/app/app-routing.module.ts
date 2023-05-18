import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DroneTripComponent } from './drone-trip/drone-trip.component';

const routes: Routes = [
  { path: 'drone-trip', component: DroneTripComponent },
  { path: '', redirectTo: '/drone-trip', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
