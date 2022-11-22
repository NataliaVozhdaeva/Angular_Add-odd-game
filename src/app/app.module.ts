import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { BetterHighlightDirective } from './better-hightlight/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
    BetterHighlightDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
