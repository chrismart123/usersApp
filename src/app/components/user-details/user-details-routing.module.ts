import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details.component'; // Import the UserDetailsComponent
import { AuthGuard } from '../../auth.guard';

const routes: Routes = [
  { path: '', component: UserDetailsComponent, canActivate: [AuthGuard],
    
   } // Set the default path to the UserDetailsComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDetailsRoutingModule { }
