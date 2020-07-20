import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent, FormPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'form',
    component: FormPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
