import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { NumbersOnlyValidatorDirective } from './shared/numbers-only.directive';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		HttpClientModule
	],
	declarations: [
		AppComponent,
		HomeComponent,
		AboutComponent,
		NumbersOnlyValidatorDirective
	],
	providers: [
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }

