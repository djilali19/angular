import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DjilaliComponent } from './djilali/djilali.component';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { PageIdComponent } from './page-id/page-id.component';


const routes: Routes = [

    { path: 'djilali' , component : DjilaliComponent },
    { path: '', component: LandingPageComponentComponent },
    { path: 'djilali/:id', component: PageIdComponent }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}