import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontactsComponent } from './addcontacts/addcontacts.component';
import { AllcontactsComponent } from './allcontacts/allcontacts.component';
import { EditcontactsComponent } from './editcontacts/editcontacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewcontactsComponent } from './viewcontacts/viewcontacts.component';

const routes: Routes = [
  //AllcontactsComponent
  {
    path:'',component:AllcontactsComponent
  },
  //AddcontactsComponent
  {
    path:'add-contact',component:AddcontactsComponent
  },
  //EditcontactsComponent
  {
    path:'edit-contact/:id',component:EditcontactsComponent
  },
  //ViewcontactsComponent
  {
    path:'view-contact/:id',component:ViewcontactsComponent
  },
  // page not found
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
