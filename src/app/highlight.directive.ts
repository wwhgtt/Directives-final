import {Directive, ElementRef, Renderer, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mouseover(){
    this.backgroundColor=this.highlightColor;
  };
  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor=this.defaultColor;
  };
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  };
  @Input() defaultColor='white';
  @Input() highlightColor='green';
  private backgroundColor:string;
  constructor() {
    //this.elementRef.nativeElement.style.backgroundColor='green';
    //this.renderer.setElementStyle(this.elementRef.nativeElement,'background-color','green');
  }
  ngOnInit(){
    this.backgroundColor=this.defaultColor;
  }
}
