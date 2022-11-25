import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @Input() defaultColor: string = 'transparent';
  @Input() hightlightColor: string = 'blue';

  //@HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.backgroundColor') backgroundColor: string =
    this.defaultColor;
  ngOnInit(): void {
    /*  this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'yellow'
    ); это статично  */

    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    /*  this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'yellow'
    ); 
    
    это интерактивно но с renderer
    */

    /* this.backgroundColor = 'blue';
    а это уже через @HostBinding без рендерера, но прибито однозначно и внутри  */

    this.backgroundColor = this.hightlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    /*   this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'transparent'
    
    это интерактивно но с renderer
    ); */
    /* 
    this.backgroundColor = 'transparent';
     а это уже через @HostBinding без рендерера, но прибито однозначно и внутри */

    this.backgroundColor = this.defaultColor;
  }
}
