import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertComponent } from './insert/insert.component';
import { GetdataComponent } from './getdata/getdata.component';
import { RemovedataComponent } from './removedata/removedata.component';


const routes: Routes = [
  {path:"ins", component:InsertComponent},
  {path:"get", component:GetdataComponent},
  {path:"rem", component:RemovedataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
