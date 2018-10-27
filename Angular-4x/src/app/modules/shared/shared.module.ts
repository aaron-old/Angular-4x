import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ReactiveFormComponent, HeaderComponent, FooterComponent],
  exports: [ReactiveFormComponent, HeaderComponent, FooterComponent]
})
export class SharedModule {}
