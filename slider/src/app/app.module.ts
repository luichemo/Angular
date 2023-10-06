import { NgModule } from '@angular/core';
import { BrowserModule,HammerModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TouchSliderComponent } from "./touch-slider/touch-slider.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        TouchSliderComponent,
        HammerModule
    ]
})
export class AppModule { }
