import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicInputComponent } from './controls/basic-input/basic-input.component';
import { LabelSpecificationFormComponent } from './pages/label-specification-form/label-specification-form.component';
import { GeneralFormComponent } from './subforms/general-form/general-form.component';
import { TextareaComponent } from './controls/textarea/textarea.component';
import { ControlIdPipe } from './controls/pipes/control-id.pipe';
import { CheckboxComponent } from './controls/checkbox/checkbox.component';
import { SterilityFormComponent } from './subforms/sterility-form/sterility-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicInputComponent,
    LabelSpecificationFormComponent,
    GeneralFormComponent,
    TextareaComponent,
    ControlIdPipe,
    CheckboxComponent,
    SterilityFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
