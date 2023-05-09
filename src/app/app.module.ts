import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDirective } from './directives/custom.directive';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustomPipe } from './template-form/custom.pipe';
import { CustomPipePipe } from './pipe/custom-pipe.pipe';
import { ServiceComponent } from './service/service.component';
import {   HttpClientModule } from '@angular/common/http';
import { ServiceCrudComponent } from './service-crud/service-crud.component';
import { ObservablesComponent } from './observables/observables.component';
import { PromisesComponent } from './promises/promises.component';
import { RoutingComponent } from './routing/routing.component';
import { ParentComponent } from './inter-comp/parent/parent.component';
import { ChildComponent } from './inter-comp/child/child.component';
import { ThirdparlibComponent } from './thirdparlib/thirdparlib.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirectivesComponent,
    CustomDirective,
    TemplateFormComponent,
    ReactiveFormComponent,
    PipeComponent,
    CustomPipe,
    CustomPipePipe,
    ServiceComponent,
    ServiceCrudComponent,
    ObservablesComponent,
    PromisesComponent,
    RoutingComponent,
    ParentComponent,
    ChildComponent,
    ThirdparlibComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
