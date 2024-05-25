import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddnewCompoundComponent } from './components/addnew-compound/addnew-compound.component';
import { UpdatecompoundComponent } from './components/updatecompound/updatecompound.component';
import { CompoundDetailComponent } from './components/compound-detail/compound-detail.component';
const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"addnew",
    component:AddnewCompoundComponent
  },
  {
  path:"update",
  component:UpdatecompoundComponent
  },
  { path: 'compound/:id', 
  component: CompoundDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
