import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipeComponent } from './pipe/pipe.component';
import { ServiceComponent } from './service/service.component';
import { ServiceCrudComponent } from './service-crud/service-crud.component';
import { ObservablesComponent } from './observables/observables.component';
import { PromisesComponent } from './promises/promises.component';
import { RoutingComponent } from './routing/routing.component';
import { ParentComponent } from './inter-comp/parent/parent.component';
import { ThirdparlibComponent } from './thirdparlib/thirdparlib.component';

const routes: Routes = [
  {path:"", component: DataBindingComponent},
  {path:"dir", component: DirectivesComponent},
  {path: "temp", component: TemplateFormComponent},
  {path: "rea", component:ReactiveFormComponent},
  {path: "pipe", component:PipeComponent},
  {path: "ser", component:ServiceComponent},
  {path: "serCrud", component: ServiceCrudComponent},
  {path: "obs", component: ObservablesComponent  },
  {path: "pro", component: PromisesComponent},
  {path: "rou/:name/:id", component: RoutingComponent},
  {path: "inter" , component:ParentComponent},
  {path:"third", component:ThirdparlibComponent}
  // {path:"**", component:PipeComponent} //go to pipe by default if path is wrong
  // {path: "**", redirectTo: "temp"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
