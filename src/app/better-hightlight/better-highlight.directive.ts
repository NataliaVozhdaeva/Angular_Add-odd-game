import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    /*  this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'yellow'
    ); */
  }

  @HostListener('mouseenter') mouseover() {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'yellow'
    );
  }

  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'transparent'
    );
  }

  /*
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'yellow'
    );
  } */
}
