import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WatchComponent} from "./watch/watch.component";
import {DoctorComponent} from "./doctor/doctor.component";
import {PatientComponent} from "./patient/patient.component";

const routes: Routes = [
  {path: 'watch', component: WatchComponent},
  {path: 'doctor', component: DoctorComponent},
  {path: 'patient', component: PatientComponent},
  {path: '', redirectTo: '/watch', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
